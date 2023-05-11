function studentHogwarts() {
    let privateScore = 0;
    let name = null;

    function changeScoreby(points) {
        privateScore += points;
    }

    return {
        setName: function(newName) {
            name = newName;
        },
        rewardStudent: function() {
            changeScoreby(1);
        },
        penalizeStudent: function() {
            changeScoreby(-1);
        },
        getScore: function() {
            return `${name} : ${privateScore}`;
        },
    };
}

let harry = studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

let draco = studentHogwarts();
draco.setName("Draco");
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
