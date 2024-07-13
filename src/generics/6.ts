type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реалізуйте Params так, щоб унеможливити поле 'errors' з типу Form
// type Params = Form;

//Omit<Form, 'errors'> створює новий тип Params, який містить усі поля з Form, крім поля errors
type Params = Omit<Form, "errors">;
