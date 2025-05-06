/*In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
Recuperare la ricetta da https://dummyjson.com/recipes/{id}
Estrarre la proprietà userId dalla ricetta
Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
Restituire la data di nascita dello chef
Note del docente
Scrivi la funzione getChefBirthday(id), che deve:
Essere asincrona (async).
Utilizzare await per chiamare le API.
Restituire una Promise con la data di nascita dello chef.
Gestire gli errori con try/catch*/

// async function getJSON(url){
//     const resp = await fetch(url)
//     const obj = await resp.json()
//     return obj
// }

async function getChefBirthday(id) {

    
    let formattedData
    try {
        const resp = await fetch(`https://dummyjson.com/recipes/${id}`)
        let user = await resp.json()
        console.log(user.userId)

        const chefResponse = await fetch(`https://dummyjson.com/users/${user.userId}`)
        const chef = chefResponse.json()
        formattedData = dayjs(chef.birthDate).format('DD/MM/YYYY') 

    } catch (error) {
        console.error(`L' errore catturato è ${error}`)
    }

    return formattedData

    
}


// getChefBirthday(1)
//   .then(birthday => console.log("Data di nascita dello chef:", birthday))
//   .catch(error => console.error("Errore:", error.message));

(async () => {
    try {
        const birthday = await getChefBirthday(1)
        console.log(`La data di Nascita è: ${birthday}`)
    } catch (err){
        console.error(err)
    }
})()