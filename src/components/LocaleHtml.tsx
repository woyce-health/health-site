'use client';

import { useEffect } from 'react';

export function LocaleHtml(props: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = props.locale;
  }, [props.locale]);

  return null;
}
