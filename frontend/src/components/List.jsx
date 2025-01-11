import PropTypes from "prop-types";

const List = ({ components }) => {
  return (
    <ul
      role="list"
      className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
    >
      {components.map(({ id, Component, ...props }) => (
        <li key={id}>
          <Component {...props} />
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  components: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      Component: PropTypes.elementType.isRequired,
      props: PropTypes.object,
    })
  ).isRequired,
};

export default List;
