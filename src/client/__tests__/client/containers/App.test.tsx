import * as React from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import * as renderer from 'react-test-renderer'

// client
import routes from 'client/routes'
import { frontendCreateStore } from 'client/store/dev'
import { initialState } from 'client/store/state'

// components
import App from 'client/containers/AppHooks'

initialState.route = routes

const store = frontendCreateStore(initialState)

describe('App', () => {
	test('snapshot renders', () => {
		const component = renderer.create(
			<MemoryRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</MemoryRouter>
		)
		const tree = component.toJSON()
		expect(tree).toMatchSnapshot()
	})
})
