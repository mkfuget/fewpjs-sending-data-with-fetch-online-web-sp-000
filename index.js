// Add your code here
function submitData(name, email)
{
  const formData = {
    name: name,
    email: email
  };
  const body = document.querySelector('body')
  const h1 = document.createElement("h1");

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
  fetch("http://localhost:3000/users", configurationObject)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object.id)
      h1.innerHTML = object.id
      body.appendChild(h1);
    })
    .catch(function(error) {
      h1.innerHTML = error.message
      body.appendChild(h1);
    })


}
