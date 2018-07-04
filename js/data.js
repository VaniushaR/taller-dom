const url = 'https://nerdale.github.io/taller-dom/data/students.json';

window.onload = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        renderInfo(data);
    })
    .catch(error => {
        console.log('error');
    })
}
