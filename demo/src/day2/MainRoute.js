import React from "react";

const MainRoute = () => {
  return (
    <div>
      <Header />
      MainRoute
      <Footer />
    </div>
  );
};

export default MainRoute;

//Nested Component

const Header = () => {
  return <div>Header</div>;
};
const Footer = () => {
  return <div>Footer</div>;
};
