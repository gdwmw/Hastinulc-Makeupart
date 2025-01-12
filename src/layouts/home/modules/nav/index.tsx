import { FC, ReactElement } from "react";

import { getAllSession } from "@/src/hooks/session";

import { Content } from "./batches";

export const Nav: FC = async (): Promise<ReactElement> => {
  const session = await getAllSession();

  return <Content session={session} />;
};
