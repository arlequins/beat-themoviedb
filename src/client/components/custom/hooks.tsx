import { useSelector } from 'react-redux'

// libraries
import { LANGUAGE_PACK } from 'client/constants/Lang'
import { setLangText } from 'client/helpers'
import { initialState } from 'client/store/state'

// interface
import { LanguagePack, State } from 'common'
import { AppConfig } from 'common'
import { useLocation } from 'react-router-dom'

export const useCurrentLanguagePack = (): {
	text: LanguagePack
	status: string
} => {
	const { appConfig = initialState.appConfig as AppConfig } = useSelector((state: State) => state)
	return {
		text: LANGUAGE_PACK(appConfig.lang),
		status: setLangText(appConfig.lang),
	}
}

// A custom hook that builds on useLocation to parse
// the query string for you.
export const useQuery = (): URLSearchParams => {
	return new URLSearchParams(useLocation().search)
}
