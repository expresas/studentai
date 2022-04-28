# studentai
Sukurti kontaktų formą. Ją pridavus (submit):
1. Kontaktų forma turi išsivalyti.
2. Žemiau kontaktų formos turi būtų atvaizduoti visi duomenys, pvz. „Amžius: 25m.".
3. Kontaktų formoje turi būti šie laukeliai:
1. Tekstinis laukelis vardui (privalomas).
2. Tekstinis laukelis pavardei (privalomas).
3. Skaičiaus laukelis amžiui (privalomas).
4. Laukelis įvesti telefono numerį (neprivalomas).
5. Laukelis įvesti el. paštą (privalomas).
6. Range tipo laukelis, kuris skirtas įvertinti savo IT žinias nuo 1 iki 10. Galimas vertinimas tik sveikiems skaičiams.
7. Radio tipo laukeliai, kuriuose pasirenkamas grupės numeris. Turi būti galimybė pasirinkti grupes nuo TYPE 1gr. iki TYPE 10gr.
4. Šalia kiekvieno įvesties (input) elemento, pridėti label elementą, kuris žymi laukelio pavadinimą.

ANTRA DALIS:
1. Sukurti div elementą, kuris turės id „students-list".
2. Kiekvieną kartą pridavus formą (submit), turi būti sukurtas naujas div elementas su klase „student-item" ir pridedamas į „students-list" elemento pradžią.
3. Duomenys apie studentą turi būti įdėti į „student-item" elementą.
4. Formoje pridėti „checkbox" tipo input'ą, kuriame pateikta galimybę rinktis iš dominančių programavimo kalbų.
5. Dominančias programavimo kalbas atvaizduoti „student-item" elemente.
6. Sukūrus studentą, turi iššokti <span> elementas, kuris informuoja apie studento sukūrimą: „Sukurtas studentas (Vardas Pavardė)". Šis span elementas dingsta po 5 sekundžių.

TREČIA DALIS:
1. Vietoje asmens duomenų (el. paštas ir tel. nr) rodyti tik žvaigždutes „****".
2. Kiekviename „student-item" elemente sukurti mygtuką „Rodyti asmens duomenis".
3. Paspaudus šį mygtuką:
3.1. Parodyti to studento el. paštą ir tel. nr.
3.2. Pakeist mygtuko tekstą į „Slėpti asmens duomenis".
4. Jeigu asmens duomenys yra rodomi, tai paspaudus mygtuką:
4.1. Paslėpti asmens duomenis.
4.2. Mygtuko tekstą pakeisti į „Rodyti asmens duomenis".

KETVIRTA UŽDUOTIS (formos validacija naudojant JavaScript):
1. Priduodant formą (submit) patikrinti ar privalomi laukeliai nėra tušti.
2. Jeigu bent vienas privalomas formos laukelis yra tuščias:
2.1. Formos alert žinutėje reikia parašyti, jog ne visi laukeliai yra užpildyti. Šis tekstas turi būti raudonos spalvos.
2.2. Kiekvienas privalomas input laukelis, kuris nėra užpildytas:
2.2.1. Turi būti apvestas raudonu rėmeliu.
2.2.2. Šalia laukelio turi būti parašytas raudonas tekstas: „Šis laukelis yra privalomas".

PENKTA UŽDUOTIS (studento ištrynimas):
1. Prie kiekvieno sukurti studento elemento pridėti mygtuką „Ištrinti studentą".
2. Paspaudus šį mygtuką, studento elementas yra ištrinamas.
3. Ištrynus studentą, turi iššokti <span> elementas, kuris informuoja apie studento ištrynimą: „Studentas (Vardas Pavardė) sėkmingai ištrintas.". Šis span elementas dingsta po 5 sekundžių.

ŠEŠTA UŽDUOTIS:
1. Sukurti pradinius duomenų masyvą, kuriame būtų bent 5 studentų duomenys (objektų formatu).
2. Sukurti funkciją, kuri priima šiuos duomenis ir užkrovus puslapį į ekraną iškart išveda duomenis iš šio masyvo.

PAPILDOMA UŽDUOTIS (formos validacija naudojant JavaScript):
Papildyti formos validaciją. Jeigu:
1. Vardas yra trumpesnis nei 3 simboliai, parašyti: „Vardas privalo būti bent 3 simbolių ilgumo".
2. Pavardė yra trumpesnė nei 3 simboliai, parašyti: „Pavardė privalo būti bent 3 simbolių ilgumo".
3. Amžius yra neigamas, parašyti: „Amžius privalo būti teigiamas skaičius".
4. Amžius yra daugiau nei 120 metų, parašyti: „Įvestas amžius yra per didelis".
5. Telefono numeris yra mažiau nei 9 arba daugiau nei 12, parašyti: „Įvestas telefono numeris yra neteisingas".
6. Elektroninis paštas yra trumpesnis nei 5 simboliai arba jame nėra panaudotas @ simbolis, parašyti: „Įvestas elektroninis paštas yra neteisingas".

SEPTINTA UŽDUOTIS:
1. Prie kiekvieno studento pridėti mygtuką, kurį paspaudus leistų redaguoti studento duomenis.
2. Redaguojant studentą, submit mygtuko tekstas turėtų pasikeisti į „Save Changes".
3. Pakeitus studento duomenis, turi iššokti <span> elementas, kuris informuoja apie studento duomenų redagavimą: „Studento (Vardas Pavardė) duomenys sėkmingai pakeisti". Šis span elementas dingsta po 5 sekundžių.

AŠTUNTA UŽDUOTIS (filtravimas):
1. HTML faile sukurti naują form'ą. Joje pridėti šiuos input elementus: text ir submit.
2. Formos submit event'o metu, gauti įvestą tekstą ir:
2.1. Patikrinti ar studentų sąraše yra studentas, kurio varde arba pavardėje yra įvestas tekstas.
2.2. Ekrane atvaizduoti tik tuos studentus, kurie tenkina sąlygą.
3. Prie formos pridėti select elementą ir jame sukurti sąrašą (option elementus), kuriuose būtų nurodytą pagal kurią informaciją studento yra ieškoma (vardas, pavardė, grupė ir t.t., bet išskyrus telefono numerį ir elektroninį paštą).
4. Patobulinti formą, kad studento būtų ieškoma ne tik pagal vardą ir pavardę, tačiau ir pagal pasirinktą atributą.

DEVINTA UŽDUOTIS:
1. Studento kūrimo ir redagavimo metu reikia sukurti visų studentų masyvą (tokiu pačiu formatu kaip ir INITIAL_STUDENT_DATA).
2. Šį masyvą pridėti į localStorage.
3. Puslapio perkrovimo metu iš localStorage esančio masyvo sukurti studentų sąrašą (pradinių studentų sukūrimo funkcionalumas).
