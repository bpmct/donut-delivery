const Footer = () => {
  return (
    <p className="text-muted text-center">
      Copyright &copy; {new Date().getFullYear()} {process.env.SHOP_NAME}. All
      Rights Reserved.
    </p>
  );
};

export default Footer;
