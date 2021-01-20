document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, { edge: 'right' });
});

var cardDiv = $("#card-div");

var projectArr = [
  {
    image: 'moodconnect-home.png',
    title: "Company Site",
    subTitle: "HTML & CSS",
    description: "The MoodConnect website was built using HTML, CSS, JavaScript, and Bootstrap. The site design meets the company founder's goals for both presentation and function. It is deployed through AWS.",
    deployed: "https://www.moodconnect.com",
    code: "https://github.com/JarrettD5309/mood-connect"
  },
  {
    image: "kristina-centore.png",
    title: "Portfolio Site",
    subTitle: "HTML & CSS",
    description: "Kristina Centore's professional website and portfolio was created and is maintained by myself, Jarrett Dougherty. The site utilizes HTML, CSS, client-side JavaScript, and Bootstrap.",
    deployed: "http://kristinacentore.com/",
    code: "https://github.com/JarrettD5309/kristina-website"
  },
  {
    image: "ravenous.png",
    title: "Ravenous",
    subTitle: "React & API",
    description: "This is a React.js project from Codecademy to create a website which can search businesses by location. The app uses the Yelp API.",
    deployed: "https://ravenous-jarrett-d.herokuapp.com/",
    code: "https://github.com/JarrettD5309/ravenous"
  },
  {
    image: "sf-website.png",
    title: "Band Website",
    subTitle: "HTML & CSS",
    description: "International band's professional website and webstore. I have administered this site for 10+ years. The site has serviced hundreds of thousands of fans worldwide. The site was created with HTML, CSS and Bootstrap.",
    deployed: "http://screamingfemales.com/",
    code: "https://github.com/JarrettD5309/sf-website"
  },
  {
    image: "tennis-match.png",
    title: "TennisMatch",
    subTitle: "Full-Stack",
    description: 'TennisMatch is an interactive scheduling application that helps players to schedule tennis matches with other players. The application is built with React.js, Node.js, Express.js, and MySQL.',
    deployed: "https://tennis-match-react.herokuapp.com/",
    code: "https://github.com/greg-a/tennis-match-react"
  },
  {
    image: "google-books-mern.png",
    title: "Book Search",
    subTitle: "MERN",
    description: 'Google Books Search is a full-stack MERN application that allows users to search for and save books. The search feature utlizes the Google Books API. The application is built with React.js, Node.js, Express.js, and MongoDB.',
    deployed: "https://google-books-react-project.herokuapp.com/",
    code: "https://github.com/JarrettD5309/google-books-search"
  },
  {
    image: "clicky-game.png",
    title: "Memory Game",
    subTitle: "React.js",
    description: 'Breakbeat Hardcore Memory is a game created with React.js. The theme of the game is early 1990s Breakbeat Hardcore UK Rave music, utilizing classic 12" record labels.',
    deployed: "https://jarrettd5309.github.io/clicky-game/",
    code: "https://github.com/JarrettD5309/clicky-game"
  },
  {
    image: "mongo-scraper.png",
    title: "News Scraper",
    subTitle: "Full-Stack",
    description: "Democracy Now Scraper is a full-stack application that allows users to scrape, display, and comment on news columns. The application uses Node.js, Express.js, and Mongoose. Data persistence is achieved with a MongoDB database.",
    deployed: "https://mongo-scraper-homework-demnow.herokuapp.com/",
    code: "https://github.com/JarrettD5309/mongo-scraper"
  },
  {
    image: "same-page.png",
    title: "Same Page",
    subTitle: "Full-Stack",
    description: "Same Page is a full-stack application, created by a team, that allows users to search, recommend, and vote for books. The app uses Node.js, Express.js, and Sequelize. I was in charge of the user sign up/login process and the server routes.",
    deployed: "https://salty-garden-60237.herokuapp.com/",
    code: "https://github.com/JarrettD5309/project-2-copy"
  },
  {
    image: "burger.png",
    title: "Burger Log",
    subTitle: "Full-Stack",
    description: "Burger Log is a full-stack application which uses a simple menu interface to allow users to enter, catalog, and 'eat' hamburgers. The application uses Node.js, Express.js, a custom ORM, MySQL, Express Handlebars, and a custom CSS.",
    deployed: "https://secure-sea-97992.herokuapp.com/",
    code: "https://github.com/JarrettD5309/burger"
  },
  {
    image: "friend-finder.png",
    title: "Friend Finder",
    subTitle: "Full-Stack",
    description: "Friend Finder is a full-stack application which uses a personality quiz to match the user with a character from 'The Office'. The app uses Node.js and Express.js on the server side and HTML, Bootstrap, and jQuery on the client side.",
    deployed: "https://sheltered-plateau-99429.herokuapp.com/",
    code: "https://github.com/JarrettD5309/friend-finder"
  },
  {
    image: "inventory-app.png",
    title: "Store & Inventory",
    subTitle: "Node.js & MySQL",
    description: "Storefront and Inventory App is a Node.js CLI program that mimics an Amazon-like store, utilizing a MySQL database. The app includes three different user experiences, each with its own functionality.",
    code: "https://github.com/JarrettD5309/inventory-store"
  },
  {
    image: "liri-inquirer-app.png",
    title: "Liri Inquirer",
    subTitle: "Node.js & APIs",
    description: "Liri Inquirer App is a Node.js program which can search and return data from Spotify, Bands In Town, and OMDB using API calls. Inquirer prompts quickly allow the user to access returned data from the command line terminal.",
    code: "https://github.com/JarrettD5309/liri-inquirer"
  },
  {
    image: "liri-node-app.png",
    title: "Liri Node",
    subTitle: "Node.js & APIs",
    description: "Liri Node App is a Node.js program which can search and return data from Spotify, Bands In Town, and OMDB using API calls. The commands and returned data can easily be entered and read from a command line terminal.",
    code: "https://github.com/JarrettD5309/liri-node-app"
  },
  {
    image: "wedding-helper-app.png",
    title: "Wedding Helper",
    subTitle: "jQuery & APIs",
    description: "Prototype application developed with a team. The Wedding Helper will streamline your wedding planning utilizing Etsy and Deezer APIs to simplify registry and DJ playlist process, while sending the couple a nice message and storing the info in a database.",
    deployed: "https://bearjams.github.io/project1-repo/",
    code: "https://github.com/Bearjams/project1-repo"
  },
  {
    image: "train-schedule.png",
    title: "Train Schedule",
    subTitle: "jQuery & Firebase",
    description: "Train Schedule App is used to calculate and catalog train times. It was built with jQuery and utilizes the Materialize CSS framework. It incorporates a Firebase database for data persistence and Moment.js for real-time date/time integration.",
    deployed: "https://jarrettd5309.github.io/train-schedule/",
    code: "https://github.com/JarrettD5309/train-schedule"
  },
  {
    image: "baseball-gif-app.png",
    title: "Baseball Gif",
    subTitle: "jQuery & API",
    description: "Baseball Gif App is a web-based program used to find gifs from baseball teams. It was built with jQuery and utilizes multiple APIs.",
    deployed: "https://jarrettd5309.github.io/gif-app/",
    code: "https://github.com/JarrettD5309/gif-app"
  },
  {
    image: "punk-hangman.png",
    title: "Punk Hangman",
    subTitle: "JavaScript",
    description: 'Punk Hangman is a word guess game built with JavaScript. It incorporates a "punk" theme for visual, audio, and content presentation.',
    deployed: "https://jarrettd5309.github.io/word-guess-game/",
    code: "https://github.com/JarrettD5309/word-guess-game"
  }

]

for (var i = 0; i < projectArr.length; i++) {
  var newCol = $("<div>").addClass("col s12 m6");
  var newCard = $("<div>").addClass("card sticky-action hoverable");

  var imageDiv = $("<div>").addClass("card-image waves-effect waves-block waves-light").append($("<img>").addClass("border-bottom activator").attr("src", "assets/images/" + projectArr[i].image));
  newCard.append(imageDiv);

  var contentDiv = $("<div>").addClass("card-content")
  var titleSpan = $("<span>").addClass("card-title activator grey-text text-darken-4").html(projectArr[i].title + '<i class="material-icons right">more_vert</i>');
  contentDiv.append(titleSpan);
  var subTitlePara = $("<p>").text(projectArr[i].subTitle);
  contentDiv.append(subTitlePara);
  newCard.append(contentDiv);

  var revealDiv = $("<div>").addClass("card-reveal");
  var revealTitleSpan = $("<span>").addClass("card-title grey-text text-darken-4").html(projectArr[i].title + '<i class="material-icons right">close</i>');
  revealDiv.append(revealTitleSpan);
  var descriptionPara = $("<p>").addClass("description-text").text(projectArr[i].description);
  revealDiv.append(descriptionPara);
  newCard.append(revealDiv);

  var actionDiv = $("<div>").addClass("card-action");
  if ("deployed" in projectArr[i]) {
    var deployedAnchor = $("<a>").attr("href", projectArr[i].deployed).attr("target", "_blank").text("Deployed");
    actionDiv.append(deployedAnchor);
  }

  var codeAnchor = $("<a>").attr("href", projectArr[i].code).attr("target", "_blank").text("Code");
  actionDiv.append(codeAnchor);
  newCard.append(actionDiv);

  newCol.append(newCard);

  cardDiv.append(newCol);



}