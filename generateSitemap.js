import fs from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';

// Your Vue 3/Vite routes (modify according to your routes)
const routes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'weekly', priority: 0.8 },
    // Add more routes as needed
];

const hostname = 'https://elementthequarter.co.uk'; // Replace with your actual final domain

const sitemap = new SitemapStream({ hostname });

// Add URLs to the sitemap
routes.forEach((route) => {
    sitemap.write(route);
});

sitemap.end();

// Convert the sitemap stream to a string and save it to a file
streamToPromise(sitemap)
    .then((sitemapXML) => {
        fs.writeFileSync('sitemap.xml', sitemapXML, 'utf8');
        console.log('Sitemap generated successfully!');
    })
    .catch((error) => {
        console.error('Error generating sitemap:', error);
    });
