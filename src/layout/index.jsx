import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Container from "../components/Container"

const Layout = () => {
  return (
    <Container>

      <Main>

        <Header />
        <div style={{ flex: 1 }}>

          <Outlet />
        </div>
        <Footer />
      </Main>
    </Container>
  );
};

export default Layout;
