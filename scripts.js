// tp5 java script 

window.onload = function() {
  
  document.querySelector("#pagebanner h1").classList.add("tp");
  
  document.querySelector("#pagebanner h1").onclick = function() {
    
    this.classList.toggle("color");
  }
  
  document.querySelector("#columns #ingredients").onclick = function() {
    
    this.classList.toggle("show");
  }
  
  document.querySelector("#columns #equipment").onclick = function() {
    
    this.classList.toggle("show");
  }
  
  document.querySelector("#columns #directions").onclick = function() {
    
    this.classList.toggle("show");
  }
  
  document.querySelector("#columns #equipment ul").innerHTML += "<li>Electric Mixer</li>";
}// end window onload 