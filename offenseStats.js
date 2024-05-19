export function generateOffenseStats() {
    const totalYards = 100;
    const totalPlays = 100;

    const passPlays = Math.round(Math.random() * totalPlays);
    const rushPlays = totalPlays - passPlays;

    const passShort = Math.round(Math.random() * passPlays);
    const passMedium = Math.round(Math.random() * (passPlays - passShort));
    const passDeep = passPlays - passShort - passMedium;

    const passShortLeft = Math.round(Math.random() * passShort);
    const passShortMiddle = Math.round(Math.random() * (passShort - passShortLeft));
    const passShortRight = passShort - passShortLeft - passShortMiddle;

    const passMediumLeft = Math.round(Math.random() * passMedium);
    const passMediumMiddle = Math.round(Math.random() * (passMedium - passMediumLeft));
    const passMediumRight = passMedium - passMediumLeft - passMediumMiddle;

    const passDeepLeft = Math.round(Math.random() * passDeep);
    const passDeepMiddle = Math.round(Math.random() * (passDeep - passDeepLeft));
    const passDeepRight = passDeep - passDeepLeft - passDeepMiddle;

    const runLeft = Math.round(Math.random() * rushPlays);
    const runMiddle = Math.round(Math.random() * (rushPlays - runLeft));
    const runRight = rushPlays - runLeft - runMiddle;

    const passingYardsTotal = Math.round(Math.random() * totalYards);
    const rushingYardsTotal = totalYards - passingYardsTotal;

    const passingYardsShort = Math.round(Math.random() * passingYardsTotal / 3);
    const passingYardsMedium = Math.round(Math.random() * passingYardsTotal / 3);
    const passingYardsDeep = passingYardsTotal - passingYardsShort - passingYardsMedium;

    const passingYardsShortLeft = Math.round(passingYardsShort / 3);
    const passingYardsShortMiddle = Math.round(passingYardsShort / 3);
    const passingYardsShortRight = passingYardsShort - passingYardsShortLeft - passingYardsShortMiddle;

    const passingYardsMediumLeft = Math.round(passingYardsMedium / 3);
    const passingYardsMediumMiddle = Math.round(passingYardsMedium / 3);
    const passingYardsMediumRight = passingYardsMedium - passingYardsMediumLeft - passingYardsMediumMiddle;

    const passingYardsDeepLeft = Math.round(passingYardsDeep / 3);
    const passingYardsDeepMiddle = Math.round(passingYardsDeep / 3);
    const passingYardsDeepRight = passingYardsDeep - passingYardsDeepLeft - passingYardsDeepMiddle;

    const rushingYardsLeft = Math.round(Math.random() * rushingYardsTotal / 3);
    const rushingYardsMiddle = Math.round(Math.random() * rushingYardsTotal / 3);
    const rushingYardsRight = rushingYardsTotal - rushingYardsLeft - rushingYardsMiddle;

    const offenseStats = `
    <div style="display: flex; justify-content: space-between;">
    <div>
        <strong>Yards:</strong><br>
        <strong>Passing Yards Total: ${passingYardsTotal}%<br></strong>
        Short Pass Left: ${passingYardsShortLeft}%<br>
        Short Pass Middle: ${passingYardsShortMiddle}%<br>
        Short Pass Right: ${passingYardsShortRight}%<br>
        Medium Pass Left: ${passingYardsMediumLeft}%<br>
        Medium Pass Middle: ${passingYardsMediumMiddle}%<br>
        Medium Pass Right: ${passingYardsMediumRight}%<br>
        Deep Pass Left: ${passingYardsDeepLeft}%<br>
        Deep Pass Middle: ${passingYardsDeepMiddle}%<br>
        Deep Pass Right: ${passingYardsDeepRight}%<br>
        <strong>Rushing Yards Total: ${rushingYardsTotal}%<br></strong>
        Rush Left: ${rushingYardsLeft}%<br>
        Rush Middle: ${rushingYardsMiddle}%<br>
        Rush Right: ${rushingYardsRight}%
    </div>
    <div>
        <strong>Attempts:<br></strong>
        <strong>Passing Attempts Total: ${passShort+passMedium+passDeep}%<br></strong>
        Short Pass Left: ${passShortLeft}%<br>
        Short Pass Middle: ${passShortMiddle}%<br>
        Short Pass Right: ${passShortRight}%<br>
        Medium Pass Left: ${passMediumLeft}%<br>
        Medium Pass Middle: ${passMediumMiddle}%<br>
        Medium Pass Right: ${passMediumRight}%<br>
        Deep Pass Left: ${passDeepLeft}%<br>
        Deep Pass Middle: ${passDeepMiddle}%<br>
        Deep Pass Right: ${passDeepRight}%<br>
        <strong>Rushing Attempts Total: ${runLeft+runRight+runMiddle}%<br></strong>
        Run Left: ${runLeft}%<br>
        Run Middle: ${runMiddle}%<br>
        Run Right: ${runRight}%
    </div>
    </div>
    `;

    return offenseStats;
}