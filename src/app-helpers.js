export const convertTemp = temp => Math.round(temp * (9 / 5) - 459.67);

export const convertDate = date =>
  new Date(date).toLocaleTimeString([], {
    timeStyle: "short"
  });
