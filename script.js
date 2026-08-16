const cursor=document.querySelector(".cursor-glow");
window.addEventListener("mousemove",e=>{cursor.style.left=e.clientX+"px";cursor.style.top=e.clientY+"px"});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelectorAll(".magnetic").forEach(btn=>{
  btn.addEventListener("mousemove",e=>{
    const r=btn.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;
    btn.style.transform=`translate(${x*.12}px,${y*.12}px)`;
  });
  btn.addEventListener("mouseleave",()=>btn.style.transform="");
});

const sections=[...document.querySelectorAll("section[id]")], links=[...document.querySelectorAll("nav a")];
window.addEventListener("scroll",()=>{
  let current="home";
  sections.forEach(s=>{if(scrollY>=s.offsetTop-180)current=s.id});
  links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+current));
});
document.getElementById("year").textContent=new Date().getFullYear();

const menu=document.querySelector(".menu"),nav=document.querySelector("nav");
menu.addEventListener("click",()=>{
  nav.classList.toggle("open");
  nav.style.display=nav.classList.contains("open")?"flex":"";
  nav.style.position="absolute";nav.style.top="78px";nav.style.left="0";nav.style.right="0";
  nav.style.padding="25px";nav.style.flexDirection="column";nav.style.background="rgba(3,3,10,.97)";
});
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");if(innerWidth<901)nav.style.display="none"}));
