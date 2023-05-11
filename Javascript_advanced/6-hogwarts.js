function studentHogwarts () {
    
    let privatescore = 0;
    let name = null;

    function changeScoreBy (points){
         privatescore += points;
    }

    return {
        setName(newName) {
            name = newName;
        },
        rewardStudent() {
            changeScoreBy(1);
        },
        penalizeStudent() {
            changeScoreBy(-1);
        },
        getScore() {
            return `${name}: ${privatescore}`
        },
    }
}

var harry = studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

var draco = studentHogwarts();
draco.setName("Draco");
draco.rewardStudent(1);
draco.penalizeStudent(3);
draco.penalizeStudent(3);
draco.penalizeStudent(3);
console.log(draco.getScore());

