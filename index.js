addEventListener("DOMContentLoaded", () => {
    let e = ['o:', 'outl', 'leithcatcare', 'ilt', 'ook.com', 'ma'];
    let p = ['l:', '2', '07', '69', '76', 'te', '79', '89'];

    let deets = document.getElementById('deets');

    let el_br0 = document.createElement("br")
    let el_br1 = document.createElement("br")

    let el_e = document.createElement("a")
    el_e.setAttribute("href",e[5]+e[3]+e[0]+e[2]+'@'+e[1]+e[4]);
    el_e.textContent = e[2]+'@'+e[1]+e[4];

    let el_p = document.createElement("a")
    el_p.setAttribute("href",p[5]+p[0]+p[2]+p[6]+p[1]+p[7]+p[4]+p[3]);
    el_p.textContent = p[2]+p[6]+' '+p[1]+p[7]+' '+p[4]+p[3];

    deets.prepend(el_br1)
    deets.prepend(el_e)
    deets.prepend(el_br0)
    deets.prepend(el_p)
});
