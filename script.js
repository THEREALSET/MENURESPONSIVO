let men = document.getElementById('men')
function menu() {
	if (men.style.display == `block`) {
        men.style.display = `none`
    } else {
        men.style.display = `block`
    }
}

function altel() {
    if (window.innerWidth >= 768) {
        men.style.display = `block`
    } else {
        men.style.display = `none`
    }
}