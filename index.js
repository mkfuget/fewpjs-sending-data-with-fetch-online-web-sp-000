// Add your code here
function postData()
{
  let formData = {
    dogName: "Byron",
    dogBreed: "Poodle"
  };

  configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};

}
