var container = document.getElementById('container')
var up = document.getElementById('up')
var down = document.getElementById('down')

up.addEventListener('click', function(){
    container.style.maxHeight = '0px'
    container.style.padding   = '0px'
})

down.addEventListener('click', function(){
    container.style.maxHeight = '200px'
    container.style.padding   = '10px'
})