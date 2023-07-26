const nie=document.querySelector('.nav_icon');
const nce=document.querySelector('.nav_close');
const nl=document.querySelector('.nav_list');
const bo=document.querySelector('.big_overlay');

const navopen=()=>{
    nl.classList.add('show');
    bo.classList.add('active');
    document.body.style='visibility:visible;height:100vh;width:100vw;overflow:hidden;';
}
const navclose=()=>{
    nl.classList.remove('show');
    bo.classList.remove('active');
    document.body.style='visibility:visible;height:initial;width:100%;overflow-x:hidden;';
}
nie.addEventListener('click',navopen);
nce.addEventListener('click',navclose);
bo.addEventListener('click',navclose);

//AOS
AOS.init({
    offset:200,
    delay:100,
    duration:400,
    easing:'ease',
    once:false,
    mirror:false,
    anchorPlacement:'top-bottom'
})