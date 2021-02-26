/* eslint-disable no-undef */
const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
const port = process.env.PORT || 5000;
// const order = require ('./routes/order')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const user = require("./routes/user")
const product = require ("./routes/product")

// app.use(express.json());
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
connectDB();

//app.use('/', user, product, order);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
// eslint-disable-next-line no-undef


app.listen(port, () =>
    console.log(`server is running on port : ${port}`)
);


app.use('/api/users', user);
app.use('/api/products', product);
// app.use('/api/orders', order);


app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, 'build','index.html'))
);
// app.get('/', (req, res) => {
//   res.send('Server is ready');
// });
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}
