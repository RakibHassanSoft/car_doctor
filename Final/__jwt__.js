/**
 * ------------------------
 * MAKE API SECURE
 * -----------------------
 * 
 * The person who should have access
 * 
 * concept :
 * 1. Assign two token for each (Access token , refresh token)
 * 2. access token content: user identification(email,role,etc) valid for a shor duration
 * 3. Refresh token to used: to recreate an access token that was expired
 * 4. if refresh is invalid then log out the user
 */

/**
 * 1. jwt ---> josn web token
 * 2. genetrate a token by using jst.sign 
 * 3. create api set to cookie. httponly,secure,samesite
 * 4. from client side : axios withCredentials true
 * 5.cors setup origin and credential
 * 
 */


/**
 * 1 for secure api call
 * 2.server side instal cookie parser and use it as middleware
 * 3.req.cookies
 * 4. on the client side :make api call using axios withCredentails: true and credentials :'include' while using fetch
 */