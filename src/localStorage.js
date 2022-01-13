import Account from "./api/Account";

const getUsers = () => JSON.parse(localStorage.getItem("member"));

const setUsers = (user) => {
  const users = Account.account();
  let arrayUsers = [];
  if (getUsers() === null) {
    arrayUsers.push(user);
    localStorage.setItem("member", JSON.stringify(arrayUsers));
  } else {
    arrayUsers.push(user, ...getUsers());
    localStorage.setItem("member", JSON.stringify(arrayUsers));
  }
};

export { getUsers, setUsers };
