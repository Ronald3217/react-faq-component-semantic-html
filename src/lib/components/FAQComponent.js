import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import getTheme from "./helpers/getTheme";
import verifyStyles from "./helpers/verifyStyles";

const Details = styled.details`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) =>
    theme.paragraphColor ? theme.paragraphColor : theme.color};
  padding: 5px;
  margin-bottom: 5px;

  &[open] {
  }

  &[open] .summary {
    border-bottom: ${({ theme }) =>
    theme.borderBottom}; /*Border separator heading - paragrahp*/
    margin-bottom: 0.5em;
  }
  &:hover {
    cursor: pointer;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;
const Sumary = styled.summary`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => (theme.titleColor ? theme.titleColor : theme.color)};
  padding: 10px 0;
`;

const FAQComponent = ({ data, theme, customTheme, schemaName }) => {
  let selectedTheme = getTheme(theme, customTheme);
  let FAQSCHEMALIST = data.map((question) => ({
    "@type": "Question",
    name: question.title,
    acceptedAnswer: {
      "@type": "Answer",
      text: question.paragraph
    }
  }));
  return (
    <Fragment>
      {data.map((question) => {
        const theme = verifyStyles(selectedTheme, question);
        return (
          <Details theme={theme} key={question.title}>
            <Sumary theme={theme} className="summary">
              {question.title}
            </Sumary>
            {question.paragraph}
          </Details>
        );
      })}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          name: schemaName,
          mainEntity: FAQSCHEMALIST
        })}
      </script>
    </Fragment>
  );
};
FAQComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      paragraph: PropTypes.string.isRequired,
      colors: PropTypes.exact({
        title: PropTypes.string,
        paragraph: PropTypes.string
      })
    })
  ),
  theme: PropTypes.oneOf([
    "dark",
    "blue",
    "green",
    "purple",
    "netflix",
    "custom"
  ]),
  customTheme: PropTypes.exact({
    background: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    borderBottom: PropTypes.string.isRequired
  }),
  schemaName: PropTypes.string.isRequired
};

export default FAQComponent;
