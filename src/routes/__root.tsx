import * as React from 'react'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Header } from '../components/Header'

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  ),
})
