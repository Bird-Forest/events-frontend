// *******
function getOrganizerRatings(data, labels) {
  const organizerRatings = {};

  data.forEach(item => {
    const { organizer, participants } = item;
    const labelIndex = labels.findIndex(label => label === organizer);

    if (labelIndex !== -1) {
      if (!organizerRatings[organizer]) {
        organizerRatings[organizer] = 0;
      }
      organizerRatings[organizer] += participants.length;
    }
  });
  // Преобразуем объект рейтингов в массив значений
  const ratingsArray = Object.values(organizerRatings);

  return ratingsArray;
}

// *******
function getSpecialityRatings(data, labels) {
  const specialityRatings = {};

  data.forEach(item => {
    const { title, participants } = item;
    const labelIndex = labels.findIndex(label => label === title);

    if (labelIndex !== -1) {
      if (!specialityRatings[title]) {
        specialityRatings[title] = 0;
      }
      specialityRatings[title] += participants.length;
    }
  });
  // Преобразуем объект рейтингов в массив значений
  const ratingsArray = Object.values(specialityRatings);

  return ratingsArray;
}

export { getOrganizerRatings, getSpecialityRatings };
