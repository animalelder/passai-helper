type Success<T> = [data: T, error: null];
type Failure<E> = [data: null, error: E | Error];
type Result<T, E> = Success<T> | Failure<E>;

type TryCatchResult<T, E> =
  T extends Promise<infer U> ? Promise<Result<U, E>> : Result<T, E>;

type TryCatchFunc<E_ extends Error = never> = <T, E extends Error = E_>(
  fn?: T | (() => T),
  operationName?: string
) => TryCatchResult<T, E>;

type TryCatch<
  F extends TryCatchFunc = TryCatchFunc,
  E_ extends Error = never,
> = F & {
  sync: <T, E extends Error = E_>(
    fn: () => T,
    operationName?: string
  ) => Result<T, E>;
  async: <T, E extends Error = E_>(
    fn: Promise<T> | (() => Promise<T>),
    operationName?: string
  ) => Promise<Result<T, E>>;
  errors: <E extends Error>() => TryCatch<TryCatchFunc<E | E_>, E | E_>;
};

/**
 * tryCatch - Error handling that can be synchronous or asynchronous
 * based on the input function.
 *
 * @param fn Function to execute, Promise or value.
 * @param operationName Optional name for context.
 * @returns A Result, or a Promise resolving to a Result, depending on fn.
 */
export const tryCatch: TryCatch = <T, E extends Error = never>(
  fn?: T | (() => T),
  operationName?: string
) => {
  try {
    const result = typeof fn === "function" ? (fn as () => T)() : fn;

    if (result instanceof Promise)
      return tryCatchAsync(result, operationName) as TryCatchResult<T, E>;

    return [result, null] as TryCatchResult<T, E>;
  } catch (rawError) {
    return handleError(rawError, operationName) as TryCatchResult<T, E>;
  }
};

export const tryCatchSync: TryCatch["sync"] = (fn, operationName) => {
  try {
    const result = fn();
    return [result, null] as const;
  } catch (rawError) {
    return handleError(rawError, operationName);
  }
};

export const tryCatchAsync: TryCatch["async"] = async (fn, operationName) => {
  try {
    const promise = typeof fn === "function" ? fn() : fn;
    const result = await promise;
    return [result, null] as const;
  } catch (rawError) {
    return handleError(rawError, operationName);
  }
};

export const tryCatchErrors = <E extends Error>() =>
  tryCatch as TryCatch<TryCatchFunc<E>, E>;

tryCatch.sync = tryCatchSync;
tryCatch.async = tryCatchAsync;
tryCatch.errors = tryCatchErrors;

function handleError(rawError: unknown, operationName?: string) {
  const processedError =
    rawError instanceof Error
      ? rawError
      : new Error(String(rawError), { cause: rawError });

  if (operationName) {
    processedError.message = `Operation "${operationName}" failed: ${processedError.message}`;
  }

  return [null, processedError] as Failure<typeof processedError>;
}
