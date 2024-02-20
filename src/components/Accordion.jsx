import PropTypes from 'prop-types';

Accordion.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'color', 'divider']),
  grade: PropTypes.oneOf(['g35', 'g68', 'g912']),
};

export function Accordion({ title, content, variant, grade }) {
  return (
    <div className={grade}>
      <ul className={`source__accordion source__accordion--${variant}`}>
        <li>
          <details>
            <summary>
              <h5>{title}</h5>
            </summary>
            <p>{content}</p>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h5>{title}</h5>
            </summary>
            <p>{content}</p>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h5>{title}</h5>
            </summary>
            <p>{content}</p>
          </details>
        </li>
      </ul>
    </div>
  );
}
