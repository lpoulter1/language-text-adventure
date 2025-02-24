# Social Media Sharing for Avventura Italiana

This document provides instructions on how to use the social media preview generators and meta tags for your Italian language adventure game.

## Social Media Preview Images

Two HTML generators have been created to help you generate high-quality social media preview images:

1. **social-preview-generator.html** - Creates a wide (1200x630px) image suitable for Facebook, Twitter, and LinkedIn
2. **social-preview-square.html** - Creates a square (800x800px) image suitable for Instagram and other platforms that prefer square images

### How to Generate the Images

1. Open either HTML file in your browser
2. Click the "Download Preview Image" button
3. Save the generated image to your computer
4. Move the downloaded images to the `public/social/` directory:
   - `social-preview.jpg` (wide image)
   - `social-preview-square.jpg` (square image)

## Meta Tags

The `index.html` file has been updated with comprehensive meta tags for social media sharing, including:

- **Open Graph tags** for Facebook, LinkedIn, etc.
- **Twitter Card tags** for Twitter
- **Standard meta tags** for search engines

### Meta Tag Details

The meta tags include:

- **Title**: "Avventura Italiana - Learn Italian Through Adventure"
- **Description**: A detailed description of your game
- **Image**: Links to your social preview images
- **Keywords**: Relevant keywords for SEO
- **Theme Color**: Italian green (#008C45)

## Customizing Meta Tags

If you need to customize the meta tags:

1. Open `index.html`
2. Modify the content within the meta tags section
3. Update the URL in the `og:url` and `twitter:url` tags when you deploy your site

## Testing Social Media Previews

You can test how your site will appear when shared on social media using these tools:

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## Additional Tips

- **Image Quality**: The generators create high-quality images (2x scale)
- **Customization**: You can modify the HTML files to change colors, text, or layout
- **Deployment**: Make sure the paths to your images are correct when you deploy your site

## Troubleshooting

If your social media previews aren't showing correctly:

1. Ensure the images are in the correct location (`public/social/`)
2. Check that the meta tag URLs are correct for your deployment
3. Use the testing tools mentioned above to debug any issues
4. Some platforms cache previews, so you may need to use their debug tools to refresh the cache
