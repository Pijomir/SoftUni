function printGrade(assessment) {
    let grade = '';
    if (assessment < 3) {
        grade = 'Fail';
    } else if (assessment < 3.50) {
        grade = 'Poor';
    } else if (assessment < 4.50) {
        grade = 'Good';
    } else if (assessment < 5.5) {
        grade = 'Very good';
    } else {
        grade = 'Excellent';
    }

    console.log(assessment < 3 ? 'Fail (2)' : `${grade} (${assessment.toFixed(2)})`);
}

printGrade(2.99);