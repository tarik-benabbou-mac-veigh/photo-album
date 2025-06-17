// VARIABLES :
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port = 8080;
const app = express();

// SETTING :
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static('public'));

// HOME PAGE : 
app.get('/', (req,res)=>{
    res.send('Home page');
});

// 404 ERROR :
app.use((req,res)=>{
    res.status(404);
    res.send('-- Page non trouvée --');
});

// LAUNCH THE SERVER :
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});