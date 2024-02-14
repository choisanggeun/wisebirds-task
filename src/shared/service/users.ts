import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";
import { Users } from "../type/Users";

export const gatAllUsers = cache(async (): Promise<Users> => {
  const filePath = path.join(process.cwd(), "data", "user.json");

  return readFile(filePath, "utf-8").then(JSON.parse);
});
