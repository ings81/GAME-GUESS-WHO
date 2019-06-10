var stars = 5;
var starArray = [
  {
    name: "Donald Trump",
    path:
      "https://res.cloudinary.com/inga-bacher/image/upload/v1560178976/GUESSWHO/donaldtrump_pszhaf.jpg"
  },
  {
    name: "Mickey Mouse",
    path:
      "https://res.cloudinary.com/inga-bacher/image/upload/v1560179280/GUESSWHO/mickeymouse_s7r7s2.jpg"
  },
  {
    name: "Rihanna",
    path:
      "https://res.cloudinary.com/inga-bacher/image/upload/v1560178830/GUESSWHO/rihanna_ppa7ja.jpg"
  },
  {
    name: "Lady Gaga",
    path:
      "https://res.cloudinary.com/inga-bacher/image/upload/v1560178698/GUESSWHO/ladygaga-01_htshev.jpg"
  },
  {
    name: "Eddie Murphy",
    path:
      "https://res.cloudinary.com/inga-bacher/image/upload/v1560179256/GUESSWHO/eddiemurphy_vho1a1.jpg"
  }
];

const RandomAleatoire = Math.floor(
  Math.random() * Math.floor(starArray.length)
);
const StarAleatoire = starArray[RandomAleatoire];
console.log(StarAleatoire);

// alert("you have to guess which star is it ?");
// var guess = alert("who is behind this picture?");

// for (i = 0; i < 5; i++) {
//   if (answer === guess) {
//     alert("you win !");
//   } else {
//     alert("try again !");
//   }
// }

// var game ={
//if (name = uppercase || lowercase ){
// return true;
// }
//}
