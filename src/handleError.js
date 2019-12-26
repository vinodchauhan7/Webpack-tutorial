import { checkLettersOnly } from "./utils/validateName";
import { checkUserIdValidation } from "./utils/validateUserId";
export class HandleError {
  constructor() {
    this.errorBox = document.getElementById("error");
  }

  showError(name, userId) {
    var message = "Please add valid value for => \n ";
    if (!checkLettersOnly(name)) {
      message += `Name : ${name} must contains only characters \n`;
    }
    if (!checkUserIdValidation(userId)) {
      message += `UserId : ${userId} must contains only number`;
    }

    this.errorBox.classList.remove("invisible");
    this.errorBox.innerText = message;
  }

  hideErrors() {
    this.errorBox.classList.add("invisible");
  }
}
