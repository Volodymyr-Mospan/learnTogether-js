export default class Tamagochi {
  constructor({
    name = "noname",
    ageDays = 0,
    healthValue = 100,
    happinessValue = 100,
    satietyValue = 50,
  }) {
    this.name = name;
    this.ageDays = ageDays;
    this.healthValue = healthValue;
    this.happinessValue = happinessValue;
    this.satietyValue = satietyValue;
  }

  healthUp() {
    if (this.healthValue < 10) this.healthValue++;
  }
  happyUp() {
    if (this.happinessValue < 10) this.happinessValue++;
  }

  play() {
    this.healthValue--;
    this.happinessValue--;
    this.satietyValue--;
  }
  feedUp() {
    if (this.satietyValue < 10) this.satietyValue++;
  }
  clean() {
    this.healthUp();
  }
  shopping() {
    this.happyUp();
  }
  stateAnalyzer() {
    const isAlive =
      this.healthValue > 0 && this.happinessValue > 0 && this.satietyValue > 0;
    return isAlive ? `${this.name} is alive` : `${this.name} is dead`;
  }
}
