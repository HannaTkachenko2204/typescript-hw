// function createOrUpdateUser(initialValues: User) {
//   // Оновлення користувача
// }

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  // Partial<User> означає, що всі властивості User є необов'язковими
  // Оновлення користувача
  const defaultUser: User = {
    name: "Hanna",
    surname: "Tkachenko",
    email: "",
    password: "",
  };
  return { ...defaultUser, ...initialValues };
}

//оновлюються лише ті поля, які передані у initialValues
createOrUpdateUser({
  email: "hanna.tkachenko@mail.com",
  password: "hanna123",
});
