import { Metadata, Viewport } from "next";
import { FC, ReactElement } from "react";

import { getAllSession } from "@/src/hooks/session";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "User",
};

const UserPage: FC = async (): Promise<ReactElement> => {
  const session = await getAllSession();

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-3">
      <p className="text-2xl font-semibold">This is the user page.</p>
      <pre className="rounded-lg border border-gray-300 bg-white p-2 text-sm">session: {JSON.stringify(session, null, 2)}</pre>
    </main>
  );
};

export default UserPage;
