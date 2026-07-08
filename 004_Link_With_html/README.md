# HTML Review – 004: Hyperlinks

## 📖 About

This project is the fourth exercise in my **HTML Review Series**.

The purpose of this exercise is to review the HTML `<a>` (anchor) element and explore the different ways hyperlinks are used in modern websites. Rather than demonstrating only the basic syntax, this project focuses on practical examples and explains the behaviour, limitations, and common use cases of each type of hyperlink.

---

## 🎯 Objectives

In this exercise I practiced:

* External hyperlinks
* Opening links in new tabs
* Named browsing contexts
* Internal page navigation
* `<iframe>` basics
* Email links (`mailto:`)
* Telephone links (`tel:`)
* Download links
* Basic hyperlink security considerations

---

## 📚 What This Page Demonstrates

### 1. External Links

* Linking to other websites
* Proper use of absolute URLs
* Common mistakes when writing external links

### 2. Opening Links in a New Tab

Demonstrates:

* `target="_blank"`
* `rel="noopener noreferrer"`

### 3. Named Browser Tabs

Shows how multiple hyperlinks can reuse the same browser tab by assigning a custom name to the `target` attribute.

### 4. Inline Frames (`<iframe>`)

Introduces the basics of embedding another webpage inside a document.

The example uses **OpenStreetMap** to demonstrate embedding external content.

### 5. Anchor Links

Demonstrates internal page navigation using fragment identifiers (`#id`), including:

* Table of Contents
* "Back to Top" links
* Navigation within long documents

### 6. Email Links

Demonstrates:

* `mailto:`
* Prefilled subject
* CC and BCC
* Email body
* URL encoding for spaces and new lines

### 7. Telephone Links

Shows how the `tel:` protocol allows users to initiate phone calls directly from supported devices.

### 8. Download Links

Demonstrates downloading local files using the `download` attribute and explains why HTML alone cannot reliably force downloads from external websites.

---

## 💡 Learning Notes

During this exercise I learned that:

* Hyperlinks are much more versatile than simple page navigation.
* Different URL schemes (`https:`, `mailto:`, `tel:`) serve different purposes.
* Internal anchors make long documents easier to navigate.
* The `download` attribute mainly works for same-origin resources.
* External links should generally use `rel="noopener noreferrer"` when opened in a new tab.
* `<iframe>` creates an independent browsing context inside a webpage.

---

## ⚠️ Current Limitations

This project intentionally focuses on HTML fundamentals.

A small amount of CSS has been added solely to improve readability and make the examples easier to follow. Styling is not the primary focus of this exercise and will be covered in greater detail during the CSS review section.

Future improvements will include:

* CSS-styled navigation menus
* Responsive layouts
* Better typography
* Accessibility improvements
* JavaScript interaction

---

## 🚀 Next Topics

* Images
* Forms
* Semantic HTML
* CSS Review

---

## 📅 Review Progress

* ✅ 001 – Headings & Paragraphs
* ✅ 002 – Tables
* ✅ 003 – Lists
* ✅ 004 – Hyperlinks
* ⏳ 005 – Multimedia
* ⏳ 006 – Forms
* ⏳ Semantic HTML
* ⏳ CSS Review

---

## 📝 Personal Note

This repository is part of my **Web Development Review Series**.

My goal is not simply to memorize HTML syntax, but to build a strong understanding of how web technologies work before moving on to CSS, JavaScript, backend development, and Web Application Security. Each exercise serves as a long-term reference for future projects.

---

## 📄 Content & Documentation Notice

Some explanatory text and sample content in this exercise were refined with AI assistance for English translation, proofreading, and language polishing.

The README was also drafted with AI assistance and then reviewed, corrected, and adapted by me.

The HTML implementation, project structure, examples, experimentation, and learning process are entirely my own work.
