const img = document.getElementById('imagem');
const fala = document.getElementById('fala');
const autor = document.getElementById('autor');
const cargo = document.getElementById('cargo');

console.log(img.src);
console.log(fala.innerHTML);
console.log(autor.innerHTML);
console.log(cargo.innerHTML);

let testimonial = {
    p_imagem: "../images/image-john.jpg",
    p_fala: "“If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ” ",
    p_autor: "John Tarkpor",
    p_cargo: "Junior Front-end Developer",
}

console.log(testimonial);

function change() {
    let a = {
        p_imagem: img.src,
        p_fala: fala.innerHTML,
        p_autor: autor.innerHTML,
        p_cargo: cargo.innerHTML,
    }

    img.src = testimonial.p_imagem;

    fala.innerHTML = testimonial.p_fala;
    autor.innerHTML = testimonial.p_autor;
    cargo.innerHTML = testimonial.p_cargo;

    testimonial = a;

    console.log(a);
}