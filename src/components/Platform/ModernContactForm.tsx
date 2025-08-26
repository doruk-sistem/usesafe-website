"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import {
  FaCheck,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCommentDots,
  FaPhoneAlt,
} from "react-icons/fa";

import { countries, reasonsForReachingOut } from "@/data/countries";

interface ModernContactFormProps {
  className?: string;
}

const ModernContactForm: React.FC<ModernContactFormProps> = ({ className = "" }) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.acceptTerms) {
      toast.error(t("form.validation.accept_terms"));
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
    } catch {
      toast.error(t("form.toast.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`tw-bg-gray-50 tw-py-16 tw-px-4 sm:tw-px-6 lg:tw-px-8 ${className}`}>
      <div className="tw-max-w-7xl tw-mx-auto">
        <div className="tw-bg-white tw-rounded-3xl tw-shadow-xl tw-overflow-hidden">
          <div className="tw-grid lg:tw-grid-cols-2 tw-gap-0">
            {/* Left Column - Content */}
            <div className="tw-bg-white tw-p-8 lg:tw-p-12 tw-flex tw-flex-col tw-justify-between">
              <div>
                <h1 className="tw-text-4xl lg:tw-text-5xl tw-font-bold tw-text-gray-900 tw-mb-6 tw-leading-tight">
                  {t("hero.title")}
                </h1>
                <p className="tw-text-lg tw-text-gray-600 tw-mb-4 tw-leading-relaxed">
                  {t("hero.description")}
                </p>
                <p className="tw-text-base tw-text-gray-500 tw-mb-8 tw-leading-relaxed">
                  {t("hero.subtitle")}
                </p>
              </div>

              {/* Hero Image */}
              <div className="tw-mb-8">
                  <Image
                    src="/images/safe_sopping_doruksistem_usesafe.webp"
                    alt="Safe Shopping with Doruksistem UseSafe"
                    width={500}
                    height={300}
                    className="tw-w-full tw-h-auto tw-rounded-2xl tw-shadow-md"
                    priority
                  />
                </div>

              {/* Call to Action */}
              <div className="tw-flex tw-items-center tw-space-x-4 tw-bg-gray-50 tw-rounded-2xl tw-p-6">
                <div className="tw-flex-shrink-0">
                  <div className="tw-w-14 tw-h-14 tw-bg-orange-500 tw-rounded-full tw-flex tw-items-center tw-justify-center">
                    <FaPhoneAlt className="tw-text-white tw-text-lg" />
                  </div>
                </div>
                <div className="tw-flex tw-items-center tw-space-x-3">
                  <a href="tel:+908505323597">
                    <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 tw-mb-1">
                      Call us directly
                    </h3>
                    <p className="tw-text-gray-600 tw-text-base">
                        +90 (850) 532 35 97
                    </p>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="tw-bg-gray-50 tw-p-8 lg:tw-p-12">
              <form onSubmit={handleSubmit} className="tw-space-y-6">
                {/* Name and Phone Row */}
                <div className="tw-grid sm:tw-grid-cols-2 tw-gap-6">
                  <div>
                    <label className="tw-block tw-text-sm tw-font-semibold tw-text-gray-700 tw-mb-2 tw-uppercase tw-tracking-wide">
                      {t("form.fields.full_name.label")}*
                    </label>
                    <div className="tw-relative">
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="tw-w-full tw-px-4 tw-py-4 tw-pr-12 tw-border-0 tw-border-b-2 tw-border-gray-300 tw-bg-transparent focus:tw-border-gray-500 focus:tw-outline-none tw-text-base tw-placeholder-gray-500 tw-transition-colors"
                        placeholder={t("form.fields.full_name.placeholder")}
                        aria-label={t("form.fields.full_name.label")}
                        title={t("form.fields.full_name.label")}
                      />
                      <FaUser className="tw-absolute tw-right-3 tw-top-1/2 tw-transform -tw-translate-y-1/2 tw-text-gray-400 tw-text-lg" />
                    </div>
                  </div>

                  <div>
                    <label className="tw-block tw-text-sm tw-font-semibold tw-text-gray-700 tw-mb-2 tw-uppercase tw-tracking-wide">
                      {t("form.fields.phone_number.label")}*
                    </label>
                    <div className="tw-relative">
                      <input
                        type="tel"
                        name="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="tw-w-full tw-px-4 tw-py-4 tw-pr-12 tw-border-0 tw-border-b-2 tw-border-gray-300 tw-bg-transparent focus:tw-border-gray-500 focus:tw-outline-none tw-text-base tw-placeholder-gray-500 tw-transition-colors"
                        placeholder={t("form.fields.phone_number.placeholder")}
                        aria-label={t("form.fields.phone_number.label")}
                        title={t("form.fields.phone_number.label")}
                      />
                      <FaPhone className="tw-absolute tw-right-3 tw-top-1/2 tw-transform -tw-translate-y-1/2 tw-text-gray-400 tw-text-lg" />
                    </div>
                  </div>
                </div>

                {/* Email and Company Row */}
                <div className="tw-grid sm:tw-grid-cols-2 tw-gap-6">
                  <div>
                    <label className="tw-block tw-text-sm tw-font-semibold tw-text-gray-700 tw-mb-2 tw-uppercase tw-tracking-wide">
                      {t("form.fields.work_email.label")}*
                    </label>
                    <div className="tw-relative">
                      <input
                        type="email"
                        name="workEmail"
                        required
                        value={formData.workEmail}
                        onChange={handleInputChange}
                        className="tw-w-full tw-px-4 tw-py-4 tw-pr-12 tw-border-0 tw-border-b-2 tw-border-gray-300 tw-bg-transparent focus:tw-border-gray-500 focus:tw-outline-none tw-text-base tw-placeholder-gray-500 tw-transition-colors"
                        placeholder={t("form.fields.work_email.placeholder")}
                        aria-label={t("form.fields.work_email.label")}
                        title={t("form.fields.work_email.label")}
                      />
                      <FaEnvelope className="tw-absolute tw-right-3 tw-top-1/2 tw-transform -tw-translate-y-1/2 tw-text-gray-400 tw-text-lg" />
                    </div>
                  </div>

                  <div>
                    <label className="tw-block tw-text-sm tw-font-semibold tw-text-gray-700 tw-mb-2 tw-uppercase tw-tracking-wide">
                      {t("form.fields.company_name.label")}*
                    </label>
                    <div className="tw-relative">
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="tw-w-full tw-px-4 tw-py-4 tw-pr-12 tw-border-0 tw-border-b-2 tw-border-gray-300 tw-bg-transparent focus:tw-border-gray-500 focus:tw-outline-none tw-text-base tw-placeholder-gray-500 tw-transition-colors"
                        placeholder={t("form.fields.company_name.placeholder")}
                        aria-label={t("form.fields.company_name.label")}
                        title={t("form.fields.company_name.label")}
                      />
                      <FaCommentDots className="tw-absolute tw-right-3 tw-top-1/2 tw-transform -tw-translate-y-1/2 tw-text-gray-400 tw-text-lg" />
                    </div>
                  </div>
                </div>

                {/* Job Title and Country Row */}
                <div className="tw-grid sm:tw-grid-cols-2 tw-gap-6">
                  <div>
                    <label className="tw-block tw-text-sm tw-font-semibold tw-text-gray-700 tw-mb-2 tw-uppercase tw-tracking-wide">
                      {t("form.fields.job_title.label")}*
                    </label>
                    <div className="tw-relative">
                      <input
                        type="text"
                        name="jobTitle"
                        required
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        className="tw-w-full tw-px-4 tw-py-4 tw-pr-12 tw-border-0 tw-border-b-2 tw-border-gray-300 tw-bg-transparent focus:tw-border-gray-500 focus:tw-outline-none tw-text-base tw-placeholder-gray-500 tw-transition-colors"
                        placeholder={t("form.fields.job_title.placeholder")}
                        aria-label={t("form.fields.job_title.label")}
                        title={t("form.fields.job_title.label")}
                      />
                      <FaCommentDots className="tw-absolute tw-right-3 tw-top-1/2 tw-transform -tw-translate-y-1/2 tw-text-gray-400 tw-text-lg" />
                    </div>
                  </div>

                  <div>
                    <label className="tw-block tw-text-sm tw-font-semibold tw-text-gray-700 tw-mb-2 tw-uppercase tw-tracking-wide">
                      {t("form.fields.country.label")}*
                    </label>
                    <div className="tw-relative">
                      <select
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleInputChange}
                        className="tw-w-full tw-px-4 tw-py-4 tw-pr-12 tw-border-0 tw-border-b-2 tw-border-gray-300 tw-bg-transparent focus:tw-border-gray-500 focus:tw-outline-none tw-text-base tw-appearance-none tw-transition-colors"
                        aria-label={t("form.fields.country.label")}
                        title={t("form.fields.country.label")}
                      >
                        <option value="">{t("form.fields.country.placeholder")}</option>
                        {countries.map((country) => (
                          <option key={country.code} value={country.label} className="tw-text-gray-900 tw-bg-white">
                            {country.label}
                          </option>
                        ))}
                      </select>
                      <FaCommentDots className="tw-absolute tw-right-3 tw-top-1/2 tw-transform -tw-translate-y-1/2 tw-text-gray-400 tw-text-lg tw-pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Subject Row */}
                <div>
                  <label className="tw-block tw-text-sm tw-font-semibold tw-text-gray-700 tw-mb-2 tw-uppercase tw-tracking-wide">
                    {t("form.fields.reason_for_reaching_out.label")}*
                  </label>
                  <div className="tw-relative">
                    <select
                      name="reasonForReachingOut"
                      required
                      value={formData.reasonForReachingOut}
                      onChange={handleInputChange}
                      className="tw-w-full tw-px-4 tw-py-4 tw-pr-12 tw-border-0 tw-border-b-2 tw-border-gray-300 tw-bg-transparent focus:tw-border-gray-500 focus:tw-outline-none tw-text-base tw-appearance-none tw-transition-colors"
                      aria-label={t("form.fields.reason_for_reaching_out.label")}
                      title={t("form.fields.reason_for_reaching_out.label")}
                    >
                      <option value="">{t("form.fields.reason_for_reaching_out.placeholder")}</option>
                      {reasonsForReachingOut.map((reason) => (
                        <option key={reason.value} value={reason.label} className="tw-text-gray-900 tw-bg-white">
                          {reason.label}
                        </option>
                      ))}
                    </select>
                    <FaCommentDots className="tw-absolute tw-right-3 tw-top-1/2 tw-transform -tw-translate-y-1/2 tw-text-gray-400 tw-text-lg tw-pointer-events-none" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="tw-block tw-text-sm tw-font-semibold tw-text-gray-700 tw-mb-2 tw-uppercase tw-tracking-wide">
                    {t("form.fields.message.label")}*
                  </label>
                  <div className="tw-relative">
                    <textarea
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="tw-w-full tw-px-4 tw-py-4 tw-pr-12 tw-border-0 tw-border-b-2 tw-border-gray-300 tw-bg-transparent focus:tw-border-gray-500 focus:tw-outline-none tw-text-base tw-placeholder-gray-500 tw-resize-none tw-transition-colors"
                      placeholder={t("form.fields.message.placeholder")}
                      aria-label={t("form.fields.message.label")}
                      title={t("form.fields.message.label")}
                    />
                    <FaCommentDots className="tw-absolute tw-right-3 tw-top-6 tw-text-gray-400 tw-text-lg" />
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="tw-pt-4">
                  <div className="tw-flex tw-items-start tw-space-x-3 tw-mb-6">
                    <input
                      type="checkbox"
                      id="acceptTerms"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleInputChange}
                      className="tw-mt-1 tw-h-4 tw-w-4 tw-text-gray-900 tw-border-gray-300 tw-rounded focus:tw-ring-gray-500"
                      required
                    />
                    <label htmlFor="acceptTerms" className="tw-text-sm tw-text-gray-600">
                      {t("form.terms.text")}{" "}
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tw-text-gray-900 tw-underline hover:tw-text-gray-700"
                      >
                        {t("form.terms.privacy_policy")}
                      </a>
                      {" "}{t("form.terms.and")}{" "}
                      <a
                        href="/terms-of-service"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tw-text-gray-900 tw-underline hover:tw-text-gray-700"
                      >
                        {t("form.terms.terms_of_service")}
                      </a>
                    </label>
                  </div>
                  <p className="tw-text-sm tw-text-gray-500 tw-mb-0">
                    We will never collect information about you without your explicit consent.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="tw-pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.fullName.trim() || !formData.workEmail.trim() || !formData.phoneNumber.trim() || !formData.companyName.trim() || !formData.jobTitle.trim() || !formData.country || !formData.reasonForReachingOut || !formData.message.trim() || !formData.acceptTerms}
                    className="tw-w-full tw-bg-gray-900 tw-text-white tw-px-8 tw-py-4 tw-rounded-xl tw-font-semibold tw-text-base hover:tw-bg-gray-800 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-gray-500 focus:tw-ring-offset-2 tw-transition-all disabled:tw-opacity-50 disabled:tw-cursor-not-allowed"
                    tabIndex={0}
                    aria-label="Send message"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleSubmit(e as React.FormEvent);
                      }
                    }}
                  >
                    {isSubmitting ? t("form.submit.sending") : t("form.submit.send")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernContactForm;
