const TESTIMONIALS_SHOWN = 4;
let testimonial_total = 0;
let testimonial_mod = 0;
let testimonial_mod_index = 0;

addEventListener("DOMContentLoaded", () => {
    const e = ['o:', 'outl', 'leithcatcare', 'ilt', 'ook.com', 'ma'];
    const p = ['l:', '2', '07', '69', '76', 'te', '79', '89'];

    const deets = document.getElementById('deets');

    const el_br0 = document.createElement("br")
    const el_br1 = document.createElement("br")

    const el_e = document.createElement("a")
    el_e.setAttribute("href",e[5]+e[3]+e[0]+e[2]+'@'+e[1]+e[4]);
    el_e.textContent = e[2]+'@'+e[1]+e[4];

    let el_p = document.createElement("a")
    el_p.setAttribute("href",p[5]+p[0]+p[2]+p[6]+p[1]+p[7]+p[4]+p[3]);
    el_p.textContent = p[2]+p[6]+' '+p[1]+p[7]+' '+p[4]+p[3];

    deets.prepend(el_br1)
    deets.prepend(el_e)
    deets.prepend(el_br0)
    deets.prepend(el_p)

    testimonial_total = document.getElementsByClassName("testimonial-holder")[0].children.length;
    testimonial_mod = testimonial_total / TESTIMONIALS_SHOWN;
    testimonial_mod_index = Math.floor(Math.random() * testimonial_mod);
    show_testimonials()

    document.getElementById("show-testimonial").addEventListener("click", show_testimonials);
});

function show_testimonials() {
    const holder = document.getElementsByClassName("testimonial-holder")[0];

    for (let i = 0; i < holder.children.length; i++) {
        if (i % testimonial_mod == testimonial_mod_index) {
            holder.children[i].classList.remove("visually-hidden");
        } else {
            holder.children[i].classList.add("visually-hidden");
        }
    }

    testimonial_mod_index = (testimonial_mod_index + 1) % testimonial_mod;
}