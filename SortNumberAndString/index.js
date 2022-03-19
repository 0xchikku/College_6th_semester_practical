

var sortContainer = document.querySelector('.sorted');
var unsortContainer = document.querySelector('.unsorted');
var unsorted = ['Red',4,'Green',2,'Blue',8];

unsortContainer.innerHTML = unsorted;
sortContainer.innerHTML = unsorted.sort();
