import * as React from 'react'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Container } from '@chakra-ui/react'

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <Container maxW={"container.lg"}>
        <Header />
        <Outlet />
        <Footer />
      </Container>

    </React.Fragment>
  ),
})
