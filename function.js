const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: "Joseph" };
    user.lastName = "Osawe";
    return user;
  },
  randomStrings: (length) => {
    if (!Number.isInteger(length) || length < 0) {
      throw new Error("Length must be a non-negative integer");
    }

    const characters =
      "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-=+_/.<,>?;:'\\\"]}[{*&^%$#@!";
    const charLength = characters.length;

    const randomValues = crypto.getRandomValues(new Uint32Array(length));

    return Array.from(
      randomValues,
      (value) => characters[value % charLength],
    ).join("");
  },
  fetchUser: () =>
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .catch((error) => console.log(error)),
};

module.exports = functions;
