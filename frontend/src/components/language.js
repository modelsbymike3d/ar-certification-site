import React from "react"
import { IntlContextConsumer, changeLocale, injectIntl } from "gatsby-plugin-intl"

const languageName = {
  en: "English"
}

function switchLanguage(event) {
  changeLocale(event.target.value);
}

const Language = ({ currentLang }) => {
  return (
    <div>
      <div className="relative">
        
      <select value={currentLang} onChange={switchLanguage} className="bg-green-700">
      <IntlContextConsumer>
        
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <option
              key={language}
              value={language}
            >
              {languageName[language]}
            </option>
          ))
        }
      </IntlContextConsumer>
      </select>
    </div>
    </div>
  )
}

export default Language
