---
title: 'More Useful MacOS Command Line Tools'
description: 'Explore a curated list of macOS command-line utilities, from package management to JSON parsing, to streamline your development workflow.'
path: /blog/more-useful-macos-command-line-tools
date: 2024-11-27
category: tooling
ogImage:
  component: BlogPost
  props:
    readingMins: 4
sitemap:
  loc: /blog/more-useful-macos-command-line-tools
---

I recently came across [this](https://weiyen.net/articles/useful-macos-cmd-line-utilities) article by Wei Yen about useful built-in macOS command-line utilities. This made me think about which utilities, both built-in and installed, that I like to use. Here are a few powerful tools I find useful:

---

**Manage Packages with Homebrew**  

First and foremorest, you need a way to install these tools!

Homebrew (`brew`) is an optional but essential package manager for macOS that simplifies the installation of software and libraries. Think of it as an App Store for command-line tools. After installing, you can quickly install, update, or remove software via commands like:

```bash
brew install jq
brew update
brew uninstall afconvert
```

Homebrew keeps your system clean and organized by managing installations in a centralized location.  
**Link:** [Homebrew](https://brew.sh)

---

**Spotlight Search from the Terminal**  

With `mdfind`, you can leverage Spotlight’s indexing from the command line. This is handy for finding files without manually going through Finder or launching Spotlight. For example:

```bash
mdfind "index.vue"
```

This will output a list of all instances of the `index.vue` file. It’s also scriptable, making it great for automating file retrieval based on keywords or metadata by piping the output in another tool such as grep.

---

**Convert Audio Files with afconvert**  

Need to convert audio files between different formats? `afconvert` is a built-in macOS tool that lets you convert audio files from the terminal. Useful for quick conversions or integrating into a script that processes audio files if you don't want or need to dive into `ffmpeg`.

```bash
afconvert -f m4af -d aac input.wav output.m4a
```

---

**API Testing Made Simple with HTTPie**  

`HTTPie` is a user-friendly HTTP client, perfect for testing and interacting with APIs. It presents JSON in a readable format and has intuitive syntax, which makes it an ideal tool for developers:

```bash
http <https://api.example.com/endpoint>
http POST <https://api.example.com/endpoint> key=value
```

It’s perfect for anyone who regularly works with APIs and wants a more human-friendly interface than `curl`.
**Link:** [HTTPie](https://httpie.io)

---

**Process JSON Data with jq**

Now that you have an easy way to make API calls from the command-line, you need to be able to work with JSON data and for this `jq` is a must-have. This command-line utility parses, filters, and formats JSON output, making it easier to handle API responses or complex data. For example, to filter a specific field:

```bash
http "<https://api.example.com/data>" | jq '.key'
```

Even if you don't need to do any data wrangling, it's a great tool to pretty print any json you get back from an API call or reading a file.

**Link:** [jq on GitHub](https://github.com/stedolan/jq)

---

**Strip Directory and Suffix with basename**  

`basename` is a simple utility to extract the filename from a path, often used in scripts to isolate file names or remove extensions:

```bash
basename /path/to/file.txt
```

This will output just `file.txt`. It’s especially useful when processing files in a directory and managing output names dynamically.

---

**See the directory structure using tree**

`tree` displays the directory structure of the current directory. This can be useful if you need to know where a file lives exactly.

```bash
tree -I node_modules
```

This will output your directory tree but ignore the `node_modules` folder.

---

**Get Simplified Man Pages with tldr**  

After reading about all these tools, you might wonder how to use them efficiently. You can look at the `man` pages but they can be a bit dense, so if you’re looking for concise explanations, the `tldr` pages offer simplified examples for commonly used commands. Install it via `brew`:

```bash
brew install tldr
tldr ls
```

It’s a great resource for quick syntax examples without scrolling through verbose `man` entries.

---

These tools enhance what’s already available in macOS, turning your terminal into a more powerful and flexible work environment.
