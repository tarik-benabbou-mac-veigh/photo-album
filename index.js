// VARIABLES :
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port = 8080;
const app = express();

// IMPORT OF ROUTES :
const albumRoutes = require('./routes/album.routes');

// SETTING :
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static('public'));

// CONNECTION WITH THE DATA BASE :
mongoose.connect('mongodb://localhost/album-archive');

// HOME PAGE : 
app.get('/', (req,res)=>{
    res.render('album', {title: 'My Album'})
});

// LINK WITH ROUTES FILE :
app.use('/', albumRoutes);

// 404 ERROR :
app.use((req,res)=>{
    res.status(404);
    res.send('-- Page non trouvée --');
});

// LAUNCH THE SERVER :
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});