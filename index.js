// Add your code here
// fetch(destinationURL, configurationObject);
/*
const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(formData),
};

fetch("http://localhost:3000/dogs", configurationObject)
 .then(function(response) {
     return response.json();
 })
 .then(function (object) {
     console.log(object);
    })
 .catch(function (error) {
  alert("Bad things! Ragnarők!");
  console.log(error.message);
 });
*/

const formData = {
    name: "Steve",
    email: "steve@steve.com",
  };

 const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(formData),
};

 function submitData() {
     return (
         fetch("http://localhost:3000/users", configurationObject)
         .then(function(response) {
            return response.json();
        })
         .then(function (object) {
            return steveOnDOM(object);
           })
        .catch(function (err) {
         alertMsg(err);
        })
     )
 }

 function steveOnDOM(obj) {
    console.log(obj);
    let p = document.createElement("p");
    p.innerHTML = `User: ${obj.name} | Email: ${obj.email} | Id: ${obj.id}`;
    document.body.appendChild(p);
  }

  function alertMsg(err) {
    let h1 = document.createElement("h1");
    h1.innerHTML = `${err}`;
    document.body.appendChild(h1);
  }