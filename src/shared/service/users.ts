import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";
import { Users } from "../type/Users";

export const gatAllUsers = cache(async (page: number): Promise<Users> => {
  const filePath = path.join(process.cwd(), "data", "user.json");

  const data = readFile(filePath, "utf-8")
    .then(JSON.parse)
    .then((res) => {
      return {
        ...res,
        content: res.content.slice((page - 1) * 50, page * 50),
      };
    });
  return data;
});

export const findExistsEmail = async (
  email: string
): Promise<{ result: boolean }> => {
  return await fetch(`/api/users/${email}/exists`, {
    method: "GET",
  }).then((res) => res.json());
};
