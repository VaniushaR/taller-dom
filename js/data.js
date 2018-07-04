const url = 'https://nerdale.github.io/taller-dom/data/students.json';
window.onload = () => {
fetch(url).then((response) => {
    console.log(response)
    return response.json()
}).then ((data) => {
    console.log(data);    
    })
    .catch((error) => {
        console.log(error);
    });
}




