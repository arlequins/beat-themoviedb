declare module 'common' {

  import { RouteConfig } from 'react-router-config'

  interface EnvVariables {
    NODE_ENV: string
    VERSION: string
    DOMAIN: string
    CDN_URI: string
    API_ENDPOINT_URL: string
    API_CLIENT_ID: string
    DEFAULT_LANG: string
  }

  interface ReducersMapObject {
    [key: string]: Reducer<State>
  }

  interface ReducersMapObject {
    [key: string]: Reducer<State>
  }

  interface ReducersMapReducerObject {
    isExist: boolean
    functionList: ReducersMapObject
  }

  type TEpic = Epic<Action<string>, State>

  type AllProps = Readonly<State>

  interface Action<T extends string> {
    type: T
  }

  interface Dict<T> {
    [key: string]: T
  }

  interface PreloadedState {
  }

  interface AppConfig {
    mode: string
    lang: string
  }

  interface PreloadedStateEpics {
    [key: string]: string[]
  }

  interface State extends PreloadedState {
    [key: string]: any

    route?: RouteConfig
    status?: number

    appConfig?: AppConfig
  }

  interface LanguagePack {
    isExist: boolean
    info: {
      headerTitle: string
      footerTitle: string
    }
    head: {
      title: string
      desc: string
      keywords: string[]
    }
  }
}
