declare module 'response' {

  interface RequestPayload {
    timeout?: number
    language?: string
  }

  interface ReqSearchMoviesPayload extends RequestPayload {
    query: string
    page?: number
    include_adult?: boolean
    region?: string
    year?: number
    primary_release_year?: number
  }

  interface ResSearchMovies {
    page: number
    results: any[]
    total_pages: number
    total_results: number
  }

  interface ReqMovieDetailsPayload extends RequestPayload {
    movie_id: number
    append_to_response?: string
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

  interface ResMovieDetails {
    adult: boolean
    backdrop_path: string | null
    belongs_to_collection: null | any
    budget: number
    genres: ResMovieDetailsGenre[],
    homepage: string | null
    id: number
    imdb_id: string | null
    original_language: string
    original_title: string
    overview: string | null
    popularity: number
    poster_path: string | null
    production_companies: ResMovieDetailsProductionCompanies[]
    production_countries: ResMovieDetailsProductionCountries[]
    release_date: string
    revenue: number
    runtime: number | null
    spoken_languages: ResMovieDetailsReleaseDate[],
    status: string,
    tagline: string | null
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }

  interface ErrorResponse {
    status_message: string
    success: boolean
    status_code?: number
  }
}
