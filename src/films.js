// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {

  const resultDirectors = array.map(array => array.director)

  console.log("EXERCICE 1 ->", resultDirectors);
  return resultDirectors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  const resultMoviesFromDirector = array.filter(object => object.director === director)
  console.log("EXERCICE 2 ->", resultMoviesFromDirector);
  return resultMoviesFromDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const resultMoviesFromDirector = array.filter(object => (object.director === director))


  console.log(resultMoviesFromDirector)
  const resultMoviesAverageOfDirector = resultMoviesFromDirector.reduce((average, movieRate) => average + movieRate.score, 0)
  return Number((resultMoviesAverageOfDirector / resultMoviesFromDirector.length).toFixed(2))
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  if (array.length < 20) {
    return array.map(movie => movie.title).sort()
  }
  return array.map(movie => movie.title).sort().splice(0, 20);


}
// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const cloneArray = [...array].sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    };
    if (a.year < b.year) {
      return -1;
    };
    if (a.year === b.year)
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      }


  })

  return cloneArray;

  console.log(cloneArray)
  console.log(array)
  


}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {



}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
