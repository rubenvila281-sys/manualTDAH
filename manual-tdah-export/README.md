# El Manual del Usuario TDAH - Landing Page

Landing page de ventas para "El Manual del Usuario TDAH" de Franco Vila.

## Estructura del Proyecto

```
client/
  ├── index.html          # Archivo HTML principal
  ├── public/             # Archivos estáticos (imágenes, etc.)
  └── src/
      ├── App.tsx         # Componente principal
      ├── main.tsx        # Punto de entrada
      ├── index.css       # Estilos globales
      ├── pages/          # Páginas del sitio
      ├── components/     # Componentes reutilizables
      ├── contexts/       # Contextos de React
      ├── hooks/          # Hooks personalizados
      └── lib/            # Utilidades
```

## Tecnologías Utilizadas

- **React 19** - Framework frontend
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Utilidades CSS
- **Vite** - Build tool
- **shadcn/ui** - Componentes UI
- **Wouter** - Enrutamiento ligero

## Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/manual-tdah-landing.git
   cd manual-tdah-landing
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   # o
   pnpm install
   ```

3. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   # o
   pnpm dev
   ```

4. **Compilar para producción:**
   ```bash
   npm run build
   # o
   pnpm build
   ```

## Características Principales

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Carrusel de testimonios
- ✅ Carrusel de contenido "Por Dentro"
- ✅ Notificaciones FOMO (ocultas en móvil)
- ✅ Lazy loading de imágenes y videos
- ✅ Scroll suave a secciones
- ✅ Timer de oferta limitada
- ✅ Diseño persuasivo con Value Stack (Alex Hormozi)

## Secciones del Sitio

1. **Hero Section** - Titular principal con FOMO
2. **Puntos de Dolor** - Problemas que resuelve
3. **Beneficios** - Lo que aprenderás
4. **Bonos** - Regalos incluidos
5. **Por Dentro** - Carrusel de contenido
6. **Testimonios** - Casos de éxito
7. **Autor** - Información de Franco Vila
8. **Precios** - Oferta principal
9. **FAQ** - Preguntas frecuentes

## Configuración de Colores

- **Primario:** #E89643 (Naranja)
- **Secundario:** #2D8A76 (Verde)
- **Fondo:** #FDF6E3 (Crema)
- **Texto:** #333333 (Gris oscuro)

## Optimizaciones

- Lazy loading en todas las imágenes (`loading="lazy"`)
- Preload="none" en videos
- Scroll suave a secciones de precios
- Botones CTA responsivos
- Notificaciones FOMO ocultas en móvil

## Despliegue

### Opción 1: Manus (Recomendado)
El sitio está optimizado para Manus y puede desplegarse directamente desde el panel de control.

### Opción 2: Vercel
```bash
npm install -g vercel
vercel
```

### Opción 3: Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Opción 4: GitHub Pages
1. Configura `vite.config.ts` con `base: '/manual-tdah-landing/'`
2. Ejecuta `npm run build`
3. Sube la carpeta `dist` a GitHub Pages

## Variables de Entorno

```env
VITE_ANALYTICS_ENDPOINT=tu-endpoint
VITE_ANALYTICS_WEBSITE_ID=tu-id
```

## Licencia

Todos los derechos reservados © Franco Vila

## Contacto

Para preguntas o soporte, contacta a Franco Vila.
