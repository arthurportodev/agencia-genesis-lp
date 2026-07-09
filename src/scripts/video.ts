const facade = document.querySelector<HTMLButtonElement>('[data-video-facade]');

facade?.addEventListener(
  'click',
  () => {
    const videoId = facade.dataset.videoId;
    if (!videoId) return;

    const iframe = document.createElement('iframe');
    iframe.className = 'h-full w-full';
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    iframe.title = 'Vídeo principal da Agência Gênesis';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;

    facade.replaceWith(iframe);
  },
  { once: true },
);
