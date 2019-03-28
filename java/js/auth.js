/* sign up */
const signupButton = document.getElementById('submit-sign-up');
const signupUsername = document.getElementById('sign-up-username');
const signupEmail = document.getElementById('sign-up-email');
const signupPassword = document.getElementById('sign-up-password');

function createUser() {
    const email = signupEmail.value;
    const password = signupPassword.value;
    firebase.auth().createUserWithEmailAndPassword(email, password);
}

signupButton.onclick = createUser;