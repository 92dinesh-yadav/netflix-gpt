

export const validateLoginForm = (email, password) => {
    const validEmail = /^[^@]+@[^@]+\.[^@]+$/.test(email);
    const validPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
    if(!validEmail) return "Invalid email address";
    if(!validPassword) return "Invalid user password";
    return null;
}

export const validateSignUpForm = (name, email, password) => {
    console.log(name);
    if(null === name || undefined === name || "" === name) return "Name should not be empty";
    return validateLoginForm(email, password)
}
