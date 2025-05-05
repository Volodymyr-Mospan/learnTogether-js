class Tamagochi {
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
    if (this.healthValue < 100) this.healthValue++;
  }
  happyUp() {
    if (this.happinessValue < 100) this.happinessValue++;
  }
  play() {
    this.healthValue--;
    this.happinessValue--;
    this.satietyValue--;
  }
  feedUp() {
    this.satietyValue++;
  }
  clean() {
    this.healthValue++;
  }
  shopping() {
    this.happinessValue++;
  }
  stateAnalyzer() {
    if (this.healthValue > 1) console.log(`${this.name} is alive`);
  }
}
