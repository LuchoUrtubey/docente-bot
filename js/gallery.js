/**
 * Módulo de Galería de Capturas de Pantalla y Selector de Pestañas
 */
export function initScreenshotGallery() {
  const tabs = document.querySelectorAll('[data-gallery-tab]');
  const panels = document.querySelectorAll('[data-gallery-panel]');

  if (!tabs.length || !panels.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-gallery-tab');

      // Actualizar estilos de las pestañas activas e inactivas
      tabs.forEach(t => {
        t.classList.remove('bg-indigo-600', 'text-white', 'border-indigo-500');
        t.classList.add('bg-slate-900', 'text-slate-400', 'border-slate-800');
      });

      tab.classList.remove('bg-slate-900', 'text-slate-400', 'border-slate-800');
      tab.classList.add('bg-indigo-600', 'text-white', 'border-indigo-500');

      // Actualizar visibilidad de los paneles correspondientes
      panels.forEach(panel => {
        if (panel.getAttribute('data-gallery-panel') === targetId) {
          panel.classList.remove('hidden');
          panel.classList.add('block', 'animate-fadeIn');
        } else {
          panel.classList.add('hidden');
          panel.classList.remove('block');
        }
      });
    });
  });
}
