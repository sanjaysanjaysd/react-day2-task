import PropTypes from "prop-types";

export default function Square(props = {}) {
  const { width, height, background, message, items } = props;
  return (
    <div
      style={{
        width: width,
        height: height,
        background: background,
      }}
      className="square"
    >
      {message}
      <ul>
        {items.map((element, index) => (
          <li key={index}>
            {element.isAvailable ? "✅" : "❌"} {element.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Circle() {
  return <div>Circle</div>;
}

Square.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  background: PropTypes.string,
  message: PropTypes.string,
  items: PropTypes.array,
};
