import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, ChevronDown, Leaf, LogIn } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Category } from "../types";
import LoginForm from "../pages/Login";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();
  const [categories, setCategories] = useState<any[]>([]);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const tmp: { key: string; value: number }[] = Object.entries(Category)
      .filter(([key, value]) => isNaN(Number(key))) // remove numeric keys
      .map(([key, value]) => ({ key, value: Number(value) }));
    setCategories(tmp);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-emerald-600"
      : "text-gray-700 hover:text-emerald-600";
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">Agrimak</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`transition-colors ${isActive("/")}`}>
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <button
                className={`flex items-center space-x-1 transition-colors ${isActive(
                  "/products"
                )}`}
              >
                <span>Products</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {isProductsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                  <Link
                    to="/products"
                    className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                  >
                    All Products
                  </Link>
                  {categories.slice(1).map((category) => (
                    <Link
                      key={category.key}
                      to={`/products?category=${encodeURIComponent(
                        category.value
                      )}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                    >
                      {category.key}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`transition-colors ${isActive("/about")}`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${isActive("/contact")}`}
            >
              Contact
            </Link>
          </nav>

          {/* Cart & Mobile Menu & Login */}
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative p-2 text-gray-700 hover:text-emerald-600 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Login button*/}
            <button
              onClick={() => {
                setShowLogin(true);
              }}
              className="p-2 text-gray-700 hover:text-emerald-600 transition-colors"
              title="Admin Login"
            >
              <LogIn className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`transition-colors ${isActive("/")}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`transition-colors ${isActive("/products")}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/about"
                className={`transition-colors ${isActive("/about")}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={`transition-colors ${isActive("/contact")}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
    </header>
  );
}
