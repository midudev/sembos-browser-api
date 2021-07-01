const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const statsRoute = require('./routes/statsRoute');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/stats', statsRoute);
app.use(cors());

app.listen(port, () => {
  console.log('RESTful API server started on port ' + port);
});