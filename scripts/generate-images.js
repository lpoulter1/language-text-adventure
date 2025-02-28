// This script creates an HTML file for generating placeholder images in the browser
// Run with: node --experimental-modules scripts/generate-images.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the images to generate
const images = [
  { name: 'Rome', color: '#1A5276' },
  { name: 'Cafe', color: '#556B2F' },
  { name: 'Coffee', color: '#722F37' },
  { name: 'Colosseum', color: '#CD212A' },
  { name: 'Hotel', color: '#008C45' },
  { name: 'Hotel Reception', color: '#F2D680' },
  { name: 'Cafe Bill', color: '#8E44AD' },
  { name: 'Cafe Cornetto', color: '#D35400' },
  { name: 'Cafe Water', color: '#3498DB' },
  { name: 'Colosseum Queue', color: '#E74C3C' },
  { name: 'Colosseum Ticket', color: '#2ECC71' },
  { name: 'Hotel Room', color: '#F39C12' },
  { name: 'Hotel Availability', color: '#16A085' },
];

// Create HTML content
const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Generate Placeholder Images</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
      }
      .image-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        margin-top: 20px;
      }
      .placeholder {
        width: 100%;
        aspect-ratio: 4/3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: bold;
        position: relative;
        border-radius: 8px;
        overflow: hidden;
      }
      .flag-stripe {
        position: absolute;
        bottom: 0;
        height: 10px;
        width: 100%;
        display: flex;
      }
      .flag-stripe div {
        flex: 1;
      }
      .download-all {
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #4caf50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
      }
      .instructions {
        margin-top: 20px;
        padding: 15px;
        background-color: #f8f9fa;
        border-radius: 8px;
        border-left: 4px solid #4caf50;
      }
    </style>
  </head>
  <body>
    <h1>Generate Placeholder Images</h1>
    <p>
      Click on each image to download it, or use the button below to download
      all images.
    </p>

    <div class="image-container" id="imageContainer"></div>

    <button class="download-all" id="downloadAll">Download All Images</button>

    <div class="instructions">
      <h3>Instructions:</h3>
      <ol>
        <li>
          Click on each image to download it individually, or use the "Download
          All Images" button.
        </li>
        <li>
          After downloading, move all images to the
          <code>public/images</code> folder in your project.
        </li>
        <li>
          Make sure the filenames match the ones expected by your application.
        </li>
      </ol>
    </div>

    <script>
      const images = ${JSON.stringify(images)};

      const imageContainer = document.getElementById("imageContainer");

      // Create and render each placeholder image
      images.forEach(({ name, color }) => {
        const filename = name.toLowerCase().replace(/ /g, "_") + ".jpg";

        // Create placeholder container
        const placeholder = document.createElement("div");
        placeholder.className = "placeholder";
        placeholder.style.backgroundColor = color;
        placeholder.title = \`Click to download \${filename}\`;

        // Add text
        const text = document.createElement("div");
        text.textContent = name;
        text.style.fontSize = "20px";
        text.style.textAlign = "center";
        placeholder.appendChild(text);

        // Add Italian flag stripe
        const flagStripe = document.createElement("div");
        flagStripe.className = "flag-stripe";

        const greenStripe = document.createElement("div");
        greenStripe.style.backgroundColor = "#008C45";
        flagStripe.appendChild(greenStripe);

        const whiteStripe = document.createElement("div");
        whiteStripe.style.backgroundColor = "#F4F5F0";
        flagStripe.appendChild(whiteStripe);

        const redStripe = document.createElement("div");
        redStripe.style.backgroundColor = "#CD212A";
        flagStripe.appendChild(redStripe);

        placeholder.appendChild(flagStripe);

        // Add click event to download the image
        placeholder.addEventListener("click", () => {
          downloadImage(placeholder, filename);
        });

        imageContainer.appendChild(placeholder);
      });

      // Function to download a single image
      function downloadImage(element, filename) {
        html2canvas(element).then((canvas) => {
          const link = document.createElement("a");
          link.download = filename;
          link.href = canvas.toDataURL("image/jpeg", 0.95);
          link.click();
        });
      }

      // Function to download all images
      document.getElementById("downloadAll").addEventListener("click", () => {
        const placeholders = document.querySelectorAll(".placeholder");
        placeholders.forEach((placeholder, index) => {
          const filename =
            images[index].name.toLowerCase().replace(/ /g, "_") + ".jpg";
          setTimeout(() => {
            downloadImage(placeholder, filename);
          }, index * 500); // Delay each download to avoid browser limitations
        });
      });
    </script>

    <!-- Include html2canvas library -->
    <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
  </body>
</html>`;

// Write the HTML file
const htmlFilePath = path.join(__dirname, '../placeholder-images.html');
fs.writeFileSync(htmlFilePath, htmlContent);

console.log(`HTML file created at ${htmlFilePath}`);
console.log(
  'Open this file in your browser to generate and download the images.'
);
