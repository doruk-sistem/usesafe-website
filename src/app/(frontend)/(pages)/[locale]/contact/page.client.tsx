"use client";

import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";
import { useTranslations } from 'next-intl';

import Footer from "@/app/(frontend)/_components/footer";
import Header from "@/app/(frontend)/_components/header";
import ButtonSwitchAnimation from "@/app/(frontend)/_components/button-switch-animation";
import RenderBlocks from "@/blocks/RenderBlocks";

export default function ContactPageClient() {
  const t = useTranslations('ContactUs');

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          <div>
            <h3 className="tw-text-lg tw-mb-0 tw-font-semibold">
              <FaCheck className="tw-text-green-500 tw-mr-2" />
              {t('form.toast.success.title')}
            </h3>
            <p className="tw-text-base tw-mb-0">
              {t('form.toast.success.description')}
            </p>
          </div>
        ));
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("An error occurred");
      }
    } catch (error) {
      toast.error(t('form.toast.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="tw-min-h-screen tw-flex tw-flex-col">
      <Header />
      <Toaster position="bottom-center" />

      <RenderBlocks
        blocks={[
          {
            blockType: "pageTitle",
            layout: {
              title: t('page_title'),
              backgroundImage: "/images/contact-1.webp",
              downSectionId: "down-section",
            },
            sectionOptions: {
              className: "tw-py-0",
            },
          },
        ]}
      />

      <main className="tw-flex-1 tw-container tw-mx-auto tw-px-4 tw-py-12">
        <div className="tw-max-w-3xl tw-mx-auto">
          <form
            onSubmit={handleSubmit}
            className="tw-bg-white tw-rounded-xl tw-p-8 md:tw-p-10 tw-shadow-lg tw-border tw-border-gray-100"
          >
            <div className="tw-text-center tw-mb-10">
              <h2 className="tw-text-2xl md:tw-text-3xl tw-font-semibold tw-text-black tw-mb-3">
                {t('form.title')}
              </h2>
              <p className="tw-text-gray-600">
                {t('form.description')}
              </p>
            </div>

            <div className="tw-space-y-6">
              <div className="tw-grid md:tw-grid-cols-2 tw-gap-6">
                <div className="tw-relative">
                  <label className="tw-block tw-text-sm tw-font-medium tw-mb-2 tw-text-gray-700">
                    {t('form.fields.full_name.label')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="tw-w-full tw-px-4 tw-py-3 tw-border tw-rounded-lg focus:tw-ring-2 focus:tw-ring-primary/20 focus:tw-border-primary tw-transition-all"
                    placeholder={t('form.fields.full_name.placeholder')}
                  />
                </div>

                <div className="tw-relative">
                  <label className="tw-block tw-text-sm tw-font-medium tw-mb-2 tw-text-gray-700">
                    {t('form.fields.email.label')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="tw-w-full tw-px-4 tw-py-3 tw-border tw-rounded-lg focus:tw-ring-2 focus:tw-ring-primary/20 focus:tw-border-primary tw-transition-all"
                    placeholder={t('form.fields.email.placeholder')}
                  />
                </div>
              </div>

              <div className="tw-grid md:tw-grid-cols-2 tw-gap-6">
                <div className="tw-relative">
                  <label className="tw-block tw-text-sm tw-font-medium tw-mb-2 tw-text-gray-700">
                    {t('form.fields.phone.label')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="tw-w-full tw-px-4 tw-py-3 tw-border tw-rounded-lg focus:tw-ring-2 focus:tw-ring-primary/20 focus:tw-border-primary tw-transition-all"
                    placeholder={t('form.fields.phone.placeholder')}
                  />
                </div>

                <div className="tw-relative">
                  <label className="tw-block tw-text-sm tw-font-medium tw-mb-2 tw-text-gray-700">
                    {t('form.fields.subject.label')}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="tw-w-full tw-px-4 tw-py-3 tw-border tw-rounded-lg focus:tw-ring-2 focus:tw-ring-primary/20 focus:tw-border-primary tw-transition-all"
                    placeholder={t('form.fields.subject.placeholder')}
                  />
                </div>
              </div>

              <div>
                <label className="tw-block tw-text-sm tw-font-medium tw-mb-2 tw-text-gray-700">
                  {t('form.fields.message.label')}
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="tw-w-full tw-px-4 tw-py-3 tw-border tw-rounded-lg focus:tw-ring-2 focus:tw-ring-primary/20 focus:tw-border-primary tw-transition-all"
                  placeholder={t('form.fields.message.placeholder')}
                />
              </div>

              <div className="tw-pt-4">
                <ButtonSwitchAnimation
                  type="submit"
                  disabled={isSubmitting}
                  icon={<HiArrowNarrowRight />}
                  className="tw-w-full"
                >
                  {isSubmitting ? t('form.submit.sending') : t('form.submit.send')}
                </ButtonSwitchAnimation>
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}