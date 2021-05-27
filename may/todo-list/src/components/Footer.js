const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div>
      <h4>Copyright ©{year}</h4>
    </div>
  );
};
export default Footer;
