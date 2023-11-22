function findTheStudentWithMaxBonusAndAttendances(input) {
    input.shift();
    let totalNumberOfLectures = Number(input.shift());
    let additionalBonus = Number(input.shift());
    let studentsAttendances = input.map(Number);
    let mostAttendances = Math.max(...studentsAttendances);
    let totalBonus = mostAttendances / totalNumberOfLectures * (5 + additionalBonus);
    console.log(`Max Bonus: ${Math.ceil(totalNumberOfLectures === 0 ? 0 : totalBonus)}.`);
    console.log(`The student has attended ${totalNumberOfLectures === 0 ? 0 : mostAttendances} lectures.`); 
}

findTheStudentWithMaxBonusAndAttendances([
    '0', '0', '0',
    '12', '19', '25', '16', '20']);
