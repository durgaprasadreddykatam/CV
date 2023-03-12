const downloadbutton=document.getElementById("downloadbutton1");
const texthome=document.getElementById("head-text-2-1");
const textedu=document.getElementById("head-text-2-2");
const textexp=document.getElementById("head-text-2-3");
const textcontact=document.getElementById("head-text-2-4");
const textproj=document.getElementById("head-text-2-5");

const homecontainer = document.getElementById("home");
console.log(homecontainer);
const educontainer = document.getElementById("edu");
console.log(educontainer);
const expcontainer = document.getElementById("exp");
console.log(expcontainer);
const contactcontainer = document.getElementById("contact");
console.log(contactcontainer);

/*   enabling Download button to download resume */
downloadbutton.addEventListener('click', () => {
    const url = "./Durga Prasad Reddy KatamResume.pdf";
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  
});

/** page movement when cliked on menu */
  
texthome.addEventListener('click', () => {
    homecontainer.scrollIntoView({ behavior: "smooth" });
    
  });
  textedu.addEventListener('click', () => {
    educontainer.scrollIntoView({ behavior: "smooth" });
  });
  
  textexp.addEventListener('click', () => {
    expcontainer.scrollIntoView({ behavior: "smooth" });
  });
  
  textcontact.addEventListener('click', () => {
    contactcontainer.scrollIntoView({ behavior: "smooth" });
  });
  
  /** color change of head text when page is displayed */
  function checkContainerVisibility() {
    const containerRect1 = homecontainer.getBoundingClientRect();
    if (containerRect1.top < window.innerHeight) {
      document.body.classList.add("visible");
      console.log("visible")
    } else {
      document.body.classList.remove("visible");
      console.log("not visible")
    }
    
  }

window.addEventListener("scroll", checkContainerVisibility);
window.addEventListener("resize", checkContainerVisibility);
checkContainerVisibility();