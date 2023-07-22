import { LoaderArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import MainHeader from "~/components/navigation/MainHeader";
import { getUserFromSession } from "~/models/user.server";

export default function MarketingLayout() {
  const userId = useLoaderData<typeof loader>();
  return (
    <>
      <MainHeader userId={userId} />
      <Outlet />
    </>
  );
}

export const loader = async ({ request }: LoaderArgs) => {
  return await getUserFromSession(request);
};
