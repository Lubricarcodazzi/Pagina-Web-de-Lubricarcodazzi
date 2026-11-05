---
tipo: decisiones
estado: vigente
creado: 2026-10-29
actualizado: 2026-11-05
tags: [decisiones, proyecto]
fuentes: [AGENTS.md, "Docs/pagina web.docx", "prototipo de la pagina web corregida/package.json"]
---
# Decisiones

- **2026-10-29 — Mantener el proyecto web existente.** Está organizado como React/TypeScript + Vite y contiene una landing extensa. No hay necesidad comprobada de reconstruirlo. Fuente: `prototipo de la pagina web corregida/package.json` y `src/App.tsx`.
- **2026-10-29 — Mantener Docs originales fuera de Git.** Son fuentes empresariales y pueden contener información privada; el catálogo registra sus rutas sin copiar su contenido íntegro. Fuente: instrucción del proyecto y `Docs/`.
- **2026-10-29 — No publicar testimonios hasta confirmar autorización.** Hay nombres y opiniones en documentos Word, sin evidencia de permiso de publicación. Fuente: `Docs/pagina web.docx`, `Docs/TESTIMONIO 1.docx`.
- **2026-10-29 — Tratar con cautela el asesor técnico.** El prototipo genera recomendaciones por reglas fijas y no se halló fuente de validación técnica. No se editará aún; requiere revisión del negocio. Fuente: `prototipo de la pagina web corregida/src/components/AdvisorModal.tsx`.
- **2026-10-29 — Usar la raíz del proyecto como copia de trabajo.** El usuario confirmó esta ruta después de encontrar dos copias con fuente idéntica. La subcarpeta se conserva sin cambios como copia anterior. Fuente: conversación del 2026-10-29.
- **2026-10-29 — Ajustar `esbuild` a `^0.28.0` en la raíz.** `npm install` encontró que Vite 8 requiere esbuild `^0.27.0 || ^0.28.0`, mientras el manifiesto pedía `^0.25.0`; con el ajuste, instalación y compilación terminaron. Fuente: salida de npm y `package.json`.
- **2026-11-05 — Preparar primer envío al repositorio público existente.** El usuario indicó el destino `Lubricarcodazzi/Pagina-Web-de-Lubricarcodazzi` y pidió commit con el contenido del proyecto. Se excluirán `Docs/`, dependencias, salidas de compilación y la copia duplicada. Fuente: solicitud del usuario y estado visible del repositorio.
