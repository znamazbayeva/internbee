import Navbar from "./Navbar";
import classes from "./Layout.module.css";
import LoginForm from "../LoginForm";
import { Fragment, useState } from "react";

function Layout(props) {
  const [isShowLogin, setIsShowLogin] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
    console.log(isShowLogin);
  };

  return (
    <Fragment>
      <Navbar handleLoginClick={handleLoginClick} />
      {/* <LoginForm isShowLogin={isShowLogin} /> */}
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
