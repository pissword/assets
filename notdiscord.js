var visited=localStorage.getItem('visited');
if (!visited) {
  // or, replace "pissword" with your instance name
  alert("This is NOT Discord. pissword uses Spacebar, a FOSS reimplementation of the Discord backend. You must create a new account. \n\nPress \"OK\" to continue"); 
  localStorage.setItem('visited', true);
}
