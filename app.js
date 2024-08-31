const container = document.querySelector('.container')

// to make initial grid
    let gridNo = 16;
    gridSize(gridNo * gridNo)
    colorDivs()

// prompt for input user for grid size
    const sizeButton = document.querySelector('#button')
    sizeButton.addEventListener("click", () => {
        do {
            gridRemove(gridNo * gridNo)
            gridNo = prompt("Enter a grid-size ranging upto 100:");
            if (gridNo > 100 || gridNo < 1) continue;
            gridSize(gridNo * gridNo)
            colorDivs()
        } while (gridNo > 100 || gridNo < 1);
    })

// function to remove existing grids/ the divs'
    function gridRemove(grids){
        for (let i = 1; i <= grids; i++)
        {
            const box = document.querySelectorAll('.thDiv')
            const divs = document.querySelectorAll('.theDiv')

            divs.forEach((theDiv) => {
                theDiv.remove(box);
            })
        }
    }

// function to make grids/the divs` and adjust their size as well
    function gridSize (grids){
        for (let i = 1; i <= grids; i++)
        {
            // make grids
            const box = document.createElement('div')
            box.setAttribute("class", "theDiv");
            container.appendChild(box);
            
            // adjust size
            const size = Math.sqrt((960 * 960) / grids) + "px"
            const divs = document.querySelectorAll('.theDiv')
            divs.forEach((theDiv) => {
                theDiv.style.width = size
                theDiv.style.height = size
            })
        }
    }

// to add color black when mouse is hovered
    function colorDivs(){
        const divs = document.querySelectorAll('.theDiv')
        divs.forEach((theDiv) => {
            theDiv.addEventListener("mouseover", () => {
                theDiv.style.backgroundColor = "black"
            })
        })
    }