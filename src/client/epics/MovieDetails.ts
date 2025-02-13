import { AxiosError } from 'axios'
import { ActionsObservable } from 'redux-observable'
import { defer, Observable, of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'

import {
	errorMovieDetails,
	MovieDetailsFailureAction,
	MovieDetailsRequestAction,
	MOVIE_DETAILS_REQUEST,
	setMovieDetails,
} from 'client/actions/MovieDetails'

import { requestMovieDetails } from 'client/services'

// interfaces
import { Action } from 'common'
import { ResMovieDetails } from 'response'
import { TEpic } from 'types/settings'

export const addMovieDetailsEpic: TEpic = (
	action$: ActionsObservable<Action<typeof MOVIE_DETAILS_REQUEST>>
) =>
	action$.ofType(MOVIE_DETAILS_REQUEST).pipe(
		mergeMap((action: MovieDetailsRequestAction) =>
			defer(() => requestMovieDetails(action.payload)).pipe(
				map((responseMovieDetails: ResMovieDetails) => setMovieDetails(responseMovieDetails)),
				catchError(
					(error: AxiosError): Observable<MovieDetailsFailureAction> => of(errorMovieDetails(error))
				)
			)
		)
	)
