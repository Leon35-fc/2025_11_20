import Nav from "react-bootstrap/Nav";

function BottomFooter() {
  const annoCorrente = new Date().getFullYear();
  return (
    <>
      <Nav className="justify-content-center bg-dark" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">
            {" "}
            <span>&copy;</span> {annoCorrente} Copyright{" "}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default BottomFooter