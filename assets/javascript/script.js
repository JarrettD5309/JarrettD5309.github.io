document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {edge:'right'});
});

var cardDiv = $("#card-div");

var projectArr = [
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

for (var i=0; i<projectArr.length; i++) {
  var newCol = $("<div>").addClass("col s12 m6");
  var newCard = $("<div>").addClass("card sticky-action hoverable");

  var imageDiv = $("<div>").addClass("card-image waves-effect waves-block waves-light").append($("<img>").addClass("border-bottom activator").attr("src", "assets/images/"+projectArr[i].image));
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
  var deployedAnchor = $("<a>").attr("href",projectArr[i].deployed).attr("target", "_blank").text("Deployed");
  actionDiv.append(deployedAnchor);
  var codeAnchor = $("<a>").attr("href",projectArr[i].code).attr("target", "_blank").text("Code");
  actionDiv.append(codeAnchor);
  newCard.append(actionDiv);

  newCol.append(newCard);

  cardDiv.append(newCol);



}