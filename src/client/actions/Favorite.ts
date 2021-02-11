import { AxiosError } from 'axios'
import { Action } from 'common'
import { ReqAddFavoritePayload, ReqCreateFavoritePayload, ReqListFavoritePayload, ReqRemoveFavoritePayload, ResAddFavorite, ResCreateFavorite, ResListFavorite, ResRemoveFavorite } from 'response'

export const FAVORITE_CREATE_REQUEST = 'FAVORITE_CREATE_REQUEST'
export const FAVORITE_CREATE_SUCCESS = 'FAVORITE_CREATE_SUCCESS'
export const FAVORITE_CREATE_FAILURE = 'FAVORITE_CREATE_FAILURE'

export interface FavoriteCreateRequestAction extends Action<typeof FAVORITE_CREATE_REQUEST> {
	payload: ReqCreateFavoritePayload
}
export interface FavoriteCreateSuccessAction extends Action<typeof FAVORITE_CREATE_SUCCESS> {
	responseCreateFavorite: ResCreateFavorite
}
export interface FavoriteCreateFailureAction extends Action<typeof FAVORITE_CREATE_FAILURE> {
	error: AxiosError
}

export const createFavorite = (payload: ReqCreateFavoritePayload): FavoriteCreateRequestAction => ({
	type: FAVORITE_CREATE_REQUEST,
	payload,
})
export const setCreateFavorite = (
	responseCreateFavorite: ResCreateFavorite
): FavoriteCreateSuccessAction => {
	return { type: FAVORITE_CREATE_SUCCESS, responseCreateFavorite }
}
export const errorCreateFavorite = (error: AxiosError): FavoriteCreateFailureAction => {
	return { type: FAVORITE_CREATE_FAILURE, error }
}

export const FAVORITE_ADD_REQUEST = 'FAVORITE_ADD_REQUEST'
export const FAVORITE_ADD_SUCCESS = 'FAVORITE_ADD_SUCCESS'
export const FAVORITE_ADD_FAILURE = 'FAVORITE_ADD_FAILURE'

export interface FavoriteAddRequestAction extends Action<typeof FAVORITE_ADD_REQUEST> {
	payload: ReqAddFavoritePayload
}
export interface FavoriteAddSuccessAction extends Action<typeof FAVORITE_ADD_SUCCESS> {
	responseAddFavorite: ResAddFavorite
}
export interface FavoriteAddFailureAction extends Action<typeof FAVORITE_ADD_FAILURE> {
	error: AxiosError
}

export const addFavorite = (payload: ReqAddFavoritePayload): FavoriteAddRequestAction => ({
	type: FAVORITE_ADD_REQUEST,
	payload,
})
export const setAddFavorite = (
	responseAddFavorite: ResAddFavorite
): FavoriteAddSuccessAction => {
	return { type: FAVORITE_ADD_SUCCESS, responseAddFavorite }
}
export const errorAddFavorite = (error: AxiosError): FavoriteAddFailureAction => {
	return { type: FAVORITE_ADD_FAILURE, error }
}

export const FAVORITE_REMOVE_REQUEST = 'FAVORITE_REMOVE_REQUEST'
export const FAVORITE_REMOVE_SUCCESS = 'FAVORITE_REMOVE_SUCCESS'
export const FAVORITE_REMOVE_FAILURE = 'FAVORITE_REMOVE_FAILURE'

export interface FavoriteRemoveRequestAction extends Action<typeof FAVORITE_REMOVE_REQUEST> {
	payload: ReqRemoveFavoritePayload
}
export interface FavoriteRemoveSuccessAction extends Action<typeof FAVORITE_REMOVE_SUCCESS> {
	responseRemoveFavorite: ResRemoveFavorite
}
export interface FavoriteRemoveFailureAction extends Action<typeof FAVORITE_REMOVE_FAILURE> {
	error: AxiosError
}

export const removeFavorite = (payload: ReqRemoveFavoritePayload): FavoriteRemoveRequestAction => ({
	type: FAVORITE_REMOVE_REQUEST,
	payload,
})
export const setRemoveFavorite = (
	responseRemoveFavorite: ResRemoveFavorite
): FavoriteRemoveSuccessAction => {
	return { type: FAVORITE_REMOVE_SUCCESS, responseRemoveFavorite }
}
export const errorRemoveFavorite = (error: AxiosError): FavoriteRemoveFailureAction => {
	return { type: FAVORITE_REMOVE_FAILURE, error }
}

export const FAVORITE_LIST_REQUEST = 'FAVORITE_LIST_REQUEST'
export const FAVORITE_LIST_SUCCESS = 'FAVORITE_LIST_SUCCESS'
export const FAVORITE_LIST_FAILURE = 'FAVORITE_LIST_FAILURE'

export interface FavoriteListRequestAction extends Action<typeof FAVORITE_LIST_REQUEST> {
	payload: ReqListFavoritePayload
}
export interface FavoriteListSuccessAction extends Action<typeof FAVORITE_LIST_SUCCESS> {
	responseListFavorite: ResListFavorite
}
export interface FavoriteListFailureAction extends Action<typeof FAVORITE_LIST_FAILURE> {
	error: AxiosError
}

export const listFavorite = (payload: ReqListFavoritePayload): FavoriteListRequestAction => ({
	type: FAVORITE_LIST_REQUEST,
	payload,
})
export const setListFavorite = (
	responseListFavorite: ResListFavorite
): FavoriteListSuccessAction => {
	return { type: FAVORITE_LIST_SUCCESS, responseListFavorite }
}
export const errorListFavorite = (error: AxiosError): FavoriteListFailureAction => {
	return { type: FAVORITE_LIST_FAILURE, error }
}
