import { Fragment } from "react";
import Footer from "./footer";
import Header from "./header";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Layout(props: any) {
  return (
    <Fragment>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </Fragment>
  );
}
export default Layout;
