import "./tyle.css";

const Title = ({ title, desc }) => {
  return (
    <>
      <div style={{marginTop: "100px", marginBottom: "40px"}} className="five">
        <h1>
          {title}
          <span>{desc}</span>
        </h1>
      </div>
    </>
  );
};

export default Title;
