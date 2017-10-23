function basicTeenager(age) {
  return age>12 && age<20?'You are a teenager!':undefined;
}

function teenager(age) {
  if (age < 13 || age > 19) {
    return "You are not a teenager!"
  };
}

function ageChecker(age) {
  if (age <= 12) {
    return "You are a kid";
  }else if (age >= 20) {
    return "You are a grownup";

  }

}

function ternaryTeenager(age) {
  return basicTeenager(age);
}

function switchAge(age) {
  return basicTeenager(age);
}
