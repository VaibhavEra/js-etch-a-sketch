const container = document.querySelector('.container')

// to make initial grid
    let gridNo = 16;
    gridSize(gridNo * gridNo)
    colorDivs()

// prompt for user-input for grid size
    const sizeButton = document.querySelector('#button')
    sizeButton.addEventListener("click", () => {
        do {
            gridRemove(gridNo * gridNo)
            gridNo = prompt("Enter an integer for no. of grids per side:");
            if (gridNo > 100 || gridNo < 1 || !Number.isInteger(gridNo))
                {
                    alert("The value should range from 1 to 100\nAnd it should be an INTEGER!")
                    continue;
                }
            gridSize(gridNo * gridNo)
            colorDivs()
        } while (gridNo > 100 || gridNo < 1 || !Number.isInteger(gridNo));
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

// function to make grids/the divs'
    function gridSize (grids){
        for (let i = 1; i <= grids; i++)
        {
            // make grids
            const box = document.createElement('div')
            box.setAttribute("class", "theDiv");
            container.appendChild(box);
        }
        gridAdjust()
    }

// function to adjust size of the grids
    function gridAdjust(){
        const size = Math.sqrt((600 * 600) / (gridNo * gridNo)) + "px"
        const divs = document.querySelectorAll('.theDiv')
        divs.forEach((theDiv) => {
            theDiv.style.width = size
            theDiv.style.height = size
        })
    }
    
// to add color and darken when mouse is hovered
    function colorDivs(){
        const divs = document.querySelectorAll('.theDiv')
        divs.forEach((theDiv) => {
            theDiv.addEventListener("mouseover", () => {
                theDiv.style.backgroundColor = randomRgb()

                theDiv.style.opacity -= '-0.1'
                let currentBrightness = theDiv.dataset.brightness || 100;
                currentBrightness = parseInt(currentBrightness) - 10;
                if (currentBrightness >= 0) {
                    theDiv.style.filter = `brightness(${currentBrightness}%)`;
                    theDiv.dataset.brightness = currentBrightness;
                }
            })
        })
    }
    
// to add random color
    function randomRgb()
    {
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        const rgb = "rgb("+ r + ", " + g + ", " + b + ")"; // Collect all to a css color string
        return rgb;
    }