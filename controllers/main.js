//check username, password in POST (login) request.
// if exists, create new JWT.
// send back to front-end.

// setup Authentication so only the request with JWT can access the dashboard.
const jwt = require('jsonwebtoken');
const customAPIError = require('../errors/custom-error');


const login = async (req,res) => {
    const {username, password} = req.body;
    //mongoDB  --mongoose Validation
    //Package: joi (json web token)
    //check in the controller
    console.log(username, password);
    if(!username || !password)
    {
        throw new customAPIError('Please provide Email-Id & password');
    }

// just for demo: normally,provided by DB:
const id = new Date().getDate();

// try to keep payload small, better experience for user
// just for demo, in PRODUCTION, use: long, complex & unguessable STRING value!!
const token = jwt.sign( {id,username},process.env.JWT_SECRET   , {expiresIn: '30d'} )  //process.env.JWT_SECRET

res.status(200).json( {msg: 'USER created', token}); //Onclick, stored in Global Storage.
//returns a token(long String)-- copy that on (jwt.io) -> u will get results what u saved.
console.log(username);

}

const dashboard = async (req,res) =>{
    console.log(req.headers);
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')  ) {
        // Bearer concept check:  || !authHeader.startWith('Bearer ')
        throw new customAPIError('No Token provided', 401);
    }

    const token = authHeader.split(' ')[1];
    console.log(token);
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        const luckyNum = Math.floor(Math.random()*100);
        res.status(200).json( {msg: `Hello, ${decoded.username}`, secret: `Here is your authorized data, your lucky number is ${luckyNum}` });
    }
    catch (err)   {
        throw new customAPIError('Not authorized to access this route', 401);
    }
    
}

module.exports = {
    login, dashboard
}