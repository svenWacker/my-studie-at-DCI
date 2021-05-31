const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className="footer">
      <h4>Copyright© {year}</h4>
    </div>
  );
};
export default Footer;
