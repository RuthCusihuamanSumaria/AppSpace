const url= "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=15";

/** async y await  */
async function listaImagenes(){
    try{
        //creacion de una variable
        let fetchImagen = await fetch(url);
        let datosImagenes = await fetchImagen.json();

        const card= document.querySelector("[data-ul]");

        datosImagenes.forEach(elemento => {
            const contenido = `<li class="card">
                    <img class="card__image" src="${elemento.url}" alt="imagen">
                    <h3 class="card__title">${elemento.title}</h3>
                </li>`
                card.innerHTML=card.innerHTML+ contenido;//innerHtml sustituye elñ elemento

        })
    

    }
    catch(error){
        console.log(error);
    }

}
listaImagenes();
/*
//then y catch
function listaImagenes(){
    //una fetch retorna una promise then(resuela) catch(rechazada)
    fetch(url)
    .then(response => response.json())
    .then(datosImagenes=> {
        console.log(datosImagenes);

        const card= document.querySelector("[data-ul]");

        datosImagenes.forEach(elemento => {
            const contenido = `<li class="card">
                    <img class="card__image" src="${elemento.url}" alt="imagen">
                    <h3 class="card__title">${elemento.title}</h3>
                </li>`
                card.innerHTML=card.innerHTML+ contenido;//innerHtml sustituye elñ elemento

        })
    })

    .catch(error => console.log(error) );

}
 listaImagenes();
*/

//estructura de una promise
/*
const solicitud = new Promise((resolve, reject)=>{
    const response="resolve";

})
    */