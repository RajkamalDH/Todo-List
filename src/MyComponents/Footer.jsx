import React from "react";

const Footer = () => {
  const footerStyle = {
    width: "100%",
    marginTop: "auto",
  };

  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">Copyright &copy; MyTodoList.com</p>
    </footer>
  );
};

export default Footer;
