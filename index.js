console.log('hi')

function addCool() {
    let thing = document.querySelector('#kitten').parentElement.parentElement
    for(let i =0; i< 100; i++){
        console.log(i)
        thing.innerHTML += '<div>cool</div>'
    }
}


document.querySelector("h1").onclick = addCool

document.querySelector('#cat').onclick = function(e){
    //console.log(e)
    let mice = document.querySelectorAll('.mouse')
    mice.forEach(mouse => {
        mouse.className = 'dead mouse'
    })
}


var pEle = document.createElement('b')
pEle.className = ' this is a pargraph'
pEle.innerText = 'howdy'
document.body.appendChild(pEle)


document.body.onscroll = function(event){ //event listener looking for on scroll 

    document.querySelector('body').style.backgroundSize = this.scrollY + 'em'

}