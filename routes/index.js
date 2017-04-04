var express = require('express');
var router = express.Router();
var request = require('request')
var config = require('../config/config.js')

/* GET home page. */

router.get('/', (req, res, next) =>{
    request.get(config.baseUrl + config.nowPlayingEP + config.api_key, (err, response, movieData)=>{
        movieData = JSON.parse(movieData);
        res.render('index', {
            movieDataArray: movieData,
            imageUrl: config.imageBase
        })
    })
});

router.post('/searchMovie', function(req, res, next){
	// req.body is where the posted data goes
	var searchString = encodeURI(req.body.movieSearch)
	var queryUrl = config.baseUrl + 'search/movie?' + config.api_key +'&query=' + searchString;

	request.get(queryUrl, (err, response, searchData)=>{
		searchData = JSON.parse(searchData)
		res.render('index', {
			movieDataArray: searchData,
			imageUrl: config.imageBase
		})
	})

	// res.json(req.body)
	// res.send("Test")
})
router.get('/search', (req, res, next)=>{
    res.render('search', {} );
});

router.get('/movie/:moviId', (req,res,next)=>{
	var url = config.baseurl+'/movie' + req.params.movieId + 
})
router.get('/searchMovie', (req,res,next)=>{
	res.send('haha, im a GET route')
})

router.get('/bradPitt', (req, res, next) =>{
    request.get(config.baseUrl + config.bpMovies11 + config.api_key, (err, response, movieData)=>{
        movieData = JSON.parse(movieData);
        res.render('index', {
            movieDataArray: movieData,
            imageUrl: config.imageBase
        })
    })
});

module.exports = router;
