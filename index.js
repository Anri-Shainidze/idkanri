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
        reject("მონაცემები არ მოიძებნა ან ცარიელია");
      }
    }, 2000);
  });
}


getMovies()
  .then((data) => {
    console.log("ფილმების სია მიღებულია:");
    console.log(data);
  })
  .catch((error) => {
    console.error("შეცდომა:", error);
  })
  .finally(() => {
    console.log("მოთხოვნის დამუშავება დასრულებულია.");
  });
