 
// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, Semoga harimu menyenangkan! `)
//     }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');
// console.dir(selamatMalam);


let add = (function() {

    let counter = 0;

    return function() {

        return ++ counter;

    }  
    
})();

 console.log(add());
 console.log(add());
 console.log(add());
 console.log(add());



// function init() {

//     let nama = 'Rayhan';
//     function tampilNama () {

//         console.log(nama);

//     }

//     tampilNama()
// }

// init();