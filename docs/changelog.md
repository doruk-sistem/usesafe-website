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

- **Newsletter Block Component**: Replaced custom React form with Constant Contact inline form
  - Removed custom form implementation with email state and submit handler
  - Integrated Constant Contact inline form with data-form-id="f4e8991a-a588-4780-a79b-093a438678e9"
  - Simplified component by removing unused imports (useState, Button component)
  - Maintained existing styling and layout structure
  - Improved newsletter subscription functionality with external service integration

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

- **TypeScript Type Safety Improvements**: Replaced unsafe type assertions with safer alternatives
  - Removed `as any` type assertions throughout SectorTabsSection component
  - Created getSectorTranslation helper function for type-safe translation access
  - Implemented try-catch error handling for translation failures
  - Added fallback values to prevent runtime errors
  - Followed TypeScript best practices from web standards for safer code
  - Improved code maintainability and reduced potential runtime issues

### Files Modified
- `src/components/Platform/SectorTabsSection.tsx` - New reusable component
- `src/components/Platform/index.ts` - Added export for new component
- `src/app/(frontend)/(pages)/[locale]/platform/products/usesafe-certification/page.tsx` - Updated to use SectorTabsSection
- `src/app/(frontend)/(pages)/[locale]/platform/frameworks/textile-passport/page.tsx` - Updated to use SectorTabsSection
- `messages/tr.json` - Added complete UseSafe certification translations
- `messages/en.json` - Verified and confirmed existing translations 