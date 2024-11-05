---
layout: post
title: "Essential Git Commands for Developers"
date: 2024-11-05
author: Ali Imran
categories: [blog, commands]
featured: true
---

# Essential Git Commands for Developers

Here's a collection of commonly used Git commands that every developer should know.

## Basic Commands

### Getting Started

```bash
git init            # Initialize a new Git repository
git clone <url>     # Clone a repository from remote
git status         # Check status of working directory
```

### Daily Workflow

```bash
git add .          # Stage all changes
git commit -m "Your message"   # Commit staged changes
git push origin main          # Push to remote repository
```

### Branching

```bash
git branch              # List all branches 
git branch <name>       # Create new branch
git checkout <name>     # Switch to branch 
git merge <branch>      # Merge branch into current branch
```

## Advanced Commands

### Stashing

```bash
git stash             # Temporarily save changes 
git stash pop         # Apply saved changes`
```

### History

```bash
git log              # View commit history
git blame <file>     # See who changed what in a file
```

## Tips and Tricks

1. **Undo Last Commit**
  
  ```bash
  git reset --soft HEAD~1
  ```
  
2. **Amend Last Commit**
  
  ```bash
  git commit --amend
  ```
  
3. **Force Push (use carefully!)**
  
  ```bash
  git push -f origin main
  ```
  

Remember to always be careful with commands that modify history or force operations!

## Best Practices

1. Always pull before pushing
2. Write clear commit messages
3. Create branches for new features
4. Regular commits with smaller changes

## Conclusion

These Git commands will help you manage your code effectively. Practice them regularly to become more comfortable with version control.
