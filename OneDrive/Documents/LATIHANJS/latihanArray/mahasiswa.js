var mahasiswa = {
    nama :'rayhan',
    lulus: true,
    IPsemester:[2.90 ,3.10 ,3.25, 2.88, 3.04],
    IPkumulatif : function(){
        var total = 0;
        var ips = this.IPsemester;;
        for(var i = 0; i <ips.length;i++){
            total += ips [i];
        }
        return total;
    }
    
}
alert(mahasiswa.IPkumulatif());


function NamaSupir(nama){
    this.nama = nama;
}
var nmaSupir = 'Sandhika Galih';

