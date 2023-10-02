const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');
const products = require('./schemas/products');

server.use(express.json());
server.use(cors());


mongoose.connect('mongodb://localhost:27017/heavenStylez',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

server.post('/products', async (req, res) => {
  const product = new products({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price
  });
  await product.save();

  res.json({ message: 'success' })
})

server.get('/products', async (req, res) => {
  let doc2 = [];
  const doc = await products.find({});

  for (let i = 0; i < doc.length; i++) {
    doc2.push({
      title: doc[i].title,
      description: doc[i].description,
      image: doc[i].image,
      price: doc[i].price
    })

  }
  console.log(doc2);
  res.json({ products: doc2 })
})
server.listen(8000, () => {
  console.log("Server is  on");
})
