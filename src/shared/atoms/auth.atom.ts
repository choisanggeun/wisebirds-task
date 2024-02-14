import { atom } from "jotai";
import { Auth } from "../type/Auth";

export const authAtom = atom<Auth>("admin");
