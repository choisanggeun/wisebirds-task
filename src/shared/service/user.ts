import { NextResponse } from "next/server";
import { User } from "../type/User";

export const createUser = async (value: User) => {
  try {
    await fetch(`api/users`, {
      method: "POST",
      body: JSON.stringify({
        ...value,
        password: value.password.toString(),
        repeat_password: value.repeat_password.toString(),
      }),
    })
      .then((res) => NextResponse.json(res))
      .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
  } catch (e) {
    console.log(e);
  }
};

export const modifyUser = async (id: string, name: string) => {
  try {
    await fetch(`api/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        name,
      }),
    })
      .then((res) => NextResponse.json(res))
      .catch((error) => {
        new Response(JSON.stringify(error), { status: 500 });
      });
  } catch (e) {
    console.log(e);
  }
};
