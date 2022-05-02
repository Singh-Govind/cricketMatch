// write js code here corresponding to index.html
// You should add submit event on the form

var matchData = JSON.parse(localStorage.getItem("schedule")) || [];

document.querySelector("#masaiForm").addEventListener("submit", getMatchDetails);

function getMatchDetails(){
    event.preventDefault();

    data = {
        matchNum: masaiForm.matchNum.value,
        teamA: masaiForm.teamA.value,
        teamB: masaiForm.teamB.value,
        date: masaiForm.date.value,
        venue: masaiForm.venue.value
    };

    matchData.push(data);

    localStorage.setItem("schedule", JSON.stringify(matchData));

    // console.log(matchData);
}