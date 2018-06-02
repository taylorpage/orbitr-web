export const genderFilter = (gender, profiles) => {
  return profiles.filter(person => {
    if (gender === 'any') {
      return (
        person.gender === 'male' ||
        person.gender === 'female'
      )
    } else {
      return person.gender === gender;
    }
  });
};