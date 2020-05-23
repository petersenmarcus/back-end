const express = require("express");
const router = express.Router();
const {check, validationResult} = require("express-validator")

const Movie = require("../../models/Movies");

// @route     Post api/movies
// @desc      Create a movie
// @access    Public

router.post("/",[
  check("name", "Name is required").not().isEmpty(),
  check("year", "Year is required").not().isEmpty(),
  check("rating", "Rating is required").not().isEmpty()
], async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

const { name, year, rating } = req.body

  try {
    const newMovie = new Movie({
      name: name,
      year: year,
      rating: rating
    })

    const movie = await newMovie.save();
    res.json(movie);


  } catch (e) {
    console.error(e.message);
    res.status(500).send("Server Error");
  }
})


module.exports = router;
