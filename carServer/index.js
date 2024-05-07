const express = require('express');
const cors = require('cors');
const app = express()
const cookiParser = require('cookie-parser')
const port = process.env.PORT = 5000;
require('dotenv').config()
const jwt  = require('jsonwebtoken')




//middleware
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true // set cookie
}))
app.use(express.json())
app.use(cookiParser())

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.drqortc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

//middleware

const logger = async(req,res,next)=>{
  console.log("Called",req.host,req.originalUrl)
  next();
}


const verifyToken = async (req,res,next)=>{
  const token = req.cookies?.token;
  console.log("Value of token in middleware",token)
  if(!token){
    return res.status(401).send({message : 'not authorized'});
  }
  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,deceded)=>{
    //err
    if(err){
      console.log(err)
      return res.status(401).send({message: 'unauthorized'})
    }
    //if token is valid then it would be decoed

    console.log("value in the token",deceded)
   
    req.user = deceded; // sending to next functin by defining user data

    next();
  })
  
}
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const serviceCollection = client.db('carDoctor').collection('services')
    const bookingCollection = client.db('carDoctor').collection('booking')
       
    //auth
    app.post('/jwt',logger,async(req,res)=>{
      const user = req.body;
      console.log(user)
      const token = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn: '1h'})


      res
      .cookie('token',token,{
        httpOnly: true,
        // secure:false,//if https then true
        // sameSite:'none',//server and client are not in same side
        maxAge: 3600000,
        

      })
      .send({success: true})
    })
 
{/* 
node 
> require('crypto').randomBytes(64)
<Buffer 61 8c 4c 20 d8 e6 e0 9b 63 bf dc 4b 32 ac fd 9a 9
4 a2 45 f4 b6 20 aa ad be 43 c2 3f 2d 27 3d d9 19 c5 46 9
e 5a c7 b0 c1 31 4a 75 39 3f 0b 4b d4 83 e0 ... 14 more b
ytes>
> require('crypto').randomBytes(64).toString('hex')      
'd7b699d110b04b470bc7d12dae6edc85ddc7b8fdb3c214206b65c2a5
95eb232668f84e15b031792e84d2211bdaee953eaa5cc6afa88c45ce7
84fbab708b2d436 */}
    
    
    //services realted api
    
    app.get('/services',logger, async (req, res) => {
      const cursor = serviceCollection.find()
      const result = await cursor.toArray();
      res.send(result)

    })



    app.get('/services/:id', async (req, res) => {

      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await serviceCollection.findOne(query)
      res.send(result)
    })


    //bookings
    app.post('/booking', async (req, res) => {
      const booking = req.body;
      // console.log(booking)
      const result = await bookingCollection.insertOne(booking)
      res.send(result)

    })

    app.patch('/bookings/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const updastedBooking = req.body;
      const updatedDc = {
        $set: {
          status:updastedBooking.status
        }
      }
      // console.log(updastedBooking);

     const result = await bookingCollection.updateOne(filter,updatedDc)
     res.send(result)
    })


    app.delete('/bookings/:id', async (req, res) => {
      const id = req.params.id;
      // console.log(id)
      const queay = { _id: new ObjectId(id) }
      const result = await bookingCollection.deleteOne(queay)
      res.send(result)

    })

    app.get('/bookings',logger,verifyToken, async (req, res) => {
      // console.log(req.query)
      // console.log('tok totk token',req.cookies.token)
      // console.log('has cookies',req.cookies)
      console.log("user in the valid token",req.user) /// reciving from res.user form verify token
      
      //his his whose whose data checking
      if(req.query.email !== req.user.email){
        return res.status(403).send({message :"forbiden assess"})
      }
      
      let query = {};
      if (req.query?.email) {
        query = { email: req.query.email }
      }
      const result = await bookingCollection.find(query).toArray()
      // console.log(result)
      res.send(result)
    })




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send("Running")
})
app.listen(port, () => {
  console.log("car doctor server is running")

})