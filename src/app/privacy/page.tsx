// PrivacyPolicy.tsx
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold">Privacy Policy</h1>
        <p>Last updated: [Date]</p>

        <h2 className="mb-4 mt-6 text-xl font-semibold">1. Introduction</h2>
        <p>
          This privacy policy (&quot;Policy&quot;) describes how [Your Company
          Name] collects, uses, stores, shares, and protects your information
          whenever you use our services via our website or engage in our web
          development services.
        </p>

        <h2 className="mb-4 mt-6 text-xl font-semibold">
          2. Information Collection
        </h2>
        <p>
          We collect information you provide directly to us when you request our
          services, contact us for support, or otherwise communicate with us.
          This information may include name, email address, phone number, and
          any other information you choose to provide.
        </p>

        <h2 className="mb-4 mt-6 text-xl font-semibold">
          3. Use of Information
        </h2>
        <p>
          The information we collect is used to provide, maintain, and improve
          our services, to communicate with you, and to fulfill any other
          purpose for which you provide it.
        </p>

        <h2 className="mb-4 mt-6 text-xl font-semibold">
          4. Sharing of Information
        </h2>
        <p>
          We do not share personal information with companies, organizations, or
          individuals outside of [Your Company Name] except in the following
          cases: [List any circumstances under which you share information,
          e.g., with consent, for external processing, for legal reasons].
        </p>

        <h2 className="mb-4 mt-6 text-xl font-semibold">5. Data Security</h2>
        <p>
          We take reasonable measures to protect your personal information from
          loss, theft, misuse, unauthorized access, disclosure, alteration, and
          destruction.
        </p>

        <h2 className="mb-4 mt-6 text-xl font-semibold">
          6. Changes to This Policy
        </h2>
        <p>
          We may update this privacy policy from time to time. We will notify
          you of any changes by posting the new policy on this page.
        </p>

        <h2 className="mb-4 mt-6 text-xl font-semibold">7. Contact Us</h2>
        <p>
          If you have any questions about this Policy, please contact us at
          [Your Contact Information].
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
