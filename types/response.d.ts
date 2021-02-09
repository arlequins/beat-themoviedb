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

  interface SearchMovies {
  }

  interface ReqMovieDetailsPayload extends RequestPayload {
    movie_id: string
    append_to_response?: string
  }

  interface MovieDetails {
  }
}
