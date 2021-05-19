const endpoint = "https://jsonplaceholder.typicode.com/users/1"; 

fetch(endpoint).then((response) => {
   return response.json();
}).then((data) => {
    document.write(data.name);
})