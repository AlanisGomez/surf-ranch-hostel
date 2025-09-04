# Surf Ranch - Hostel & Café Website

Un sitio web moderno y responsive para un hostel y café en Chapadmalal, inspirado en el estilo de BAI BAI. Desarrollado con las mejores tecnologías y prácticas de desarrollo.

## 🚀 Tecnologías Utilizadas

- **Next.js 15** - Framework de React con App Router
- **React 19** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS utilitario
- **Framer Motion** - Animaciones fluidas
- **Headless UI** - Componentes accesibles
- **Heroicons** - Iconografía moderna
- **Jest** - Framework de testing
- **Testing Library** - Utilidades para testing de componentes

## 🎨 Diseño

El sitio utiliza una paleta de colores personalizada:
- **Primario**: #00b0b9 (Turquesa)
- **Secundario**: #f7da11 (Amarillo)
- **Terciario**: #ff4c00 (Naranja)
- **Oscuro**: #333333 (Gris oscuro)

## 📱 Características

- ✅ **Responsive Design** - Optimizado para todos los dispositivos
- ✅ **Componentes Modulares** - Arquitectura escalable
- ✅ **Animaciones Suaves** - Transiciones con Framer Motion
- ✅ **SEO Optimizado** - Metadatos y estructura semántica
- ✅ **Accesibilidad** - Componentes accesibles con Headless UI
- ✅ **Testing** - Tests unitarios con Jest y Testing Library
- ✅ **TypeScript** - Tipado estático para mayor robustez

## 🏗️ Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales
├── components/            # Componentes reutilizables
│   ├── Header/           # Navegación principal
│   ├── Hero/             # Banner principal
│   ├── Hostel/           # Sección del hostel
│   ├── Gallery/          # Galería de imágenes
│   ├── Cafe/             # Sección del café
│   ├── Experiences/      # Experiencias y trips
│   └── Footer/           # Pie de página
├── lib/                  # Utilidades y datos
│   └── data.ts           # Datos mock del sitio
└── types/                # Definiciones de TypeScript
    └── index.ts          # Tipos del proyecto
```

## 🚀 Instalación y Desarrollo

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd hostel-website
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 🧪 Testing

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests en modo watch
npm run test:watch
```

## 🏗️ Build y Producción

```bash
# Crear build de producción
npm run build

# Ejecutar en modo producción
npm start
```

## 📦 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linter de código
- `npm test` - Ejecutar tests
- `npm run test:watch` - Tests en modo watch

## 🎯 Funcionalidades

### Header
- Navegación responsive
- Menú móvil con animaciones
- Logo y enlaces de navegación

### Hero
- Banner principal con call-to-action
- Animaciones de entrada
- Diseño impactante

### Hostel
- Información de habitaciones
- Características del hostel
- Sistema de reservas

### Café
- Menú interactivo con categorías
- Información del café
- Características destacadas

### Experiencias
- Trips de surf y aventura
- Información detallada
- Sistema de reservas

### Galería
- Imágenes del hostel y café
- Modal de visualización
- Diseño responsive

### Footer
- Información de contacto
- Enlaces de navegación
- Newsletter
- Redes sociales

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

- **Email**: hola@surfranch.com
- **Teléfono**: +54 9 11 1234-5678
- **Ubicación**: Chapadmalal, Buenos Aires, Argentina

---

Desarrollado con ❤️ para Surf Ranch
