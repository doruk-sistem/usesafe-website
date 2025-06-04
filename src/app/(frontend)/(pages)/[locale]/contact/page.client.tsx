"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { FaCheck, FaInfoCircle } from "react-icons/fa";

import Footer from "@/app/(frontend)/_components/footer";
import NewsletterBlock from "@/blocks/newsletter-block";
import RenderBlocks from "@/blocks/RenderBlocks";
import { countries, reasonsForReachingOut } from "@/data/countries";

export default function ContactPageClient() {
  const t = useTranslations("ContactUs");

  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phoneNumber: "",
    companyName: "",
    jobTitle: "",
    country: "",
    reasonForReachingOut: "",
    message: "",
    acceptTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const isFormValid = () => {
    return (
      formData.fullName.trim() !== "" &&
      formData.workEmail.trim() !== "" &&
      formData.phoneNumber.trim() !== "" &&
      formData.companyName.trim() !== "" &&
      formData.jobTitle.trim() !== "" &&
      formData.country !== "" &&
      formData.reasonForReachingOut !== "" &&
      formData.message.trim() !== "" &&
      formData.acceptTerms
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.acceptTerms) {
      toast.error("Please accept the terms and conditions");
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast(() => (
          <div className="tw-flex tw-items-center">
            <FaCheck className="tw-text-green-500 tw-mr-2" />
            <div>
              <h3 className="tw-text-lg tw-mb-0 tw-font-semibold">
                {t("form.toast.success.title")}
              </h3>
              <p className="tw-text-base tw-mb-0">
                {t("form.toast.success.description")}
              </p>
            </div>
          </div>
        ));
        setFormData({
          fullName: "",
          workEmail: "",
          phoneNumber: "",
          companyName: "",
          jobTitle: "",
          country: "",
          reasonForReachingOut: "",
          message: "",
          acceptTerms: false,
        });
      } else {
        throw new Error("An error occurred");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error(t("form.toast.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="tw-min-h-screen tw-flex tw-flex-col">
      <Toaster position="bottom-center" />

      <RenderBlocks
        blocks={[
          {
            blockType: "pageTitle",
            layout: {
              title: t("page_title"),
              backgroundImage: "/images/contact-1.webp",
              downSectionId: "contact-form",
            },
            blockOptions: {
              className: "tw-py-0",
            },
          },
        ]}
      />

      <main className="tw-flex-1 tw-container tw-mx-auto tw-px-4 tw-py-12" id="contact-form">
        <div className="tw-max-w-4xl tw-mx-auto">
          <form
            onSubmit={handleSubmit}
            className="tw-bg-white tw-rounded-2xl tw-p-8 md:tw-p-12 tw-shadow-lg tw-border tw-border-gray-100"
          >
            <div className="tw-mb-10 tw-text-center">
              <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-gray-900 tw-mb-4">
                Let's Start a Conversation
              </h2>
              <p className="tw-text-lg tw-text-gray-600 tw-mb-2">
                Ready to transform your business? We'd love to hear from you.
              </p>
              <p className="tw-text-base tw-text-gray-500">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="tw-space-y-6">
              {/* Full Name - Single Column */}
              <div>
                <label className="tw-block tw-text-base tw-font-medium tw-mb-2 tw-text-blue-600">
                  Full name*
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="tw-w-full tw-px-4 tw-py-3 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-ring-2 focus:tw-ring-blue-500/20 focus:tw-border-blue-500 tw-transition-all tw-text-base"
                  aria-label="Full name"
                />
              </div>

              {/* Work Email & Phone Number - Two Columns */}
              <div className="tw-grid md:tw-grid-cols-2 tw-gap-6">
                <div>
                  <label className="tw-block tw-text-base tw-font-medium tw-mb-2 tw-text-blue-600">
                    Work email*
                  </label>
                  <input
                    type="email"
                    name="workEmail"
                    required
                    value={formData.workEmail}
                    onChange={handleInputChange}
                    className="tw-w-full tw-px-4 tw-py-3 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-ring-2 focus:tw-ring-blue-500/20 focus:tw-border-blue-500 tw-transition-all tw-text-base"
                    aria-label="Work email"
                  />
                </div>

                <div>
                  <label className="tw-block tw-text-base tw-font-medium tw-mb-2 tw-text-blue-600">
                    Phone number*
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    placeholder="Enter your phone number"
                    aria-label="Phone number"
                    onChange={handleInputChange}
                    className="tw-w-full tw-px-4 tw-py-3 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-ring-2 focus:tw-ring-blue-500/20 focus:tw-border-blue-500 tw-transition-all tw-text-base"
                  />
                </div>
              </div>

              {/* Company Name & Job Title - Two Columns */}
              <div className="tw-grid md:tw-grid-cols-2 tw-gap-6">
                <div>
                  <label className="tw-block tw-text-base tw-font-medium tw-mb-2 tw-text-blue-600">
                    Company name*
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="tw-w-full tw-px-4 tw-py-3 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-ring-2 focus:tw-ring-blue-500/20 focus:tw-border-blue-500 tw-transition-all tw-text-base"
                    aria-label="Company name"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label className="tw-block tw-text-base tw-font-medium tw-mb-2 tw-text-blue-600">
                    Job title*
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    required
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="tw-w-full tw-px-4 tw-py-3 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-ring-2 focus:tw-ring-blue-500/20 focus:tw-border-blue-500 tw-transition-all tw-text-base"
                    aria-label="Job title"
                    placeholder="Enter your job title"
                  />
                </div>
              </div>

              {/* Country & Reason for Reaching Out - Two Columns */}
              <div className="tw-grid md:tw-grid-cols-2 tw-gap-6">
                <div>
                  <label className="tw-block tw-text-base tw-font-medium tw-mb-2 tw-text-blue-600">
                    Country*
                  </label>
                  <select
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleInputChange}
                    className="tw-w-full tw-px-4 tw-py-3 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-ring-2 focus:tw-ring-blue-500/20 focus:tw-border-blue-500 tw-transition-all tw-text-base tw-bg-white"
                    aria-label="Country"
                  >
                    {countries.map((country) => (
                      <option key={country.value} value={country.value}>
                        {country.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="tw-block tw-text-base tw-font-medium tw-mb-2 tw-text-blue-600">
                    Reason for reaching out*
                  </label>
                  <select
                    name="reasonForReachingOut"
                    required
                    value={formData.reasonForReachingOut}
                    onChange={handleInputChange}
                    className="tw-w-full tw-px-4 tw-py-3 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-ring-2 focus:tw-ring-blue-500/20 focus:tw-border-blue-500 tw-transition-all tw-text-base tw-bg-white"
                    aria-label="Reason for reaching out"
                  >
                    {reasonsForReachingOut.map((reason) => (
                      <option key={reason.value} value={reason.label}>
                        {reason.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="tw-block tw-text-base tw-font-medium tw-mb-2 tw-text-blue-600">
                  Message*
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="tw-w-full tw-px-4 tw-py-3 tw-border tw-border-gray-300 tw-rounded-lg focus:tw-ring-2 focus:tw-ring-blue-500/20 focus:tw-border-blue-500 tw-transition-all tw-text-base"
                  placeholder="Let us know what you're looking for!"
                />
              </div>

              {/* Terms and Conditions */}
              <div className="tw-flex tw-items-start tw-space-x-3">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleInputChange}
                  className="tw-mt-1 tw-h-4 tw-w-4 tw-text-blue-600 tw-border-gray-300 tw-rounded focus:tw-ring-blue-500"
                  required
                />
                <div className="tw-flex tw-items-center tw-space-x-2">
                  <label htmlFor="acceptTerms" className="tw-text-gray-700 tw-text-base">
                    I accept the{" "}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tw-text-blue-600 hover:tw-text-blue-700 tw-underline"
                    >
                      privacy policy
                    </a>
                    {" "}and{" "}
                    <a
                      href="/terms-of-service"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tw-text-blue-600 hover:tw-text-blue-700 tw-underline"
                    >
                      terms of service
                    </a>
                  </label>
                  <div className="tw-relative tw-group">
                    <FaInfoCircle className="tw-text-gray-400 tw-text-sm hover:tw-text-gray-600 tw-cursor-help" />
                    <div className="tw-absolute tw-bottom-full tw-left-1/2 tw-transform tw--translate-x-1/2 tw-mb-2 tw-w-80 tw-p-4 tw-bg-gray-900 tw-text-white tw-text-sm tw-rounded-lg tw-shadow-lg tw-opacity-0 tw-invisible group-hover:tw-opacity-100 group-hover:tw-visible tw-transition-all tw-duration-200 tw-z-10">
                      <div className="tw-space-y-2">
                        <b className="tw-font-semibold tw-text-white">What you're agreeing to:</b>
                        <ul className="tw-space-y-1 tw-text-xs">
                          <li>• We'll use your information to respond to your inquiry</li>
                          <li>• Your data will be processed according to our privacy policy</li>
                          <li>• We may contact you via email or phone regarding your request</li>
                          <li>• Your information will be stored securely and not shared with third parties for marketing</li>
                          <li>• You can request deletion of your data at any time</li>
                        </ul>
                        <p className="tw-text-xs tw-text-gray-300 tw-mt-2">
                          Click the links above to read our full policies.
                        </p>
                      </div>
                      <div className="tw-absolute tw-top-full tw-left-1/2 tw-transform tw--translate-x-1/2 tw-w-0 tw-h-0 tw-border-l-4 tw-border-r-4 tw-border-t-4 tw-border-l-transparent tw-border-r-transparent tw-border-t-gray-900"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="tw-pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || !isFormValid()}
                  className="tw-w-full tw-bg-slate-800 tw-text-white tw-px-8 tw-py-4 tw-rounded-full tw-font-medium tw-text-lg hover:tw-bg-slate-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-slate-500 focus:tw-ring-offset-2 tw-transition-all disabled:tw-opacity-50 disabled:tw-cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <NewsletterBlock />
      <Footer />
    </div>
  );
}
