import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect, ElementType } from "react";
import { IoChevronDown } from "react-icons/io5";

interface SubItem {
  key: string;
  label: string;
  href?: string;
  isTitle?: boolean;
  description?: string;
  icon?: ElementType;
  subItems?: SubItem[];
}

interface NavLinkProps {
  itemKey: string;
  label: string;
  href?: string;
  subItems?: SubItem[];
  isMobile?: boolean;
}

export default function NavLink({
  itemKey,
  label,
  href,
  subItems,
  isMobile,
}: NavLinkProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isPlatformMenu = itemKey === "platform";
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeMenuTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (closeMenuTimer.current) {
        clearTimeout(closeMenuTimer.current);
      }
    };
  }, []);

  const handleMenuOpen = () => {
    if (!isMobile) {
      if (closeMenuTimer.current) {
        clearTimeout(closeMenuTimer.current);
        closeMenuTimer.current = null;
      }
      setIsOpen(true);
    }
  };

  const handleMenuClose = () => {
    if (!isMobile) {
      closeMenuTimer.current = setTimeout(() => {
        setIsOpen(false);
      }, 300);
    }
  };

  const handleToggleMobile = () => {
    if (isMobile) {
      if (isOpen) {
        setIsOpen(false);
      } else {
        if (closeMenuTimer.current) {
          clearTimeout(closeMenuTimer.current);
          closeMenuTimer.current = null;
        }
        setIsOpen(true);
      }
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (isMobile && isOpen && menuRef.current && !menuRef.current.contains(event.target as Node) && buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, isMobile, menuRef, buttonRef]);

  if (subItems && subItems.length > 0) {
    return (
      <div
        className="tw-relative group"
        onMouseEnter={handleMenuOpen}
        onMouseLeave={handleMenuClose}
        ref={menuRef}
      >
        <button
          type="button"
          ref={buttonRef}
          onClick={handleToggleMobile}
          className="tw-flex tw-items-center tw-justify-between tw-w-full tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-rounded-md tw-text-gray-800 tw-bg-transparent hover:tw-text-primary focus:tw-outline-none tw-border-none"
        >
          <span>{label}</span>
          <IoChevronDown
            className={`tw-ml-2 tw-h-5 tw-w-5 tw-transition-transform tw-duration-200 ${isOpen ? "tw-transform tw-rotate-180" : ""}`}
          />
        </button>
        {isOpen && (
          <div
            className={`tw-absolute tw-z-50 tw-mt-2 tw-rounded-lg tw-shadow-xl tw-bg-white tw-border-none tw-origin-top-right tw-right-0 md:tw-origin-top-left md:tw-left-0 ${isPlatformMenu ? (isMobile ? "tw-w-full tw-max-h-[calc(100vh-var(--header-height,100px)-2rem)] tw-overflow-y-auto" : "md:tw-w-[600px]") : "tw-w-56"}`}
          >
            {isPlatformMenu ? (
              <div className={`tw-p-6 ${isMobile ? "" : "tw-grid tw-grid-cols-2 tw-gap-x-8"}`}>
                {subItems.map((column, colIndex) => (
                  <div key={column.key} className={`tw-overflow-hidden ${!isMobile && colIndex < subItems.length - 1 ? "tw-border-r tw-border-gray-200 tw-pr-8" : ""} ${isMobile && colIndex > 0 ? "tw-mt-6 tw-pt-6 tw-border-t tw-border-gray-200" : ""}`}>
                    {column.isTitle && (
                      <>
                        <h3 className="tw-mb-3 tw-text-lg tw-font-semibold tw-text-primary tw-tracking-wide">
                          {column.label}
                        </h3>
                        <hr className="tw-border-gray-200 tw-mb-4" />
                      </>
                    )}
                    {column.subItems && column.subItems.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={item.key}
                          href={item.href || "#"}
                          className="tw-flex tw-items-center tw-block tw-px-1 tw-py-2.5 tw-rounded-md hover:tw-bg-gray-50 group/item"
                          onClick={() => !isMobile && setIsOpen(false)}
                        >
                          {IconComponent && (
                            <IconComponent className="tw-mr-3 tw-flex-shrink-0 tw-h-5 tw-w-5 tw-text-primary" />
                          )}
                          <div className="tw-flex-grow  tw-leading-tight">
                            <span className="tw-text-base tw-font-medium tw-text-gray-800 group-hover/item:tw-text-primary">
                              {item.label}
                            </span>
                            {item.description && (
                              <span className="tw-block tw-text-sm tw-text-gray-600 tw-mt-1 tw-whitespace-normal tw-break-words">
                                {item.description}
                              </span>
                            )}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                ))}
              </div>
            ) : (
              <div className="tw-py-1">
                {subItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href || "#"}
                    className={`tw-block tw-px-4 tw-py-2 tw-text-sm hover:tw-bg-gray-100 ${pathname === item.href ? "tw-text-primary tw-font-semibold" : "tw-text-gray-800"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={href || "#"}
      className={`tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-rounded-md hover:tw-text-primary ${pathname === href ? "tw-text-primary tw-font-semibold" : "tw-text-gray-800"}`}
    >
      {label}
    </Link>
  );
}
