const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;

// Assignment_10
// tsN1m6ioaOMxdqhV

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ojv3wo1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const TouristDestination = client.db("Tourist").collection("Spots");
    const Countries = client.db("Tourist").collection("Countries");

    app.get("/spots", async (req, res) => {
      const result = await TouristDestination.find().toArray();
      res.send(result);
    });

    app.get("/spots/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await TouristDestination.findOne(query);
      res.send(result);
    });
    app.get("/mySpots/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await TouristDestination.find(query).toArray();
      res.send(result);
    });

    // app.get("/getByCountryName/:country_name", async (req, res) => {
    //   const country = req.params.country_name;
    //   const query = { country_name: country };
    //   const result = await TouristDestination.find(query).toArray();
    //   res.send(result);
    // });

    // app.get("/sort", async (req, res) => {
    //   const tourPlace = await TouristDestination.find().toArray();
    //   tourPlace.sort((a, b) => a.average_cost - b.average_cost);
    //   res.send(tourPlace);
    // });

    // app.get("/country", async (req, res) => {
    //   const result = await Countries.find().toArray();
    //   res.send(result);
    // });
    
    // app.get('/country/:id', async(req, res)=>{
    //   const id = req.params.id;
    //   const filter = {_id : new ObjectId(id)};
    //   const result = await Countries.findOne(filter);
    //   res.send(result);
    // })

    // app.post("/spots", async (req, res) => {
    //   const spots = req.body;
    //   console.log(spots);
    //   const result = await TouristDestination.insertOne(spots);
    //   res.send(result);
    // });

    // app.patch("/spots/:id", async(req, res)=>{
    //   const id = req.params.id;
    //   const user = req.body;
    //   const filter = { _id : new ObjectId(id) };
    //   const options = { upsert: true };
    //   const updateDoc = {
    //     $set: {
    //       spot_name : user.spot_name,
    //       country_name : user.country_name,
    //       location: user.location,
    //       season  : user.season,
    //       average_cost : user.average_cost,
    //       travel_time : user.travel_time,
    //       visitor : user.visitor,
    //       photo : user.photo,
    //       description: user.description
    //     },
    //   };
    //   const result = await TouristDestination.updateOne(filter, updateDoc, options);
    //   res.send(result);
    // })

    // app.delete("/spots/:id", async(req, res)=>{
    //   const id = req.params.id;
    //   const filter = {_id : new ObjectId(id)};
    //   const result = await TouristDestination.deleteOne(filter);
    //   res.send(result);
    // })

    // app.post("/insertCountry", async (req, res) => {
    //   const user = req.body;
    //   const result = await Countries.insertOne(user);
    //   res.send(result);
    // });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("We are Heading towards Assignment_10 Server Side Management");
});

app.listen(port, () => {
  console.log(`We are doing server management on the Port No: ${port}`);
});
