// var smartPhones = JSON.parse(localStorage.getItem("smartPhones"))
document.getElementsByClassName(".sMImages");

let smartPhones;
async function getData() {
	try {
		let url = "http://localhost:2350/products";

		let res = await fetch(url);
		smartPhones = await res.json();
		console.log("data:", smartPhones);

		showallProducts(smartPhones);

		console.log("data:", smartPhones);
		// appendData(data);
	} catch (error) {
		console.log("error:", error);
	}
}

getData();

// showallProducts(smartPhones);

function showallProducts(smartPhones) {
	let maindiv = document.getElementById("sMImages");
	maindiv.innerHTML = null;

	console.log("test:", typeof smartPhones);

	smartPhones.forEach(function (ele) {
		let div = document.createElement("div");
		let div1 = document.createElement("div");
		div1.setAttribute("class", "im");
		let image = document.createElement("img");
		let name = document.createElement("p");
		name.setAttribute("class", "sMIName");
		let pPrice = document.createElement("p");
		pPrice.setAttribute("class", "sMIPrice");
		image.src = ele.images_url[0];
		name.innerText = ele.title;
		pPrice.innerText = "M.R.P ₹ " + ele.price;
		div.addEventListener("click", function () {
			console.log(ele._id);
			singleProduct(ele);
		});
		div1.append(image);
		div.append(div1, name, pPrice);
		maindiv.append(div);
	});
}

function sort() {
	let selected = document.querySelector("#select").value;
	if (selected === "p") {
		// smartPhones = JSON.parse(localStorage.getItem("smartPhones"));
		showallProducts(smartPhones);
	} else if (selected === "LtH") {
		smartPhones.sort(function (a, b) {
			return a.price - b.price;
		});
		console.log(Number(smartPhones[0].price));
		console.log(smartPhones);
		showallProducts(smartPhones);
	} else if (selected === "HtL") {
		smartPhones.sort(function (a, b) {
			return b.price - a.price;
		});
		console.log(smartPhones);
		showallProducts(smartPhones);
	}
}

function singleProduct(id) {
	console.log(id);
	let singleProductElement = [];
	singleProductElement.push(id);
	// localStorage.removeItem("SingleProduct");
	localStorage.setItem("SingleProduct", JSON.stringify(singleProductElement));
	window.location.href = "demopro.html";
}
