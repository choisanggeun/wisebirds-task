import { atom } from "jotai";

export const validateUserCreateAtom = atom({
  email: "",
  password: "",
  repeat_password: "",
  name: "",
});
