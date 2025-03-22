// lib/try-catch.ts
// This file contains a utility function that wraps a promise in a try-catch block and returns a result object with
// a discriminated union. The result can be either a success object with the data or a failure object with the error.

// Types for the result object with discriminated union
// This is the success result type with a data field and an error field set to null.
type Success<T> = {
  data: T;
  error: null;
};

// This is the failure result type with a data field set to null and an error field with the error type E.
type Failure<E> = {
  data: null;
  error: E;
};

// This is the result type with a discriminated union that can be either a success or a failure.
type Result<T, E = Error> = Success<T> | Failure<E>;

// Main wrapper function
// This async function takes a promise and wraps it in a try-catch block.
export async function tryCatch<T, E = Error>(
  promise: Promise<T>
): Promise<Result<T, E>> {
  try {
    const data = await promise;
    return { data, error: null };
  } catch (error) {
    return { data: null, error: error as E };
  }
}
