const data = {
  person1: 'middle-upper-lower-lower-lower class',
  person2: 'lower-upper-lower-lower-middle class',
  person3: 'middle-upper-lower-lower-middle class',
  person4: 'upper-upper-lower-lower-middle class',
  person5: 'lower-lower-upper class',
  person6: 'upper class',
};

const sortPersons = (persons) => {
  // mapping weights
  const weights = {
    upper: 2,
    middle: 1,
    lower: 0,
  };

  return (
    Object.keys(persons)
      .map(
        (person) =>
          data[person]
            .split(' ')[0] // removing " class"
            .split('-') // splitting into array
            .map((rank) => weights[rank]) // converting to weights
            .reverse() // reversing
            .join('') // converting back to string
            .padEnd(10, 1) + ` ${person}` // adding missing default ranks and person name (I could also make an object containing name and rank seperately)
      )
      // sorting in descending order
      .sort((a, b) => {
        if (a < b) {
          return 1;
        }
        if (a > b) {
          return -1;
        }

        return 0;
      })
      // creating array with person names
      .map((person) => person.split(' ')[1])
  );
};

console.log('sortPersons', sortPersons(data));
// <-- [
//   "person6",
//   "person5",
//   "person4",
//   "person3",
//   "person2",
//   "person1"
// ]
