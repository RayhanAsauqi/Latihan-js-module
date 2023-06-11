//cara untuk membuat object pada javascript
//1.object literal 
//PROBLEM : tidak efektif untuk object yang banyak

// let mahasiswa = {
//     nama : "Rayhan Alsauqi",
//     energy : 10,
//     makan : function(porsi){
//         this.energy = this.energy + porsi ;
//         console.log(`Halo ${this.nama}, selamat makan`)
//     }
// }

//2.function declaration

const methodMahasiwa =  {
    makan : function (porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan !`);
    },

    main : function(jam){
        this.energi -= jam ;
        console.log(`Halo ${this.nama}, selamat bermain !`)
    }
};


//  function Mahasiswa(nama,energi){
//      let mahasiswa = Object.create(methodMahasiwa);
//      mahasiswa.nama = nama;
//      mahasiswa.energi =  energi;
     
//     return mahasiswa
// }

// let yoi =Mahasiswa('Rayhan',10);




//3.constructur function
// function Mahasiswa(nama,energi){
//     this.nama = nama;
//     this.energi =  energi;

//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan`)
//     }
//     this.main = function(jam){
//         this.energi -= jam;
//         console.log(`halo ${this.nama}, Selamat Bermain`)
//     }

// }
// let Sandhika = new Mahasiswa("Sandhika",10);





//4.object create









// function Mahasiswa(nama,energi){
//     this.nama = nama;
//     this.energi =  energi;
// }

// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi 
//     return `Halo ${this.nama}, Selamat makan`
// }

// Mahasiswa.prototype.main  = function(jam){
//     this.energi -= jam;
//     return `Halo ${this.nama}, Selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function(jam){
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, Selamat tidur`;
// }
// let yoi = new Mahasiswa('Rayhan',10);

//versi class
// class Mahasiswa{
//     constructor(nama, energi){
//         this.nama = nama;
//         this.energi = energi;
//     }
    
//     makan(porsi){
//         this.energi += porsi;
//         return `Halo ${this.nama}, Selamat makan`;
//     }
//     main(jam){
//         this.energi -= jam;
//         return `Halo ${this.nama}, Selamat Bermain!`;
//     }
//     tidur(jam){
//         this.energi += jam * 2 ;
//         return `Halo ${this.nama}, Selamat Tidur`;
//     }
// }
// let yoi = new Mahasiswa('rayhan',10);
// let doddy = new Mahasiswa('doddy')

