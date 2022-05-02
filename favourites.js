// write js code here corresponding to favourites.html

var favouritesData = JSON.parse(localStorage.getItem("favourites")) || [];

displayMatches(favouritesData);


function displayMatches(matchDetails){
    document.querySelector("tbody").innerHTML = null;

    matchDetails.forEach(function (data, index){
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

        var deleteBtn = document.createElement("td");
        deleteBtn.innerText = "Delete";
        deleteBtn.style.color = "red";
        deleteBtn.style.cursor = "pointer";
        deleteBtn.addEventListener("click", function(){
            deleteData(data, index);
        });

        row.append(mNum,teamA,teamB,date,venue,deleteBtn);
        document.querySelector("tbody").append(row);

    });
}

function deleteData(data, index){
    
    let favourites = JSON.parse(localStorage.getItem("favourites"));
    favourites.splice(index, 1);

    localStorage.setItem("favourites", JSON.stringify(favourites));

    displayMatches(favourites);
}