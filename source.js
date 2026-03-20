

document.addEventListener('DOMContentLoaded', () => {
    const sourceLevels = ['Low', 'Average', 'High', 'Very High'];    // Based on AAAC Guidelines Table 5
    const toleranceLevels = ['Very Low', 'Low', 'Medium', 'High'];   // Based on AAAC Guidelines Table 5

    const table4SoundRatings = {   // 'Source Room Activity, Noise Tolerance in Receiving Room' : Dw Value
        'Low, High' : 30,
        'Average, High' : 35,
        'High, High' : 40,
        'Very High, High' : 45,

        'Low, Medium' : 35,
        'Average, Medium' : 40,
        'High, Medium' : 45,
        'Very High, Medium' : 50,

        'Low, Low' : 40,
        'Average, Low' : 45,
        'High, Low' : 50,
        'Very High, Low' : 55,

        'Low, Very Low' : 45,
        'Average, Very Low' : 50,
        'High, Very Low' : 55,
        'Very High, Very Low' : 60,
    }

    const spaceSourceToleranceLevels = {   // 'Space' : 'Source Room Activity, Noise Tolerance in Receiving Room'
        'Board and Conference Rooms' : 'High, Very Low',
        'Cafeterias' : 'Very High, High',
        'Call Centres (Average Activity Level)' : 'Average, Low',
        'Call Centres (High Activity Level)' : 'High, Medium',
        'Computer (Server) Rooms (Medium Tolerance)' : 'High, Medium',
        'Computer (Server) Rooms (High Tolerance)' : 'High, High',
        'Corridors and Lobbies' : 'Average, High',
        'Design Offices' : 'Average, Low',
        'Drafting Offices' : 'Average, Low',
        'General Office Areas' : 'Average, Medium',
        'Private Offices' : 'Low, Low',
        'Public Spaces' : 'Average, High',
        'Reception Areas' : 'Average, Medium',
        'Rest Rooms and Tea Rooms' : 'High, High',
        'Toilets' : 'Average, High',
        'Undercover Car Parks' : 'Very High, High'
    }

    let space1Dropdown = document.getElementById('spaceSelector1');
    let space2Dropdown = document.getElementById('spaceSelector2');
    let resultBox = document.getElementById('dwInput');
    let space1Value;
    let space2Value;
    let space1Dw;
    let space2Dw;
    let maxDw;



    function getDwValue() {    // This function will perform the lookup from table 4.
        // Get selected spaces
        space1Value = space1Dropdown.value;
        space2Value = space2Dropdown.value;

        // Lookup Dw Values
        space1Dw = table4SoundRatings[spaceSourceToleranceLevels[space1Value]];
        space2Dw = table4SoundRatings[spaceSourceToleranceLevels[space2Value]];

        // Calculate max Dw Value
        maxDw = Math.max(space1Dw, space2Dw);

        // Output to text box
        resultBox.value = maxDw;

        // Debug
        console.log("Space 1 Source/Tolerance Level: " + spaceSourceToleranceLevels[space1Value])
        console.log("Space 2 Source/Tolerance Level: " + spaceSourceToleranceLevels[space2Value])
        console.log("Space 1 Dw Value: " + space1Dw);
        console.log("Space 2 Dw Value: " + space2Dw);
        console.log("Max Dw: " + maxDw);
    }

    // Event listeners
    space1Dropdown.addEventListener('change', () => getDwValue(space1Dropdown,space2Dropdown));
    space2Dropdown.addEventListener('change', () => getDwValue(space1Dropdown,space2Dropdown));

})