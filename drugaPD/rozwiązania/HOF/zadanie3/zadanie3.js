
const persons = [
    { name: "Maks", age: 20 },
    { name: "Maja", age: 15 },
    { name: "Sonya", age: 18 },
    { name: "Jakub", age: 19 },
    { name: "Jan", age: 16 },
    { name: "Michał", age: 25 }
];


const fullAgePersons = persons.filter(person => person.age >= 18);

console.log("Pełnoletni ludzie to:")
for (let i in fullAgePersons) {
    console.log(fullAgePersons[i].name);
}