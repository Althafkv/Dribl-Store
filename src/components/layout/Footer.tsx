import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook } from "lucide-react";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("https://formspree.io/f/mkokkdkk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setSuccess(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container py-16 md:py-20">
          <div className="max-w-xl mx-auto text-center space-y-4">
            <h3 className="font-display text-2xl md:text-3xl">
              Join Our Community
            </h3>

            <p className="text-sm text-background/60">
              Get updates on new arrivals and exclusive offers.
            </p>

            {success ? (
              <p className="text-green-500 text-sm">
                ✅ Subscribed successfully!
              </p>
            ) : (
              <form
  onSubmit={handleSubmit}
  className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2 items-center"
>
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    placeholder="Enter your email"
    className="w-full sm:flex-1 h-12 px-4 bg-background/10 border border-background/20 text-background placeholder:text-background/40 text-sm focus:outline-none focus:border-background/40"
  />

  <button
    type="submit"
    className="h-10 px-5 w-auto bg-background text-foreground text-sm font-medium hover:bg-background/90 transition-colors"
  >
    Subscribe
  </button>
</form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-display text-xl tracking-tight mb-4 block"
            >
              DRIBL STORE
            </Link>
            <p className="text-sm text-background/60 max-w-xs">
              Your ultimate destination for football merchandise. Jerseys,
              posters, stickers & more.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-background/60 hover:text-background transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-background transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-background transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-background/40 mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/products"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Jerseys"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Jerseys
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Frames & Posters"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Frames & Posters
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Stickers"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Stickers
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-background/40 mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/contact-us"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://wa.link/34zpl3"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs uppercase tracking-widest text-background/40 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>g4genius1313@gmail.com</li>
              <li>+91 7902360099</li>
              <li>Mon - Fri: 10AM - 4PM IST</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} Dribl Store - All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="text-xs text-background/50 hover:text-background transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-xs text-background/50 hover:text-background transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
