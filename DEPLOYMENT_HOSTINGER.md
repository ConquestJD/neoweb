# Guía de Deployment en Hostinger

## Problema: Error 404 al refrescar páginas

Cuando estás en `tuurl.com/inicio` y presionas F5, aparece "This Page Does Not Exist" porque el servidor web no sabe cómo manejar las rutas de Angular.

## Solución

### 1. Archivos de configuración creados

He creado los siguientes archivos en la carpeta `public/`:

- **`.htaccess`** - Para servidores Apache (Hostinger usa Apache)
- **`web.config`** - Para servidores IIS (por si acaso)
- **`_redirects`** - Para Netlify (backup)

### 2. Pasos para el deployment

1. **Construir el proyecto:**
   ```bash
   ng build --configuration=production
   ```

2. **Subir archivos a Hostinger:**
   - Sube TODO el contenido de la carpeta `dist/NeoWeb/browser/` a la carpeta `public_html` de tu hosting
   - Asegúrate de que el archivo `.htaccess` esté en la raíz de `public_html`

3. **Verificar estructura en Hostinger:**
   ```
   public_html/
   ├── index.html
   ├── .htaccess          ← IMPORTANTE
   ├── main-*.js
   ├── styles-*.css
   ├── assets/
   └── ...otros archivos
   ```

### 3. Configuración adicional en Hostinger

1. **Panel de Control de Hostinger:**
   - Ve a "Archivos" → "Administrador de archivos"
   - Navega a `public_html`
   - Asegúrate de que `.htaccess` esté visible (archivos ocultos)

2. **Si el problema persiste:**
   - Verifica que el módulo `mod_rewrite` esté habilitado en Hostinger
   - Contacta al soporte de Hostinger si es necesario

### 4. Verificación

Después del deployment:
- Visita `tuurl.com/inicio`
- Presiona F5 - debería funcionar
- Navega a otras rutas y refresca - debería funcionar
- Prueba rutas directas como `tuurl.com/servicios` - debería funcionar

### 5. Si necesitas ayuda

Si el problema persiste, verifica:
1. Que el archivo `.htaccess` esté en la raíz de `public_html`
2. Que no haya errores de sintaxis en `.htaccess`
3. Que el módulo `mod_rewrite` esté habilitado
4. Revisa los logs de error de Hostinger

## Notas importantes

- El archivo `.htaccess` redirige todas las rutas no encontradas a `index.html`
- Angular se encarga del routing del lado del cliente
- Los archivos estáticos (CSS, JS, imágenes) se sirven normalmente
- Se incluyen headers de seguridad y optimizaciones de caché
