import { AxiosError } from 'axios'
import { Action } from 'common'
import { ActionsObservable } from 'redux-observable'
import { ResSearchMovies } from 'response'
import { TEpic } from 'types/settings'

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
