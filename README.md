# beat-themoviedb


## preface


### Steps to implement

1. Make an API key following the steps here: https://developers.themoviedb.org/3/getting-started/introduction
2. Film search (using this API endpoint GET https://api.themoviedb.org/3/search/movie?api_key={apikey}&query=<search_query>), display the Films in whatever UI you want.
3. The user should be able to see details of the film (endpoint GET https://api.themoviedb.org/3/movie/{movie_id}?api_key={apikey})
4. The user should be able to favorite and unfavorite a movie (use whatever local storage that you think make sense)
5. The user should be able to see a list of favorite movies (and from there go to the detail movie screen)


### Tips

- Spend some time on transitions/animations and the small tweaks that make an app nice to use
- Focus on good naming
- If you end up with complex code, which isn't necessarily a bad thing, document the thoughts behind it


### Before you start
- You can use any frameworks and/or architecture you like, any UI, make as many or little comments you like, just remember that we will be looking through the code and want to get a good understanding of your skills.
- We know you are under a time limit and we will of course take this into account. It's perfectly fine to cut corners and focus on certain parts.


### How to deliver your code
- We prefer that you use git even though you shouldn't make your code public, that way we can track progress and the way you work
- Push to a private repository or zip up the code + .git folder
- Send it to your contact person as a link to a hosted location or if the zip is small enough, attach it.


## Check List

- [x] base(package and so on)
- [x] redux(api)
  - [x] search: search results
  - [x] detail: detail info for movie
  - [x] api response types
- [x] package and express
- [ ] screen(material-ui)
  - [x] top: search input only
  - [x] search: search results
  - [x] detail: detail info for movie
  - [x] favorite and unfavorite a movie: local storage
- [x] package release version
- [x] last check


## api info


### auth
- API Key (v3 auth): 13c535b5d2febad441bee0e33e041239
- Example API Request: https://api.themoviedb.org/3/movie/550?api_key=13c535b5d2febad441bee0e33e041239
- API Read Access Token (v4 auth): eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2M1MzViNWQyZmViYWQ0NDFiZWUwZTMzZTA0MTIzOSIsInN1YiI6IjYwMjFkZTE5OWQyYjYzMDAzZTYyNjBjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-AkCJ7pxmZTbVER7FFZUe8P80vxSsjtg-vP1lDFKtak


### example request


#### list
- https://developers.themoviedb.org/3/search/search-movies
  - https://api.themoviedb.org/3/search/movie?api_key=13c535b5d2febad441bee0e33e041239&query=a&language=ja
  - https://api.themoviedb.org/3/search/movie?api_key=13c535b5d2febad441bee0e33e041239&query=a&language=en
&language=de


#### detail
- https://developers.themoviedb.org/3/movies/get-movie-details
  - https://api.themoviedb.org/3/movie/{movie_id}?api_key={apikey}


### ref
```
all
https://material-ui.com/getting-started/templates/
https://www.creative-tim.com/product/material-kit-react

top
https://material-ui.com/getting-started/templates/sign-in/

search
https://material-ui.com/getting-started/templates/blog/

detail
https://material-ui.com/getting-started/templates/album/
```

### favorite
- for use api, request_token needed.
- redirect url is not exist, therefore I approved and use that token.
- https://www.themoviedb.org/authenticate/c155ed72cbaa7640813d7b125476543cae4d1459
```
sessionInfo: {
  requestToken: 'c155ed72cbaa7640813d7b125476543cae4d1459',
  sessionId: 'a05fcd7a6c560bc31c453d3d44ca56ae35e3f2a9',
  listId: 7076642,
}
```


## run command

```
sh run.sh
```
