const size = {
  table: "1000px",
  mobile: "500px",
};

export const device = {
  desktop: `(min-width: ${size.table})`,
  table: `(max-width: ${size.table})`,
  mobile: `(max-width: ${size.mobile})`,
};
