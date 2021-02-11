import { v4 as uuidv4 } from 'uuid'

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

	addFavorite: {
		statusCode: -1,
		result: undefined,
		error: {
			status_message: '',
			success: false,
		},
	},

	createFavorite: {
		statusCode: -1,
		result: undefined,
		error: {
			status_message: '',
			success: false,
		},
	},

	removeFavorite: {
		statusCode: -1,
		result: undefined,
		error: {
			status_message: '',
			success: false,
		},
	},

	listFavorite: {
		statusCode: -1,
		result: undefined,
		error: {
			status_message: '',
			success: false,
		},
	},

	sessionInfo: {
		requestToken: 'c155ed72cbaa7640813d7b125476543cae4d1459',
		sessionId: 'a05fcd7a6c560bc31c453d3d44ca56ae35e3f2a9',
		listId: 7076642,
	},
}

export const LOCAL_STORAGE_KEY = 'beat-themoviedb'
export const SETTING_STORAGE_KEY = 'beat-themoviedb-env'
