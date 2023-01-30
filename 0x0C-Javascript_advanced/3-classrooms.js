function createClassroom (number) {
    function studentSeat (seat) {
        return function () {
            return seat;
        }
    }
    const students = [];
    for (let i = 0; i < number; i++) {
        students.push(studentSeat(i + 1));
    }
    return students;
}

const classRoom = createClassroom(10);
