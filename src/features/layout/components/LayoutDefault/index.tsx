import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { TheHeader } from '../TheHeader';

type LayoutDefaultProps = {
  children?: React.ReactNode;
};

function LayoutDefaultPure({ children }: LayoutDefaultProps) {
  return (
    <div className="grid grid-rows-[auto_auto_1fr] min-h-svh">
      <TheHeader />

      <main className="flex flex-col flex-1 px-4">{children}</main>
    </div>
  );
}

function LayoutDefaultRouter() {
  return (
    <LayoutDefaultPure>
      <Outlet />
      <TanStackRouterDevtools />
    </LayoutDefaultPure>
  );
}

export function LayoutDefault() {}

LayoutDefault.Pure = LayoutDefaultPure;
LayoutDefault.Router = LayoutDefaultRouter;
