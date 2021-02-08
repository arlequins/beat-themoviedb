import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

// client
import { INITIAL_STATE } from 'client/constants'
import routes from 'client/routes'
import { frontendCreateStore } from 'client/store/dev'

// components
import Loading from 'client/components/fragments/common/Loading'

// interfaces
import { State } from 'common'
import { BrowserRouter } from 'react-router-dom'
import { ExtendedWindow } from 'types/settings'

const win: ExtendedWindow = (window as unknown) as ExtendedWindow
const state: State = win && win.__INITIAL_STATE__ ? win.__INITIAL_STATE__ : INITIAL_STATE
state.route = routes

const store = frontendCreateStore(state)

render(
	<Provider store={store}>
		<React.Suspense fallback={<Loading />}>
			<BrowserRouter>{renderRoutes([routes])}</BrowserRouter>
		</React.Suspense>
	</Provider>,
	document.getElementById('app')
)
