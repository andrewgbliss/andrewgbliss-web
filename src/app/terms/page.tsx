// TermsOfService.tsx
import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Terms of Service
        </h1>
        <h2 className="mb-4 text-xl font-semibold">1. Introduction</h2>
        <p>
          These terms of service (&quot;Terms&quot;) apply to all web
          development services provided by [Your Company Name]. By engaging us
          for services, you agree to be bound by these Terms.
        </p>

        <h2 className="mb-4 mt-6 text-xl font-semibold">
          2. Service Description
        </h2>
        <p>
          We provide custom web development services including but not limited
          to website design, development, maintenance, and support.
        </p>

        <h2 className="mb-4 mt-6 text-xl font-semibold">3. Payment Terms</h2>
        <p>
          Payment terms will be outlined in your specific contract or agreement.
          Projects typically require an upfront payment with the balance due
          upon project completion.
        </p>

        <h2 className="mb-4 mt-6 text-xl font-semibold">
          4. Intellectual Property Rights
        </h2>
        <p>
          Upon full payment, the client will own the final website design and
          development. Pre-existing intellectual property owned by [Your Company
          Name] will remain our property.
        </p>

        <h2 className="mb-4 mt-6 text-xl font-semibold">
          5. Limitation of Liability
        </h2>
        <p>
          [Your Company Name] will not be liable for any indirect, incidental,
          or consequential damages or losses.
        </p>

        <h2 className="mb-4 mt-6 text-xl font-semibold">6. Termination</h2>
        <p>
          Either party may terminate the agreement with written notice. Terms
          related to payment, liability, and intellectual property rights will
          survive termination.
        </p>

        <h2 className="mb-4 mt-6 text-xl font-semibold">7. Governing Law</h2>
        <p>These Terms are governed by the laws of [Your State/Country].</p>

        <h2 className="mb-4 mt-6 text-xl font-semibold">
          8. Contact Information
        </h2>
        <p>
          For any questions regarding these Terms, please contact us at [Your
          Contact Information].
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
