# JWT-token
JWT/ JSON web-token:

About: This project deals with the authorization of a valid user while login on a website. The basic idea behind the project is that when a user login on a website, the web will automatically generate a web-token for the authenticity of that user. And that token will store in web-storage, session-storage or as a cookie based on settings. And when that token got expired from web-storage, user will automatically logout from the account and needs to login again.

In this project, I implement a web-page (Login/Register) as a POC for expressJS, when a user logins on the webpage, the site will generate a json-token and stores it in web-storage.
->When we send POST request on the server with HEADER: authorization : Bearer [json-token] , it will gives us details about the user.

ROUTES: DASHBOARD (GET) :http://localhost:3000/api/v1/dashboard
        login/register(POST) :http://localhost:3000/api/v1/login

Installation required : npm install jsonwebtoken 
                        npm install http-status-codes
                        npm install mongoose

                        express-async-errors (user-defined errors)   --not-found,error-handler
                        
Technology used: ExpreeJS,mongoDB webServices (mongoose), json web-token(jwt.io) , POSTMAN, usage of AXIOS library.  

Project Structure:  
    -app.js  (main file)
    -.env file (secret info.)
    -controllers (implementation of functions)
        -login
        -dashboard (gives error if user not exists, else generate json web-token)
    -db (connection with mongoose)
        -connect.js
    -Middlewares (for implementation of user-defined errors)
        -auth.js
        -error-handler.js
        -not-found.js
    -routes (routes used in the project)
        -POST: http://localhost:3000/api/v1/login
        -GET:  http://localhost:3000/api/v1/dashboard
    -errors (contain files for errors)
        -bad-request.js
        -custom-error.js
        -unauthenticated.js
        -index.js
    -public (contains files for frontend application)
        -browser-app.js
        -index.html
        -styles.css
    -.gitigmore file
    -package.json
    -package-lock.json
