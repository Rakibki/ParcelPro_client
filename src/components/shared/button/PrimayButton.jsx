const PrimayButton = ({ children, size = "20px" }) => {
  return (
    <button
      style={{
        fontWeight: "600",
        padding: `10px ${size}`,
        backgroundColor: "#f76649",
        color: "#fff",
        borderRadius: "5px",
        fontFamily: "cursive",
      }}
    >
      {children}
    </button>
  );
};

export default PrimayButton;
