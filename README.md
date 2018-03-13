<a href="https://github.com/open-flash/open-flash">
    <img src="https://raw.githubusercontent.com/open-flash/open-flash/master/logo.png"
    alt="Open Flash logo" title="Open Flash" align="right" width="64" height="64" />
</a>

# Open Flash

_Open Flash_ is a project to create an open-source media player for SWF files. Its goal is to keep
Flash animations accessible for archival purposes. It aims to achieve it by learning from related
projects and building an ecosystem of reusable components.

This is the main _Open Flash_ repository. It is used to track the overall progress of the project.

- [Demo (Doμ Player)](https://github.com/open-flash/domu-player/)
- [Doμ Player](https://github.com/open-flash/domu-player)
- [SWF Tree](https://github.com/open-flash/swf-tree)
- [SWF Parser](https://github.com/open-flash/swf-parser)
- [SWF Emitter](https://github.com/open-flash/swf-emitter)
- [SWF Renderer](https://github.com/open-flash/swf-renderer)
- [Avmore](https://github.com/open-flash/avmore)

## Why

Flash had a great role in bringing interactive content to the Web. Despite its bad reputation
(accessibility, security, ads, performance, ...), Flash enabled many users to easily create and
share content. Keeping this content accessible for the future is valuable and having an
open-source implementation of the technology is the best way to keep it accessible.

I (_demurgos_) personally grew up with Flash games and one of my first computer projects was a mod
for [the Caverns of Hammerfest](http://www.hfest.net/), a Flash platformer from 2006. I do not want
to lose it. I recommend you
[The Flash Games Postmortem](https://www.youtube.com/watch?v=65crLKNQR0E)
<abbr title="Game Developers Conference">GDC</abbr> talk by John Cooney (jmtb02), a talk about the
impact of Flash on today's games.

## What

The project is inspired by [Shumway](https://github.com/mozilla/shumway), ideally it should be
possible to install a browser extension or just drop a `<script>` in the web page to keep
the Flash animations working.
The project targets the DOM as its primary target but the components should be versatile
enough to be used in other environments (embedded in other software for example).

To achieve the stated goal, we prefer small self-contained packages. This allows to lower the
barrier to entry by providing cleaner separation of concern and allows finer version control,
distribution and bug tracking. The current goal is to study the ideas and architecture of Shumway
and split its features in smaller packages.

The current packages are:
- [Doμ Player](https://github.com/open-flash/domu-player)
- [SWF Tree](https://github.com/open-flash/swf-tree): Provide a good model for SWF files (AST)
- [SWF Parser](https://github.com/open-flash/swf-parser): Decode SWF files to the SWF Tree
- [SWF Emitter](https://github.com/open-flash/swf-emitter)
- [SWF Renderer](https://github.com/open-flash/swf-renderer)
- [Avmore](https://github.com/open-flash/avmore): Actionscript VM
- [SWF Renderer](https://github.com/open-flash/swf-renderer): Rendering backend

They strive to be written both in Typescript and Rust. Typescript is the easiest way to target
the Web but Rust has better chances to provide an embeddable library or `*wasm` build with good
performances. Both are modern are valued languages so it should ensure the stability of the
project.

To be complete, there should be additional packages for the AVM1, AVM2, the renderer should be
split in target-specific renderers, a package for a whole Player (with a loader and providing
the environment for the other components), an eventual browser extension or code generator,
some plugins for jQuery, React, Angular or other JS framework of the day, etc.

At the moment we need to reach a stable SWF Tree and Parser. Once it is done, a renderer should
be doable. The other main remaining parts would be media support (audio/video) and Actionscript.
More research is needed for media support.
Support for Actionscript is important and complex, there are currently two possible solutions. The
first one is to start from Shumway and reimplement the VM in Typescript. It would provide high
control and strong integration with web technologies. The other solution is to reuse
[Adobe's AVMPlus](https://github.com/adobe/avmplus) and port it to the web using something like
Emscripten.

## Who

I'm _demurgos_. I am currently working on this project alone. I want to reach the Milestone 1
(see below) before reaching out to other developers. If you have questions or want to contribute,
you can open an issue on this repo.

## Roadmap

### Milestone 2

- Tasks:

  - Advertise project

### Milestone 1

- Goal: Render the [Homestuck beta](http://www.mspaintadventures.com/?s=5) animation.
  This files contains morph shapes, bitmaps and simple AVM1 code.

- Status: Pending

- Tasks:
  - Write a proper scheduler
  - Dissociate characters table, objects tree and display list 
  - Prototype an Actionscript VM
  - Support bitmaps
  - Better support for frame navigation
  - Split renderer, core player and DOM integration to different components

### Milestone 0

- Goal: Render the [squares.swf](https://open-flash.github.io/domu-player/squares.swf) file. This
  file contains a single static shape with straight edges and solid colors.

- Status: Complete

- Tasks:
  - [x] Learn the SWF format, collect relevant documentation
  - [x] Define the Abstract Syntax Tree for SWF files
  - [x] Write a parser
  - [x] Setup browser builds
  - [x] Prototype a canvas renderer

## Related projects

### Shumway

- Repository: <https://github.com/mozilla/shumway>
- Website: <https://mozilla.github.io/shumway>
- Repository mirror: <https://github.com/open-flash/shumway>
- Status: Discontinued
- Last commit: 2016-03-29
- First commit: 2012-01-02

Web-based media player for SWF files.

### Avmplus

- Repository: <https://github.com/adobe/avmplus>
- Repository mirror: <https://github.com/open-flash/avmplus>
- Last published commit: 2016-03-24
- First published commit: 2013-12-03

Adobe's Actionscript Virtual Machine.

### Swfdev

- Website: <https://swfdec.freedesktop.org>
- Repository mirror: <https://github.com/open-flash/swfdec>

### Gnash

- Website: <https://www.gnu.org/software/gnash>
- Repository mirror: <https://github.com/open-flash/gnash>

**TODO** (the list of software for Flash is staggering, but they all died out around 2011-2012)
