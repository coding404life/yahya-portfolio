const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const {
    render
} = require('ejs');

// init express <3
const app = express();

// middlewares
app.set('view engine', 'ejs') //register view engine to change the default folder for views app.set('views', 'myviews')
app.use(express.static('dist')) // middleware static files
app.use(morgan('dev')); // to see logger requests in propar format
app.use(express.urlencoded({
    extended: true
})); // look at requests accepting form data
// ----------------------------------------------------------------

// render home page
app.get('/', (req, res) => {
    res.render('index');
});

// render blog page
app.get('/blog', (req, res) => {
    res.render('blog');
});

// render contact us page
app.get('/contact', (req, res) => {
    res.render('contact');
});

//render services 
app.get('/services', (req, res) => {
    res.render('services');
});

// start render portfolio pages *********
app.get('/portfolio', (req, res) => {
    res.render('portfolio');
})

// render resturant project
app.get('/portfolio/resturant-project', (req, res) => {
    res.render('portfolio-projects/resturant');
})



// end render portfolio pages *********

// render 404 page
app.use((req, res) => {
    res.status(404).render('404');
});

//listen to port
console.log('conntected');
app.listen('3005');