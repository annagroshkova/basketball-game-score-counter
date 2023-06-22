let teamOneButtons = document.querySelectorAll('.team__add-points-button_team-one');
let teamTwoButtons = document.querySelectorAll('.team__add-points-button_team-two');

let teamOne = document.querySelector('.team__points_team-one');
let teamTwo = document.querySelector('.team__points_team-two');

let scoreTeamOne = 0;
let scoreTeamTwo = 0;



function addPoints(addScoreButton, teamScore, team) {
    addScoreButton.forEach(function(element) {
        element.addEventListener('click', function() {
            let addPoints = Number(element.textContent);
            teamScore += addPoints;
            team.textContent = teamScore;
        })
    })
}

addPoints(teamOneButtons, scoreTeamOne, teamOne)
addPoints(teamTwoButtons, scoreTeamTwo, teamTwo)