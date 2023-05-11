function createClassRoom(number) {
    function studentSeat (seat) {
        return function () {
            return seat;
        }
    }
    const students = [];
    let i;
    for (i = 0; i < number; i++) {
        students.push(studentSeat(i + 1));
    }
    return students;
}

const classRoom = createClassRoom(10);