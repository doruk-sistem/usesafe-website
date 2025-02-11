"use client";

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function NewsletterBlock() {
  const t = useTranslations('Components.Newsletter');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1000);
  };

  return (
    <section className="newsletter-block tw-bg-gray-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="tw-text-center tw-py-12">
              <h2 className="tw-text-2xl tw-font-bold tw-mb-4">{t('title')}</h2>
              <p className="tw-text-gray-600 tw-mb-6">{t('description')}</p>
              
              <form onSubmit={handleSubmit} className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4 tw-justify-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('emailPlaceholder')}
                  className="form-control tw-max-w-md"
                  required
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn btn-primary"
                >
                  {status === 'loading' ? t('subscribing') : t('subscribe')}
                </button>
              </form>
              
              {status === 'success' && (
                <p className="tw-text-green-600 tw-mt-4">{t('successMessage')}</p>
              )}
              {status === 'error' && (
                <p className="tw-text-red-600 tw-mt-4">{t('errorMessage')}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}