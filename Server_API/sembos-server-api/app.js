const express = require('express');
var cors = require('cors');
const app = express();
const port = 3000;

const statsRoute = require('./routes/statsRoute');

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3001'
}));
app.use(express.urlencoded({extended: false}));
app.use('/stats', statsRoute);

app.listen(port, () => {
  console.log('RESTful API server started on port ' + port);
});