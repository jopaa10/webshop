import "./pageTitle.scss";

export const PageTitle = (props: { text: string }) => {
  return <p className={"page-title"}>{props.text}</p>;
};
