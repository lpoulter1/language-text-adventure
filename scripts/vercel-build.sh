#!/bin/bash

# This is an alternative build script for Vercel

echo "Starting Vercel build script..."
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Run TypeScript compiler
echo "Running TypeScript compiler..."
npx tsc -b

# Run Vite build
echo "Running Vite build..."
NODE_OPTIONS="--max-old-space-size=4096" npx vite build

echo "Build completed!" 