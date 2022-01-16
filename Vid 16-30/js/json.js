document.querySelector("#klik").addEventListener("click",tampil);

function tampil(params) {
    let url = "js/tblmenu.json";    
    fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function name(data) {
        let output = "<h1>Data Menu</h1> <table><th>Menu</th><th>Harga</th><th>Warna</th>";
        data.forEach(element =>{
            output += `<tr>
                <td>${element.menu}</td>
                <td>${element.harga}</td>
                <td>${element.warna[0]}</td>
            </tr>`;
        });
        output += "</table>";
        document.querySelector("#isi").innerHTML= output;
    })

    

}




// let tblmenu = [{

//     "idmenu":1,
//     "idkategori" : 1,
//     "menu" : "Jus Alpukat",
//     "harga" : 8000,
//     "warna" : ["merah", "kuning", "hijau"],
//     "stok" : true,
//     "keterangan" : null
// },
// {

//     "idmenu":2,
//     "idkategori" : 1,
//     "menu" : "Jus Apel",
//     "harga" : 7000,
//     "warna" : ["merah", "kuning", "hijau"],
//     "stok" : true,
//     "keterangan" : null
// }

// ]

// console.log(tblmenu[0]);