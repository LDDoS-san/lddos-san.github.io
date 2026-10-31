// An inert visual copy keeps both color themes on exactly the same layout.
document.querySelectorAll('.game-card.ai-ratio').forEach((card) => {
  const layer = card.cloneNode(true);
  layer.classList.remove('ai-ratio');
  layer.classList.add('has-ai', 'ai-color-layer');
  layer.removeAttribute('role');
  layer.removeAttribute('tabindex');
  layer.removeAttribute('aria-label');
  layer.setAttribute('aria-hidden', 'true');
  layer.inert = true;
  layer.querySelectorAll('[id]').forEach((element) => element.removeAttribute('id'));
  layer.querySelectorAll('[onclick]').forEach((element) => element.removeAttribute('onclick'));
  layer.querySelectorAll('audio').forEach((audio) => {
    audio.removeAttribute('src');
    audio.preload = 'none';
  });
  card.appendChild(layer);
});
