export const filter = (
  age: number[],
  distance: number,
  gender: string,
  status: string,
  profiles: any[]
) => {
  return profiles.filter(profile => {
    return (
      // Correct age
      (profile.age >= age[0] && profile.age <= age[1]) &&

      // Correct distance
      (profile.distance <= distance) &&

      // Correct gender
      (gender === 'any' ?
        true :
        profile.gender === gender) &&

      // Correct status
      (status === 'any' ?
        true :
        profile.status === status)
    );
  });
};
