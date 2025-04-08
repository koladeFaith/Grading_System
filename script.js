function gradeProcess() {
  let Grade = grade.value;
    if (Grade >= 70 && Grade <= 100) {
      checkGrade.innerHTML = "A - Excellent😍!"
    } else if (Grade >= 60 && Grade <= 69) {
      checkGrade.innerHTML = "B - Very Good😊!";
    } else if (Grade >= 50 && Grade <= 59) {
      checkGrade.innerHTML = "C - Good!😉";
    } else if (Grade >= 45 && Grade <= 49) {
      checkGrade.innerHTML = "D - Fair!😒";
    } else if (Grade >= 40 && Grade <= 44) {
      checkGrade.innerHTML = "E - Pass!😢";
    } else if (Grade > 0 && Grade <= 39) {
      checkGrade.innerHTML = "F - Fail!🤦";
    } else {
      checkGrade.innerHTML = "Invalid";

    }
}
