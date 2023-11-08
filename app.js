import express from 'express';
import http from 'http';
import routes from './routes/routes.js';


const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', routes);

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});