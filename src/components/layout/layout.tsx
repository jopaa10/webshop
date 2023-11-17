import { Fragment } from "react";
import Header from "./header";

function Layout(props: any) {
  return (
    <Fragment>
      <Header />
      <div>{props.children}</div>
    </Fragment>
  );
}
export default Layout;
