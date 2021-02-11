import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import { ThemeProvider } from '@material-ui/core/styles'

// client
import routes from 'client/routes'
import { frontendCreateStore } from 'client/store/prod'
import { initialState } from 'client/store/state'

// components
import Loading from 'client/components/fragments/common/Loading'
import Theme from 'client/helpers/Theme'

// interface
import { BrowserRouter } from 'react-router-dom'

initialState.route = routes
const store = frontendCreateStore(initialState)

render(
	<ThemeProvider theme={Theme(initialState.appConfig ? initialState.appConfig.mode : 'light')}>
		<Provider store={store}>
			<React.Suspense fallback={<Loading />}>
				<BrowserRouter>{renderRoutes([routes])}</BrowserRouter>
			</React.Suspense>
		</Provider>
	</ThemeProvider>,
	document.getElementById('app')
)
