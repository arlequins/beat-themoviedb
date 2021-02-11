import { PreloadedStateEpics, State } from 'common'

import { AppConfigRequestAction, APP_CONFIG_REQUEST } from 'client/actions'

export default {
	reducersMapObject: {
		[APP_CONFIG_REQUEST]: (state: State, { appConfig }: AppConfigRequestAction) => {
			return {
				...state,
				appConfig: appConfig,
			}
		},
	},
	preloadedStateEpic: {
		appConfig: [APP_CONFIG_REQUEST],
	} as PreloadedStateEpics,
}
