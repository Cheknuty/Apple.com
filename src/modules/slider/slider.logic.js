let counter = 0;

export default function sliderLogic(dir, slider, sliderControl, e) {
    const buttons = sliderControl.current.childNodes
    if (dir === "next" && counter > -10) {
        changeCouter(--counter, slider)
        moveSlider(slider, sliderControl)
        changeMarker(buttons, -counter + 1)
        runAnimation(slider)
    }

    else if (dir === "prev" && counter < 0) {
        changeCouter(++counter, slider)
        moveSlider(slider, sliderControl)
        changeMarker(buttons, -counter + 1)
        runAnimation(slider)
    }

    else if (e) {

        const clickedButton = e.target

        if (clickedButton.dataset.active) {
            changeCouter(-clickedButton.id + 1, slider)
            moveSlider(slider, sliderControl)
            changeMarker(buttons, clickedButton.id)
            runAnimation(slider)
        }

    }
}

function moveSlider(slider) {
    const width = window.visualViewport.width
    if(width >= 1440) {
        slider.current.style = `transform: translateX(${counter * 1260}px)`
    }

    else if(width < 1440 && width >= 1080) {
        slider.current.style = `transform: translateX(${counter * 990}px)`
    }

    else if(width < 1080 && width >= 800) {
        slider.current.style = `transform: translateX(${counter * 700}px)`
    }

    else if(width < 800) {
        slider.current.style = `transform: translateX(${counter * 280}px)`
    }
}

function changeMarker(buttons, postion) {
    buttons.forEach(button => {
        if (button.id == postion) {
            button.setAttribute("data-active", "true")
        }

        else {
            button.setAttribute("data-active", "false")
        }
    });
}

function changeCouter(value) {
    counter = value
}

function runAnimation(slider) {
    const slidesArray = slider.current.childNodes
    
    slidesArray.forEach(item => {
        if (item.id === slidesArray[-counter].id) item.setAttribute("data-active", "true")
        else  item.setAttribute("data-active", "false")
    })
}