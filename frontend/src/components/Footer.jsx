import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white p-6 text-gray-800">
      <div className="container mx-auto flex flex-wrap justify-between items-start space-y-6 md:space-y-0">
        
        {/* Logo and Book Cart */}
        <div className="flex flex-col items-center space-y-2 mb-6">
          <img src="/src/images/bookcart.png" alt="Logo" className="w-16 h-16" />
          <span className="font-bold text-4xl">Book Cart</span>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="hover:text-orange-500">Home</Link>
            </li>
            <li>
              <Link to="/books" className="hover:text-orange-500">Books</Link>
            </li>
            <li>
              <Link to="/exchange" className="hover:text-orange-500">Exchange</Link>
            </li>
          </ul>
        </div>

        {/* Customer Area */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Customer Area</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/account" className="hover:text-orange-500">My Account</Link>
            </li>
            <li>
              <Link to="/orders" className="hover:text-orange-500">Orders</Link>
            </li>
            <li>
              <Link to="/tracking" className="hover:text-orange-500">Tracking List</Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-orange-500">Terms</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-orange-500">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-orange-500">FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Register Section */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Don't Miss the Newest Books</h3>
          <p>Register now for the newest book updates!</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            Register Now
          </button>
        </div>

      </div>
    </footer>
  );
};

