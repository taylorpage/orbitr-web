export const filter = (
  ages: object,
  distance: number,
  genders: object,
  statuses: object,
  profiles: any[]
) => {
  return profiles.filter(profile => {
    return (
      // Correct age
      (determineAge(ages, profile.age)) &&

      // Correct distance
      (profile.distance <= distance) &&

      // Correct gender
      (determineGender(genders, profile.gender)) &&

      // Correct status
      (determineStatus(statuses, profile.statuses))
    );
  });
};

const determineAge = (ages: object, profileAge: number) => {
  for (const age in ages) {
    if (ages[age] && +age >= profileAge) {
      return true;
    }
  }
  return false;
};

const determineGender = (genders: object, profileGender: string) => {
  for (const gender in genders) {
    if (genders[gender] && gender === profileGender) {
      return true;
    }
  }
  return false;
};

const determineStatus = (statuses: object, profileStatuses: string[]) => {
  for (const status in statuses) {
    if (statuses[status] && profileStatuses.indexOf(status) > -1) {
      return true;
    }
  }
  return false;
};
