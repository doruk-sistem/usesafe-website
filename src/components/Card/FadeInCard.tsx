import clsx from "clsx";
import React from "react";

interface FadeInCardProps {
  icon?: React.ReactNode;
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  gradientBg?: string; // opsiyonel: ikon arka planı için
  cardStyle?: "glass" | "white"; // farklı kart stilleri için
}

/**
 * Tekrarlayan kart yapıları için ortak fade-in animasyonlu kart componenti.
 * - AOS ile scroll animasyonu otomatik gelir.
 * - Tüm kartlarda aynı animasyon ve responsive yapı sağlanır.
 */
const FadeInCard: React.FC<FadeInCardProps> = ({
  icon,
  title,
  children,
  className = "",
  delay = 0,
  gradientBg = "tw-bg-gradient-to-br tw-from-[#43cea2]/30 tw-to-[#6dd5ed]/40",
  cardStyle = "glass",
}) => {
  // Kartın ana stilini seç
  const baseCard = cardStyle === "glass"
    ? "tw-group tw-bg-white/60 tw-backdrop-blur-lg tw-border-2 tw-border-gradient-to-br tw-from-[#43cea2] tw-to-[#185a9d] tw-p-8 tw-rounded-3xl tw-shadow-2xl tw-transition-all hover:tw-shadow-3xl hover:tw-border-[#43cea2] hover:tw-translate-y-[-8px] tw-transform hover:tw-scale-[1.03] tw-duration-300"
    : "tw-relative tw-group tw-bg-white tw-border tw-border-gray-100 tw-p-8 tw-rounded-2xl tw-shadow-xl tw-transition-all hover:tw-shadow-2xl hover:tw-border-primary/20";

  return (
    <div
      className={clsx(baseCard, className)}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {icon && (
        <div className={clsx(gradientBg, "tw-p-4 tw-rounded-xl tw-inline-flex tw-mb-6 tw-text-primary tw-group-hover:tw-bg-primary/10 tw-transition-colors")}>{icon}</div>
      )}
      <h3 className="tw-text-2xl tw-font-bold tw-mb-4 tw-text-gray-900 tw-drop-shadow-sm">{title}</h3>
      <div className="tw-text-gray-700 tw-leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default FadeInCard;
