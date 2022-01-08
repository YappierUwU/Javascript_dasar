function cuba() {
    a = document.querySelector(".isi");
    a.innerHTML = "Belajar eventlistener";
    console.log("coba eventlistener");
}

// judul.addEventListener("click",cuba)

// judul.onmouseover = cuba;

judul.onmouseover = function () {
    console.log("coba funstion anonymous");
};