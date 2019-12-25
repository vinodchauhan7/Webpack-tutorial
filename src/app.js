const getName = document.getElementById("name");
const getUserId = document.getElementById("userId");
const registerButton = document.getElementById("register");
const getResult = document.getElementById("result");
const errorBox = document.getElementById("error");

const checkLettersOnly = input => {
  if (/^[a-zA-Z]+$/.test(input)) {
    return true;
  }
  return false;
};

const parseInput = input => {
  return parseInt(input);
};

const checkUserIdValidation = input => {
  console.log(input);
  console.log(typeof parseInt(input) === "number" && !isNaN(input));
  return typeof parseInt(input) === "number" && !isNaN(input);
};

const hideErrors = () => {
  errorBox.classList.add("invisible");
};

hideErrors();

const handleError = (name, userId) => {
  var message = "Please add valid value for => \n ";
  if (!checkLettersOnly(name)) {
    message += `Name : ${name} must contains only characters \n`;
  }
  if (!checkUserIdValidation(getUserId.value)) {
    message += `UserId : ${userId} must contains only number`;
  }

  errorBox.classList.remove("invisible");
  errorBox.innerText = message;
};

registerButton.addEventListener("click", () => {
  var name = getName.value;
  var userId = getUserId.value;
  hideErrors();
  getResult.innerText = "";
  if (checkLettersOnly(name) && checkUserIdValidation(userId)) {
    getResult.innerText = `User ${name} has userId : ${userId}`;
  } else {
    handleError(name, userId);
  }
});
