import { Fragment } from "react";
import Footer from "./footer/footer";
import Header from "./header/header";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Layout(props: any) {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
}
export default Layout;
