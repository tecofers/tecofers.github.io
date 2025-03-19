#!/bin/bash

# Directory containing posts
POSTS_DIR="_posts"

# Function to update categories in a file
update_categories() {
    local file="$1"
    # Read content
    content=$(cat "$file")
    
    # Detect if it's a technical post
    if grep -qi "unix\|command\|git\|linux\|vps\|system" "$file"; then
        # Replace existing categories line with technical-articles
        sed -i '/^categories:/c\categories: technical-articles' "$file"
    else
        # Replace existing categories line with non-technical-articles
        sed -i '/^categories:/c\categories: non-technical-articles' "$file"
    fi
}

# Process each markdown file
find "$POSTS_DIR" -name "*.md" -type f | while read -r file; do
    update_categories "$file"
done

