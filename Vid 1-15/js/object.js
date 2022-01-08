let object = {
    nama: "Yappier A.F.K.P",
    telp: 12345,

    buah: ["apel", "jeruk", "mangga"],

    coba: function() {
        return "coba function dalam objek";
    },

    boleh: true,
    "tulis aja": 123456,
}

console.log(object.nama);
console.log(object.telp);
console.log(object.buah[0]);
console.log(object.coba());
console.log(object["tulis aja"]);