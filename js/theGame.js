const userName = document.getElementById("name");

if (sessionStorage.getItem("username") != null) {
    
    let user = sessionStorage.getItem("username");
    userName.innerHTML = user.slice(1, user.length - 1);
};

const input = document.querySelectorAll("input");

input.forEach((e) => {
    e.addEventListener("click",() => {
        if(e.checked){
            e.parentNode.style.display = "none";
        }
        
        console.log(e.labels[0].innerHTML); 
        res(check(e.labels[0].innerHTML));
    }) 
})


function check(text) {
    if (text === "اللون الابيض") {
        return `متفائل`
    }else if(text === "اللون الاسود"){
        return `محب للهدوء`
    }

    else if (text === "البقاء بدون نوم"){
        return `مفكر`
    }else if(text === "البقاء بدون اكل"){
        return `عملى`
    }

    else if(text === "تسافر باريس لمدة اسبوع وحيدا"){
        return `لا تثق فى احد`
    }else if (text === "ان تقضي شهر مع واحد فقط من معارفك على جزيرة معزولة"){
        return `تخاف من الوحده`
    }

    else if(text === "تمتلك القدرة على التحكم فى الحظ والاحتمالات"){
        return `مغامر`;
    }else if(text === "تمتلك القدرة على التحكم فى العقول"){
        return `قيادى`;
    }

    else if(text === "ان تعرف سبب وفاتك"){
        return `حذر`;
    }else if(text === "ان تعرف موعد وفاتك"){
        return `قلق`;
    }
}

const header = document.getElementById("nav");
const con = document.querySelector(".content");
const final = document.getElementById("final");
let result = document.createElement("p");


final.onclick = () => {
    header.innerHTML = "صفاتك هى :"
    result.style.display = "flex";
    final.style.display = "none";
    con.innerHTML = "";
    con.appendChild(result);
}
result.style.cssText = "width:100%; height: 90vh; background-color: #001; display:none ;align-items: center;justify-content: center;font-size: 50px;color: orange";

function res(text) {
    result.innerHTML += `${text} `
    document.body.appendChild(result)
}