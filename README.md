# login-flow-ex
Code Challenge for WebRoot

## summary
In the language of your choice, create a user authentication program. In this program, a user should be able to
register an account with login credentials, login to that account using those credentials, and logout.

## prerequisites
Node.js and npm are needed.

## running login-flow-ex

### `installing`
````
git clone https://github.com/arthuranderson3/login-flow-ex.git

cd login-flow-ex && npm install

````
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# design
I chose react and javascript b/c after reading about swift I thought there were alot of similarities in language syntax.

## Expected Flow
### Initial Start Up
Will redirect the user to the login page. 
The DB is empty on initial start and you will not be able to login. 

The navbar will only show links to login and register page when Auth state isAuthenticated is false.

The navbar will change once a user is logged in.

### `RegisterPage`.
Upon registering a user I assumed they would be logged in and will be redirected to home page and Navbar will change the links [Home and Logout]

### `LoginPage`
Upon successful login the user will be redirected to the home page and Navbar links will change [Home and Logout]

### `LogoutPage`
Upon logout the Navbar links will change to [ Login, Register]

### `HomePage`
Home page will display an error if we got there and are not authenticated. This should not happen now.

* `Reset Database` will destroy the db and redirect you to register page.

## starting points
These are suggested starting points.

### src/provider/ProvideAuth
Contains state [ isAuthenticated, user ] and methods [login, logout, register]
They are shared across all children components by wrapping all components in the App with <ProvideAuth>

### src/components/App
defines the structure of the app



## Coding style
`Prettier` is the code formatter, config file: .prettierrc.yaml.

`Eslint` is the linter

## `dir` structure
````
./src 
  components - react components 
    [Login, Register, Logout, Home, Navbar, App]
  model
    [errors, credentials]
  provider 
    [ProvideAuth] - authentication module
  query 
    db methods for indexed db service
  service 
    [CredentialsDb] PouchDb

````
