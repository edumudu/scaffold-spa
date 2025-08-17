import { createRootRoute } from '@tanstack/react-router'
import { LayoutDefault } from '~/features/layout/components/LayoutDefault'

export const Route = createRootRoute({
  component: () => (
    <LayoutDefault.Router />
  ),
})
