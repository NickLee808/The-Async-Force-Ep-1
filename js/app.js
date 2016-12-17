var oReq = new XMLHttpRequest();

function parsePersonObj () {
  //JSON.parse takes string, converts to actual object
  let personObj = JSON.parse(this.responseText);
  buildPerson(personObj);
}

oReq.addEventListener('load', parsePersonObj);

oReq.open('GET', 'http://swapi.co/api/people/4/');
oReq.send();

//store data, pipe it somewhere



//build DOM stuff with data

function buildPerson (anObject) {
  console.log(anObject);
  document.getElementById('person4Name').innerHTML = anObject.name;
  document.getElementById('person4HomeWorld').innerHTML = anObject.homeworld;
}