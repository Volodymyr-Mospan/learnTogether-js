import Tamagochi from "./Tamagochi.js";

const tam1 = new Tamagochi({
  name: `Poco`,
  ageDays: 5,
  healthValue: 3,
  happinessValue: 4,
  satietyValue: 5,
});
const tam2 = new Tamagochi({
  name: "Kuka",
  ageDays: 2,
  healthValue: 2,
  happinessValue: 2,
  satietyValue: 2,
});
const tam3 = new Tamagochi({
  name: "Rock",
  ageDays: 10,
  healthValue: 5,
  happinessValue: 5,
  satietyValue: 1,
});

tam1.play();
tam1.feedUp();
tam1.shopping();
tam1.clean();
console.log(tam1.stateAnalyzer());

tam2.play();
tam2.play();
tam2.clean();
tam2.feedUp();
console.log(tam2.stateAnalyzer());

tam3.play();
tam3.play();
tam3.play();
console.log(tam3.stateAnalyzer());
