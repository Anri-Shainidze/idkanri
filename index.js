const movies = [
  { title: "Inception", year: 2010 },
  { title: "Interstellar", year: 2014 },
  { title: "The Matrix", year: 1999 },
];


function getMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (movies && movies.length > 0) {
        resolve(movies);
      } else {
        reject("monacemebi ar moidzebna an carielia");
      }
    }, 2000);
  });
}


getMovies()
  .then((data) => {
    console.log("filmebis sia migebulia:");
    console.log(data);
  })
  .catch((error) => {
    console.error("shecdoma aleko:", error);
  })
  .finally(() => {
    console.log("motxovnis damushaveba migebulia");
  });
