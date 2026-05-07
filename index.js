const CLASS_HIDDEN = 'visually-hidden';
const CLASS_SELECTED = 'testimonial-indicator';

const TESTIMONIALS_SHOWN = 4;
let testimonial_total = 0;
let testimonial_total_pages = 0;
let testimonial_page = 0;

addEventListener('DOMContentLoaded', () => {
    const e = ['o:', 'outl', 'leithcatcare', 'ilt', 'ook.com', 'ma'];
    const p = ['l:', '2', '07', '69', '76', 'te', '79', '89'];

    const deets = document.getElementById('deets');

    const el_br0 = document.createElement('br')
    const el_br1 = document.createElement('br')

    const el_e = document.createElement('a')
    el_e.setAttribute('href',e[5]+e[3]+e[0]+e[2]+'@'+e[1]+e[4]);
    el_e.textContent = e[2]+'@'+e[1]+e[4];

    let el_p = document.createElement('a')
    el_p.setAttribute('href',p[5]+p[0]+p[2]+p[6]+p[1]+p[7]+p[4]+p[3]);
    el_p.textContent = p[2]+p[6]+' '+p[1]+p[7]+' '+p[4]+p[3];

    deets.prepend(el_br1)
    deets.prepend(el_e)
    deets.prepend(el_br0)
    deets.prepend(el_p)


    testimonial_total = document.getElementsByClassName('testimonial-holder')[0].children.length;
    testimonial_total_pages = Math.floor(testimonial_total / TESTIMONIALS_SHOWN);
    
    testimonial_page = Math.floor(Math.random() * testimonial_total_pages);
    generate_testimonial_indicators(testimonial_total_pages)
    show_testimonials()

    document.getElementById('show-testimonial').addEventListener('click', show_testimonials);
    document.getElementsByClassName('testimonial-holder')[0].classList.remove(CLASS_HIDDEN)
});

function generate_testimonial_indicators(page_count) {
    const holder = document.getElementsByClassName('testimonial-selector')[0];
    
    const indicators_left = document.createElement("div");
    const indicators_right = document.createElement("div");
    for (let i = 0; i < page_count / 2; i++) {
        const span = document.createElement("span");
        span.innerText = '\\';
        indicators_left.append(span);
    }
    for (let i = 0; i < Math.floor(page_count / 2); i++) {
        const span = document.createElement("span");
        span.innerText = '/';
        indicators_right.append(span);
    }

    holder.prepend(indicators_left);
    holder.append(indicators_right);
}

function show_testimonials() {
    console.log(testimonial_page);
    const holder = document.getElementsByClassName('testimonial-holder')[0];

    for (let i = 0; i < holder.children.length; i++) {
        if (Math.floor(i / TESTIMONIALS_SHOWN) == testimonial_page) {
            holder.children[i].classList.remove(CLASS_HIDDEN);
        } else {
            holder.children[i].classList.add(CLASS_HIDDEN);
        }
    }
    
    const tesimonial_selectors = document.querySelectorAll(".testimonial-selector span");
    tesimonial_selectors.forEach(element => {
      element.classList.remove(CLASS_SELECTED)  
    });
    tesimonial_selectors[testimonial_page].classList.add(CLASS_SELECTED)

    testimonial_page = (testimonial_page + 1) % testimonial_total_pages;
}