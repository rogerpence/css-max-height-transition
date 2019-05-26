
var rp = rp || {};

rp.YReveal = function(actionElemSelector, contentElemSelector, screenBreakpoint=0) {   
   const clicker = document.querySelector(actionElemSelector);
   const elem = document.querySelector(contentElemSelector);

   if (!clicker) {
	   throw('No action element to toggle show/hide found.');
   }

   if (!elem) {
	   throw('No content element to show/hide found.');
   }            

   clicker.addEventListener('click', (e) => { 
	   e.preventDefault();
	   this.toggle(elem);        
   }, false);    

   if (screenBreakpoint > 0) {
      window.addEventListener("resize", () => {
         var screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
         if (screenWidth >= screenBreakpoint) {
            const menu = document.getElementById('main-menu');
            this.hide(menu);
         }
      });
   }      
}; 

rp.YReveal.prototype.modifyChildren = function(elem, fn) {
   const children = Array.from(elem.children);
   children.forEach((child) => {
      fn(child);
   });
}

rp.YReveal.prototype.toggle = function(elem) {
   if (elem.classList.contains('block')) {
	   this.hide(elem);
   }
   else {
	   this.show(elem);     
   } 
}    

rp.YReveal.prototype.show = function(elem) {
   this.modifyChildren(elem, (child) => {
      child.classList.remove('hidden');
      child.classList.add('invisible');
   });   

   const elementHeight = elem.scrollHeight;
   //const elementHeight = elem.offsetHeight;

   elem.style.height = 0;

   elem.classList.add('block');

   for (let i = 0; i <= elementHeight; i++) {
	   elem.style.height = `${i}px`;        
   }          

   setTimeout(() => {
      this.modifyChildren(elem, (child) => {
         child.classList.remove('invisible');
         child.classList.add('visible');
      });   
   }, 10);

}    

rp.YReveal.prototype.hide = function(elem) {
   this.modifyChildren(elem, (c) => {
      c.classList.add('hidden');
   });

   const elementHeight = elem.scrollHeight;
   //const elementHeight = elem.offsetHeight;
   console.log(elementHeight);
   
   for (let i = elementHeight; i !== -1; i--) {
      elem.style.height = `${i}px`;        
   }        
   elem.classList.remove('block');
}    

new rp.YReveal('#clicker', '#slider-container');
