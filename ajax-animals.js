//9
var pageCounter = 1;
// 8 
var animalContainer = document.getElementById('animal-info');


var btn = document.getElementById('btn');

//5 Teraz trzeba zrobić cos zeby kliknięcie w button wyswietlilo dane
btn.addEventListener('click', function(){
var ourRequest = new XMLHttpRequest(); //1 tworzysz nowy obiekt AJAX, it runs as soon as the page loads, a ma tak nie byc, ma sie ladowac jak ktos kliknie niebieski przycisk
// wwalilimy cały kod począwszy of zmiennej our Request do funkcji ktora ma sie wykonac jak zostanie klikniety buttonik
  
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
// 2 always two arguments. if we wanted to send would have been POST
ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText); //4 trzeba to sparsować narzędziem JSON.parse żeby przeglądarka wiedziała, że ma do czynienia z plikiem JSON. Po dodaniu JSON.parse(ourData) odwołując się do console.log(ourData[0]) wywietli peirwszy obiekt nie pierwszy znak
renderHTML(ourData);  
//console.log(ourData[0]); //5 gdyby tu zostawić ourData[0] to wypisze tylko pierwszy znak, nie pierwszy obiekt bo nie interpretuje tego od razu jak dane JSON, nie wie ze to jest array czy ze pierwszy to jest obiekt, interpretuje to jako zwykly tekst textString
}; // 3 what should happen once the data is loaded
  
  
ourRequest.send();
//10 inkrementujesz licznik zeby po kliknieciu zbierało dane z pliku z końcowka -2, potem -3 itd
pageCounter++;
  if (pageCounter >3) {
  btn.classList.add("hide-me");
  }
});


//krok 7 tworzenie funkcji ktora bedzie odpowiedzialna za dodanie danych html na strone


function renderHTML(data) {
  var htmlString = '';
  
//8 dodanie pętli  
  for(i=0; i < data.length; i++){
  htmlString += "</p>" + data[i].name + " is a " + data[i].species + " that likes to eat "; 
  // ta petla jest po to zeby przeleciało po wszystkich elementach likes
    for (ii =0; ii < data[i].foods.likes.length; ii++) {
      if (ii == 0) {
    htmlString += data[i].foods.likes[ii];
      }
      else {
    htmlString += " and " + data[i].foods.likes[ii];
      }
    }
    htmlString += '.</p>';
  } 
  
  animalContainer.insertAdjacentHTML('beforeEnd', htmlString); //dodalismy tutaj zmienną i przejedziemy pętlą po danych
}


