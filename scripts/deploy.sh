#!/usr/bin/env bash
# Deployment script for GitHub Pages

echo "🚀 Deploying Academic Portfolio to GitHub Pages..."

git add .
git commit -m "[feat]: update website content and assets"
git push origin main

echo "✅ Deployed successfully! Check https://amirhashmilive.github.io/Postdoc/"
