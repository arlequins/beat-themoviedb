import { INITIAL_STATE } from 'client/constants'

// interfaces
import { State } from 'common'
import { ExtendedWindow } from 'types/settings'

const win: ExtendedWindow = (window as unknown) as ExtendedWindow

export const initialState: State =
	win && win.__INITIAL_STATE__ ? win.__INITIAL_STATE__ : INITIAL_STATE
