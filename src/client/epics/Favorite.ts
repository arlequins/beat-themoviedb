import { AxiosError } from 'axios'
import { ActionsObservable } from 'redux-observable'
import { defer, Observable, of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'

import {
	errorAddFavorite,
	errorCreateFavorite,
	errorListFavorite,
	errorRemoveFavorite,
	FavoriteAddFailureAction,

  FavoriteAddRequestAction,
	FavoriteCreateFailureAction,
	FavoriteCreateRequestAction,
	FavoriteListFailureAction,
	FavoriteListRequestAction,

  FavoriteRemoveFailureAction,
	FavoriteRemoveRequestAction,
	FAVORITE_ADD_REQUEST,
	FAVORITE_CREATE_REQUEST,
	FAVORITE_LIST_REQUEST,

  FAVORITE_REMOVE_REQUEST,
	setAddFavorite,
	setCreateFavorite,
	setListFavorite,
	setRemoveFavorite,
} from 'client/actions/Favorite'

import { requestAddFavorite, requestCreateFavorite, requestListFavorite, requestRemoveFavorite } from 'client/services'

// interfaces
import { Action } from 'common'
import { ResAddFavorite, ResCreateFavorite, ResListFavorite, ResRemoveFavorite } from 'response'
import { TEpic } from 'types/settings'

export const addAddFavoriteAddEpic: TEpic = (
	action$: ActionsObservable<Action<typeof FAVORITE_ADD_REQUEST>>
) =>
	action$.ofType(FAVORITE_ADD_REQUEST).pipe(
		mergeMap((action: FavoriteAddRequestAction) =>
			defer(() => requestAddFavorite(action.payload)).pipe(
				map((responseAddFavorite: ResAddFavorite) => setAddFavorite(responseAddFavorite)),
				catchError(
					(error: AxiosError): Observable<FavoriteAddFailureAction> => of(errorAddFavorite(error))
				)
			)
		)
	)

export const addCreateFavoriteAddEpic: TEpic = (
	action$: ActionsObservable<Action<typeof FAVORITE_CREATE_REQUEST>>
) =>
	action$.ofType(FAVORITE_CREATE_REQUEST).pipe(
		mergeMap((action: FavoriteCreateRequestAction) =>
			defer(() => requestCreateFavorite(action.payload)).pipe(
				map((responseCreateFavorite: ResCreateFavorite) => setCreateFavorite(responseCreateFavorite)),
				catchError(
					(error: AxiosError): Observable<FavoriteCreateFailureAction> => of(errorCreateFavorite(error))
				)
			)
		)
	)

export const addRemoveFavoriteAddEpic: TEpic = (
	action$: ActionsObservable<Action<typeof FAVORITE_REMOVE_REQUEST>>
) =>
	action$.ofType(FAVORITE_REMOVE_REQUEST).pipe(
		mergeMap((action: FavoriteRemoveRequestAction) =>
			defer(() => requestRemoveFavorite(action.payload)).pipe(
				map((responseRemoveFavorite: ResRemoveFavorite) => setRemoveFavorite(responseRemoveFavorite)),
				catchError(
					(error: AxiosError): Observable<FavoriteRemoveFailureAction> => of(errorRemoveFavorite(error))
				)
			)
		)
	)

export const addListFavoriteAddEpic: TEpic = (
	action$: ActionsObservable<Action<typeof FAVORITE_LIST_REQUEST>>
) =>
	action$.ofType(FAVORITE_LIST_REQUEST).pipe(
		mergeMap((action: FavoriteListRequestAction) =>
			defer(() => requestListFavorite(action.payload)).pipe(
				map((responseListFavorite: ResListFavorite) => setListFavorite(responseListFavorite)),
				catchError(
					(error: AxiosError): Observable<FavoriteListFailureAction> => of(errorListFavorite(error))
				)
			)
		)
	)
