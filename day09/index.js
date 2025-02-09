var result = { win: 0, lose: 0, draw: 0 };
var suit = ["✂️ Gunting", "🪨 Batu", "📜 Kertas"];
var message = ["🎉 You are Win!", "😢 You are Lose", "⚔️ Draw"];
var gameStart = function (suit, UserInput) {
    while (true) {
        var choice = suit[UserInput - 1];
        var computer = suit[Math.floor(Math.random() * 3)];
        if (UserInput === null) {
            break;
        }
        if (isNaN(UserInput) || UserInput < 1 || UserInput > 3) {
            alert("⚠️ Masukkan Angka 1, 2, atau 3!");
        }
        else {
            if ((choice === "✂️ Gunting" && computer === "📜 Kertas") ||
                (choice === "🪨 Batu" && computer === "✂️ Gunting") ||
                (choice === "📜 Kertas" && computer === "🪨 Batu")) {
                alert("\uD83D\uDC68\u200D\uD83E\uDDB0 Player ".concat(choice, " VS \uD83E\uDD16 Computer ").concat(computer, "\n\n").concat(message[0]));
                result.win += 1;
            }
            else if (choice === computer) {
                alert("\uD83D\uDC68\u200D\uD83E\uDDB0 Player ".concat(choice, " VS \uD83E\uDD16 Computer ").concat(computer, "\n\n").concat(message[2]));
                result.draw += 1;
            }
            else if ((choice === "🪨 Batu" && computer === "📜 Kertas") ||
                (choice === "📜 Kertas" && computer === "✂️ Gunting") ||
                (choice === "✂️ Gunting" && computer === "🪨 Batu")) {
                alert("\uD83D\uDC68\u200D\uD83E\uDDB0 Player ".concat(choice, " VS \uD83E\uDD16 Computer ").concat(computer, "\n\n").concat(message[1]));
                result.lose += 1;
            }
            var isContinue = confirm(" Want To Try Again?");
            if (!isContinue) {
                break;
            }
        }
        UserInput = prompt("Choose Your Weapon:\n1. GUNTING\n2. BATU\n3. KERTAS");
    }
    var totalScore = result.win * 25 + result.draw * 10;
    var printScore = "Win : ".concat(result.win, "\nLose : ").concat(result.lose, "\nDraw : ").concat(result.draw, "\n\uD83C\uDFC6 Total Score : ").concat(totalScore);
    alert(printScore);
};
alert("🎮 Welcome To Suit Game!");
var playerChoice = prompt("Choose Your Weapon Player! :\n1. GUNTING\n2. BATU\n3. KERTAS");
if (playerChoice === null) {
    alert("❌ Permainan Dibatalkan!");
}
else {
    gameStart(suit, Number(playerChoice));
}
