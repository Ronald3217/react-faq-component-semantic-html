const verifyStyles = (selectedTheme, question) => {
  let theme;
  if (question.hasOwnProperty("colors")) {
    theme = {
      ...selectedTheme,
      titleColor: question.colors.title,
      paragraphColor: question.colors.paragraph
    };
  } else {
    theme = {
      ...selectedTheme
    };
  }
  return theme;
};
export default verifyStyles;
