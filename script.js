/*------------------------*/
/* Get Dom Elements       */
/*------------------------*/

const form = document.getElementById("form");
const inputEmail = document.getElementById("email");
const submitButton = document.getElementById("submit");

/*------------------------*/
/*  Functions             */
/*------------------------*/
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const handleSubmit = () => {
  const isValid = validateEmail(inputEmail.value);
  if (!isValid) {
    form.classList.add("error");
  } else {
    form.classList.remove("error");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit();
});
