//function expression
// const tampilNama = function(nama){

// const { compose } = require("redux");

//     return `Halo, ${nama}`;

// }
// console.log(tampilNama("Rayhan"));

// const tampilNama = (nama,waktu) =>{
//     return `Selamat ${waktu}, ${nama}  `;
// }
// console.log(tampilNama('Rayhan', 'malam'));

//implisit return
// const tampilNama = nama => `Halo, ${nama}`;
// console.log('rayhan alsauqi')

//tanpa parameter
// const tampilNama = () => `Hello World`;
// console.log(tampilNama());

// let mahasiswa = ['rayhan','alsauqi', 'zidane'];

// let jumlahHuruf = mahasiswa.map(function (nama){
//     return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf)
// let jumlahHuruf = mahasiswa.map(nama => ({nama : nama, jmlHuruf : nama.length}));
// console.table(jumlahHuruf)


//konsep this pada arrow function

//constructor function

// const Mahasiswa = function() {
//     this.nama = 'Rayhan';
//     this.umur = 20;
//     this.sayHello = function(){
//         console.log(`Halo, nama saya ${this.nama},dan saya ${this.umur} tahun.`)
//     }
// }

// const rayhan = new Mahasiswa();


// Arrow function
// const Mahasiswa = function() {
//     this.nama = 'Rayhan';
//     this.umur = 20;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama},dan saya ${this.umur} tahun.`)
//     }
// }

// const rayhan = new Mahasiswa();

//object literal
// const mhs1 = {
//     nama : 'Rayhan',
//     umur : 20,
//     sayHello: () =>{
//         console.log(`Halo, nama saya ${this.nama},dan saya ${this.umur} tahun.`)
//     }
// }

// const Mahasiswa = function() {
//         this.nama = 'Rayhan';
//         this.umur = 20;
//         this.sayHello = function(){
//             console.log(`Halo, nama saya ${this.nama},dan saya ${this.umur} tahun.`)
//         }

//         setInterval(() => {
//             console.log(this.umur++);
//         }, 500)


//      }
    
//      const rayhan = new Mahasiswa();










const box = document.querySelector('.box');
box.addEventListener('click', function (){
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }


   this.classList.toggle('size');
   setTimeout(() => {
    this.classList.toggle('caption');
   }, 600);
})




