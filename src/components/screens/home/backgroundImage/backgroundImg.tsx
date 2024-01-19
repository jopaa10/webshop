import { PageTitle } from "@/components/common/pageTitle/pageTitle";

import "./backgroundImg.scss";

export function BackgroundImg(props: {
  name: string;
  backgroundImg: string;
}): JSX.Element {
  return (
    <div className="background">
      <div
        className="background__image"
        style={{ backgroundImage: `url(${props.backgroundImg})` }}
      >
        <PageTitle text={props.name} />
      </div>
    </div>
  );
}
