var login = document.querySelector("#login")
var loginpost = document.querySelector("#loginpost")
var username = document.querySelector("#username")
var password = document.querySelector("#password")

login.onclick = () => {
    console.log(username.value, password.value)
    // get 前求
    fetch(`/api/login?username=${username.value}&password=${password.value}`).then(res => res.json()).then(res => {
        console.log(res)
    })
}

loginpost.onclick = () => {
    fetch(`/api/loginpost`, {
        method: "POST",
        body: JSON.stringify({
            username: username.value,
            password: password.value
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.text()).then(res => {
        console.log(res)
    })
}