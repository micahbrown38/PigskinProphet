// defensiveThreatLevels.js

function determineGoalLineThreatLevel(fieldPosition) {
    let threatLevel;

    if (fieldPosition >= 98) {
        threatLevel = "Insane Threat";
    } else if (fieldPosition >= 95) {
        threatLevel = "Extreme Threat";
    } else {
        threatLevel = "Low Threat";
    }

    return threatLevel;
}

export function determineThreatLevels(minutes, seconds, gameState) {
    const totalTimeInMinutes = minutes + (seconds / 60);
    let timeThreatLevel;

    if (totalTimeInMinutes < .2 && gameState.offenseScore < gameState.defenseScore) {
        timeThreatLevel = "Insane Threat";
    } else if (totalTimeInMinutes < 2 && gameState.offenseScore < gameState.defenseScore) {
        timeThreatLevel = "Extreme Threat";
    } else if (totalTimeInMinutes < 5 && gameState.offenseScore < gameState.defenseScore) {
        timeThreatLevel = "High Threat";
    } else {
        timeThreatLevel = "Low Threat";
    }

    const goalLineThreatLevel = determineGoalLineThreatLevel(gameState.fieldPosition);

    const defenseThreatLevels = `
        <div>
            <strong>Time Threat Level:</strong> ${timeThreatLevel}<br>
            <strong>Goal Line Threat Level:</strong> ${goalLineThreatLevel}<br>
        </div>
    `;

    return defenseThreatLevels;
}