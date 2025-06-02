# Changelog

## [Latest Changes] - 2025-06-02

### Added
- **SectorTabsSection Component**: Created a new reusable component based on TraceTrustSection
  - Configurable sector data through props
  - Dynamic translation namespace support
  - Flexible image paths and feature counts
  - Background color options (white/gray)
  - Enhanced accessibility with proper ARIA labels and keyboard navigation

### Changed
- **UseSafe Certification Page**: Replaced StakeholderRoles component with SectorTabsSection
  - Implemented stakeholder data configuration for manufacturers, sellers, marketplaces, authorities, logistics, and consumers
  - Added proper translation key structure for stakeholder content
  - Maintained existing functionality while improving flexibility

- **Textile Passport Page**: Updated TraceTrustSection usage to use new SectorTabsSection
  - Implemented textile sector data configuration for manufacturers, service providers, retailers/brands, recyclers, and consumers
  - Preserved existing translation keys and structure
  - Enhanced component reusability

### Refactored
- **TraceTrustSection**: Made the component more generic and reusable
  - Extracted hardcoded values to props
  - Added type interfaces for better type safety
  - Improved component composition and reusability

- **SectorTabsSection Architecture**: Restructured component into modular folder structure
  - Created dedicated `/SectorTabsSection` folder under Platform components
  - Separated SectorButton into individual component file (`SectorButton.tsx`)
  - Extracted interfaces to dedicated types file (`types.ts`)
  - Added proper index.ts for clean exports
  - Improved component separation of concerns and maintainability

### Technical Improvements
- Enhanced component reusability across different pages
- Improved type safety with proper TypeScript interfaces
- Better separation of concerns between component logic and data
- Consistent styling and behavior across platform pages

### Fixed
- **Translation Issues**: Resolved missing translation keys for UseSafe Certification page
  - Added complete Turkish translations for stakeholder content
  - Added stakeholder button labels and main section titles
  - Implemented proper translation namespace structure for SectorTabsSection component
  - Ensured all required translation keys exist in both English and Turkish

- **SectorTabsSection Button Styling**: Standardized button dimensions and layout
  - Fixed button width limitation (176px) to prevent overly wide buttons
  - Set consistent button height (56px) to accommodate two-line text
  - Enabled multi-line text display with proper line height and text centering
  - Improved responsive text sizing (xs on mobile, sm on desktop)
  - Enhanced visual consistency across all sector buttons

- **UseSafe Certification Page Images**: Updated SectorTabsSection with proper images
  - Replaced missing stakeholder images with existing platform images
  - Mapped manufacturers to sector-manufacturers.jpg
  - Mapped sellers to sector-retailers_brands.jpg
  - Mapped marketplaces to usesafe_men_wear.avif
  - Mapped authorities to textile-passport.jpeg
  - Mapped logistics to sector-service_providers.jpg
  - Mapped consumers to sector-consumers.jpg
  - Improved visual appeal and consistency across the section

- **SectorTabsSection Smooth Transitions**: Enhanced button interactions and content transitions
  - Implemented smooth content fade and scale transition (500ms duration)
  - Added transitioning state to prevent rapid clicking and jarring animations
  - Enhanced SectorButton with smooth hover effects (300ms duration, ease-out timing)
  - Added scale transform (1.05x) and ring glow effects on hover and active states
  - Improved button responsiveness with better visual feedback
  - Used modern CSS transforms and transitions for professional feel

### Files Modified
- `src/components/Platform/SectorTabsSection.tsx` - New reusable component
- `src/components/Platform/index.ts` - Added export for new component
- `src/app/(frontend)/(pages)/[locale]/platform/products/usesafe-certification/page.tsx` - Updated to use SectorTabsSection
- `src/app/(frontend)/(pages)/[locale]/platform/frameworks/textile-passport/page.tsx` - Updated to use SectorTabsSection
- `messages/tr.json` - Added complete UseSafe certification translations
- `messages/en.json` - Verified and confirmed existing translations 