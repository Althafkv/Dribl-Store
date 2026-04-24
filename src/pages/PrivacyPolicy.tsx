import React from "react";
import MainLayout from "@/components/layout/MainLayout";

const PrivacyPolicy: React.FC = () => {
  return (
    <MainLayout>
      <div className="container py-12 md:py-20 max-w-3xl">
        <h1 className="font-display text-3xl md:text-4xl mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Last updated: February 6, 2026
        </p>

        <div className="prose prose-sm max-w-none space-y-8 text-foreground/80">
          <section>
            <p>
              At <strong>DRIBL</strong>, we respect your privacy and are
              committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              data when you visit our website or purchase football-related
              products from us.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              1. Information We Collect
            </h2>
            <p>When you visit DRIBL or place an order, we may collect:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>
                <strong>Personal Information:</strong> Name, phone number, and
                delivery address provided during checkout.
              </li>
              <li>
                <strong>Payment Information:</strong> Selected payment method
                and transaction reference IDs processed securely via Razorpay.
                We do not store your card or UPI details.
              </li>
              <li>
                <strong>Usage Data:</strong> Pages viewed, time spent on the
                website, browser type, IP address, and device information.
              </li>
              <li>
                <strong>Cookies:</strong> Small data files used to improve site
                functionality, performance, and user experience.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                To process, confirm, and deliver your football merchandise.
              </li>
              <li>
                To communicate order confirmations, shipping updates, and
                support responses.
              </li>
              <li>
                To improve our website, products, and overall user experience.
              </li>
              <li>
                To send promotional offers and updates (only if you opt in).
              </li>
              <li>To detect, prevent, and address fraud or security issues.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              3. Information Sharing & Disclosure
            </h2>
            <p>
              We do not sell, trade, or rent your personal information. We may
              share limited data only with:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>
                <strong>Delivery & Logistics Partners:</strong> To ship and
                deliver your orders.
              </li>
              <li>
                <strong>Payment Gateways:</strong> Razorpay for secure payment
                processing.
              </li>
              <li>
                <strong>Legal or Regulatory Authorities:</strong> If required by
                law or to protect our legal rights.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              4. Data Security
            </h2>
            <p>
              We use reasonable administrative, technical, and physical security
              measures to protect your data. Payment transactions are encrypted
              and handled through Razorpay’s secure infrastructure. While we
              strive to protect your information, no online transmission can be
              guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              5. Your Rights & Choices
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>
                Access, update, or request deletion of your personal data.
              </li>
              <li>Opt out of marketing communications at any time.</li>
              <li>Request a copy of the information we store about you.</li>
              <li>Withdraw consent where processing is based on consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              6. Cookies Policy
            </h2>
            <p>
              Cookies help us improve site performance and user experience. You
              may disable cookies through your browser settings; however, some
              website features may not function correctly.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              7. Third-Party Links
            </h2>
            <p>
              Our website may include links to third-party websites. DRIBL is
              not responsible for the privacy practices or content of external
              sites. We recommend reviewing their privacy policies before
              sharing personal data.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              8. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date. Your
              continued use of the website indicates acceptance of the updated
              policy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              9. Contact Us
            </h2>
            <p>If you have questions or concerns about this Privacy Policy:</p>
            <ul className="list-none space-y-1 mt-2">
              <li>
                Email: <strong>g4genius1313@gmail.com</strong>
              </li>
              <li>
                Phone: <strong>+91 7902360099</strong>
              </li>
              <li>Business Hours: Mon – Fri, 10:00 AM – 4:00 PM (IST)</li>
            </ul>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicy;
