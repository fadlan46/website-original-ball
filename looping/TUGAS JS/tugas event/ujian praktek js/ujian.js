var input = document.getElementById('input')
var p = document.getElementById('paragraf')
var tombol= document.getElementById('tombol')

tombol.addEventListener('click', function(){
    p.innerHTML = input.value
})

tombol.addEventListener('input', function(){
    p.innerHTML = input.value