declare module 'common' {

  import { RouteConfig } from 'react-router-config'
  import { ErrorResponse, ResMovieDetails, ResSearchMovies, ResAddFavorite, ResCreateFavorite,
    ResListFavorite,
    ResRemoveFavorite } from 'response'

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

  interface StateResponse {
    statusCode: number
    error: ErrorResponse
  }


  interface StateSearchMovies extends StateResponse {
    result: ResSearchMovies | undefined
  }

  interface StateMovieDetails extends StateResponse {
    result: ResMovieDetails | undefined
  }

  interface StateAddFavorite extends StateResponse {
    result: ResAddFavorite | undefined
  }

  interface StateCreateFavorite extends StateResponse {
    result: ResCreateFavorite | undefined
  }

  interface StateRemoveFavorite extends StateResponse {
    result: ResRemoveFavorite | undefined
  }

  interface StateListFavorite extends StateResponse {
    result: ResListFavorite | undefined
  }

  interface SessionInfo {
		requestToken: string
		sessionId: string
		listId: number
  }

  interface State extends PreloadedState {
    [key: string]: any

    route?: RouteConfig
    status?: number

    appConfig?: AppConfig

    searchMovies?: StateSearchMovies
    movieDetails?: StateMovieDetails

    addFavorite?: StateAddFavorite
    createFavorite?: StateCreateFavorite
    removeFavorite?: StateRemoveFavorite
    listFavorite?: StateListFavorite

    sessionInfo?: SessionInfo
  }

  interface LanguagePack {
    isExist: boolean
    info: {
      headerTitle: string
      footerTitle: string
      topTitle: string
      searchTitle: string
      countText: string
      overCount: string
      searchLabel: string
      submitBtn: string
      searchPlaceholder: string
    }
    head: {
      title: string
      desc: string
      keywords: string[]
    }
  }

  interface ParamsBlogSearch {
    keyword: string
  }

  interface ParamsBlogDetail {
    id: string
  }

  interface QueryStringBlogSearch {
    page: number
  }
}
