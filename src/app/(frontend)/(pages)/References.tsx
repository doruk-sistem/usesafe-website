import React, { useState, useEffect } from "react";

// Form durumu
const ReferenceSlider = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 15;
  const references = Array.from({ length: 30 }, (_, i) => ({
    name: `Referans ${i + 1}`,
    logo: i % 2 === 0 ? "/images/referance/images.png" : "/images/referance/images2.jpg",
  }));

  // Form doğrulama
  const validateForm = () => {
    let tempErrors = { ...errors };

    if (!formData.name) tempErrors.name = "Ad alanı gereklidir.";
    else tempErrors.name = "";

    if (!formData.surname) tempErrors.surname = "Soyad alanı gereklidir.";
    else tempErrors.surname = "";

    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      tempErrors.email = "Geçerli bir e-posta adresi girin.";
    } else tempErrors.email = "";

    const phonePattern = /^[0-9]{10}$/;
    if (!formData.phone || !phonePattern.test(formData.phone)) {
      tempErrors.phone = "Geçerli bir telefon numarası girin.";
    } else tempErrors.phone = "";

    setErrors(tempErrors);
    return Object.values(tempErrors).every((error) => error === "");
  };

  // Form gönderim işleyicisi
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form başarıyla gönderildi:", formData);
    } else {
      console.log("Formda hatalar mevcut");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const moveToNextPage = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + itemsPerPage;
      return nextIndex >= references.length ? 0 : nextIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveToNextPage();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tw-flex tw-w-screen tw-overflow-hidden tw-min-h-screen tw-bg-gray-50 tw-justify-center tw-items-center">
      {/* Form */}
      <div className="tw-w-96 tw-bg-white tw-shadow-xl tw-rounded-lg tw-p-8 tw-flex tw-flex-col">
        <form onSubmit={handleSubmit} className="tw-space-y-4">
          {[{ label: "Ad", name: "name" }, { label: "Soyad", name: "surname" }, { label: "E-posta", name: "email" }, { label: "Telefon", name: "phone" }].map((field) => (
            <div key={field.name}>
              <label className="tw-block tw-text-lg tw-font-medium tw-text-gray-800 tw-mb-2">{field.label}</label>
              <input
                type={field.name === "email" ? "email" : "text"}
                id={field.name}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleInputChange}
                className="tw-w-full tw-px-4 tw-py-3 tw-border tw-border-gray-300 tw-rounded-xl tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-green-500"
                placeholder={`Lütfen ${field.label} girin`}
              />
              {errors[field.name as keyof typeof errors] && <p className="tw-text-sm tw-text-red-500 tw-mt-2">{errors[field.name as keyof typeof errors]}</p>}
            </div>
          ))}
          <button
            type="submit"
            className="tw-w-full tw-bg-green-600 tw-text-white tw-font-bold tw-py-3 tw-rounded-xl tw-shadow-md tw-transition tw-duration-300 hover:tw-bg-green-700"
          >
            Gönder
          </button>
        </form>
      </div>

      {/* Referans Kaydırıcı */}
      <div className="tw-w-3/4 tw-flex tw-items-center tw-justify-center tw-p-12 tw-overflow-hidden">
        <div className="tw-w-full tw-bg-white tw-rounded-lg tw-shadow-lg">
          <h2 className="tw-text-4xl tw-font-semibold tw-text-center tw-text-gray-800 tw-mb-12">Referanslarımız</h2>
          <div className="tw-grid tw-grid-cols-5 tw-gap-8 tw-transition-transform">
            {references.slice(currentIndex, currentIndex + itemsPerPage).map((ref, index) => (
              <div
                key={index}
                className="tw-flex tw-flex-col tw-items-center tw-text-center tw-shadow-lg tw-rounded-xl tw-transition-transform hover:tw-scale-105 hover:tw-shadow-xl tw-p-6"
              >
                <img
                  src={ref.logo}
                  alt={ref.name}
                  className="tw-w-32 tw-h-32 tw-object-contain tw-mb-4 tw-rounded-xl tw-transition-transform"
                />
                <p className="tw-text-xl tw-font-semibold tw-text-gray-700">{ref.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferenceSlider;