import { lazy } from 'react'

const App = lazy(() => import(/* webpackChunkName: "page-app" */ 'client/containers/AppHooks'))
const BlogTop = lazy(() =>
	import(/* webpackChunkName: "page-blog-top" */ 'client/containers/BlogTop')
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
			path: `/section/:sectionName`,
			exact: true,
			component: BlogTop,
		},
		{
			path: `/p:id`,
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
