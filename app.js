var express = require('./node_modules/express/index');
var cors = require('./node_modules/cors/lib/index')
const app = express();
app.use(express.json());
app.use(cors());

app.locals.chat = [];

app.get('/chat', (req, res) => {
  res.status(200).json(app.locals.chat)
});

app.post('/chat', (req, res) => {
  const {id, user, message} = req.body;
  const newMessage = {
    id,
    user,
    message
  }
  app.locals.chat.push(newMessage);
  res.status(200).json(newMessage)
})
module.exports = app;