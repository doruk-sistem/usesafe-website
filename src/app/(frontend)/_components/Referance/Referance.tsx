import React, { useState, useEffect } from "react";

// 30 referans ve her referansa farklı görsel
const references = Array.from({ length: 30 }, (_, i) => ({
  name: `Referans ${i + 1}`,
  logo: i % 2 === 0 ? "/images/referance/images.png" : "/images/referance/images2.jpg", // Alternatif görseller
}));

const ReferenceSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 15; // Sayfa başına 15 öğe
  const totalReferences = references.length;

  const moveToNextPage = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + itemsPerPage;
      return nextIndex >= totalReferences ? 0 : nextIndex; // Eğer son referansa geldiyse başa dön
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveToNextPage();
    }, 2000); // Her 2 saniyede bir sayfayı değiştir

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tw-px-4 tw-py-12 bg-gray-50">
      <h2 className="tw-text-3xl tw-font-semibold tw-text-center tw-text-gray-800 tw-mb-12">
        Referanslarımız
      </h2>
      <div className="tw-relative">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)", // 5 sütun
            gridTemplateRows: "repeat(3, auto)", // 3 satır
            gap: "16px",
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {/* Tüm referansları her zaman göstereceğiz, sadece sayfa kaydırma yapacağız */}
          {references.map((ref, index) => (
            <div
              key={index}
              style={{
                display:
                  index >= currentIndex && index < currentIndex + itemsPerPage ? "block" : "none", // Görünür öğeler
              }}
              className="tw-flex tw-flex-col tw-items-center tw-text-center tw-shadow-md tw-rounded-xl tw-transition-transform hover:tw-transform hover:tw-scale-105 hover:tw-shadow-xl"
            >
              <img
                src={ref.logo} // Görsel kaydırma yapılırken değişecek
                alt={ref.name}
                className="tw-w-32 tw-h-32 tw-object-contain tw-mb-4 tw-rounded-md"
              />
              <p className="tw-text-lg tw-font-semibold tw-text-gray-700">{ref.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReferenceSlider;
