const RULES = {
  scissors: { win: ["paper", "lizard"], lose: ["rock", "spock"] },
  paper: { win: ["spock", "rock"], lose: ["scissors", "lizard"] },
  rock: { win: ["scissors", "lizard"], lose: ["paper", "spock"] },
  lizard: { win: ["spock", "paper"], lose: ["scissors", "rock"] },
  spock: { win: ["scissors", "rock"], lose: ["paper", "lizard"] },
};

export { RULES };
