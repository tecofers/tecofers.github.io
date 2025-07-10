#!/bin/bash

# Development server script for NiceRestaurant Jekyll site

echo "🍽️  Starting NiceRestaurant Jekyll Development Server"
echo "================================================"

# Check if Jekyll is installed
if ! command -v jekyll &> /dev/null; then
    echo "❌ Jekyll is not installed. Please install Jekyll first:"
    echo "   gem install jekyll bundler"
    exit 1
fi

# Check if dependencies are installed
if [ ! -d ".bundle" ] && [ ! -f "Gemfile.lock" ]; then
    echo "📦 Installing dependencies..."
    bundle install
fi

# Build and serve the site
echo "🚀 Starting development server..."
echo "📍 Site will be available at: http://localhost:4000"
echo "⏹️  Press Ctrl+C to stop the server"
echo ""

bundle exec jekyll serve --watch --host 0.0.0.0 --port 4000 --livereload

