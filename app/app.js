let slideOpenbtn = document.querySelector('.slideopenbtn');
let slideClosebtn = document.querySelector ('.closebtn');
let navSection = document.querySelector('.navsection')

function navopen(){
    let navSection = document.querySelector('.navsection')
    navSection.classList.add('active')
}

slideOpenbtn.addEventListener('click', navopen);

function navclose(e){
    let navSection = document.querySelector('.navsection')
   if (e.target.classList.contains('navsection') || e.target.classList.contains('closebtn')){
     navSection.classList.remove('active')
   }
}
slideClosebtn.addEventListener('click', navclose);
navSection.addEventListener('click', navclose);


let loginOpen = document.querySelector('.loginopen')
let loginClosebtn = document.querySelector('.loginclosebtn')

loginOpen.addEventListener('click', () =>{
    let loginsection = document.querySelector('.loginsection')
    loginsection.classList.add('logactive')
})

loginClosebtn.addEventListener('click', () =>{
    let loginsection = document.querySelector('.loginsection')
    loginsection.classList.remove('logactive')
})


let toggle = document.querySelector('.toggle')
let input = document. querySelector('#password')


toggle.addEventListener('click', () =>{

    if (input.type == "password") {
        input.type="text"
        toggle.classList.replace('bi-eye-slash', 'bi-eye')
    }else{
        input.type="password"
        toggle.classList.replace('bi-eye', 'bi-eye-slash')
    }
})


// let dark = document.querySelector('.dark')
// let body = document.body
// let togglefill = document.querySelector('.togglefill')
// dark.addEventListener('click', () =>{
//     if (togglefill.classList = 'bi-lightbulb-fill'){
//         body.style.backgroundColor = "black"
//         togglefill.classList.replace('bi-lightbulb-fill', 'bi-lightbulb')
//     } 
//     else if (togglefill.classList = 'bi-lightbulb') {
//         body.style.backgroundColor = "white"
//         togglefill.classList.replace('bi-lightbulb', 'bi-lightbulb-fill')
//     }
    
// })

// dark.addEventListener('click', () =>{
//     body.style.backgroundColor = "black"
//     togglefill.classList.replace('bi-lightbulb-fill', 'bi-lightbulb')
// })


let darkicon = document.querySelector('.darkicon')
let body = document.body
let togglefill = document.querySelector('.togglefill')


darkicon.addEventListener('click', () =>{

    if (togglefill.classList.toggle('.bi-lightbulb-fill')){
        body.classList.add('bodytog')
        togglefill.classList.replace('bi-lightbulb-fill', 'bi-lightbulb')
        body.style.transition = '0.5s'
    } else {
        body.classList.remove('bodytog')
        body.style.transition = '0.5s'
        togglefill.classList.replace('bi-lightbulb', 'bi-lightbulb-fill')
    }


   
})


let cursor = document.querySelector('.cursor')
let cursorsm = document.querySelector('.cursorsm')

function customMouse(e){
    let left = e.pageX + "px"
    let top = e.pageY + "px"
    cursor.style.left = left
    cursor.style.top = top
    cursorsm.style.left = left
    cursorsm.style.top = top
}


window.addEventListener('mousemove', customMouse);