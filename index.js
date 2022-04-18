const express = require('express');

const { ServerConfig}  = require('./config/generalConfig');

const UsersRoute = require('./routes/usuarios');

const app = express();


app.get('/api/help', (req, res) => {
    res.send('Hola!')
});

app.use('/api/usuarios', UsersRoute);

app.listen(ServerConfig.port, () => {
    console.log(`Example app listening at http://localhost:${ServerConfig.port}`)
});
