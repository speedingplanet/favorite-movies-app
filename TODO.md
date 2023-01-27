# Favorite Movie todos

## Routing for logins

- [x] Add a route for "Login"
- Create a "login" folder
- Create a LoginManager component (the basic template will do for now) under the `login` folder
- In `NavBarWithLayout.tsx`, add a `NavLink` for `/login`
- In `App.tsx` add a `Route` (under the one for the root) for 'login' that loads `LoginManager`
- Try it out!

## Login page

- [x] Login screen
- New user? Returning user?
- [x] New user form
- Store locally in Redux
- Storing locally is bad, but we're prototyping!
- [x] Push to server
- [x] Check duplicates
  - Add user
  - Check user against (Redux? Server?)
  - If the user doesn't appear, add
  - If the user does appear, warn
- [ ] Returning user form
- [ ] Check to find returning user

## Movie routing

- [ ] List all movies
- [ ] Add a movie

## Back to movie routing

- [ ] List my favorite movies
- [ ] See the details for a specific movie

### Movie listing

- [ ] List all movies should indicate a favorite
- [ ] Should be able to toggle whether a movie is a favorite
