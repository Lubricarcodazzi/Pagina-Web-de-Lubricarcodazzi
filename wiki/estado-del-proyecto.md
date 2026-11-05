---
tipo: estado
estado: vigente
creado: 2026-10-29
actualizado: 2026-11-05
tags: [proyecto, landing, vite]
fuentes: [AGENTS.md, "package.json", "README.md", "package-lock.json"]
---
# Estado del proyecto

- **Confirmado:** el sitio existente es una aplicación React 19 + TypeScript, compilada con Vite 8; contiene una landing de Lubricar Codazzi con catálogo, servicios, testimonios, contacto, modales y enlaces a WhatsApp.
- **Confirmado:** Node.js `v24.22.1`, npm `11.19.1` y Git `2.56.0.windows.2` están disponibles en este equipo al 2026-10-29.
- **Confirmado:** copia de trabajo: raíz del proyecto, como indicó el usuario. La carpeta `prototipo de la pagina web corregida/` conserva la copia idéntica inicial.
- **Comprobado:** scripts `npm run build`, `npm run lint` y `npm run dev` (Vite puerto 3000). Se corrigió la incompatibilidad de `esbuild` en el manifiesto, se instaló y generó `package-lock.json`; build y lint pasan.
- **Comprobado:** vista previa en `http://localhost:3000/` cargó en navegador. Revisión inicial de escritorio y móvil: no se detectó desbordamiento horizontal a 390 px; los enlaces de WhatsApp apuntan al número configurado. No se enviaron mensajes ni formularios.
- **Confirmado:** se inicializó un repositorio Git local en la carpeta de empresa y se añadió `.gitignore` para mantener `Docs/`, secretos y artefactos fuera de Git. Git bloquea operaciones normales porque la carpeta pertenece a otra cuenta de Windows; consultas de estado funcionaron con `safe.directory` solo para ese comando. No se cambió configuración global.
- **Confirmado:** existe un repositorio público y vacío en GitHub: `Lubricarcodazzi/Pagina-Web-de-Lubricarcodazzi`. El usuario pidió registrar y subir el contenido actual usando la identidad `Lubricarcodazzi <Lubricarcodazzi@gmail.com>`.
- **Confirmado:** no se encontró el ZIP original. Hay dos copias de código; la raíz es la de trabajo, por decisión del usuario, y la subcarpeta queda intacta.
- **Confirmado:** no hay publicación del sitio web en un hosting. El repositorio GitHub es público; el primer commit/push se está preparando.
- **Pendiente:** confirmar resultado del push y guardar su hash en el log.
- **Siguiente paso:** revisar autorización de testimonios y validar afirmaciones comerciales/técnicas visibles antes de cambiar contenido.
