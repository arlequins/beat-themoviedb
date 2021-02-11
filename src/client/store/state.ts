import { INITIAL_STATE, LOCAL_STORAGE_KEY, SETTING_STORAGE_KEY } from 'client/constants'

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

const fetchEnvLocalStorageItem = window.localStorage.getItem(SETTING_STORAGE_KEY)
const parseFetchedEnvInfo = fetchEnvLocalStorageItem ? JSON.parse(fetchEnvLocalStorageItem) : false

if (parseFetchedEnvInfo && parseFetchedEnvInfo.mode) {
	state.appConfig = parseFetchedEnvInfo
} else {
	window.localStorage.setItem(SETTING_STORAGE_KEY, JSON.stringify(state.appConfig))
}

export const initialState = state
