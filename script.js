// Dainius Raižys, 2022 m.

// let studentDataArray = [
//   {name: 'Jonas', surname: 'Jokubauskas', age: 22, tel: '+37065525456', email: 'jonas@jokubauskas.lt', itLevel: 9, group: 'Type 9', skills: ['C++', 'Python', 'JavaScript', 'Java']},
//   {name: 'Petras', surname: 'Zemba', age: 30, tel: '+37041525252', email: 'petras@sisis.com', itLevel: 10, group: 'Type 5', skills: ['JavaScript', 'Java', 'BASIC']},
//   {name: 'Domas', surname: 'Alytėnas', age: 38, tel: '+37052525252', email: 'domas@yahoo.com', itLevel: 1, group: 'Type 1', skills: ['Pascal']},
//   {name: 'Erika', surname: 'Žalienė', age: 19, tel: '+37060041400', email: 'erika@gmail.com', itLevel: 8, group: 'Type 8', skills: ['Java', 'BASIC', 'C++', 'C#']},
//   {name: 'Sonata', surname: 'Butkevičiūtė', age: 49, tel: '+37062614100', email: 'sonata@gmail.com', itLevel: 10, group: 'Type 10', skills: ['JavaScript', 'C++', 'C#']}
// ]

if (localStorage.getItem('allData')) {
  let initData = [] = JSON.parse(localStorage.getItem('allData'));
  importData(initData);  
}

/// funkcija importuos masyvą kaip student-item elementus
function importData(students) {
  students.forEach(student => createStudent(student))
}
// importData(studentDataArray);

// funkcija, kuri perkrovus formą nuresetina itLeveli
function rangeUpdate() {
  let itLevel = document.querySelector('#outputValue');
  let itLevelValue = document.querySelector('#itLevel');
  itLevel.textContent = itLevelValue.value;

  itLevelValue.addEventListener('input', () => {
    itLevel.textContent = itLevelValue.value;
  })
}
rangeUpdate();

// funkcija, kuri parodys pagrindinį pranešimą
function createAlert(text, color) {
  let spanSubmit = document.createElement('span');
  spanSubmit.setAttribute('id', 'submitSpan');
  spanSubmit.style.color = color;
  spanSubmit.style.fontWeight = 'bold';
  spanSubmit.textContent = ` ${text}`;
  document.querySelector('#submit').after(spanSubmit);
  setTimeout(() => {document.querySelector('#submitSpan').remove()}, 3000);
};

// funkcija, kuris pavers paduotą tekstą žvaigždutuėmis
function cryptText(text) {
  let result = '';
  for (let i=1; i<=text.length; i++) {
    result += '*';
  }
  return result;
}

// funkcija formos validacijai
function validateForm(thisForm) {
  let inputErrorBorders = thisForm.querySelectorAll('.input-error-border');
  inputErrorBorders.forEach(element => element.classList.remove('input-error-border'));

  let inputErrorSpans = thisForm.querySelectorAll('.input-error-span');
  inputErrorSpans.forEach(element => element.remove());
  
  let error = false;
  thisForm.querySelectorAll('.required').forEach(element => {
    if (!element.value) {
      inputErrorMessage(element, ` Šis laukelis yra privalomas!`);
      error = true;
    } 
    if (element.value && element.id === 'name' && element.value.length < 3) {
      inputErrorMessage(element, ` Vardas privalo būti bent 3 simbolių ilgio!`);
      error = true;
    }
    if (element.value && element.id === 'surname' && element.value.length < 3) {
      inputErrorMessage(element, ` Pavardė privalo būti bent 3 simbolių ilgio!`);
      error = true;
    }
    if (element.value < 0 && element.id === 'age') {
      inputErrorMessage(element, ` Amžius privalo būti teigiamas skaičius!`);
      error = true;
    }
    if (element.value > 120 && element.id === 'age') {
      inputErrorMessage(element, ` Įvestas amžius yra per didelis!`);
      error = true;
    }
    if (element.value && element.id === 'tel' && element.value.length < 9) {
      inputErrorMessage(element, ` Įvestas telefono numeris yra neteisingas, minimum 9!`);
      error = true;
    }
    if (element.value && element.id === 'tel' && element.value.length > 12) {
      inputErrorMessage(element, ` Įvestas telefono numeris yra neteisingas, maximum 12!`);
      error = true;
    }
    if (element.value && element.id === 'email' && element.value.length < 5) {
      inputErrorMessage(element, ` Įvestas elektroninis paštas yra neteisingas, minimum 5!`);
      error = true;
    }
    if (!element.value.includes('@') && element.id === 'email' && element.value.length >= 5) {
      inputErrorMessage(element, ` Įvestas elektroninis paštas yra neteisingas, turi būti ir @!`);
      error = true;
    }
  })
  return error;
}

// funkcija validacijos error žinučių rodymui
function inputErrorMessage(inputElement, errorMessage) {
  inputElement.classList.add('input-error-border');
  let notValidSpan = document.createElement('span');
  notValidSpan.classList.add('input-error-span')
  notValidSpan.textContent = errorMessage;
  inputElement.after(notValidSpan);
}

// funkcija sukurti studento kortelei padavus duomenis

let editThisStudent = '';
function createStudent(studentData) {

  let personName = studentData.name;
  let personSurname = studentData.surname;
  let personAge = studentData.age;
  let personTel = studentData.tel;
  let personEmail = studentData.email;
  let personItLevel = studentData.itLevel;
  let personGroup = studentData.group;
  let personSkills = studentData.skills;
  let personID = studentData.personID;


  let divStudent = document.createElement('div');
  divStudent.setAttribute('id', 'student-item');
  /// pridėsim personIP į klasę
  // divStudent.classList.add = `${studentData.personID}`;
  divStudent.classList.add(`${personID}`);
  
  let personNameEl = document.createElement('p');
  personNameEl.innerHTML = `<strong>Vardas:</strong> <span class="person-name all">${personName}</span>`;
  let personSurnameEl = document.createElement('p');
  personSurnameEl.innerHTML = `<strong>Pavardė:</strong> <span class="person-surname all">${personSurname}</span>`;
  let personAgeEl = document.createElement('p');
  personAgeEl.innerHTML = `<strong>Amžius:</strong> <span class="person-age all">${personAge}</span>`;
  let personTelEl = document.createElement('p');
  personTelEl.innerHTML = `<strong>Telefonas:</strong> <span>${cryptText(personTel)}</span>`;
  let personEmailEl = document.createElement('p');
  personEmailEl.innerHTML = `<strong>El. paštas:</strong> <span>${cryptText(personEmail)}</span>`;
  let personItLevelEl = document.createElement('p');
  personItLevelEl.innerHTML = `<strong>IT žinios:</strong> <span class="person-itlevel all">${personItLevel}</span>`;
  let personGroupEl = document.createElement('p');
  personGroupEl.innerHTML = `<strong>Grupė:</strong> <span class="person-group all">${personGroup}</span>`;

  let personSkillsWrapper = document.createElement('div');
  let personSkillsTitle = document.createElement('h4');
  personSkillsTitle.textContent = `Programavimo kalbos:`;
  let personSkillsList = document.createElement('ul');
  
  personSkills.forEach(element => {
    let personSkillLiEl = document.createElement('li');
    personSkillLiEl.textContent = element;
    personSkillLiEl.classList.add('person-skills', 'all')
    personSkillsList.append(personSkillLiEl);
  })

  divStudent.append(personNameEl, personSurnameEl, personAgeEl, personTelEl, personEmailEl, personItLevelEl, personGroupEl, personSkillsWrapper);
  personSkillsWrapper.append(personSkillsTitle, personSkillsList);

  document.querySelector('#students-list').prepend(divStudent);

  // mygtukas studento duomenims parodyti / paslėpti
  let buttonShowHide = document.createElement('input');
  buttonShowHide.setAttribute('type', 'submit');
  buttonShowHide.setAttribute('value', 'Rodyti duomenis');
  divStudent.prepend(buttonShowHide);

  //eventlisteneris showhide mygtukui  
  buttonShowHide.addEventListener('click', e => {
    if (e.target.value === 'Rodyti duomenis') {
      e.target.value = 'Slėpti duomenis';
      personTelEl.querySelector('span').textContent = personTel;
      personEmailEl.querySelector('span').textContent = personEmail;
    } else {
      e.target.value = 'Rodyti duomenis';
      personTelEl.querySelector('span').textContent = cryptText(personTel);
      personEmailEl.querySelector('span').textContent = cryptText(personEmail);
    }
  })
  
  //mygtukas studento kortelės ištrynimui
  let buttonRemovePerson = document.createElement('input');
  buttonRemovePerson.setAttribute('type', 'submit');
  buttonRemovePerson.setAttribute('value', 'Ištrinti studentą');
  buttonShowHide.after(buttonRemovePerson);
    
  //eventlisteneris ištrynimo mygtukui  
  buttonRemovePerson.addEventListener('click', e => {
    
    // atnaujinsime localstorage
    let initData = [] = JSON.parse(localStorage.getItem('allData'))
    let allData = [];
    initData.forEach(item =>{
      // console.log(item.personID, personID)
      if (item.personID !== personID) allData.push(item);
    })
    localStorage.setItem('allData', JSON.stringify(allData));

    //ištrinsim tą elementą
    e.target.parentElement.remove();
    createAlert(`Studento ${personName} ${personSurname} įrašas sėkmingai ištrintas!`, 'red');

  })
  
  //mygtukas studento duomenų redagavimui 
  let buttonEditData = document.createElement('input');
  buttonEditData.setAttribute('type', 'submit');
  buttonEditData.setAttribute('value', 'Keisti duomenis');
  buttonRemovePerson.after(buttonEditData);
  
  //eventlisteneris studento duomenų redagavimui 
  buttonEditData.addEventListener('click', e => {
    forma.querySelector('#name').value = personName;
    forma.querySelector('#surname').value = personSurname;
    forma.querySelector('#age').value = personAge;
    forma.querySelector('#tel').value = personTel;
    forma.querySelector('#email').value = personEmail;
    forma.querySelector('#itLevel').value = personItLevel;
    rangeUpdate();
    // radio mygtuko pažymėjimas
    forma.elements.radio.value = personGroup;
    // check boxų sužymėjimas
    forma.querySelectorAll('input[name=languages]').forEach(checkbox => {
      checkbox.checked = false;
      personSkills.forEach(skill => {
        if (checkbox.value === skill) checkbox.checked = true;
      })
    })
    
    // atnaujinsime localstorage
    let initData = [] = JSON.parse(localStorage.getItem('allData'))
    let allData = [];
    initData.forEach(item =>{
      if (item.personID !== personID) allData.push(item);
    })
    localStorage.setItem('allData', JSON.stringify(allData));
    //////////////////////////


    forma.querySelector('#submit').value = 'Išsaugoti pakeitimus';

    document.querySelectorAll('input[type=submit]').forEach(element => {
      if (element.id === 'submit') return;
      element.disabled = true;
    })
    // patį mygtuką atdisablinsim, rodysim
    e.target.disabled = false;
    e.target.style.backgroundColor = 'white';

    editThisStudent = e.target.parentElement;
    console.dir(e);
  })
}

///////////////////////////////////////////////////
let forma = document.querySelector('#student-form');

forma.addEventListener('input', event => {
   
  ///sukurti objektą, perduosim localstorage
  let personSkillsCheckedLS = forma.querySelectorAll('input[name=languages]:checked');
  let personSkillsLS = []; 
  personSkillsCheckedLS.forEach(element => personSkillsLS.push(element.value));
  
  let studentFormDataLS = { 
    name: forma.querySelector('#name').value,
    surname: forma.querySelector('#surname').value,
    age: forma.querySelector('#age').value,
    tel: forma.querySelector('#tel').value,
    email: forma.querySelector('#email').value,
    itLevel: forma.querySelector('#itLevel').value,
    group: forma.querySelector('input[name=radio]:checked').value,
    skills: personSkillsLS,
  }

  localStorage.setItem('inputData', JSON.stringify(studentFormDataLS));
})

// jei yra inputai, juos užkrausime
if (localStorage.getItem('inputData')) {
  let savedInputData = JSON.parse(localStorage.getItem('inputData'));
  console.dir(savedInputData)
  
  forma.querySelector('#name').value = savedInputData.name;
  forma.querySelector('#surname').value = savedInputData.surname;
  forma.querySelector('#age').value = savedInputData.age;
  forma.querySelector('#tel').value = savedInputData.tel;
  forma.querySelector('#email').value = savedInputData.email;
  forma.querySelector('#itLevel').value = savedInputData.itLevel;
  rangeUpdate();
  forma.elements.radio.value = savedInputData.group;
  forma.querySelectorAll('input[name=languages]').forEach(checkbox => {
    checkbox.checked = false;
    savedInputData.skills.forEach(skill => {
      if (checkbox.value === skill) checkbox.checked = true;
    })
  })
}


//formos submitinimas
forma.addEventListener('submit', e => {
  e.preventDefault();
  
  //supušinsim nodelisto elementus į paprastą masyvą
  let personSkillsChecked = forma.querySelectorAll('input[name=languages]:checked');
  let personSkills = []; 
  personSkillsChecked.forEach(element => personSkills.push(element.value));

  // let randomNum = 'id' + Math.floor(Math.random() * Math.random() * 10000000);
  let randomID = 'id' + Date.now() + Math.floor(Math.random() * 10000);

  let studentFormData = { ///sukurti objektą kursi perduosim createStudent
    name: forma.querySelector('#name').value,
    surname: forma.querySelector('#surname').value,
    age: forma.querySelector('#age').value,
    tel: forma.querySelector('#tel').value,
    email: forma.querySelector('#email').value,
    itLevel: forma.querySelector('#itLevel').value,
    group: forma.querySelector('input[name=radio]:checked').value,
    skills: personSkills,
    personID: randomID
  }

  //// formos validacija, pradžia
  if (validateForm(forma)) {     // jei (true) ty yra erroras, nutraukiam funkciją
    createAlert(` Užpildyti ne visi privalomi formos laukeliai!`, 'red');    
    return;
  } 

  // jei duomenis updeitinsim
  if (forma.querySelector('#submit').value === 'Išsaugoti pakeitimus') {
    editThisStudent.remove();
    forma.querySelector('#submit').value = 'Submit';

    // nuimame disabled nuo visų mygtukų
    document.querySelectorAll('input[type=submit]').forEach(element => element.disabled = false);

    ////

    createAlert(` Studento ${studentFormData.name} ${studentFormData.surname} įrašas sėkmingai atnaujintas!`, 'orange');
  } else {
    // jei tiesiog sukursime studento įrašą per formą
    createAlert(` Studento ${studentFormData.name} ${studentFormData.surname} įrašas sukurtas!`, 'green');
  }

  ///////////////////////////////////////
  // console.log(localStorage.getItem('allData'))
  let allData = [];
  if (!localStorage.getItem('allData')) {
    allData.push(studentFormData);
    localStorage.setItem('allData', JSON.stringify(allData));
  } else {
    let initData = [] = JSON.parse(localStorage.getItem('allData'))
    allData = initData.concat(studentFormData)
    localStorage.setItem('allData', JSON.stringify(allData));
    // console.log(allData)
  }

  /////////////////////////////////////////////////////////


  // sukuriame studento įrašą  
  createStudent(studentFormData);

  // nuresetiname formą
  forma.reset();

  // išvalome local storage po sekmingo formos pateikimo
  // localStorage.clear();
  localStorage.removeItem('inputData');

  rangeUpdate();

});





// paieškos forma
let searchForm = document.querySelector('#search-form');
let searchSpanEl = document.createElement('span');
document.querySelector('#search-submit').after(searchSpanEl);
searchForm.addEventListener('submit', e => {
  e.preventDefault();

  let searchInput = searchForm.querySelector('#search-input').value;
  searchSpanEl.textContent = ' ' + searchInput;

  let searchType = searchForm.querySelector('#search-select').value;

  let studentItems = document.querySelector('#students-list').querySelectorAll('#student-item');
  studentItems.forEach(element => {
    element.hidden = false;
    let result = false;

    let searchID = element.querySelectorAll(`${searchType}`);
    
    searchID.forEach(ids => {
      if (ids.innerText.toLowerCase().includes(searchInput.toLowerCase())) result = true;
      if (searchType === '.person-age' || searchType === '.person-itlevel') {
        result = false;
        if (ids.innerText === searchInput) result = true;
      }
    })

    if (!result) element.hidden = true;
  })
})