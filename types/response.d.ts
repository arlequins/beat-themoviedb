declare module 'response' {

  interface RequestPayload {
    timeout?: number
  }

  interface ResCRUD {
    status_code: number
    status_message: string
  }

  interface ReqAddFavoritePayload extends RequestPayload {
    path: {
      list_id: string | number
    }
    query: {
      session_id: string
    }
    body: {
      media_id: number // movie_id?
    }
  }

  interface ResAddFavorite extends ResCRUD {
  }

  interface ReqCreateFavoritePayload extends RequestPayload {
    auth: {
      requestToken: string
    },
    body: {
      name?: string
      description?: string
      language?: string
    }
  }

  interface ResCreateFavorite extends ResCRUD {
    session_id: string
    list_id: number
    success: boolean
    expires_at: string
  }

  interface ReqRemoveFavoritePayload extends RequestPayload {
    path: {
      list_id: string | number
    }
    query: {
      session_id: string
    }
    body: {
      media_id: number // movie_id?
    }
  }

  interface ResRemoveFavorite extends ResCRUD {
  }

  interface ReqListFavoritePayload extends RequestPayload {
    path: {
      list_id: string | number
    }
    query: {
      language: string
    }
  }

  interface ResListFavorite extends ResCRUD {
    created_by: string
    description: string | null
    favorite_count: number
    id: number
    iso_639_1: string
    item_count: number
    items: ResSearchMoviesDetail[]
    name: string
    poster_path: string | null
  }

  interface ReqSearchMoviesPayload extends RequestPayload {
    query: string
    page?: number
    include_adult?: boolean
    region?: string
    year?: number
    primary_release_year?: number
    language?: string
  }

  interface ResSearchMovies {
    page: number
    results: ResSearchMoviesDetail[]
    total_pages: number
    total_results: number
  }

  interface ReqMovieDetailsPayload extends RequestPayload {
    movie_id: number
    append_to_response?: string
    language?: string
  }

  interface ResMovieDetailsGenre {
    id: number
    name: string
  }

  interface ResMovieDetailsProductionCompanies {
    name: string
    id: number
    logo_path: string | null
    origin_country: string
  }

  interface ResMovieDetailsProductionCountries {
    iso_3166_1: string
    name: string
  }

  interface ResMovieDetailsReleaseDate {
    iso_639_1: string
    name: string
  }

  interface ResOriginalType {
    poster_path: string | null
    adult: boolean
    overview: string | null
    release_date: string
    id: number
    original_title: string
    original_language: string
    title: string
    backdrop_path: string | null
    popularity: number
    vote_count: number
    video: boolean
    vote_average: number
  }

  interface ResSearchMoviesDetail extends ResOriginalType {
    genre_ids: number[]
  }

  interface ResMovieDetails extends ResOriginalType {
    belongs_to_collection: null | any
    budget: number
    genres: ResMovieDetailsGenre[],
    homepage: string | null
    imdb_id: string | null
    production_companies: ResMovieDetailsProductionCompanies[]
    production_countries: ResMovieDetailsProductionCountries[]
    revenue: number
    runtime: number | null
    spoken_languages: ResMovieDetailsReleaseDate[]
    status: string
    tagline: string | null
  }

  interface ErrorResponse {
    status_message: string
    success: boolean
    status_code?: number
  }
}
