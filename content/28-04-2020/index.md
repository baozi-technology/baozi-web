---
title: "Migrating to Emacs 27 is necessary to edit .dart files with lsp-mode"
cover: "../../static/images/dart-logo.png"
date: "28-04-2020"
author: "Nicolas Gimenez"
category: "tech"
tags:
    - emacs
    - spacemacs 
    - dart
    - flutter
---

# Problem

I am currently working on [the Dart client to connect to Kyrpton Authentification Server](https://github.com/krypton-org/krypton-flutter). 
Spacemacs was literally randomly freezing when editing .dart files. 

# Analysis

It turns out that it is an [issue related to using dart\_language\_server via lsp-mode with Emacs 26.3](https://github.com/syl20bnr/spacemacs/issues/12820#issuecomment-620433013).

# Solution

## Install Emacs 27+ from source 

I am on Fedora and even though Emacs 27 is stable and the Emacs team are working on Emacs 28, there are [no available distributed binaries](https://www.reddit.com/r/emacs/comments/effu24/emacs_version_28/).

### Download the source

Browse https://alpha.gnu.org/pub/pub/gnu/emacs/pretest/ and download the source tar.xz manually or run `wget https://alpha.gnu.org/pub/pub/gnu/emacs/pretest/emacs-27.0.91.tar.xz` in a terminal.
Note that the official Emacs instructions that you can find at [INSTALL](https://github.com/emacs-mirror/emacs/blob/master/INSTALL) suggests to do the following:

```bash
  1.  Obtain and unpack the Emacs release, with commands like this:

                 wget https://ftp.gnu.org/gnu/emacs/emacs-VERSION.tar.xz
                 tar -xf emacs-VERSION.tar.xz
```

however https://ftp.gnu.org/gnu/emacs does not contain the development versions and thus does not contain Emacs 27+.

### Prepare your tar ball

On Linux, the convention wants that third-party independent downloaded packages are stored in `/opt`. 
Move your download package there. Untar it with `tar xvf emacs-27.0.91.tar.xz` and then `cd /opt/emacs-27.0.91`.

### Remove old emacs

Uninstall your old version of Emacs (26.3 here). How to uninstall depends on how you have installed it, but most likely you've used your distribution package manager.

On Fedora:

```bash
sudo dnf remove emacs
```

### Install required dependencies

On Fedora, you would run:

```bash
sudo dnf install gtk3-devel-docs-3.24.18-1.fc32.x86_64 gtk3-devel-3.24.18-1.fc32.x86_64 gtk3-immodules-3.24.18-1.fc32.x86_64 gtk3-tests-3.24.18-1.fc32.x86_64 motif-devel.x86_64 giflib.x86_64 giflib-devel.x86_64 libtiff.x86_64 libtiff-devel.x86_64 libtiff-tools.x86_64 libtiff-static.x86_64 gnutls-devel.x86_64 gnutls.x86_64 gnutls-utils.x86_64 libXpm.x86_64 libXpm-devel.x86_64 ncurses.x86_64 ncurses-libs.x86_64 ncurses-devel.x86_64 ncurses-static.x86_64
```

The `static`, `utils` and `doc` lib are most likely not necessary - I just always like adding the whole family ;).

If you don't install them now, Emacs will whine at the `./configure` step. Just read what they say and install required dependencies.

### Actually start the installation

Simply read the `INSTALL` file. It is a classic `GNU make` installation. You have all the instructions there. But for the sake of being exhaustive I'll list here the steps quickly:

* `./configure`
* check that everything went ok or else install dependencies
* `make`
* check that compilation succeeded
* `src/emacs -Q` 
* check that emacs starts correctly
* `make check`
* wait for the test results and verify if everything passed
* `sudo make install`
* check that no error were shown
* `emacs --version` should now show `27.0.91`
* try running it with `emacs` command

### Install the .desktop entry (for GNOME)

The .desktop entry is the GNOME file for being able to run your application via UI shortcut instead of having to systematically use the command line.
It is NOT installed automatically with the steps above.
You do not need to write the .desktop file by yourself. 
The file already preexists in the source .tar.xz you've downloaded. Simply run:

```bash
sudo cp /opt/emacs-27.0.91/etc/emacs.desktop /usr/share/applications/
```

Now there should be a UI entry for Emacs.

## Add lsp-dart to additional-packages in .spacemacs

The `lsp` layer does not include `lsp-dart` in Emacs 27+ because lsp-dart was move to a separate package.
Therefore, when you first open a .dart file with your newly installed Emacs 27, you will face [this issue](https://github.com/emacs-lsp/lsp-mode/issues/1606).
It should be solved when [this pull-request](https://github.com/syl20bnr/spacemacs/pull/13518) will be merged.
As a work-around for now, simply add `lsp-dart` in your additional-packages in the `~/.spacemacs` file:
```elisp   
dotspacemacs-additional-packages
   '(
     lsp-dart
     ;; lsp-java
     )
```

Note: if you also code in `java` in Spacemacs, you'll probably want to add `lsp-java` as well, which seems to have similar issues.
