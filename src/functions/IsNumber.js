export const isNumber = (event) => {
  if (!/[0-9]/.test(event.key)) {
    event.preventDefault();
  }
};
