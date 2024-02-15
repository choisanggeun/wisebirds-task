import { cache } from "react";
import { AuthMe } from "../type/Auth";
import path from "path";
import { readFile } from "fs/promises";

// TODO: api완성되면 해당 서비스로 변경
// export const findAuth = async (): Promise<AuthMe> => {
//   return await fetch("/api/auth/me", {
//     method: "GET",
//   }).then((res) => res.json());
// };

export const findAuth = cache(async (): Promise<AuthMe> => {
  const filePath = path.join(process.cwd(), "data", "findAuth.json");
  return readFile(filePath, "utf-8").then(JSON.parse);
});
