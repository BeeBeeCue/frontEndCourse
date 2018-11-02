//document.querySelector('p:nth-child(2)').innerHTML = 'Changed header';
const firstElement = document.querySelector('#test');
firstElement.innerHTML = 'I added <strong> this </strong> text with JS';


const exampleElements = document.querySelectorAll('.example');
console.log(exampleElements);

for(let i = 0; i < exampleElements.length; i++){
  console.log(exampleElements[i]);
  exampleElements[i].setAttribute('style', 'color: green');
}
for(const element of exampleElements){
  element.innerHTML = 'Modified';
}

exampleElements.forEach(element => {
  element.innerHTML = 'Modified again';
});