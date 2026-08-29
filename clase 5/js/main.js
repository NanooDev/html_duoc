console.log("Hola desde js");

async function getData() {
    const elemento1 = document.getElementById("elemento1");
    console.log(elemento1);
    try {
        const response = await fetch('https://swapi.info/api/films');
        

        const ul = document.createElement("ul");

        const data = await response.json();
        console.log(data);
        for (const film of data) {
            console.log(film.title);
            const li = document.createElement("li");
            
        };

        /*
        const h1 = document.createElement("h1");
        const textoH1 = document.createTextNode(JSON.stringify(data));
        h1.appendChild(textoH1);
        console.log(h1);
        elemento1.appendChild(h1);
        */
        /*elemento1.innerHTML = JSON.stringify(data);*/
        /*elemento1.innerHTML = "<h1>" + JSON.stringify(data) + "</h1>"*/
    } catch (error) {
        console.log(error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    

    getData()

    /*
    fetch('https://swapi.info/api/').then((response) => {
        console.log(response);
        return response.json()
    }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });
    */

});


