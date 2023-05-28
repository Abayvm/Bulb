document.getElementById('onBtn').addEventListener('click', function tunOn(){
    document.getElementById('bulb').setAttribute("src", "images/bulbOn.png");

    document.getElementById('onBtn').classList.add('btnon')

    setTimeout(function(){
        document.getElementById('onBtn').classList.remove('btnon')
    }, 600)
})

document.getElementById('offBtn').addEventListener('click', function tunOf(){
    document.getElementById('bulb').setAttribute("src", "images/bulbOff.png");

    document.getElementById('offBtn').classList.add('buttonoff')

    setTimeout(function(){
        document.getElementById('offBtn').classList.remove('buttonoff')
    }, 600)
})
