//var input = document.getElementById('input')
//var td = document.getElementById('hasil_nama')
//var tombol= document.getElementById('tombol')

//tombol.addEventListener('click', function(){
    //td.innerHTML = input.value
//})

//tombol.addEventListener('input', function(){
  //  td.innerHTML = input.value
//})

//nama
var nama = document.getElementById ('nama')
var hasil_nama = document.getElementById('hasil_nama')

nama.addEventListener ("input", function(){
  hasil_nama.innerHTML = nama.value
})
//umur
var umur =document.getElementById ('umur')
var hasil_umur =document.getElementById ('hasil_umur')

umur.addEventListener ("input", function(){
  hasil_umur.innerHTML =umur.value
})

//alamat
var alamat = document.getElementById ('alamat')
var hasil_alamat = document.getElementById('hasil_alamat')

alamat.addEventListener ("input", function(){
  hasil_alamat.innerHTML = alamat.value
})
//warna
var warna = document.getElementById('warna')

function gantiwarna(){
  var warna = document.getElementById ('warna').value
  document.getElementById("judul").style.color = warna
}