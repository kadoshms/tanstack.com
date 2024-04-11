/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SponsorsEmbedImport } from './routes/sponsors-embed'
import { Route as MerchImport } from './routes/merch'
import { Route as LoginImport } from './routes/login'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as BlogImport } from './routes/blog'
import { Route as LibrariesImport } from './routes/_libraries'
import { Route as LibraryIdImport } from './routes/$libraryId'
import { Route as IndexImport } from './routes/index'
import { Route as BlogIndexImport } from './routes/blog.index'
import { Route as LibraryIdIndexImport } from './routes/$libraryId.index'
import { Route as BlogSplatImport } from './routes/blog.$'
import { Route as LibraryIdVersionImport } from './routes/$libraryId.$version'
import { Route as LibraryIdVersionDocsImport } from './routes/$libraryId.$version.docs'
import { Route as LibrariesVirtualVersionIndexImport } from './routes/_libraries.virtual.$version.index'
import { Route as LibrariesTableVersionIndexImport } from './routes/_libraries.table.$version.index'
import { Route as LibrariesStoreVersionIndexImport } from './routes/_libraries.store.$version.index'
import { Route as LibrariesStartVersionIndexImport } from './routes/_libraries.start.$version.index'
import { Route as LibrariesRouterVersionIndexImport } from './routes/_libraries.router.$version.index'
import { Route as LibrariesRangerVersionIndexImport } from './routes/_libraries.ranger.$version.index'
import { Route as LibrariesQueryVersionIndexImport } from './routes/_libraries.query.$version.index'
import { Route as LibrariesFormVersionIndexImport } from './routes/_libraries.form.$version.index'
import { Route as LibrariesConfigVersionIndexImport } from './routes/_libraries.config.$version.index'
import { Route as LibraryIdVersionDocsIndexImport } from './routes/$libraryId.$version.docs.index'
import { Route as LibraryIdVersionDocsSplatImport } from './routes/$libraryId.$version.docs.$'
import { Route as LibraryIdVersionDocsFrameworkFrameworkSplatImport } from './routes/$libraryId.$version.docs.framework.$framework.$'
import { Route as LibraryIdVersionDocsFrameworkFrameworkExamplesSplatImport } from './routes/$libraryId.$version.docs.framework.$framework.examples.$'

// Create/Update Routes

const SponsorsEmbedRoute = SponsorsEmbedImport.update({
  path: '/sponsors-embed',
  getParentRoute: () => rootRoute,
} as any)

const MerchRoute = MerchImport.update({
  path: '/merch',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRoute = DashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const BlogRoute = BlogImport.update({
  path: '/blog',
  getParentRoute: () => rootRoute,
} as any)

const LibrariesRoute = LibrariesImport.update({
  id: '/_libraries',
  getParentRoute: () => rootRoute,
} as any)

const LibraryIdRoute = LibraryIdImport.update({
  path: '/$libraryId',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const BlogIndexRoute = BlogIndexImport.update({
  path: '/',
  getParentRoute: () => BlogRoute,
} as any)

const LibraryIdIndexRoute = LibraryIdIndexImport.update({
  path: '/',
  getParentRoute: () => LibraryIdRoute,
} as any)

const BlogSplatRoute = BlogSplatImport.update({
  path: '/$',
  getParentRoute: () => BlogRoute,
} as any)

const LibraryIdVersionRoute = LibraryIdVersionImport.update({
  path: '/$version',
  getParentRoute: () => LibraryIdRoute,
} as any)

const LibraryIdVersionDocsRoute = LibraryIdVersionDocsImport.update({
  path: '/docs',
  getParentRoute: () => LibraryIdVersionRoute,
} as any)

const LibrariesVirtualVersionIndexRoute =
  LibrariesVirtualVersionIndexImport.update({
    path: '/virtual/$version/',
    getParentRoute: () => LibrariesRoute,
  } as any)

const LibrariesTableVersionIndexRoute = LibrariesTableVersionIndexImport.update(
  {
    path: '/table/$version/',
    getParentRoute: () => LibrariesRoute,
  } as any,
)

const LibrariesStoreVersionIndexRoute = LibrariesStoreVersionIndexImport.update(
  {
    path: '/store/$version/',
    getParentRoute: () => LibrariesRoute,
  } as any,
)

const LibrariesStartVersionIndexRoute = LibrariesStartVersionIndexImport.update(
  {
    path: '/start/$version/',
    getParentRoute: () => LibrariesRoute,
  } as any,
)

const LibrariesRouterVersionIndexRoute =
  LibrariesRouterVersionIndexImport.update({
    path: '/router/$version/',
    getParentRoute: () => LibrariesRoute,
  } as any)

const LibrariesRangerVersionIndexRoute =
  LibrariesRangerVersionIndexImport.update({
    path: '/ranger/$version/',
    getParentRoute: () => LibrariesRoute,
  } as any)

const LibrariesQueryVersionIndexRoute = LibrariesQueryVersionIndexImport.update(
  {
    path: '/query/$version/',
    getParentRoute: () => LibrariesRoute,
  } as any,
)

const LibrariesFormVersionIndexRoute = LibrariesFormVersionIndexImport.update({
  path: '/form/$version/',
  getParentRoute: () => LibrariesRoute,
} as any)

const LibrariesConfigVersionIndexRoute =
  LibrariesConfigVersionIndexImport.update({
    path: '/config/$version/',
    getParentRoute: () => LibrariesRoute,
  } as any)

const LibraryIdVersionDocsIndexRoute = LibraryIdVersionDocsIndexImport.update({
  path: '/',
  getParentRoute: () => LibraryIdVersionDocsRoute,
} as any)

const LibraryIdVersionDocsSplatRoute = LibraryIdVersionDocsSplatImport.update({
  path: '/$',
  getParentRoute: () => LibraryIdVersionDocsRoute,
} as any)

const LibraryIdVersionDocsFrameworkFrameworkSplatRoute =
  LibraryIdVersionDocsFrameworkFrameworkSplatImport.update({
    path: '/framework/$framework/$',
    getParentRoute: () => LibraryIdVersionDocsRoute,
  } as any)

const LibraryIdVersionDocsFrameworkFrameworkExamplesSplatRoute =
  LibraryIdVersionDocsFrameworkFrameworkExamplesSplatImport.update({
    path: '/framework/$framework/examples/$',
    getParentRoute: () => LibraryIdVersionDocsRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/$libraryId': {
      preLoaderRoute: typeof LibraryIdImport
      parentRoute: typeof rootRoute
    }
    '/_libraries': {
      preLoaderRoute: typeof LibrariesImport
      parentRoute: typeof rootRoute
    }
    '/blog': {
      preLoaderRoute: typeof BlogImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/merch': {
      preLoaderRoute: typeof MerchImport
      parentRoute: typeof rootRoute
    }
    '/sponsors-embed': {
      preLoaderRoute: typeof SponsorsEmbedImport
      parentRoute: typeof rootRoute
    }
    '/$libraryId/$version': {
      preLoaderRoute: typeof LibraryIdVersionImport
      parentRoute: typeof LibraryIdImport
    }
    '/blog/$': {
      preLoaderRoute: typeof BlogSplatImport
      parentRoute: typeof BlogImport
    }
    '/$libraryId/': {
      preLoaderRoute: typeof LibraryIdIndexImport
      parentRoute: typeof LibraryIdImport
    }
    '/blog/': {
      preLoaderRoute: typeof BlogIndexImport
      parentRoute: typeof BlogImport
    }
    '/$libraryId/$version/docs': {
      preLoaderRoute: typeof LibraryIdVersionDocsImport
      parentRoute: typeof LibraryIdVersionImport
    }
    '/$libraryId/$version/docs/$': {
      preLoaderRoute: typeof LibraryIdVersionDocsSplatImport
      parentRoute: typeof LibraryIdVersionDocsImport
    }
    '/$libraryId/$version/docs/': {
      preLoaderRoute: typeof LibraryIdVersionDocsIndexImport
      parentRoute: typeof LibraryIdVersionDocsImport
    }
    '/_libraries/config/$version/': {
      preLoaderRoute: typeof LibrariesConfigVersionIndexImport
      parentRoute: typeof LibrariesImport
    }
    '/_libraries/form/$version/': {
      preLoaderRoute: typeof LibrariesFormVersionIndexImport
      parentRoute: typeof LibrariesImport
    }
    '/_libraries/query/$version/': {
      preLoaderRoute: typeof LibrariesQueryVersionIndexImport
      parentRoute: typeof LibrariesImport
    }
    '/_libraries/ranger/$version/': {
      preLoaderRoute: typeof LibrariesRangerVersionIndexImport
      parentRoute: typeof LibrariesImport
    }
    '/_libraries/router/$version/': {
      preLoaderRoute: typeof LibrariesRouterVersionIndexImport
      parentRoute: typeof LibrariesImport
    }
    '/_libraries/start/$version/': {
      preLoaderRoute: typeof LibrariesStartVersionIndexImport
      parentRoute: typeof LibrariesImport
    }
    '/_libraries/store/$version/': {
      preLoaderRoute: typeof LibrariesStoreVersionIndexImport
      parentRoute: typeof LibrariesImport
    }
    '/_libraries/table/$version/': {
      preLoaderRoute: typeof LibrariesTableVersionIndexImport
      parentRoute: typeof LibrariesImport
    }
    '/_libraries/virtual/$version/': {
      preLoaderRoute: typeof LibrariesVirtualVersionIndexImport
      parentRoute: typeof LibrariesImport
    }
    '/$libraryId/$version/docs/framework/$framework/$': {
      preLoaderRoute: typeof LibraryIdVersionDocsFrameworkFrameworkSplatImport
      parentRoute: typeof LibraryIdVersionDocsImport
    }
    '/$libraryId/$version/docs/framework/$framework/examples/$': {
      preLoaderRoute: typeof LibraryIdVersionDocsFrameworkFrameworkExamplesSplatImport
      parentRoute: typeof LibraryIdVersionDocsImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  LibraryIdRoute.addChildren([
    LibraryIdVersionRoute.addChildren([
      LibraryIdVersionDocsRoute.addChildren([
        LibraryIdVersionDocsSplatRoute,
        LibraryIdVersionDocsIndexRoute,
        LibraryIdVersionDocsFrameworkFrameworkSplatRoute,
        LibraryIdVersionDocsFrameworkFrameworkExamplesSplatRoute,
      ]),
    ]),
    LibraryIdIndexRoute,
  ]),
  LibrariesRoute.addChildren([
    LibrariesConfigVersionIndexRoute,
    LibrariesFormVersionIndexRoute,
    LibrariesQueryVersionIndexRoute,
    LibrariesRangerVersionIndexRoute,
    LibrariesRouterVersionIndexRoute,
    LibrariesStartVersionIndexRoute,
    LibrariesStoreVersionIndexRoute,
    LibrariesTableVersionIndexRoute,
    LibrariesVirtualVersionIndexRoute,
  ]),
  BlogRoute.addChildren([BlogSplatRoute, BlogIndexRoute]),
  DashboardRoute,
  LoginRoute,
  MerchRoute,
  SponsorsEmbedRoute,
])

/* prettier-ignore-end */