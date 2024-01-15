import styled from "styled-components";
// this is Navbar component and here i am using component style
const Navbar = () => {
  return (
    <>
      <Div>
        <Anchor href="/">
          <img
            className="logo"
            src="https://img.freepik.com/premium-vector/flat-design-colored-portfolio-template_705341-9.jpg?w=740"
            alt="logo"
          />
          <h1 style={{ marginLeft: "15px" }}>photoFolio</h1>
        </Anchor>
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  background: #5ea8a5;
  height: 80px;
`;
const Anchor = styled.a`
  display: flex;
  justify-content: start;
  align-items: center;
  color: white;
  text-decoration: none;
`;

export default Navbar;
