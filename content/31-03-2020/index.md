---
title: "Spacemacs: fixing lsp-mode whining about not finding your directory"
cover: "./spacemacs.png"
date: "31-03-2020"
author: "Nicolas Gimenez"
category: "tools"
tags:
    - emacs 
    - spacemacs
---

If you don't use Emacs/Spacemacs/Doom Emacs in evil-mode, please do it. It is a difficult learning experience but it will enhance your life as a developer x100 for the rest of your days.

# Problem

If you know Emacs, you probably came accross [lsp-mode](https://github.com/emacs-lsp/lsp-mode). I faced an issue when I modified the name of a directory outside Emacs. The directory was registered as a project in [projectile](https://github.com/bbatsov/projectile). Any time I was opening this project again, with the new filepath, lsp-mode tried to access the old directory and couldn't work. 

# Solution

I tried to clean the Emacs and projectile buffer without success.
I looked for commands to remove the cache from the lsp-mode buffer, couldn't find any. A small `grep` has shown me where the cache was stored. It is in `.emacs.d/.lsp-session-v1`. Delete that file, restart Emacs and you should be fine.
