// This script generates placeholder images for the game
// Run with: node --experimental-modules scripts/generate-images.js

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createCanvas } from "canvas";

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Make sure the images directory exists
const imagesDir = path.join(__dirname, "../public/images");
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Define the images to generate
const images = [
  { name: "Rome", color: "#1A5276" },
  { name: "Cafe", color: "#556B2F" },
  { name: "Coffee", color: "#722F37" },
  { name: "Colosseum", color: "#CD212A" },
  { name: "Hotel", color: "#008C45" },
  { name: "Hotel Reception", color: "#F2D680" },
  { name: "Cafe Bill", color: "#8E44AD" },
  { name: "Cafe Cornetto", color: "#D35400" },
  { name: "Cafe Water", color: "#3498DB" },
  { name: "Colosseum Queue", color: "#E74C3C" },
  { name: "Colosseum Ticket", color: "#2ECC71" },
  { name: "Hotel Room", color: "#F39C12" },
  { name: "Hotel Availability", color: "#16A085" },
];

// Generate the images
images.forEach(({ name, color }) => {
  const canvas = createCanvas(800, 600);
  const ctx = canvas.getContext("2d");

  // Fill background
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Add text
  ctx.fillStyle = "white";
  ctx.font = "bold 48px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(name, canvas.width / 2, canvas.height / 2);

  // Add Italian flag stripe at the bottom
  const stripeHeight = 20;
  ctx.fillStyle = "#008C45"; // Green
  ctx.fillRect(0, canvas.height - stripeHeight, canvas.width / 3, stripeHeight);
  ctx.fillStyle = "#F4F5F0"; // White
  ctx.fillRect(
    canvas.width / 3,
    canvas.height - stripeHeight,
    canvas.width / 3,
    stripeHeight
  );
  ctx.fillStyle = "#CD212A"; // Red
  ctx.fillRect(
    (2 * canvas.width) / 3,
    canvas.height - stripeHeight,
    canvas.width / 3,
    stripeHeight
  );

  // Save the image
  const filename = path.join(
    imagesDir,
    `${name.toLowerCase().replace(/ /g, "_")}.jpg`
  );
  const out = fs.createWriteStream(filename);
  const stream = canvas.createJPEGStream({ quality: 0.95 });
  stream.pipe(out);
  out.on("finish", () => console.log(`Created ${filename}`));
});

console.log("Generating images...");
