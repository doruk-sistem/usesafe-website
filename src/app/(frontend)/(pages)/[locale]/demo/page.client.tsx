"use client";

import Image from "next/image";
import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { toast, Toaster } from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { useTranslations } from "next-intl";

import ButtonSwitchAnimation from "@/app/(frontend)/_components/button-switch-animation";
import Footer from "@/app/(frontend)/_components/footer";
import Header from "@/app/(frontend)/_components/header";
import { Button } from "@/app/(frontend)/_components/button";

import products from "@/constants/products";

export default function DemoPageClient() {
  const t = useTranslations('DemoPage');
  const [selectedProduct, setSelectedProduct] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
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

    if (!selectedProduct) {
      toast.error(t('toast.error.selectProduct'));
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email-for-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          product: selectedProduct,
        }),
      });

      if (response.ok) {
        toast(() => (
          <div>
            <h3 className="tw-text-lg tw-mb-0 tw-font-semibold">
              <FaCheck className="tw-text-green-500 tw-mr-2" />
              {t('toast.success.title')}
            </h3>
            <p className="tw-text-base tw-mb-0">
              {t('toast.success.message')}
            </p>
          </div>
        ));
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        });
        setSelectedProduct("");
      } else {
        throw new Error("An error occurred");
      }
    } catch (error) {
      toast.error(t('toast.error.generic'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="tw-min-h-screen tw-flex tw-flex-col">
      <Header />
      <Toaster position="bottom-center" />
      <main className="tw-flex-1 tw-container tw-mx-auto tw-px-4 tw-py-12">
        <h1 className="tw-text-3xl tw-font-bold tw-text-black tw-text-center tw-mb-6">
          {t('title')}
        </h1>

        <form onSubmit={handleSubmit} className="tw-max-w-4xl tw-mx-auto">
          <div className="tw-bg-white tw-rounded-lg tw-p-6 tw-shadow-lg">
            <div className="tw-mb-8">
              <h2 className="tw-text-xl tw-text-black tw-font-semibold tw-mb-4">
                {t('productSection.title')}
              </h2>
              <div className="tw-flex tw-flex-col tw-gap-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className={`group tw-relative tw-cursor-pointer tw-group hover:tw-ring-2 tw-transition-all tw-duration-300 ${
                      selectedProduct === product.id
                        ? "tw-ring-2 tw-ring-primary"
                        : "tw-ring-1 tw-ring-gray-200"
                    } tw-rounded-lg tw-overflow-hidden tw-flex`}
                    onClick={() => setSelectedProduct(product.id)}
                  >
                    <div className="tw-relative tw-w-56 tw-overflow-hidden tw-flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={t(`products.${product.id}.title`)}
                        fill
                        className="tw-object-cover tw-h-full tw-w-full group-hover:tw-scale-105 tw-transition-all tw-duration-300"
                      />
                    </div>
                    <div className="tw-py-4 tw-px-8 tw-flex tw-flex-col tw-justify-between tw-flex-1">
                      <div>
                        <h3
                          className={`tw-font-medium tw-mb-2 tw-text-2xl ${
                            selectedProduct === product.id
                              ? "tw-text-primary"
                              : "tw-text-black"
                          }`}
                        >
                          {t(`products.${product.id}.title`)}
                        </h3>
                        <p className="tw-text-sm tw-text-gray-600">
                          {t(`products.${product.id}.description`)}
                        </p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-between">
                        <a href={product.href} target="_blank">
                          <Button variant="default" size="sm" type="button">
                            {t('productSection.moreDetails')}
                            <BsArrowUpRight className="tw-ml-2" />
                          </Button>
                        </a>
                        {selectedProduct === product.id && (
                          <span className="tw-text-primary tw-text-sm">
                            {t('productSection.selected')}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="tw-mt-8">
              <h2 className="tw-text-xl tw-text-black tw-font-semibold tw-mb-6">
                {t('contactSection.title')}
              </h2>
              <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
                <div>
                  <label className="tw-block tw-text-sm tw-font-medium tw-mb-2">
                    {t('contactSection.fields.fullName')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="tw-w-full tw-px-4 tw-py-2 tw-border tw-rounded-md focus:tw-ring-primary focus:tw-border-primary"
                  />
                </div>
                <div>
                  <label className="tw-block tw-text-sm tw-font-medium tw-mb-2">
                    {t('contactSection.fields.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="tw-w-full tw-px-4 tw-py-2 tw-border tw-rounded-md focus:tw-ring-primary focus:tw-border-primary"
                  />
                </div>
                <div>
                  <label className="tw-block tw-text-sm tw-font-medium tw-mb-2">
                    {t('contactSection.fields.company')}
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="tw-w-full tw-px-4 tw-py-2 tw-border tw-rounded-md focus:tw-ring-primary focus:tw-border-primary"
                  />
                </div>
                <div>
                  <label className="tw-block tw-text-sm tw-font-medium tw-mb-2">
                    {t('contactSection.fields.phone')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="tw-w-full tw-px-4 tw-py-2 tw-border tw-rounded-md focus:tw-ring-primary focus:tw-border-primary"
                  />
                </div>
                <div className="md:tw-col-span-2">
                  <label className="tw-block tw-text-sm tw-font-medium tw-mb-2">
                    {t('contactSection.fields.message')}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="tw-w-full tw-px-4 tw-py-2 tw-border tw-rounded-md focus:tw-ring-primary focus:tw-border-primary"
                  />
                </div>
              </div>
            </div>

            <div className="tw-mt-6">
              <ButtonSwitchAnimation
                type="submit"
                disabled={isSubmitting}
                icon={<HiArrowNarrowRight />}
              >
                {isSubmitting ? t('button.sending') : t('button.submit')}
              </ButtonSwitchAnimation>
            </div>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}