# How to Use the `grep` Command in Linux

The `grep` command in Linux is a powerful tool for searching text within files. Short for "Global Regular Expression Print," `grep` allows users to search, filter, and display specific text patterns from the command line. This guide will cover the basics of using `grep`, from simple searches to more advanced options.

## Table of Contents
1. [Basic Syntax of `grep`](#basic-syntax-of-grep)
2. [Using `grep` with Basic Patterns](#using-grep-with-basic-patterns)
   - [Example 1: Simple Search](#example-1-simple-search)
   - [Example 2: Case-Insensitive Search](#example-2-case-insensitive-search)
3. [Advanced `grep` Options](#advanced-grep-options)
   - [Recursive Search with `-r`](#recursive-search-with--r)
   - [Displaying Line Numbers with `-n`](#displaying-line-numbers-with--n)
   - [Invert Matching with `-v`](#invert-matching-with--v)
4. [Combining `grep` with Other Commands](#combining-grep-with-other-commands)
5. [Conclusion](#conclusion)

---

## Basic Syntax of `grep`

The basic syntax for the `grep` command is as follows:

```bash
grep [OPTIONS] PATTERN [FILE...]