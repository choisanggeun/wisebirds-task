import { atom } from "jotai";

export const userCreateModalValueAtom = atom({
  email: "",
  password: "",
  repeat_password: "",
  name: "",
});
