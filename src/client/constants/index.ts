import { State } from 'common'
import { RouteConfig } from 'react-router-config'

export const INITIAL_STATE: State = {
	route: {} as RouteConfig,
	status: 200,

	appConfig: {
		mode: 'dark',
		// mode: 'light',
		lang: 'EN',
	},

	searchMovies: {
		statusCode: -1,
		result: undefined,
		error: {
			status_message: '',
			success: false,
		},
	},

	movieDetails: {
		statusCode: -1,
		result: undefined,
		error: {
			status_message: '',
			success: false,
		},
	},
}
