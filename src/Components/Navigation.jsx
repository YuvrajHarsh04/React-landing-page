

const Navigation  = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li href="#">Home</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <a href="https://yuvrajharsha.in" target="blank">Contact</a>
      </ul>

      <button>login</button>
    </nav>
  );
};

export default Navigation;