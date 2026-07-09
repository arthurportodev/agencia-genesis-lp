declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}

const pushEvent = (payload: Record<string, unknown>) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
};

pushEvent({
  event: 'page_view_custom',
  page_path: window.location.pathname,
  page_title: document.title,
});

document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement | null;
  const trackedElement = target?.closest<HTMLElement>('[data-track]');
  if (!trackedElement) return;

  pushEvent({
    event: trackedElement.dataset.track,
    click_location: trackedElement.dataset.location || 'unknown',
    link_url: trackedElement instanceof HTMLAnchorElement ? trackedElement.href : undefined,
    page_path: window.location.pathname,
  });
});

document.querySelectorAll<HTMLDetailsElement>('[data-faq-item]').forEach((details) => {
  details.addEventListener('toggle', () => {
    if (!details.open) return;
    const question = details.querySelector('summary')?.textContent?.trim();
    pushEvent({
      event: 'faq_open',
      faq_question: question,
      page_path: window.location.pathname,
    });
  });
});

const sentDepths = new Set<number>();
const depthThresholds = [25, 50, 75, 90];

const trackScrollDepth = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollable <= 0) return;

  const depth = Math.round((window.scrollY / scrollable) * 100);
  depthThresholds.forEach((threshold) => {
    if (depth >= threshold && !sentDepths.has(threshold)) {
      sentDepths.add(threshold);
      pushEvent({
        event: 'scroll_depth',
        scroll_percent: threshold,
        page_path: window.location.pathname,
      });
    }
  });
};

window.addEventListener('scroll', trackScrollDepth, { passive: true });

export {};
