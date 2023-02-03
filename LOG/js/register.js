import { POSTREQUEST } from '../../Common/js/ApiRequest.js'
import { URL_LOGIN, URL_REGISTER } from '../../Common/js/Contanst.js'

$(".logout").click(function () {
    alert("aaa")
    localStorage.removeItem("token")
    window.location = URL_LOGIN
})
  
if (!localStorage.getItem("token")) {
    window.location = URL_LOGIN
}

$(".btn_register").click(function () {
    var form = "#formlog"
    var method = "POST"
    var url = URL_LOGIN
    POSTREQUEST(url, method, form)
        .then(response => {
            window.localStorage.setItem("token", response["jwttoken"])

            window.location = URL_REGISTER
        })
        .catch(error => {
           console.log(error)
        })

})
