import { determineThreatLevels } from './defensiveThreatLevels.js';

export function generateScenario() {
    const down = Math.floor(Math.random() * 4) + 1;
    const distance = Math.floor(Math.random() * 10) + 1;
    const minutes = Math.floor(Math.random() * 60);
    const seconds = Math.floor(Math.random() * 60);
    const offenseScore = Math.floor(Math.random() * 50);
    const defenseScore = Math.floor(Math.random() * 50);
    const fieldPosition = Math.floor(Math.random() * 101);

    const gameState = {
        offenseScore: offenseScore,
        defenseScore: defenseScore,
        minutes: minutes,
        seconds: seconds,
        fieldPosition: fieldPosition
    };


    const scenario = `
        Down: ${down}<br>
        Distance: ${distance}<br>
        Field Position: ${fieldPosition}<br>
        Time Left: ${minutes}:${seconds}<br>
        Offense Score: ${offenseScore}<br>
        Defense Score: ${defenseScore}<br>
    `;

    // Return an object that includes the scenario string and the time
    return {
        scenario: scenario,
        gameState: gameState
    };
}