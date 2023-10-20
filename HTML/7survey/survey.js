function submitForm() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const dob = document.getElementById("dob").value;
  const country = document.getElementById("country").value;
  const genderMale = document.getElementById("male").checked;
  const genderFemale = document.getElementById("female").checked;
  const profession = document.getElementById("profession").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  const errors = [];

  if (!firstName.match(/^[A-Za-z]+$/)) {
    errors.push("First Name should contain only alphabetic characters.");
  }
  if (!lastName.match(/^[A-Za-z]+$/)) {
    errors.push("Last Name should contain only alphabetic characters.");
  }
  if (!dob) {
    errors.push("Please enter a valid Date of Birth.");
  }
  if (!country) {
    errors.push("Please select a Country.");
  }
  if (!genderMale && !genderFemale) {
    errors.push("Please select a Gender.");
  }
  if (!profession) {
    errors.push("Please enter your Profession.");
  }
  if (!email.match(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/)) {
    errors.push("Please enter a valid Email address.");
  }
  if (!mobile.match(/^\d{10}$/)) {
    errors.push("Mobile Number should contain 10 digits.");
  }

  if (errors.length > 0) {
    alert(errors.join("\n"));
  } else {
    const formData = `
            First Name: ${firstName}
            Last Name: ${lastName}
            Date of Birth: ${dob}
            Country: ${country}
            Gender: ${genderMale ? "Male" : "Female"}
             Mobile Number: ${mobile}
            Profession: ${profession}
            Email: ${email}
           
        `;
    alert("Form Data:\n\n" + formData);
  }
}

function resetForm() {
  const form = document.getElementById("surveyForm");
  form.reset();
}
