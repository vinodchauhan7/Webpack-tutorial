export class Service {
  constructor() {
    this.name = document.getElementById("name");
    this.userId = document.getElementById("userId");
    this.registerButton = document.getElementById("register");
    this.result = document.getElementById("result");
  }

  getName() {
    return this.name.value;
  }

  getUserId() {
    return this.userId.value;
  }

  setResult(str) {
    this.result.innerText = str;
  }

  onClick(cb) {
    this.registerButton.addEventListener("click", cb);
  }
}
