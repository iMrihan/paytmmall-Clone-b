// import { selectAddress } from "../components/addressComponents";
let allAddresses = [];
function saveAddress(){
    let Address = {
        name : myForm.fName.value,
        firstAdd : myForm.add1.value,
        secondAdd : myForm.add2.value,
        mobile : myForm.mNumber.value,
        pincode : myForm.pin.value,
        city : myForm.city.value,
        state : myForm.state.value,
        def : myForm.checkbox.value
    }
    let flag1 = 1;
    for (let key in Address){
        if (Address[key] === ""){
            flag1 = 0;
            alert("'All the fields are compulsory'");
            break;
        }
    }
    if (flag1 === 1){
        allAddresses.push(Address);
        // localStorage.setItem("userAddresses", JSON.stringify(allAddresses));
        let arr = document.querySelectorAll(".pincode");
        for (let i = 0; i < arr.length; i++){
            arr[i].value = "";
        }
        document.querySelector("#checkbox").checked = "";
        alert("'Address added successsfully'");
    }
}

log1.addEventListener("click", SelectAddressLogIn);
log2.addEventListener("click", SelectAddressLogIn);
function SelectAddressLogIn(){
    if (flag === 0){
        addressShowAddDiv.innerHTML = null;
        window.location.href="./login.html"
    }
    else{
        addressShowAddDiv.innerHTML = selectAddress();
        let showAllAddressesDiv = document.querySelector("#showAllAddress");
        showAllAddresses(allAddresses, showAllAddressesDiv);
    }
}

function showAllAddresses(data, location){
    data.forEach(function(ele){
        let div = document.createElement('div');
        let userName = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let div2 = document.createElement('div');
        let h5 = document.createElement('h3');
        let p5 = document.createElement('p');
        let hr = document.createElement('hr');

        div.setAttribute("class", "pointer");
        userName.innerText = ele.name;
        p1.innerText = ele.firstAdd;
        p2.innerText = ele.secondAdd;
        p3.innerText = ele.city + "-" + ele.pincode;
        p4.innerText = ele.state;
        h5.innerText = "Mobile:";
        p5.innerText = ele.mobile;

        div.addEventListener("click", function(){
           selectedAddress(ele);
        })

        div2.append(h5, p5)
        div.append(userName, p1, p2, p3, p4, div2, hr);

        location.append(div);

    })
}

function selectedAddress(ele){
    let arr = [];
    arr.push(ele)
    let details = document.querySelector("#dDetails");
    details.remove();
    let div = document.createElement('div');
    div.setAttribute("id", "dDetails");
    console.log(ele);
    let payAddressDiv = document.querySelector("#payAddress");
    payAddressDiv.append(div);
    payAddressDiv.style.height = "350px";
    log1.innerText = "Pay To Proceed";
    log2.innerText = "Pay To Proceed";
    showAllAddresses(arr, div);
    log1.addEventListener("click", function(){
        payment();
    });
    log2.addEventListener("click", function(){
        payment();
    });
}
function payment(){
    addressShowAddDiv.innerHTML = null;
    addressShowAddDiv.innerHTML = pay();
    document.querySelector("#card").addEventListener("click", function(){
        completePay();
    });
}

function completePay(){
    console.log("I am in")
    addressShowAddDiv.innerHTML = null;
    addressShowAddDiv.innerHTML = cardPayment();
    document.querySelector("#submit").addEventListener("click", function(){
        cardPay();
    });
}

function cardPay(){
    console.log("hii");
    let cardDetails = {
        cardNumber : document.querySelector("#cNumber").value,
        cName : document.querySelector("#cName").value,
        cCvv : document.querySelector("#cvv").value
    }
    if (cardDetails.cardNumber.length !== 16 || cardDetails.cName.length === 0 || cardDetails.cCvv.length !== 3){
        alert("Invalid Inputs");
    }
    else{
        let otp1 = Math.floor((Math.random()+1)*100000);
        setTimeout(function(){
            confirm("Your OTP is : " + otp1);
            let div = document.querySelector("#otpGenerator");
            div.innerHTML = null;
            div.innerHTML = otp();
            document.querySelector("#abb").append(div);
            document.querySelector("#otpSubmit").addEventListener("click", function(){
                otpAccept(otp1);
            });
        }, 2000)
    }
}
function otpAccept(otp){
    let submitOtp = document.querySelector("#OTP").value;
    console.log(otp, submitOtp);
    let tok = Math.floor(Math.random()*17123456783);
    a.token = tok;
    if (submitOtp == otp){
        a.status = "Order Complete"
        setTimeout(function(){
            alert("Order Successful");
        }, 2000)
    }
    else{
        ele.status = "Order Failed";
        alert("Order Failed");
    }
    myOrder.push(a);
    localStorage.setItem("allOrder", JSON.stringify(myOrder));
}

async function addProduct() {
    try {
        let data = {
            id: document.getElementById("id").value,
            name: document.getElementById("name").value,
            price: document.getElementById("price").value,
        };
        data = JSON.stringify(data);

        let response = await fetch("http://127.0.0.1:3000/products", {
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/json",
            },
        });
        let d = await response.json();
        console.log("data:", d);
    } catch (error) {
        console.log("error:", error);
    }
}

async function deleteProduct() {
    let id = document.getElementById("delete_id").value;

    let response = await fetch(`http://127.0.0.1:3000/products/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    let d = await response.json();
    console.log("data:", d);
}

async function UpdateProduct() {
    try {
        let data = {
            id: document.getElementById("Update_id").value,
            name: document.getElementById("Update_name").value,
            price: document.getElementById("Update_price").value,
        };
        data = JSON.stringify(data);
        let id = document.getElementById("Update_id").value;

        let response = await fetch(`http://127.0.0.1:3000/products/${id}`, {
            method: "PUT",
            body: data,
            headers: {
                "Content-Type": "application/json",
            },
        });
        let d = await response.json();
        console.log("data:", d);
    } catch (error) {
        console.log("error:", error);
    }
}

async function getData() {
    try {
        let url = "http://localhost:2350/addresses";

        let res = await fetch(url);
        let data = await res.json();
        return {"data": data};
    } catch (error) {
        return error;
    }
}
console.log(getData())