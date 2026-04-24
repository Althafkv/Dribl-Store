import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative">
      {/* Hero Image Section */}
      <div className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1000&q=60&auto=format"
          alt="Hero"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-16 md:pb-24">
            <div className="max-w-2xl space-y-6 animate-slide-up">
              <span className="inline-block text-xs font-medium uppercase tracking-widest text-white/80">
                Football Fan Store
              </span>
              <h1 className="font-display text-display-md md:text-display-lg text-white font-bold leading-tight">
                Where Football Becomes a Lifestyle
              </h1>
              <p className="text-base md:text-lg text-white/70 max-w-lg">
                Authentic football merchandise crafted for true fans.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/products">
                  <Button
                    size="lg"
                    className="h-12 px-8 text-sm font-medium rounded-none"
                  >
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/products?category=Jerseys">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-8 text-sm font-medium rounded-none border-foreground/20 hover:bg-foreground hover:text-background"
                  >
                    Browse Jerseys
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Bar */}
      <div className="border-y border-border bg-background">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            <div className="py-6 md:py-8 text-center">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                PREMIUM QUALITY
              </p>
              <p className="text-sm font-medium text-foreground">
                Most loved by our customers
              </p>
            </div>
            <div className="py-6 md:py-8 text-center">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                24/7 SUPPORT
              </p>
              <p className="text-sm font-medium text-foreground">
                We’re here to help anytime
              </p>
            </div>
            <div className="py-6 md:py-8 text-center hidden md:block">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                Secure Payment
              </p>
              <p className="text-sm font-medium text-foreground">
                100% secure checkout
              </p>
            </div>
            <div className="py-6 md:py-8 text-center hidden md:block">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                Fast Delivery
              </p>
              <p className="text-sm font-medium text-foreground">
                Delivered to your doorstep
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
