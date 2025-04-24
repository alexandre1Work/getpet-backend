const express = require('express');
require('./db/conn'); 
const cors = require('cors');

const app = express();

//Config JSON response
app.use(express.json());

//Solve CORS
app.use(cors({credentials : true, origin: 'http://localhost:3000'}));

//Public folder for images
app.use(express.static('public'));

//Routes
const UserRoutes = require('./routes/UserRoutes.js')
const PetRoutes = require('./routes/PetRoutes.js')

app.use('/users', UserRoutes)
app.use('/pets', PetRoutes)

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});