const paginaprincipal  = document.querySelector("#paginaprincipal");
const formulario  = document.querySelector("#formulario");
const contactos  = document.querySelector("#contactos");


paginaprincipal.addEventListener("click",(p)=>{

    p.preventDefault();
    const sectionP = document.querySelector(".paginaprincipal");
    sectionP.scrollIntoView({ behavior: "instant" });
})

formulario.addEventListener("click",(p)=>{

    p.preventDefault();
    const sectionF = document.querySelector(".formulario");
    sectionF.scrollIntoView({behavior: "instant" });
})

contactos.addEventListener("click",(p)=>{

    p.preventDefault();

    const sectionC = document.querySelector(".contactos");

    sectionC.scrollIntoView({behavior: "instant" });
})