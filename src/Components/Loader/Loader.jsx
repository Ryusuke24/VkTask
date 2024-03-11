import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = props => (
  <ContentLoader
    speed={1}
    width={1500}
    height={700}
    viewBox="0 0 600 700"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="25" y="15" rx="5" ry="5" width="512" height="202" />
    <rect x="25" y="232" rx="5" ry="5" width="512" height="202" />
    <rect x="25" y="453" rx="5" ry="5" width="512" height="202" />
  </ContentLoader>
);

export default MyLoader;
