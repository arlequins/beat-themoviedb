import { EnvVariables } from 'common'

export const env: EnvVariables = {
	DOMAIN: process.env.DOMAIN ? process.env.DOMAIN : 'http://localhost:5000',
	CDN_URI: process.env.CDN_URI ? process.env.CDN_URI : '',
	API_ENDPOINT_URL: process.env.API_ENDPOINT_URL ? process.env.API_ENDPOINT_URL : '',
	API_CLIENT_ID: process.env.API_CLIENT_ID ? process.env.API_CLIENT_ID : '',
	DEFAULT_LANG: process.env.DEFAULT_LANG ? process.env.DEFAULT_LANG : 'ja',
	NODE_ENV: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
	VERSION: process.env.VERSION ? process.env.VERSION : '1.0.1',
}

export const CDN_URL = `${env.DOMAIN}/assets/${env.VERSION}`
export const NO_IMAGE = `${env.DOMAIN}/images/no-image.png`
export const STATIC_URL = `${env.DOMAIN}/static`
export const FLAGSHIP_URL = `${env.DOMAIN}/flagship`
export const DEFAULT_LANG = env.DEFAULT_LANG.toUpperCase()
export const IS_DEVELOPMENT = env.NODE_ENV === 'development'
