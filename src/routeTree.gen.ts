/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProfileImport } from './routes/profile'
import { Route as IndexImport } from './routes/index'
import { Route as PokemonIndexImport } from './routes/pokemon/index'
import { Route as PokemonNameImport } from './routes/pokemon/$name'

// Create/Update Routes

const ProfileRoute = ProfileImport.update({
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PokemonIndexRoute = PokemonIndexImport.update({
  path: '/pokemon/',
  getParentRoute: () => rootRoute,
} as any)

const PokemonNameRoute = PokemonNameImport.update({
  path: '/pokemon/$name',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileImport
      parentRoute: typeof rootRoute
    }
    '/pokemon/$name': {
      id: '/pokemon/$name'
      path: '/pokemon/$name'
      fullPath: '/pokemon/$name'
      preLoaderRoute: typeof PokemonNameImport
      parentRoute: typeof rootRoute
    }
    '/pokemon/': {
      id: '/pokemon/'
      path: '/pokemon'
      fullPath: '/pokemon'
      preLoaderRoute: typeof PokemonIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/profile': typeof ProfileRoute
  '/pokemon/$name': typeof PokemonNameRoute
  '/pokemon': typeof PokemonIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/profile': typeof ProfileRoute
  '/pokemon/$name': typeof PokemonNameRoute
  '/pokemon': typeof PokemonIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/profile': typeof ProfileRoute
  '/pokemon/$name': typeof PokemonNameRoute
  '/pokemon/': typeof PokemonIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/profile' | '/pokemon/$name' | '/pokemon'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/profile' | '/pokemon/$name' | '/pokemon'
  id: '__root__' | '/' | '/profile' | '/pokemon/$name' | '/pokemon/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ProfileRoute: typeof ProfileRoute
  PokemonNameRoute: typeof PokemonNameRoute
  PokemonIndexRoute: typeof PokemonIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ProfileRoute: ProfileRoute,
  PokemonNameRoute: PokemonNameRoute,
  PokemonIndexRoute: PokemonIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/profile",
        "/pokemon/$name",
        "/pokemon/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/profile": {
      "filePath": "profile.tsx"
    },
    "/pokemon/$name": {
      "filePath": "pokemon/$name.tsx"
    },
    "/pokemon/": {
      "filePath": "pokemon/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
