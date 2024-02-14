"use client";

import { authAtom } from "@/shared/atoms/auth.atom";
import { useAtomValue } from "jotai";
import React, { useEffect } from "react";

function UsersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const auth = useAtomValue(authAtom);

  return <>{children}</>;
}

export default UsersLayout;
