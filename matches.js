// write js code here corresponding to matches.html

var matchData = JSON.parse(localStorage.getItem("schedule")) || [];

displayMatches(matchData);

function displayMatches(matchDetails){
    document.querySelector("tbody").innerHTML = null;

    matchDetails.forEach(function (data){
        var row = document.createElement("tr");

        var mNum = document.createElement("td");
        mNum.innerText = data.matchNum;

        var teamA = document.createElement("td");
        teamA.innerText = data.teamA;

        var teamB = document.createElement("td");
        teamB.innerText = data.teamB;

        var date = document.createElement("td");
        date.innerText = data.date;

        var venue = document.createElement("td");
        venue.innerHTML = data.venue;

        var favourite = document.createElement("td");
        favourite.innerText = "Favourites";
        favourite.style.color = "green";
        favourite.style.cursor = "pointer";
        favourite.addEventListener("click", function(){
            addToFavourite(data);
        });

        row.append(mNum,teamA,teamB,date,venue,favourite);
        document.querySelector("tbody").append(row);

    });


    function addToFavourite(data){
       var favourite = JSON.parse(localStorage.getItem("favourites")) || [];

       favourite.push(data);
       localStorage.setItem("favourites", JSON.stringify(favourite));
    }

    document.querySelector("#filterVenue").addEventListener("change", filterData);

    function filterData(){
        var filterBy = document.querySelector("#filterVenue").value;

        var filteredData = matchData.filter(function(el){
            return el.venue == filterBy;
        })

        displayMatches(filteredData);
    }
}