import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Container from "../components/Container"
import { useEffect, useState } from "react";
import arrow from "../assets/svg/arrow.svg"
import styles from "./style.module.css"
import useDebounce from "../hooks/useDebounce";

const Layout = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 })
  useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: 'smooth'
    })
  }, [position])



  const [visibility, setVisibility] = useState('none');
  const handleScroll = useDebounce(() => {
    if (200 < window.scrollY) {
      setVisibility('flex');
    } else {
      setVisibility('none');
    }
  }, 100);

  useEffect(() => {
    const onScroll = () => handleScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);
  return (
    <Container>

      <Main>

        <Header />
        <div style={{ flex: 1 }}>

          <Outlet />
        </div>
        <Footer />
        <div style={{ display: visibility }} className={styles.box}>


          <button
            className={styles.arrow}
            onClick={() => setPosition({ top: 0, left: 0 })}

          ><img src={arrow} alt="" /></button>

        </div>
      </Main>
    </Container>
  );
};

export default Layout;
