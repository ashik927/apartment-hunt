const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const uri = "Maiinul Vai Apnar URI ta diben";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const port = 5000;
app.use(cors())
app.use(bodyParser.json())


// Rented House DataBase
client.connect(err => {
    const rented = client.db("Apartment-Hunt").collection("Rented");
      app.get('/rentedlist',(req, res)=>{
          rented.find({})
          .toArray((err, documents)=>{
              res.send(documents);
          })
      })
      app.post('/rentit',(req, res)=>{
        const rentData = req.body;
        rented.insertOne(rentData);
      })
  });

  // Apartments Database
  client.connect(err => {
    const apartment = client.db("Apartment-Hunt").collection("Apartments");
      app.get('/apartment',(req, res)=>{
        apartment.find({})
          .toArray((err, documents)=>{
              res.send(documents);
          })
      })
      app.post('/addapartment',(req, res)=>{
        const apartData = req.body;
        apartment.insertOne(apartData);
      })
  });

















  app.get('/', function (req, res) {
    res.send('nodemon working')
  })


app.listen(process.env.PORT || port)