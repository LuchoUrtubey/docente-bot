/**
 * Inicializador Principal de la Aplicación
 * Carga dinámicamente componentes modulares HTML e inicializa módulos de interfaz (UI).
 */
import { initNavigation } from './navigation.js';
import { initScreenshotGallery } from './gallery.js';

async function loadComponents() {
  const elements = document.querySelectorAll('[data-include]');
  
  for (const el of elements) {
    const file = el.getAttribute('data-include');
    if (!file) continue;

    try {
      const response = await fetch(file);
      if (response.ok) {
        const html = await response.text();
        el.outerHTML = html;
      } else {
        console.error(`[DocenteBot] Error al cargar el componente '${file}': ${response.statusText}`);
      }
    } catch (err) {
      console.error(`[DocenteBot] Falló la petición del componente '${file}':`, err);
    }
  }

  // Inicializar componentes interactivos tras la inyección en el DOM
  initNavigation();
  initScreenshotGallery();

  if (window.lucide) {
    window.lucide.createIcons();
  }

  console.log('[DocenteBot] Componentes modulares cargados y UI inicializada correctamente.');
}

document.addEventListener('DOMContentLoaded', loadComponents);
