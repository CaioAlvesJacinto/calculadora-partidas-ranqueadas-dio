let nickName = 'Neho';
let scoreVictory = 101;
let scoreDefeat = 0;
let scoreRank = getScoreRank(scoreVictory, scoreDefeat);
let rank = getRank(scoreRank);

// O campeão Neho tem saldo de 11 e está no rank Bronze
console.log(`O campeão ${nickName} tem saldo de ${scoreRank} e está no rank ${rank}`);

function getScoreRank(scoreVictory, scoreDefeat) {
    let calcule = scoreVictory - scoreDefeat;
    return calcule;
}

function getRank(scoreRank) {
    switch (true) {
        case (scoreRank >= 11 && scoreRank <= 20):
            return 'Bronze';
        case (scoreRank >= 21 && scoreRank <= 50):
            return 'Prata';
        case (scoreRank >= 51 && scoreRank <= 80):
            return 'Ouro';
        case (scoreRank >= 81 && scoreRank <= 90):
            return 'Diamante';
        case (scoreRank >= 91 && scoreRank <= 100):
            return 'Lendário';
        case (scoreRank >= 101):
            return 'Imortal';
        default:
            return 'Ferro';
    }
}