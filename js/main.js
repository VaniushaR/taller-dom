
const domplace1 = document.getElementById("results");

const pintarNombres = (data) => {
    document.getElementById("btn").addEventListener('click', (event) => {
        let resultado = "";
        console.log(Object.values(data)[0]);
        const info = Objetc.values(data) [0];

        for (let i = 0; i < info.lenght; i++) {
            console.log(info[i].progress.javascript)
            result += `<div id="result"></div>
            <div class="card">
              <div class="info">
                <p> Nombre: $(info[i].name)</p>
                <p> Active: $(info[i].active)</p>
                <p> Progress Javascript:$(info[i].progress.javascript) </p>
                <p> Progress UX: $(info[i].progress.ux)</p>
             </div>
            </div>`
        }  
        container.innerHTML = result;
    });  
};

