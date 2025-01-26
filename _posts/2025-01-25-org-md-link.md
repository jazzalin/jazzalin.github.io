---
layout: post
title: "org to markdown: handling images"
date: 2025-01-25 20:00:00
description: small hack to center and caption images when exporting to Markdown
tags: org-mode
categories: teaching
featured: false
---

This is the first post of a series on [Org Mode](https://orgmode.org/) and its use in a research setting to generate homogenized wiki notes, slides and reports from the same markup. In particular, the series will explore the free and open source software [emacs-reveal](https://gitlab.com/oer/emacs-reveal/), originally used to create Open Educational Resources based on [reveal.js](https://revealjs.com/). 

## Issue

In Org Mode, notes can be exported to Markdown using the `md` backend in `org-export-backends` (needs to be enabled). Images embedded in the notes with

```org
#+CAPTION: This is a caption
[[https://orgmode.org/resources/img/org-mode-unicorn.svg]]
```

will be exported (`C-c C-e m m`) as

```markdown
![img](https://orgmode.org/resources/img/org-mode-unicorn.svg "This is a caption")
```

When previewed or displayed (such as on this page), the image block will appear as

![img](https://orgmode.org/resources/img/org-mode-unicorn.svg "This is a caption")

where the caption only appears on hover.


## Fix

In Markdown, there are no built-in ways to center elements. Image captioning, however, can be achieved with a few tricks, like the following Markdown-only hack

```markdown
|![img](https://orgmode.org/resources/img/org-mode-unicorn.svg "This is a caption")|
|:-:|
|*This is a caption*|
```

which centers the caption under the image. With a little extra CSS, the resulting HTML table element can be centered on the page.

```css
table {
  margin-left: auto; 
  margin-right: auto;
}
```

|![img](https://orgmode.org/resources/img/org-mode-unicorn.svg "This is a caption")|
|:-:|
|*This is a caption*|

By modifying the `org-md-link` export function (found in `emacs-reveal/org-mode/lisp/ox-md.el` or `C-h f: org-md-link`), Org Mode images and captions can be converted directly to the convenient table format shown above.

```diff
# ox-md.el (org-md-link): L595
-   (format "![img](%s)"
-		(if (not (org-string-nw-p caption)) path
-		  (format "%s \"%s\"" path caption)))
+   (if (not (org-string-nw-p caption)) (format "|![img](%s)|\n|:-:|\n||" path)
+       (format "|![img](%s \"%s\")|\n|:-:|\n|*%s*|" path caption caption))
```
