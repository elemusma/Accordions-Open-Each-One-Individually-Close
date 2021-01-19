let accordions = document.querySelectorAll(".accordion");
// SIMPLE ACCORDION
// for (let i = 0; i < accordions.length; ++i) {
//   accordions[i].addEventListener("click", function(){
//   (this).classList.toggle('open');
//   });
// }
function toggleAccordion() {
  if(this.classList.contains('open')) {
    this.classList.remove('open');
    return;
  }

  accordions.forEach(function(item) {
    item.classList.remove('open');
  });

  this.classList.add('open');
}

for (let i = 0; i < accordions.length; ++i) {
  accordions[i].addEventListener("click", toggleAccordion);
}