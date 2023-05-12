import "./style.css"
// - When form is submitted create a element on the page that displays the contents of the input fields
// - If submission fails: Show an alert or a error message in the form.

// 1. Create a form with one text box and submit button. You can only submit the form if minimum 2 chars are entered in text box
// 2. Add one pair of radio buttons ( Male ,female ) , the form can't be submitted without selection of radio button.
// 3. Add one dropdown list box with option to select one animal. One animal must be selected before submitting the form.
// 4. One checkbox must be checked before submitting the form
// 5. One textarea must be filled with minimum 50 chars

const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const formData = Object.fromEntries(new FormData(form))
  console.log(formData)
  const error = document.getElementById("error")

  // Check for validation errors
  if (formData.name.length < 2) {
    error.innerText = "The name field needs to have at least 2 character"
    return
  }

  if (!formData.gender) {
    error.innerText = "Please select a gender"
    return
  }

  if (formData.description.length < 50) {
    error.innerText =
      "The description field needs to have at least 50 character"
    return
  }

  if (!formData.agree) {
    error.innerText = "Please agree to the terms"
    return
  }

  const content = document.getElementById("form-content")
  error.innerText = ""
  content.innerText = JSON.stringify(formData, null, 8)
})
