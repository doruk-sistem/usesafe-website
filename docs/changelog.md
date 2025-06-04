# Changelog

## [Latest Changes] - 2025-06-04

### Added
- **Terms of Service Page**: Created a comprehensive terms of service page following the privacy policy structure
  - New `TermsOfServiceContent` component in `src/components/Platform/TermsOfServiceContent.tsx`
  - Terms of service page at `/terms-of-service` route
  - Full internationalization support with English and Turkish translations
  - Modern design with sections for overview, acceptance, services description, user obligations, payment terms, limitations, intellectual property, termination, governing law, and contact information
  - Responsive layout with relevant icons for each section and professional styling

### Updated
- **Internationalization**: Added comprehensive terms of service translations
  - English translations in `messages/en.json` under `TermsOfService` namespace
  - Turkish translations in `messages/tr.json` under `TermsOfService` namespace
  - Complete translation coverage for all terms of service sections
  - Legal compliance content for German law jurisdiction

- **Component Architecture**: Enhanced Platform components structure
  - Added `TermsOfServiceContent` export to `src/components/Platform/index.ts`
  - Created page structure following project conventions:
    - `src/app/(frontend)/(pages)/[locale]/terms-of-service/page.tsx` (server component)
    - `src/app/(frontend)/(pages)/[locale]/terms-of-service/page.client.tsx` (client component)

- **Footer Component**: Updated legal links to properly include locale prefix
  - Fixed Terms & Conditions and Privacy Policy links in footer to include `/${locale}` prefix
  - Improved navigation consistency across the application

### Features
- **Terms of Service UI**: Professional design matching the privacy policy style
  - File contract icon header emphasizing legal documentation
  - Section-based layout with relevant icons for each topic (gavel for legal sections, credit card for payments, etc.)
  - Contact information section with email and address details
  - Last updated date display for legal transparency
  - Responsive design that works on all devices

- **Content Sections**: Comprehensive terms of service coverage
  - Overview of service terms and user agreements
  - Acceptance of terms policies
  - Detailed services description (certification, verification, DPP, compliance)
  - User obligations and responsibilities
  - Payment terms and billing information
  - Service limitations and disclaimers
  - Intellectual property rights protection
  - Account termination procedures
  - Governing law (German jurisdiction) and dispute resolution
  - Terms update procedures

### Technical Implementation
- **Framework**: Next.js with TypeScript and React
- **Styling**: TailwindCSS with consistent design tokens matching privacy policy
- **Icons**: React Icons (FontAwesome) with appropriate legal and business icons
- **Internationalization**: next-intl integration with complete German/Turkish translations
- **Routing**: Next.js App Router with locale support
- **Background Image**: Reused existing background image for consistency

## [Previous Changes] - 2025-06-04

### Added
- **Privacy Policy Page**: Created a comprehensive privacy policy page following the project's design standards
  - New `PrivacyPolicyContent` component in `src/components/Platform/PrivacyPolicyContent.tsx`
  - Privacy policy page at `/privacy-policy` route
  - Full internationalization support with English and Turkish translations
  - Modern design with sections for overview, data collection, usage, sharing, retention, user rights, security, cookies, and contact information
  - Responsive layout with icons and professional styling matching the site's design language

### Updated
- **Internationalization**: Added comprehensive privacy policy translations
  - English translations in `messages/en.json` under `PrivacyPolicy` namespace
  - Turkish translations in `messages/tr.json` under `PrivacyPolicy` namespace
  - Complete translation coverage for all privacy policy sections
  - Proper GDPR and privacy law compliance content

- **Component Architecture**: Enhanced Platform components structure
  - Added `PrivacyPolicyContent` export to `src/components/Platform/index.ts`
  - Created page structure following project conventions:
    - `src/app/(frontend)/(pages)/[locale]/privacy-policy/page.tsx` (server component)
    - `src/app/(frontend)/(pages)/[locale]/privacy-policy/page.client.tsx` (client component)

### Features
- **Modern Privacy Policy UI**: Professional design with clear sections and visual hierarchy
  - Shield icon header emphasizing security and privacy
  - Section-based layout with relevant icons for each topic
  - Contact information section with email and address details
  - Last updated date display for transparency
  - Responsive design that works on all devices

- **Content Sections**: Comprehensive privacy policy coverage
  - Overview of data processing practices
  - Information collection policies
  - Data usage explanations
  - Information sharing guidelines
  - Data retention policies
  - User privacy rights (access, rectification, erasure, etc.)
  - Security measures implementation
  - Cookies and tracking technologies
  - Policy update procedures
  - Contact information for privacy inquiries

### Technical Implementation
- **Framework**: Next.js with TypeScript and React
- **Styling**: TailwindCSS with consistent design tokens
- **Icons**: React Icons (FontAwesome) for visual enhancement
- **Internationalization**: next-intl integration
- **Routing**: Next.js App Router with locale support
- **Accessibility**: Proper semantic HTML and ARIA considerations

## [Previous Changes] - 2025-06-02

### Enhanced
- **Contact Form Terms and Conditions**: Improved user consent experience and transparency
  - Added proper links to privacy policy and terms of service pages
  - Implemented interactive info icon with detailed tooltip explaining user rights and data usage
  - Enhanced transparency about data collection and processing practices
  - Added clear explanations of what users agree to when submitting the form
  - Improved compliance with GDPR, CCPA, and other privacy regulations
  - Enhanced user experience with hover tooltip showing key consent points

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

## [2024-12-19] - Modern Contact Form Implementation

### Added
- **ModernContactForm Component**: Created a new modern contact form component in `src/components/Platform/ModernContactForm.tsx`
  - Two-column layout matching the provided design
  - Left column with content and call-to-action section
  - Right column with form fields
  - Modern styling with borderless inputs and bottom borders
  - Icon integration for visual enhancement
  - Responsive design that works on mobile and desktop

- **Type Definitions**: Created `src/components/Platform/types.ts`
  - `ContactFormData` interface for form data structure
  - `ModernContactFormProps` interface for component props

### Updated
- **Platform Components Index**: Updated `src/components/Platform/index.ts` to export new components
- **Contact Page**: Simplified `src/app/(frontend)/(pages)/[locale]/contact/page.client.tsx` to use the new ModernContactForm component

### Form Fields
Maintained all required form fields as requested:
- `fullName`: User's full name (required)
- `workEmail`: Work email address (required)
- `phoneNumber`: Phone number (required)
- `companyName`: Company name (required)
- `jobTitle`: Job title (required)
- `country`: Country selection (required)
- `reasonForReachingOut`: Subject/reason for contact (required)
- `message`: Message content (required)
- `acceptTerms`: Terms and conditions acceptance (required)

### Features
- **Form Validation**: Complete client-side validation for all fields
- **API Integration**: Maintains compatibility with existing `/api/send-contact-form` endpoint
- **Accessibility**: Proper ARIA labels, keyboard navigation, and screen reader support
- **Modern UI/UX**: 
  - Clean, minimalist design
  - Smooth transitions and focus states
  - Professional styling with proper spacing
  - Call-to-action section with phone contact information
- **Toast Notifications**: Success and error feedback using react-hot-toast
- **Internationalization**: Full support for existing translation system

### Technical Implementation
- **Framework**: React with TypeScript
- **Styling**: TailwindCSS with custom utilities
- **Icons**: React Icons (FontAwesome)
- **Form Handling**: Native React state management
- **Validation**: Real-time validation with visual feedback
- **Responsive**: Mobile-first responsive design

### Design Alignment
- Matches the provided modern contact form design
- Two-column layout with content on left, form on right
- Clean typography and spacing
- Professional color scheme
- Modern form elements with subtle styling 