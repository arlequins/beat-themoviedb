import { Action, AppConfig } from 'common'

export const APP_CONFIG_REQUEST = 'APP_CONFIG_REQUEST'

export interface AppConfigRequestAction extends Action<typeof APP_CONFIG_REQUEST> {
	appConfig: AppConfig
}

export const addAppConfig = (appConfig: AppConfig): AppConfigRequestAction => ({
	type: APP_CONFIG_REQUEST,
	appConfig,
})
