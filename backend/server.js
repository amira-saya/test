/* eslint-disable no-undef */
const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
const order = require ('./routes/order')

const user = require("./routes/user")
const product = require ("./routes/product")

app.use(express.json());

connectDB();

//app.use('/', user, product, order);


// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;

app.listen(port, err =>
  err
    ? console.err("server is not running")
    : console.log(`server is running on port : ${port}`)
);


app.use('/api/users', user);
app.use('/api/products', product);
app.use('/api/orders', order);


const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);
// app.get('/', (req, res) => {
//   res.send('Server is ready');
// });

app.use((err, req, res) => {
  res.status(500).send({ message: err.message });
});