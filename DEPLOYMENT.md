# Production Deployment Guide

## Untuk Vite Build

Saat build dengan `npm run build`, pastikan server Anda dikonfigurasi dengan benar untuk SPA routing.

## Server Configuration Examples

### Nginx

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/portfolio/dist;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache assets
    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2)$ {
        expires 1y;
        cache-control: immutable;
    }
}
```

### Apache

```apache
<Directory /var/www/portfolio/dist>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</Directory>
```

### Vercel

No special configuration needed - Vercel automatically handles SPA routing.

### Netlify

Create `public/_redirects` file:

```
/*    /index.html   200
```

## Environment Variables

Untuk production, Anda bisa membuat file `.env.production`:

```
VITE_API_BASE_URL=https://api.yourdomain.com
VITE_APP_MODE=production
```

Kemudian di kode:

```javascript
const apiBaseUrl =
  import.meta.env.VITE_API_BASE_URL || "https://api.yourdomain.com";
```

## Security Checklist untuk Production

- [ ] Ubah `ADMIN_PASSWORD` di `src/services/authService.js`
- [ ] Deploy dengan HTTPS
- [ ] Setup backup data otomatis
- [ ] Configure proper CORS jika menggunakan backend API
- [ ] Setup monitoring dan logging
- [ ] Test semua fitur CMS sebelum go-live
- [ ] Setup email notifications untuk admin actions (optional)

## Database Migration (Optional)

Jika Anda ingin migrate dari localStorage ke database di kemudian hari:

1. Export semua data dari localStorage
2. Setup backend API
3. Modify `cmsDataService.js` untuk call API endpoints instead of localStorage
4. Migrate data ke database
5. Deploy

## Backup Strategy

### Automated Backup

Anda bisa menambahkan fitur auto-export ke email atau cloud storage:

```javascript
// Di AdminPanel.jsx
const handleAutoBackup = async () => {
  const data = {
    experience: cmsDataService.getExperienceData(),
    portfolio: cmsDataService.getPortfolioData(),
    services: cmsDataService.getServicesData(),
    news: cmsDataService.getNewsData(),
    skills: cmsDataService.getSkillsData(),
    timestamp: new Date().toISOString(),
  };

  const backupJson = JSON.stringify(data, null, 2);
  const blob = new Blob([backupJson], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `cms-backup-${Date.now()}.json`;
  a.click();
};
```

## Troubleshooting Production Issues

### Routes return 404

- Verify server is configured for SPA routing (try_files or RewriteRule)
- Check that all routes serve index.html

### CORS errors

- If using separate backend API, configure CORS properly
- Use environment variables for API URLs

### Data lost after deployment

- Ensure localStorage persistence across builds
- Consider migrating to database for production

## Performance Optimization

- Enable compression (gzip) on server
- Setup CDN for static assets
- Optimize images before upload
- Minify CSS/JS (done automatically by Vite)
- Setup caching headers for static assets
