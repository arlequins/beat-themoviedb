import { lazy } from 'react'

const App = lazy(() => import(/* webpackChunkName: "page-app" */ 'client/containers/AppHooks'))
const BlogTop = lazy(() =>
	import(/* webpackChunkName: "page-blog-top" */ 'client/containers/BlogTop')
)
const BlogSearch = lazy(() =>
	import(/* webpackChunkName: "page-blog-search" */ 'client/containers/BlogSearch')
)
const BlogDetail = lazy(() =>
	import(/* webpackChunkName: "page-blog-detail" */ 'client/containers/BlogDetail')
)
const NotFound = lazy(() =>
	import(/* webpackChunkName: "page-not-found" */ 'client/containers/common/NotFound')
)

export default {
	component: App,
	routes: [
		{
			path: `/`,
			exact: true,
			component: BlogTop,
		},
		{
			path: `/search/:keyword`,
			exact: true,
			component: BlogSearch,
		},
		{
			path: `/m:id`,
			exact: true,
			component: BlogDetail,
		},
		{
			path: `/404`,
			exact: true,
			component: NotFound,
		},
		{
			path: '*',
			component: NotFound,
		},
	],
}
