class User {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short.");
      return;
    }
    this._name = value;
  }
}

let user1 = new  User("Saurav");
console.log(user1.name); // Saurav

user1 = new User("") // Name is too short.