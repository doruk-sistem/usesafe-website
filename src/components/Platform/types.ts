export interface ContactFormData {
  fullName: string;
  workEmail: string;
  phoneNumber: string;
  companyName: string;
  jobTitle: string;
  country: string;
  reasonForReachingOut: string;
  message: string;
  acceptTerms: boolean;
}

export interface ModernContactFormProps {
  className?: string;
}
