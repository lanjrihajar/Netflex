async function getData(url){
    let res = await fetch(url);
    return res.json();
}
let btn = document.querySelector('button')
let input = document.querySelector('input')
let error = document.querySelector('span')

btn.addEventListener('click', ()=>{
    if (input.value.length > 0) {
        getData("https://api.watchmode.com/v1/sources/?apiKey=RXnibDhDTacGWiE349ruwDd9loWC6FHMsmfxeyEb "+ input.value).then((data)=>{
            console.log(data)
            
        })
    } else {
        error.innerText = "Le champ est obligatoire"
        setTimeout(() => {
            error.innerText = ""
        }, 2000);
    }
})