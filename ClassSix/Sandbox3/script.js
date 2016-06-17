var peopleAge = [20,10,15,26,99];

var filterPeopleAge = peopleAge.filter(checkID);

function checkID(age) {
  return age >= 18;
}
console.log(filterPeopleAge);
