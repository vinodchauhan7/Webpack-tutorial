import { checkLettersOnly } from "./utils/validateName";
import { checkUserIdValidation } from "./utils/validateUserId";
export const main = (handleError, service) => {
  handleError.hideErrors();
  service.onClick(() => {
    var name = service.getName();
    var userId = service.getUserId();
    handleError.hideErrors();
    service.setResult("");
    if (checkLettersOnly(name) && checkUserIdValidation(userId)) {
      service.setResult(`User ${name} has userId : ${userId}`);
    } else {
      handleError.showError(name, userId);
    }
  });
};
