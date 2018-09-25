const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Chatkit = require('pusher-chatkit-server');

const app = express();

const chatkit = new Chatkit.default({
  instanceLocator: 'v1:us1:cbd24a76-9599-4dbd-869f-3f31e3fe3991',
  key: '5142d60e-6bb6-4c9c-af6a-3951959d2079:192Fnl1Yzx//GPczv4+hgAfqt7yYbvG2rWNEWVXNyuA='
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.post('/users', (req, res) => {
  const { username } = req.body
  
  chatkit.createUser({
    name: username,
    id: username
  })
    .then(() => res.sendStatus(201))
    .catch(error => {
      if(error.error_type === 'services/chatkit/user/user_already_exists') {
        res.sendStatus(200)
      } else {
        res.status(error.statusCode).json(error)
      }
    })
})

const PORT = 3001
app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Running on port ${PORT}`)
  }
})
