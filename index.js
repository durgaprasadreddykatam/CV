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
const homediv = document.getElementById("home");
const edudiv = document.getElementById("edu");
const expdiv = document.getElementById("exp");
const contactdiv = document.getElementById("contact");

const hometext = document.getElementById("head-text-2-1");
const edutext = document.getElementById("head-text-2-2");
const exptext = document.getElementById("head-text-2-3");
const contacttext = document.getElementById("head-text-2-4");
console.log(homediv);
console.log(edudiv);
console.log(expdiv);
console.log(contactdiv);
console.log(hometext);
console.log(edutext);
console.log(exptext);
console.log(contacttext);

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // The element is currently in the viewport
      if (entry.target.id === "vhome") {
        console.log("Content 1 is in viewport");
        hometext.style.color = "black";
        edutext.style.color = "white";
        exptext.style.color = "white";
        contacttext.style.color = "white";
        
      } else if (entry.target.id === "vedu") {
        hometext.style.color = "white";
        edutext.style.color = "black";
        exptext.style.color = "white";
        contacttext.style.color = "white";
        console.log("Content 2 is in viewport");
      } else if (entry.target.id === "vexp") {
        hometext.style.color = "white";
        edutext.style.color = "white";
        exptext.style.color = "black";
        contacttext.style.color = "white";
        
        console.log("Content 3 is in viewport");
      } else if (entry.target.id === "vcontact") {
        hometext.style.color = "white";
        edutext.style.color = "white";
        exptext.style.color = "white";
        contacttext.style.color = "black";
        console.log("Content 4 is in viewport");
      }
    } else {
      
      // The element is currently outside the viewport
      console.log("Element is outside viewport");
    }
  });
}, observerOptions);

observer.observe(homediv);
observer.observe(edudiv);
observer.observe(expdiv);
observer.observe(contactdiv);

const inputElement = document.getElementById("nametext");
const defaultMessage = "Please Enter Your Name";
const defaultMessage1 = "Please enter your message"
inputElement.addEventListener("click", () => {
  inputElement.value = "";
  inputElement.focus();
});

inputElement.addEventListener("blur", () => {
  if (inputElement.value.trim() === "") {
    inputElement.value = defaultMessage;
  }
});

const inputElement1 = document.getElementById("nametext-1");

inputElement1.addEventListener("click", () => {
  inputElement1.value = "";
  inputElement1.focus();
});

inputElement1.addEventListener("blur", () => {
  if (inputElement1.value.trim() === "") {
    inputElement1.value = defaultMessage1;
  }
});

