const container = document.querySelector('.container')

let gridNo = 256;

for ( let i = 1; i <= gridNo; i++)
{
    const box = document.createElement('div')
    box.setAttribute("class", "theDiv");
    container.appendChild(box);
}


const divs = document.querySelectorAll('.theDiv')

divs.forEach((theDiv) => {
    theDiv.addEventListener("mouseover", () => {
        theDiv.style.backgroundColor = "black"
    })
})