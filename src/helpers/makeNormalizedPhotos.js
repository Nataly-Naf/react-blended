export const makeNormalizedPhoto = array => {
  return array.map(({ id, alt, avg_color, src: { medium, large } }) => ({
    id,
    alt,
    avg_color,
    medium,
    large,
  }));
};
