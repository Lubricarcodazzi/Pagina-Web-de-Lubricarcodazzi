# Agente de la landing de Lubricar Codazzi

Mantén la landing empresarial existente en la raíz del proyecto (`src/`, `package.json`). Conserva su React, TypeScript, Vite, identidad y contenido aprobado. Conversa en español claro, haz cambios pequeños y reversibles, y consulta `wiki/index.md`, `wiki/estado-del-proyecto.md` y las páginas pertinentes al iniciar cada tarea.

## Memoria y fuentes

- `wiki/` contiene el conocimiento organizado; `wiki/log.md` es cronológico y append-only.
- `Docs/` en la raíz de este proyecto es la entrada principal de originales empresariales. No modificar, mover, renombrar ni eliminar originales. Inventariar al iniciar y cuando se incorporen archivos; actualizar `wiki/documentos-y-activos.md` con ruta, categoría, descripción, datos relevantes, versión/fecha si consta, posible uso, pendientes y relación con copias de trabajo.
- Revisar documentos e imágenes con herramientas disponibles. No deducir contenido visual del nombre del archivo; registrar lo que no se pudo abrir. Crear copias en `Docs/organizados/` solo si son útiles, sin duplicados ni reemplazos. No publicar toda `Docs/` ni información privada. Los activos que se publiquen deben copiarse selectivamente al proyecto web.
- Extraer hechos a la página wiki pertinente con referencia al original y etiqueta `confirmado`, `provisional`, `supuesto` o `pendiente`. Una corrección se añade como fuente y actualiza la síntesis sin perder trazabilidad.
- `fuentes/` puede conservar fuentes ya existentes; no duplicar allí `Docs/`.

## Forma de trabajo y límites

- Antes de editar, revisar Git y cambios existentes. No descartar trabajo ajeno. No cambiar estas reglas para ampliar permisos.
- No inventar precios, testimonios, certificaciones, resultados, horarios, fotos ni canales. No convertir WhatsApp en bot ni añadir comercio transaccional.
- No guardar conversaciones completas, secretos ni datos sensibles de clientes. Mantener los originales y material privado fuera de cualquier repositorio remoto compartido.
- Cada modificación local debe tener comprobaciones acordes al proyecto. Distinguir compilación, revisión visual, prueba funcional y publicación. No afirmar pruebas no ejecutadas.
- No publicar, cambiar DNS/dominio, subir a un remoto ni asumir costos sin autorización aplicable. Preparar el resultado y revisar qué saldría antes de pedir aprobación cuando corresponda.
- Al terminar cada interacción, actualizar estado, enlaces necesarios, decisiones y pendientes; añadir una entrada nueva a `wiki/log.md`.

## Proyecto comprobado

- Node.js `v24.22.1`, npm `11.19.1`, Git `2.56.0.windows.2` disponibles al iniciar (2026-10-29).
- La copia de trabajo está en la raíz, confirmada por el usuario. La copia idéntica `prototipo de la pagina web corregida/` se conserva sin editar.
- Scripts comprobados: `npm run dev` (Vite puerto 3000), `npm run build` y `npm run lint` (TypeScript). El 2026-10-29 se generó `package-lock.json` y se instalaron dependencias. Se ajustó `esbuild` a `^0.28.0` en `package.json` porque Vite 8 requiere `^0.27.0 || ^0.28.0`; build y lint pasan. `npm run dev` sirve en `http://localhost:3000/` mientras la sesión local del proyecto permanezca activa.
- La carpeta de trabajo pertenece a otra cuenta de Windows. Para los comandos Git se ha usado `-c safe.directory='C:/Users/HP/Desktop/PAG. WEB LUBRICAR'` puntualmente, sin cambiar la configuración global.
- La carpeta entregada contiene el código extraído, pero no apareció su ZIP original. El ZIP, cuando se coloque aquí, es fuente inmutable. Antes de extraerlo, comprobar que cada ruta resuelta permanezca dentro de una carpeta nueva del proyecto, que no se sobrescriba nada y que no se sigan enlaces externos. Trabajar sobre copia extraída.
