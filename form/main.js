let form = document.getElementById(`form`)
let firstName = document.getElementById(`firstname`)
let lastname = document.getElementById(`lastname`)
let eamil = document.getElementById(`eamil`)
let password = document.getElementById(`password`)
let matching = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
form.addEventListener(`submit`, (e) => {
    let v1 = false
    let v2 = false
    let v3 = false
    let v4 = false
    if (firstName.value == ``) {
        document.getElementById(`n`).innerHTML = `${firstName.placeholder} can't be empty`
        firstName.style.border = `1px solid red`
        firstName.oninput = function () {
            if (firstName.value !== ``) {
                document.getElementById(`n`).innerHTML = ``;
                firstName.style.border = `1px solid rgb(150, 150, 232)`
            }
        }
    } else {
        v1 = true
    }
    if (lastname.value == ``) {
        document.getElementById(`l`).innerHTML = `${lastname.placeholder} can't be empty`
        lastname.style.border = `1px solid red`
        lastname.oninput = function () {
            if (lastname.value !== ``) {
                document.getElementById(`l`).innerHTML = ``;
                lastname.style.border = `1px solid rgb(150, 150, 232)`
            }
        }
    } else {
        v2 = true
    }
    if (eamil.value.match(matching) == null) {
        document.getElementById(`e`).innerHTML = `${eamil.placeholder} is't correct!`
        eamil.style.border = `1px solid red`
        lastname.oninput = function () {
            if (eamil.value !== ``) {
                document.getElementById(`e`).innerHTML = ``;
                eamil.style.border = `1px solid rgb(150, 150, 232)`
            }
        }
    } else {
        v3 = true
    }
    if (password.value.length < 8) {
        document.getElementById(`p`).innerHTML = `${password.placeholder} must be 8 at least `
        password.style.border = `1px solid red`
        password.oninput = function () {
            if (password.value.length < 8) {
                document.getElementById(`p`).innerHTML = ``;
                password.style.border = `1px solid rgb(150, 150, 232)`
            }
        }
    } else {
        v4 = true
    }
    if (v1 === false || v2 === false || v3 === false || v4 === false) {
        e.preventDefault()
    }

})

