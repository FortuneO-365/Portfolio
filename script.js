let navButton = document.getElementById("nav-icon");
let nav = document.getElementById("sec-nav-cont");
let sections = document.querySelectorAll('section');
let b

navButton.onclick = function(){
    nav.classList.add("active");
    sections.forEach(section => {
        section.classList.add("blur")
    })
}

document.addEventListener("click", function(e){
    if(!navButton.contains(e.target)){
        nav.classList.remove("active");
        sections.forEach(section => {
            section.classList.remove("blur")
        })
    }

})



// window.addEventListener('scroll', function() {
//     sections.forEach(section =>{
//         let position = section.getBoundingClientRect()
//         if(position.top >= 0 && position.bottom <= window.innerHeight) {
//             console.log('Element is fully visible in screen' + 'this section is  ' + section.id);
//         }
//     })
// })
