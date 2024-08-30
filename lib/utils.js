// Start case
export const startCase = (str) => {
  if (!str) return;

  const capitalizedStr = str
    .replace(/[-_\s]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return capitalizedStr;
};
