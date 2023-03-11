const downloadbutton=document.getElementById("downloadbutton1");
const texthome=document.getElementById("head-text-2-1");
const textedu=document.getElementById("head-text-2-2");
const textexp=document.getElementById("head-text-2-3");
const textcontact=document.getElementById("head-text-2-4");
const textproj=document.getElementById("head-text-2-5");
console.log(texthome);
console.log(textedu);
console.log(textexp);
console.log(textcontact);
console.log(textproj);


downloadbutton.addEventListener('click', () => {
  const url = "./Durga Prasad Reddy KatamResume.pdf";
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Resume.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});
