// offensePlayerStats.js

export function generateOffensePlayerStats() {
    let remainingPercentage = 100;
    let receiverStats = [];

    for (let i = 1; i <= 5; i++) {
        let receiverPercentage;

        if (i === 5) {
            receiverPercentage = remainingPercentage;
        } else {
            receiverPercentage = Math.floor(Math.random() * remainingPercentage);
            remainingPercentage -= receiverPercentage;
        }

        receiverStats.push(`Receiver ${i}: ${receiverPercentage}%`);
    }

    return receiverStats.join('<br>');
}