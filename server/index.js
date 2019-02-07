const express = require ('express');
const bodyParser = require ('body-parser');
const ctrl = require('./controllers/messages_controller');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'))
app.post('/api/messages',ctrl.create)

app.get('/api/messages', ctrl.read)

app.put('/api/messages/:id', ctrl.update)

app.delete('/api/messages/:id', ctrl.delete)

const port = 3001
app.listen(port, ()=> console.log(`Server is running on port ${port}`))