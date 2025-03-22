import type { auth } from "./auth";
import { authClient } from "./auth-client";

export type Session = typeof auth.$Infer.Session;
export type ClientSession = typeof authClient.$Infer.Session;
export type ClientUser = typeof authClient.$Infer.Session.user;
