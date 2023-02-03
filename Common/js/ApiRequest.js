export async function POSTREQUEST(url,method,form) {
           
           var token  = CheckAccess();
           try {
               var data = {};
               method = method.toUpperCase();
            if (method != "GET") {
                var dataInputForm = $(form).serializeArray();
             
             for (let index = 0; index < dataInputForm.length; index++) {
                data[dataInputForm[index]['name']] = dataInputForm[index]['value'] 
                }
            }
            const reponse = await fetch(url, {
                method: method,
                headers: {
                    'content-type': "application/json",
                    'Authorization': {token}
                },
                body: JSON.stringify(data)
            });
            const json = await reponse.json();
            return json;
        } catch (error) {
            throw error
        }
}

function CheckAccess() {
    var token = localStorage.getItem("token");
    if (!token) {
        return;
    }
    token = `Bearer ${token} `
    return token;
}

// if (!localStorage.getItem("token")) {
//     window.location = "http://127.0.0.1:5500/LOG/login.html"
// }
