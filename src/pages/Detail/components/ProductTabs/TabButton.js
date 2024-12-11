const TabButton = ({ name, count, isActive, onClick }) => {
  return (
    <button
      className={`tab-button ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {name}
      {count && `(${count})`}
    </button>
  );
};

export default TabButton;
