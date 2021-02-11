import { INITIAL_STATE, LOCAL_STORAGE_KEY } from 'client/constants'

// interfaces
import { State } from 'common'
import { ExtendedWindow } from 'types/settings'

const win: ExtendedWindow = (window as unknown) as ExtendedWindow

const state: State = win && win.__INITIAL_STATE__ ? win.__INITIAL_STATE__ : INITIAL_STATE

const fetchLocalStorageItem = window.localStorage.getItem(LOCAL_STORAGE_KEY)
const parseFetchedSessionInfo = fetchLocalStorageItem ? JSON.parse(fetchLocalStorageItem) : false

if (
	parseFetchedSessionInfo &&
	parseFetchedSessionInfo.listId &&
	parseFetchedSessionInfo.listId !== -1
) {
	state.sessionInfo = parseFetchedSessionInfo
}

export const initialState = state
