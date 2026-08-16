const nav=document.querySelector(".nav"),menu=document.querySelector(".menu");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));

const cursor=document.querySelector(".cursor");
if(cursor && matchMedia("(pointer:fine)").matches){
 document.addEventListener("mousemove",e=>{cursor.style.transform=`translate3d(${e.clientX}px,${e.clientY}px,0)`});
 document.querySelectorAll("a,button,.tilt").forEach(el=>{
  el.addEventListener("mouseenter",()=>cursor.classList.add("active"));
  el.addEventListener("mouseleave",()=>cursor.classList.remove("active"));
 });
}else if(cursor) cursor.remove();

document.querySelectorAll(".magnetic").forEach(el=>{
 el.addEventListener("mousemove",e=>{
  if(innerWidth<801)return;
  const r=el.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)*.12,y=(e.clientY-r.top-r.height/2)*.12;
  el.style.transform=`translate(${x}px,${y}px)`;
 });
 el.addEventListener("mouseleave",()=>el.style.transform="");
});

document.querySelectorAll(".tilt").forEach(card=>{
 card.addEventListener("mousemove",e=>{
  if(innerWidth<801)return;
  const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
  card.style.transform=`perspective(1200px) rotateX(${y*-1.5}deg) rotateY(${x*1.5}deg) translateY(-4px)`;
 });
 card.addEventListener("mouseleave",()=>card.style.transform="");
});
