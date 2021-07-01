const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const statsRoute = require('./routes/statsRoute');

app.use(express.urlencoded({ extended: false }));
app.use('/stats', statsRoute);

app.listen(port, () => {
  console.log('RESTful API server started on port ' + port);
});