# Carpeta de Imágenes

Esta carpeta contiene todas las imágenes y recursos gráficos del proyecto MeBu.

## Imágenes Disponibles

- **logo.svg**: Logo principal de MeBu
- **hero-image.svg**: Imagen para la sección hero del Home
- **about-team.svg**: Imagen para la sección de equipo en About

## Cómo Agregar Nuevas Imágenes

1. Coloca tus imágenes en esta carpeta
2. Importa en el archivo `index.js` para exportación centralizada
3. Usa en tus componentes:

```javascript
import { logo, heroImage } from '../assets/images';
// o
import logo from '../assets/images/logo.svg';
```

## Recomendaciones

- **Formato**: Usa SVG para logos e iconos, WebP/PNG para fotos
- **Optimización**: Comprime las imágenes antes de agregar
- **Nombres**: usa kebab-case (ejemplo: hero-image.svg)
- **Tamaño**: Mantén las imágenes por debajo de 500KB cuando sea posible

## Herramientas Útiles

- [SVGOMG](https://jakearchibald.github.io/svgomg/) - Optimizar SVGs
- [TinyPNG](https://tinypng.com/) - Comprimir PNG/JPG
- [Squoosh](https://squoosh.app/) - Convertir a WebP
