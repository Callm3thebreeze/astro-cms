# Astro CMS

Astro CMS es un sistema para construir sitios web estáticos totalmente administrable desde un panel de control. Permite a los usuarios modificar textos, imágenes y otros elementos de la web sin necesidad de editar el código fuente.

## Funcionalidades principales
- Panel de administración para crear, editar y eliminar contenido.
- Publicación automática de los cambios realizados desde el panel.
- Gestión de imágenes y archivos mediante almacenamiento centralizado.
- Seguridad integrada para usuarios y roles.
- Blog, páginas estáticas y galería de imágenes (personalizable).
- Arquitectura modular para agregar nuevas secciones fácilmente.

## Tecnologías utilizadas
- **Frontend:** Astro y React.
- **Backend & CMS:** Appwrite.

---

## Configuración de Appwrite para desarrollo

Sigue estos pasos para conectar y preparar Appwrite en tu entorno local:

### 1. Instala Appwrite localmente

Descarga e instala Appwrite siguiendo la guía oficial:  
[Documentación de Appwrite](https://appwrite.io/docs/installation)

O con Docker:

```bash
docker run -it --rm \
    -p 80:80 -p 443:443 \
    -v /var/run/docker.sock:/var/run/docker.sock \
    appwrite/appwrite
```

### 2. Crea un proyecto en Appwrite

- Ingresa al panel de Appwrite (por defecto http://localhost).
- Crea un nuevo proyecto y copia el `Project ID`.

### 3. Crea una base de datos y colección

- Ve a "Database" y crea una nueva base de datos (por ejemplo, `cms`).
- Añade una colección (por ejemplo, `posts`) y define los atributos que necesites (ejemplo: título, contenido, imagen).

### 4. Configura un bucket de almacenamiento

- En "Storage", crea un bucket para almacenar imágenes y otros archivos (por ejemplo, `media`).

### 5. Crea usuarios y roles (opcional)

- Configura usuarios y permisos según los requisitos de tu proyecto.

### 6. Obtén las credenciales

- Ve a "API Keys" y genera una clave para el desarrollo local.
- Anota el `Endpoint`, `Project ID` y la `API Key`.

### 7. Configura el frontend para conectar con Appwrite

Instala el SDK de Appwrite en tu proyecto Astro/React:

```bash
npm install appwrite
```

Ejemplo de conexión:

```javascript
import { Client, Databases, Storage } from 'appwrite';

const client = new Client()
  .setEndpoint('http://localhost/v1') // Cambia el endpoint si usas Appwrite desplegado
  .setProject('TU_PROJECT_ID');        // Reemplaza con tu Project ID

const databases = new Databases(client);
const storage = new Storage(client);

// Obtener documentos
databases.listDocuments('cms', 'posts').then(
  response => console.log(response),
  error => console.error(error)
);

// Subir archivo
// storage.createFile('media', FileObject, ['role:all']);
```

### 8. Variables de entorno recomendadas

Crea un archivo `.env` en tu frontend:

```env
VITE_APPWRITE_ENDPOINT=http://localhost/v1
VITE_APPWRITE_PROJECT=TU_PROJECT_ID
VITE_APPWRITE_BUCKET=media
```

Y usa estas variables en tu código para mayor seguridad y flexibilidad.

---

¿Te gustaría agregar ejemplos para autenticación de usuarios o gestión avanzada de permisos? ¡Contribuye o abre un issue!

