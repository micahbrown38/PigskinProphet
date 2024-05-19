import { generateScenario } from './scenarioGenerator.js';
import { generateOffenseStats } from './offenseStats.js';
import { generateOffensePlayerStats } from './offensePlayerStats.js';
import { determineThreatLevels } from './defensiveThreatLevels.js';

let currentScenario;

document.getElementById('generate').addEventListener('click', function() {
    currentScenario = generateScenario();
    document.getElementById('scenario').innerHTML = currentScenario.scenario;
});

// Generate an initial scenario and offense stats when the page loads
currentScenario = generateScenario();
document.getElementById('scenario').innerHTML = currentScenario.scenario;
document.getElementById('offenseStats').innerHTML = generateOffenseStats();

document.getElementById('generateOffenseStatsButton').addEventListener('click', function() {
    document.getElementById('offenseStats').innerHTML = generateOffenseStats();
});

document.getElementById('offensePlayerStats').innerHTML = generateOffensePlayerStats();

document.getElementById('generateOffensePlayerStatsButton').addEventListener('click', function() {
    document.getElementById('offensePlayerStats').innerHTML = generateOffensePlayerStats();
});

document.getElementById('generateDefenseThreatsButton').addEventListener('click', function() {
    const defenseThreatLevels = determineThreatLevels(currentScenario.gameState.minutes, currentScenario.gameState.seconds, currentScenario.gameState);
    document.getElementById('defenseThreatLevels').innerHTML = defenseThreatLevels;
});