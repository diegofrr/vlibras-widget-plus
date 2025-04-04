export const initGTagAnalytics = () => {
  if (window.gtag) {
    sendCustomGTagEvent('accessibility_activated', {
      user_action: 'activate_accessibility',
    });
    return;
  }

  const existingScript = document.querySelector(
    'script[src*="googletagmanager.com/gtag/js"]'
  );
  if (existingScript) {
    existingScript.addEventListener('load', () => {
      configureAndSend();
    });
    return;
  }

  const script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-33MNM4MG8B';
  script.async = true;
  script.onload = () => configureAndSend()
  document.head.prepend(script);
};

function configureAndSend() {
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
     window.dataLayer.push(...args);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', 'G-33MNM4MG8B');

  sendCustomGTagEvent('accessibility_activated', {
    user_action: 'activate_accessibility',
  });
}

function sendCustomGTagEvent(eventName: string, eventData: Record<string, any> = {}) {
  if (!window.gtag) return;


  const siteData = {
    site_domain: window.location.hostname,
    page_url: window.location.href,
    timestamp: new Date().toISOString(),
  };

  console.log('[GTAG EVENT]', eventName, { ...siteData, ...eventData });

  window.gtag('event', eventName, {
    ...siteData,
    ...eventData,
  });
}
