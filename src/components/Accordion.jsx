import PropTypes from 'prop-types';

Accordion.propTypes = {
  variant: PropTypes.oneOf(['default', 'color', 'divider']),
	grade: PropTypes.oneOf(['g35', 'g68', 'g912'])
}

export function Accordion({ variant, grade }) {

  return (
		<div className={`source__grid ${grade} `}>
      <ul className={`source__accordion source__accordion--${variant}`}>
        <li>
          <details>
            <summary>
              <h5>Accordion Title</h5>
            </summary>
            <p>This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.</p>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h5>Accordion Title</h5>
            </summary>
            <p>This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.</p>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h5>Accordion Title</h5>
            </summary>
            <p>This is a paragraph of placeholder text. It is only here to help show the layout of the page and how the text will flow. Replace this placeholder text with your own meaningful content.</p>
          </details>
        </li>
      </ul>
    </div>
  )
}