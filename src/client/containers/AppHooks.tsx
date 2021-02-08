import * as React from 'react'
import Helmet from 'react-helmet'

// libraries
import { FLAGSHIP_URL, STATIC_URL } from 'client/constants/Env'
import { LANGUAGE_PACK } from 'client/constants/Lang'
import { renderRoutes, RouteConfig } from 'react-router-config'

// components
import Loading from 'client/components/fragments/common/Loading'

// interfaces
import { AllProps, AppConfig, State } from 'common'
import { useSelector } from 'react-redux'

const App: React.FC<AllProps> = () => {
	const {
		appConfig = {
			lang: 'EN',
		} as AppConfig,
		route = {} as RouteConfig,
	} = useSelector((state: State) => state)
	const head = LANGUAGE_PACK(appConfig.lang).head
	const currentUri = `${window.location.origin}${window.location.pathname}`

	return (
		<main>
			<Helmet>
				<html lang={appConfig.lang.toLocaleLowerCase()} />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
				<meta name="format-detection" content="telephone=no" />
				<link rel="icon shortcut" href={`${STATIC_URL}/images/icon/favicon.ico`} sizes="32x32" />
				<link rel="icon shortcut" href={`${STATIC_URL}/images//icon/favicon.ico`} sizes="192x192" />
				<link
					rel="apple-touch-icon-precomposed"
					href={`${STATIC_URL}/images/icon/apple-touch-icon.png`}
				/>
				<link rel="shortcut icon" href={`${STATIC_URL}/images/icon/favicon.ico`} />
				<link rel="apple-touch-icon" href={`${STATIC_URL}/images/icon/apple-touch-icon.png`} />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
				<meta name="apple-mobile-web-app-title" content={head.title} />
				<meta name="theme-color" content="#000000" />
				<link rel="manifest" href={`${FLAGSHIP_URL}/manifest.json`} />
				<title>{head.title}</title>
				<meta name="description" content={head.desc} />
				<meta property="og:title" content={head.title} />
				<meta property="og:description" content={head.desc} />
				<meta property="og:url" content={currentUri} />
				<meta name="twitter:title" content={head.title} />
				<meta name="twitter:description" content={head.desc} />
				<meta name="twitter:url" content={currentUri} />
				<meta name="keywords" content={head.keywords.join(',')} />
				<link rel="canonical" href={currentUri} />
			</Helmet>
			<React.Suspense fallback={<Loading text={'LOADING COMPONENTS'} />}>
				{route && renderRoutes(route.routes)}
			</React.Suspense>
		</main>
	)
}

export default App
