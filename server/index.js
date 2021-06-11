const express = require('express');
const axios = require('axios');
const auth = require('./apiKey.js')

const app = express();
const PORT = 3001;

app.use(express.static(__dirname + '/../public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const baseURL = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${auth.appId}&app_key=${auth.key}&results_per_page=20&what_and=Javascript&title_only=Software%20Engineer%20`;


app.route('/:location')
  .get((req, res) => {
    req.location = req.params.location || 'New York';
    axios.get(`${baseURL}&where=${req.location}`)
    .then((response) => {
      res.send(response.data.results);
    })
    .catch(error => {
      console.log('error', error);
      res.end();
    })
  })


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});