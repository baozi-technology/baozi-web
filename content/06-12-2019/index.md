---
title: "Exporting animated logos correctly from Photoshop"
cover: "./baozi-full-logo-big.jpg"
date: "06-12-2019"
author: "Nicolas Gimenez"
category: "frontend"
tags:
    - frontend
    - design
---

I've struggled to get those logos look relatively good.
Ideally I guess the option that would lead to the cleanest result would be to use a .svg file and animate it within javascript. It is rather time consuming and complex though.
I chose to use an animated gif.

I had access to the .ps file of the logo - and I needed to generate both .png (or .jpeg) and .gif files. On mouse hover, javascript swaps from .jpeg to .gif. On mouse out, javascript swaps from .gif to .jpeg. Easy peasy lemon squeezy. But no. It is more "difficult difficult lemon difficult".

Because of the nature of gif, it wasn't easy to get a pretty result. Usually, the .png/.jpeg version had higher quality, so when the user was dragging his mouse over the logo, the difference of quality was obvious to the human eye.

There are actually many tricks to be aware of when generating a .gif. It is very important for the gif to look good. It is very easy to export one that's absolutely awful - while it was appearing good on Photoshop itself.

Exporting something like that for example:

![Ugly gif logo](./ugly-logo.gif)

If you are not careful enough, you can also easily export a ".gif" that... is not even animated! Try "File -> Export -> Export as -> GIF"... o_O
I spent a couple of days playing around with Adobe Photoshop 2020 to finally get an _acceptable_ result.

(Yes I know Photoshop is an ugly proprietary software that doesn't even work on GNU/Linux - my OS of choice and there are better free software alternatives like GNU GIMP - I agree. But I didn't choose the tool my designer initially used, my designer did. So I was stuck with those proprietary .ps files. I'll talk more about that later...)

# Step 0: open your .ps file in Photoshop

1. Run Photoshop.
1. On the top menu bar, click on "File".
1. Click on "Open...". A new window pops up.
1. Select your .ps file and click on "Open".

# 1st step: add a colored background layer

Transparent background does not work good with gif. It is [impossible to generate a beautiful gif with a transparent background](https://community.adobe.com/t5/photoshop/gif-optimized-quality-too-low/td-p/9814593).
Make sure you make it opaque.

You may follow the step below to add a new background layer.

1. On the top menu bar, click on "Window"
1. Click on "Layer". The Layer window will pop up.
1. Click on "Create a new layer" (image of a "+" ).
1. Make sure to drag and drop the new layer to the bottom of the list of layers.
1. Right click on the image of your new layer (not the text).
1. Click on "Select Pixels".
1. Click on "Paint bucket tool" on the left menu bar.
1. On the top menu bar, click on "Window" -> "Color" to open the Color window. Then choose the appropriate color.
1. Left click in the canvas. The background color should have changed.

# 2nd step: take good care of your canvas

The first step is to properly center your logo within your canvas.

1. Select all your Layers - or at least the layer you want to center + the background layer
1. Click on the "Move" tool
1. In the top menu, select "Align vertical centers" and "Align horizontal centers"

Then, you need to trim the image. However, do NOT use the "Image -> Trim.." automatic tool.
Why ? Because else the final result will look ugly in the borders.
For example, look closely at the bottom letters of this logo, like the "O"s - zoom in if necessary:

![Logo gif trimmed too close to content](./logo-too-trimmed.gif)

Not ideal, huh?

1. Right click to the layer corresponding to your logo that take the biggest space.
1. Click on "Select pixels".
1. Type "Ctrl+T" with your keyboard (on Windows).
1. Look on the top end corner, there is the "X" and "Y" pixel values.
Keep a note of these values for later.
1. In the "Image" menu, click on "Canvas size..".
1. Change the size of "X" and "Y" to the value you save earlier + 5 pixels. As a result, your canvas will be trimmed to the size of your logo + a padding of 5 pixels, which leaves space to eventual resizing.

# 3rd step: Export your gif

Here, you must find the parameters that maximize the quality to the fullest.
Gif is already quite a compressed and ugly format so you shouldn't care about optimization here.

[This article](https://helpx.adobe.com/photoshop/how-to/make-animated-gif.html) helped me (step 5) to know how to generate pretty gif.

1. On the top menu bar, click on "File".
1. Move your mouse over "Export".
1. Click on "Save for Web (Legacy)...". A new window will pop up.
1. Select "GIF".
1. Choose quality "Original". By default it is "Optimized".
1. Select Preset: "GIF 128 Dithered".
1. Select "Color: 256"
1. Resize your image with the bottom right corner tool. Always respect proportions and if possible try to make both X and Y values divisible by the number you choose.
1. Click on "preview". It should open your browser and the gif should look good.
1. Click on "Save".

You're good to go!

# 4th step: Export your JPEG

Yea. No png/svg. Because of the way you've processed your file to generate a pretty GIF, you can't just use a regular "File -> Export to PNG". Because then the result will be too different between the gif and the png, and it will be too obvious to the human eye when there is a swap between static file and animated gif.


In this case you don't actually need to keep the opaque background. JPEG works well without it.

But you can - up to you. At this point it doesn't really matter anymore.

1. On the top menu bar, click on "File".
1. Move your mouse over "Export".
1. Click on "Save for Web (Legacy)...". A new window will pop up.
1. Select "JPEG".
1. Choose quality "Original". By default it is "Optimized".
1. Select "Quality: 100"
1. Resize your image with the bottom right corner tool. Always respect proportions and if possible try to make both X and Y values divisible by the number you choose. Choose the same size as for the gif.
1. Click on "preview". It should open your browser and the jpeg should look good. 
1. Click on "Save".

# 5th step: Embed it within your website

I may make another article eventually (or edit this one) to explain how I implemented this behaviour in Gatsby and React JS.
But there are many solutions you can find on the web, including some that do not require JS. My implementation is nothing fancy.