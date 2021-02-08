import { State } from 'common'
import { RouteConfig } from 'react-router-config'

export const INITIAL_STATE: State = {
	route: {} as RouteConfig,
	status: 200,

	appConfig: {
		mode: 'dark',
		lang: 'EN',
	},
}
