// array -> string, number, objek, function, campuran

let nilai = [
    {nama : "budi", ipa :90, bahasa :72, matematika:80},
    {nama : "alok", ipa :45, bahasa :40, matematika:35},
    {nama : "bambang", ipa :78, bahasa :88, matematika:95},
    {nama : "joko", ipa :88, bahasa :75, matematika:85},
];

let nama = ["budi","alok","bambang","joko"];
nama.push("ani","zilong")

// nama.unshift("yujong","aldos");

// console.log(nama.slice(0,3));

let mapel = ["ipa","bahasa", "matematika"];

// console.log(nama.concat(mapel))

// console.log(nama.concat(["ips","pkn","sejarah"]));

// console.log (nama.splice(5,2));

// console.log(nama.shift());

// console.log(nama.pop());

// console.log(nilai[0].nama);

// for (let index = 0; index < nama.length; index++) {
//     console.log(nama[index]);
    
// }

// nama.forEach(function(a){
//     console.log(a);
// });

// console.log(nama);

// nama.forEach((a) => console.log(a));

// nilai.filter(function (a) {
//     if (a.ipa>80) {
//         console.log(a.nama);
//     }
// });

// console.log(nilai);

// nilai.filter(a=>a.ipa>80 && a.matematika > 80? console.log(a.nama) : null);


// let siswa = nilai.map(function (a) {
//     return a.nama;
// });

// let siswa = nilai.map((a)=>[a.nama,a.ipa,a.bahasa ])

// console.log(siswa);

// mapel.sort();

// console.log(mapel);

// let hasil = nilai.reduce(function(a,b){
//     return a = a + b.ipa;
// },0);

let hasil = nilai.reduce((a,b)=> (a+=b.bahasa),0)

console.log(hasil);