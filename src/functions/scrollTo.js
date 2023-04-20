
export function scrollTo(idName) {
    const id = '#'+idName
    const targetPage = document.querySelector(id)
    //console.log(targetPage)
    targetPage.scrollIntoView({behavior: 'smooth',block: 'start', inline: "nearest"})
}