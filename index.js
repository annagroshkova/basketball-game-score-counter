let scoreTeamOne = 0;
let scoreTeamTwo = 0;
//document.querySelector('.team__points_team-one').textContent = scoreTeamOne;
//document.querySelector('.team__points_team-two').textContent = scoreTeamTwo;


function addPointsTeamOne() {
    document.querySelectorAll('.team__add-points-button_team-one').forEach(function(element) {
        element.addEventListener('click', function() {
            let addPoints = Number(element.textContent);
            scoreTeamOne += addPoints;
            document.querySelector('.team__points_team-one').textContent = scoreTeamOne;

        })
    })
}

function addPointsTeamTwo() {
    document.querySelectorAll('.team__add-points-button_team-two').forEach(function(element) {
        element.addEventListener('click', function() {
            let addPoints = Number(element.textContent);
            scoreTeamTwo += addPoints;
            document.querySelector('.team__points_team-two').textContent = scoreTeamTwo;

        })
    })
}

addPointsTeamOne()
addPointsTeamTwo()