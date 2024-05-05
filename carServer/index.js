const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT = 5000;
require('dotenv').config()

//middleware
app.use(cors())
app.use(express.json())


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

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const serviceCollection = client.db('carDoctor').collection('services')
    const bookingCollection = client.db('carDoctor').collection('booking')
    app.get('/services', async (req, res) => {
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
      console.log(booking)
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
      console.log(id)
      const queay = { _id: new ObjectId(id) }
      const result = await bookingCollection.deleteOne(queay)
      res.send(result)

    })

    app.get('/bookings', async (req, res) => {
      // console.log(req.query)
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