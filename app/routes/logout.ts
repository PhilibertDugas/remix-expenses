import { ActionArgs } from "@remix-run/node";
import { destroyUserSession } from "~/models/user.server";

export const action = ({ request }: ActionArgs) => {
  if (request.method !== "POST") {
    // oops
    console.log("ouch");
  }

  return destroyUserSession(request);
};
