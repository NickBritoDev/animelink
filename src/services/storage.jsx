//buscar os links salvos
export async function getLinksave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSave = JSON.parse(myLinks) || []

    return linksSave
}

//salvar o link em local storage
export async function saveLink(key, newLink){
    let linksStored = await getLinksave(key)


    //se já tiver um link salvo com um id não duplicar 
    const hasLink = linksStored.some(link => link.id === newLink.id)

    if (hasLink){
        console.log("esse link já existe")
        return
    }

    //adicionar novo link
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored) )
    console.log("link salvo com sucesso")
}

//deletar um link do banco de dados
export function deleteLink(links, id){
    let myLinks = links.filter(item => {
        return(item.id !== id)
    })

    localStorage.setItem('@animelink', JSON.stringify(myLinks))
    alert('Link deletado com sucesso')

    return myLinks
}