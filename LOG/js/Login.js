import { POSTREQUEST } from '../../Common/js/ApiRequest.js'
import { URL_LOGIN, URL_REGISTER } from '../../Common/js/Contanst.js'
$(".btn_log").click(function () {
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


