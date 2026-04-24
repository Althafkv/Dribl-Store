import React from "react";
import MainLayout from "@/components/layout/MainLayout";

const TermsOfService: React.FC = () => {
  return (
    <MainLayout>
      <div className="container py-12 md:py-20 max-w-3xl">
        <h1 className="font-display text-3xl md:text-4xl mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Last updated: February 6, 2026
        </p>

        <div className="prose prose-sm max-w-none space-y-8 text-foreground/80">
          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using <strong>DRIBL</strong> (the “Website”), you
              agree to comply with and be bound by these Terms of Service. If
              you do not agree with any part of these terms, please do not use
              our website or services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              2. Products & Availability
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                DRIBL sells football-related merchandise including jerseys,
                frames, posters, keychains, and collectibles.
              </li>
              <li>
                All products are subject to availability and may be limited in
                quantity.
              </li>
              <li>
                We reserve the right to modify product details, pricing, or
                availability at any time without prior notice.
              </li>
              <li>
                Product images are for reference only; actual colors or designs
                may vary slightly.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              3. Orders & Payments
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                By placing an order, you confirm that all provided information
                is accurate and complete.
              </li>
              <li>
                We accept Cash on Delivery (COD) and online payments via
                Razorpay (UPI, Cards, Net Banking).
              </li>
              <li>
                Order confirmation does not guarantee acceptance. We reserve the
                right to cancel or refuse orders due to stock issues, pricing
                errors, or suspected fraudulent activity.
              </li>
              <li>
                All prices are displayed in Indian Rupees (₹) and include
                applicable taxes unless stated otherwise.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              4. Shipping & Delivery
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>We currently ship orders within India only.</li>
              <li>
                Estimated delivery time is typically 5–10 business days,
                depending on location and courier service.
              </li>
              <li>
                DRIBL is not responsible for delays caused by logistics
                partners, weather conditions, strikes, or other circumstances
                beyond our control.
              </li>
              <li>
                Ownership and risk for products pass to the customer upon
                successful delivery.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              5. Returns, Replacements & Refunds
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Returns are accepted only for damaged, defective, or incorrect
                items reported within 7 days of delivery.
              </li>
              <li>
                Items must be unused, unwashed, and returned in original
                packaging with proof of purchase.
              </li>
              <li>
                Custom or personalized items (such as custom jerseys) are
                non-returnable.
              </li>
              <li>
                Approved refunds will be processed within 7–10 business days
                after inspection of the returned item.
              </li>
              <li>
                To initiate a return, contact us at
                <strong> g4genius1313@gmail.com</strong> with your order ID and
                supporting images.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              6. Intellectual Property
            </h2>
            <p>
              All content on DRIBL, including logos, text, images, designs, and
              website code, is the property of DRIBL or its licensors. Any
              unauthorized copying, reproduction, or commercial use is strictly
              prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              7. User Responsibilities
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Use the website for illegal or unauthorized purposes.</li>
              <li>Attempt to access or interfere with our systems or data.</li>
              <li>Submit false or misleading information during checkout.</li>
              <li>Engage in activities that disrupt website functionality.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              8. Limitation of Liability
            </h2>
            <p>
              DRIBL shall not be liable for any indirect, incidental, or
              consequential damages arising from the use of our website or
              products. Our maximum liability shall not exceed the amount paid
              for the specific order in question.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              9. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms of Service are governed by the laws of India. Any
              disputes shall be subject to the exclusive jurisdiction of courts
              in India.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              10. Changes to These Terms
            </h2>
            <p>
              We may update these Terms of Service at any time. Updated versions
              will be posted on this page, and continued use of the website
              indicates acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground mb-3">
              11. Contact Us
            </h2>
            <p>If you have questions about these Terms:</p>
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

export default TermsOfService;
