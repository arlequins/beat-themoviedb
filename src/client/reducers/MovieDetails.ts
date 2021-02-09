import { PreloadedStateEpics, State } from 'common'

import {
	MovieDetailsFailureAction,
	MovieDetailsSuccessAction,
	MOVIE_DETAILS_FAILURE,
	MOVIE_DETAILS_SUCCESS,
} from 'client/actions'

export default {
	reducersMapObject: {
		[MOVIE_DETAILS_SUCCESS]: (
			state: State,
			{ responseMovieDetails }: MovieDetailsSuccessAction
		) => {
			return {
				...state,
				movieDetails: {
					statusCode: 200,
					result: responseMovieDetails,
					error: {},
				},
			}
		},
		[MOVIE_DETAILS_FAILURE]: (state: State, { error }: MovieDetailsFailureAction) => {
			const errorStatusCode = error.response && error.response.status ? error.response.status : -1
			if (errorStatusCode === -1) {
				return {
					...state,
					movieDetails: {
						statusCode: 500,
						result: {},
						error: {},
					},
				}
			} else {
				return {
					...state,
					movieDetails: {
						statusCode: errorStatusCode,
						result: {},
						error: error?.response?.data,
					},
				}
			}
		},
	},
	preloadedStateEpic: {
		movieDetails: [MOVIE_DETAILS_SUCCESS, MOVIE_DETAILS_FAILURE],
	} as PreloadedStateEpics,
}
