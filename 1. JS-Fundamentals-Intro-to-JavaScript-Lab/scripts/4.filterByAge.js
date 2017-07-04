function filter(minAge, name1, age1, name2, age2) {
    minAge = Number(minAge);
    age1 = Number(age1);
    age2 = Number(age2);
    let firstPerson = { name: name1, age: age1 };
    let secondPerson = { name: name2, age: age2 };

    if(Number(age1) >= minAge) {
        console.log(firstPerson);
    }

    if(Number(age2) >= minAge) {
        console.log(secondPerson);
    }
}

filter(['12', 'Ivan', '15', 'Asen', '9']);