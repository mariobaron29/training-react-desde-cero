axios.get("https://jsonplaceholder.typicode.com/users/1").then(({data}) => {document.write(data.username)});