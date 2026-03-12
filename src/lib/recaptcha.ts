/**
 * reCAPTCHA v3 - Client-side token generation
 * Docs: https://developers.google.com/recaptcha/docs/v3
 */

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

const RECAPTCHA_ACTION = "contact_form";

export async function executeRecaptcha(siteKey: string): Promise<string | null> {
  if (!siteKey || typeof window === "undefined") {
    return null;
  }

  const grecaptcha = window.grecaptcha;
  if (!grecaptcha) {
    return null;
  }

  return new Promise((resolve) => {
    grecaptcha.ready(async () => {
      try {
        const token = await grecaptcha.execute(siteKey, {
          action: RECAPTCHA_ACTION,
        });
        resolve(token);
      } catch {
        resolve(null);
      }
    });
  });
}

export { RECAPTCHA_ACTION };
