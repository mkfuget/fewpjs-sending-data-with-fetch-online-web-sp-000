// Add your code here
function submitData(name, email)
{
  const formData = {
    name: name,
    email: email
  };
  const body = document.querySelector('body')
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
      body.appendChild(createTextNode(object));
    })
    .catch(function(error) {
      alert("Bad things! Ragnarok!");
      console.log(error.message);
    })


}
