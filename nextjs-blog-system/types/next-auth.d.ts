// This file extends the NextAuth types for custom user roles.

import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: "admin" | "author" | "reader";
    };
  }

  interface User {
    id: string;
    role: "admin" | "author" | "reader";
  }
}