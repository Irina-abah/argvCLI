const { Movie, movieArr } = require("./utils/index");

const app = (args) => {
  switch (args[2]) {
    case "add":
      const movie = new Movie(args[3], args[4]);
      movie.add();
      console.log(movieArr);
      break;
    default:
      console.log("Incorrect command")
  }
}

app(process.argv);