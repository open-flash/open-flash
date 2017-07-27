**Note: This project is still in a very early stage. I hope that it will work out, but it's a
large task that many other projects tried and abandoned. Feel free to submit suggestions.**

# Open Flash

Open Flash (aka "Save Flash") aims at providing an open-source easily-maintainable Flash Player
to preserve the Flash animations that cannot be converted to another technology. That's why the
main goal is compatibility and maintainability.

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
- [SWF Tree](https://github.com/open-flash/swf-tree): Provide a good model for SWF files (AST)
- [SWF Parser](https://github.com/open-flash/swf-parser): Decode SWF files to the SWF Tree
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

## Background

**TODO**

Basically, I don't hate Flash. I even have good memories with Flash games and saving Flash
is like saving a part of Internet's history. I wrote an AVM1 disassembler in 2013. In May
2017 I decided to rewrite it _while knowing what I do_. I wanted to reuse parts of Shumway, it
turns out it was a lot more complicated than it should be in my opinion, so I started to isolate
the AST definitions and the parser. I just wanted a disassembler, but then decided that Shumway
was the perfect idea and it's a shame that it was discontinued so I'd try to re-use its ideas and
make it more accessible. And then I learned that Flash was EOL... For the moment it was (is) still
a side project in its early stage but I figured out that sharing it wouldn't hurt.

<!--

I grew with the Web, and my first experience with it were Flash games and other shiny Flash
animations or videos. I started development when things started to accelerate on the Web:
Node.js just got released, we heard about promises from HTML5 and jQuery was reigning. I quickly
acquired the belief that FLOSS and standards are the way to go and was happy to be able to
experiment the new Web APIs without being locked in the Flash ecosystem. But I did not hate Flash,
great things were done in Flash: it is a large part of the internet and losing it would be loosing
part of the internet history. The possibility to loose all of this led me learn about Flash, get
a hold about how it works and search for alternatives. In 2013, I wrote an AVM1 disassembler
(the goal was to port code to JS). The code was awful but it worked, I could save some of my older
files. I then moved on to other projects while still keeping an eye on Flash. The announcement of
Shumway by Mozilla was a great relief for me: one of the long-time positive actors of the open
Web was dedicating resources to save Flash. Unfortunately it got discontinued after two years of
steady progress. The new Flash updates started to have issues with older files, browsers started
to phase out Flash and the future was uncertain again. About two months ago (in May 2017) I decided
to retrieve my old disassembler and rewrite it _while knowing what I do_ (it's a pretty good
improvement) and controlling the whole pipe: I previously relied on external tools such as `flasm`.
I knew I wanted to write using Typescript and Shumway was the perfect fit. It just needed to
use their parser

-->

## Other projects

**TODO** (the list of software for Flash is staggering, but they all died out around 2011-2012)
