import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="heading">
      <img
        src="https://imgs.search.brave.com/R2GZKH_X6nHK32bb6z2ao1GlYa66uKLdJt9HKuUNoM0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9sb2dv/LWRlc2lnbi1mYXN0/LWZvb2QtZGVsaXZl/cnktc2VydmljZS1w/cm92aWRlcy1mcmVz/aC1kZWxpY2lvdXMt/bWVhbHMtdG8tY3Vz/dG9tZXJzLXNob3dp/bmctZmVhdHVyaW5n/LWZydWl0LTM5OTI5/ODEyMC5qcGc"
        alt="logo"
        style={{ width: "120px", cursor: "pointer" }}
      />
      <nav>
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>Orders</li>
          <li>Cart</li>
          <li>Account</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
