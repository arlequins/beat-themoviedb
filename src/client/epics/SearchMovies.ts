import { AxiosError } from 'axios'
import { ActionsObservable } from 'redux-observable'
import { ResSearchMovies } from 'response'

import { defer, Observable, of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'

import {
	errorSearchMovies,
	SearchMoviesFailureAction,
	SearchMoviesRequestAction,
	SEARCH_MOVIES_REQUEST,
	setSearchMovies,
} from 'client/actions/SearchMovies'

import { requestSearchMovies } from 'client/services'

// interfaces
import { Action } from 'common'
import { ResMovieDetails } from 'response'
import { TEpic } from 'types/settings'

export const addSearchMoviesEpic: TEpic = (
	action$: ActionsObservable<Action<typeof SEARCH_MOVIES_REQUEST>>
) =>
	action$.ofType(SEARCH_MOVIES_REQUEST).pipe(
		mergeMap((action: SearchMoviesRequestAction) =>
			defer(() => requestSearchMovies(action.payload)).pipe(
				map((responseSearchMovies: ResSearchMovies) => setSearchMovies(responseSearchMovies)),
				catchError(
					(error: AxiosError): Observable<SearchMoviesFailureAction> => of(errorSearchMovies(error))
				)
			)
		)
	)
