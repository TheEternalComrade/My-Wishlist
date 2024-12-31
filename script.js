const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        }
    });
});

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
    });
});
const hiddenElements = document.querySelectorAll(".hidden")
const wishes = document.querySelectorAll(".wish")

hiddenElements.forEach((el) => observer.observe(el))

wishes.forEach((el) => observer2.observe(el))

