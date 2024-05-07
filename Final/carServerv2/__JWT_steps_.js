/**
 * install jsonwebtoken
 * jwt.sing(payload,secret,{exporeIIn:})
 * token client
 * 
 * 
 * 
 */
/**
 * How to store token in client side
 * 1. memory  -->
 * 2. localstorage --> ok type (XSS)
 * 3. cookies: http only 
 */


/**
 * 1.Set cookies with http only for development secure: false
 * 
 * 2. cors
 app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}))

 * 3. client side axios setting
in axios set wiCradiatials: true
 */


/**
 * 1. to send cookies forem the clioent make sure added whitCadintail true for the api call usning axios
 * 2. use cookie parser as middleware to recive cookies(in bookings )
 */


/**
 *  shortcut axios.defaults.withCredentials =true;
 */