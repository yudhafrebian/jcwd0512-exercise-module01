let result = { win: 0, lose: 0, draw: 0 };
let suit = ["✂️ Gunting", "🪨 Batu", "📜 Kertas"];
let message = ["🎉 You are Win!", "😢 You are Lose", "⚔️ Draw"];

const gameStart = (suit: string[], UserInput) => {
  while (true) {
    const choice = suit[UserInput - 1];
    const computer = suit[Math.floor(Math.random() * 3)];

    if (UserInput === null) {
      break;
    }

    if (isNaN(UserInput) || UserInput < 1 || UserInput > 3) {
      alert("⚠️ Masukkan Angka 1, 2, atau 3!");
    } else {
      if (
        (choice === "✂️ Gunting" && computer === "📜 Kertas") ||
        (choice === "🪨 Batu" && computer === "✂️ Gunting") ||
        (choice === "📜 Kertas" && computer === "🪨 Batu")
      ) {
        alert(
          `👨‍🦰 Player ${choice} VS 🤖 Computer ${computer}\n\n${message[0]}`
        );
        result.win += 1;
      } else if (choice === computer) {
        alert(
          `👨‍🦰 Player ${choice} VS 🤖 Computer ${computer}\n\n${message[2]}`
        );
        result.draw += 1;
      } else if (
        (choice === "🪨 Batu" && computer === "📜 Kertas") ||
        (choice === "📜 Kertas" && computer === "✂️ Gunting") ||
        (choice === "✂️ Gunting" && computer === "🪨 Batu")
      ) {
        alert(
          `👨‍🦰 Player ${choice} VS 🤖 Computer ${computer}\n\n${message[1]}`
        );
        result.lose += 1;
      }
      const isContinue: boolean = confirm(" Want To Try Again?");
      if (!isContinue) {
        break;
      }
    }

    UserInput = prompt("Choose Your Weapon:\n1. GUNTING\n2. BATU\n3. KERTAS");
  }

  const totalScore: number = result.win * 25 + result.draw * 10;

  const printScore = `Win : ${result.win}\nLose : ${result.lose}\nDraw : ${result.draw}\n🏆 Total Score : ${totalScore}`;
  alert(printScore);
};

alert("🎮 Welcome To Suit Game!");

const playerChoice = prompt(
  "Choose Your Weapon Player! :\n1. GUNTING\n2. BATU\n3. KERTAS"
);
if (playerChoice === null) {
  alert("❌ Permainan Dibatalkan!");
} else {
  gameStart(suit, Number(playerChoice));
}
