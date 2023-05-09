const getTheme = (theme, customTheme) => {
  switch (theme) {
    case "dark":
      return {
        backgroundHeader: `rgba(0, 0, 0, 0.9)`,
        background: `rgba(0, 0, 0, 0.9)`,
        color: `#fff`,
        borderBottom: `.5px solid #fff`
      };
    case "blue":
      return {
        background: `#0e57b7`,
        backgroundHeader: "#0e57b7",
        color: `#fff`,
        borderBottom: `.5px solid #ccc`
      };

    case "green":
      return {
        background: "#096",
        backgroundHeader: "#004d33",
        color: `#fff`,
        borderBottom: `.5px solid #ccc`
      };
    case "netflix":
      return {
        background: "#303030",
        backgroundHeader: "#303030",
        color: `#fff`,
        borderBottom: `.5px solid #000`
      };
    case "purple":
      return {
        background: `rgb(158, 134, 255)`,
        backgroundHeader: "rgb(150, 134, 255)",
        color: `#fff`,
        borderBottom: `.5px solid #fff`
      };
    case "custom":
      return {
        background: customTheme.background,
        color: customTheme.color,
        borderBottom: customTheme.borderBottom
      };
    default:
      return {
        background: "#e1e1e1",
        backgroundHeader: "#e1e1e1",
        color: "#000",
        borderBottom: ".5px solid rgba(0, 0, 0, 0.1) "
      };
  }
};
export default getTheme;
