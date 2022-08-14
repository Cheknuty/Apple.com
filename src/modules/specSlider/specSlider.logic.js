

let counter = 0

function specSliderLogic(e, ref) {
    const target = ref.current

    if(e.target.id === "info-panel") {
        const item = target.closest("li")
        
        target.dataset.active === "false" ? target.setAttribute("data-active", "true") : target.setAttribute("data-active", "false")
        item.dataset.active === "false" ? item.setAttribute("data-active", "true") : item.setAttribute("data-active", "false")
    }

    else {
        const prev = target.closest("div").querySelector("#prev")
        const next = target.closest("div").querySelector("#next")
        const obj = { prev, next }
        
        if(e.target.id === "next") {

            if(counter > -4) {
                changeCounter(--counter)
                moveSlider(ref)
                removeDisable(obj, e.target.id)

                counter === -4 && setDisable(obj, e.target.id)
            }
            
    
        }
    
        else if(e.target.id === "prev") {
            if(counter < 0) {
                changeCounter(++counter)
                moveSlider(ref)
                removeDisable(obj, e.target.id)
    
                counter === 0 && setDisable(obj, e.target.id)
            }
        }
    }

}

function changeCounter(value) {
    counter = value
}

function moveSlider(ref) {
    const target = ref.current
    const width = window.innerWidth
    console.log(width);

    if(width >= 1075) {
        target.style = `transform: translateX(${counter * 423}px)`
    }

    else if(width < 1075 && width >= 735) {
        target.style = `transform: translateX(${counter * 370}px)`
    }

    else if(width < 735) {
        target.style = `transform: translateX(${counter * 320}px)`
    }
}

function setDisable({next, prev}, dir) {
    if(dir === "next") {
        next.setAttribute("disabled", "")
    }

    else if(dir === "prev") {
        prev.setAttribute("disabled", "")
    }

}

function removeDisable({next, prev}, dir) {
    if(dir === "next") {
        prev.removeAttribute("disabled")
    }

    else if(dir === "prev") {
        next.removeAttribute("disabled")
    }
}

export default specSliderLogic