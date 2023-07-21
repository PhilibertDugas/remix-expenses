import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import { ReactElement } from "react";
import stylesheet from "~/tailwind.css";
import Error from "./components/util/Error";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

interface DocumentProps {
  title: string;
  children: ReactElement;
}
const Document = ({ title, children }: DocumentProps) => {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gradient-to-r from-cyan-500 to-blue-500 items-center flex flex-col">
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default function App() {
  return (
    <Document title="Yay">
      <Outlet />
    </Document>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <Document title="OOPS">
        <main>
          <Error title={error.statusText}>
            <div>
              <p>{error.data?.message || "Oops"}</p>
              <p>
                Back to <Link to="/">safety</Link>
              </p>
            </div>
          </Error>
        </main>
      </Document>
    );
  }
}
