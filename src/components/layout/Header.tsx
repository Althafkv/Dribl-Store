import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header: React.FC = () => {
  const { totalItems } = useCart();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Shop" },
    { href: "/products?category=Jerseys", label: "Jerseys" },
    { href: "/products?category=Frames & Posters", label: "Posters" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      {/* Announcement Bar */}
      <div className="bg-foreground text-background text-center py-2 text-xs font-medium tracking-wide">
        Gear Up for Match Day
      </div>

      <div className="container flex h-18 items-center justify-between border-b border-border/40">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-transparent"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 p-0">
            <div className="p-6 border-b border-border">
              <Link
                to="/"
                className="font-display text-xl font-semibold tracking-tight"
              >
                DRIBL
              </Link>
            </div>
            <nav className="flex flex-col p-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="py-3 text-base font-medium text-foreground hover:text-muted-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link to="/" className="flex items-center gap">
          <img
            src="/logoo.png"
            alt="logo"
            className="w-11 h-11 object-contain drop-shadow-sm"
          />

          <span className="font-display text-xl md:text-2xl font-semibold tracking-tight text-foreground">
            DRIBL STORE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">
          {/* Cart */}
          <Link to="/cart">
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-transparent"
            >
              <ShoppingCart className="h-[18px] w-[18px]" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-2xs font-medium text-background">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
