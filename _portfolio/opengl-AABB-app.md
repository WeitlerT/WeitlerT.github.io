---
title: "OpenGL - Bullseye Project"
excerpt: "One of my final assignments for my 3D gamification course. Utilizes OpenGL with AABB collision."
header:
  image: #Image for the top goes here
  teaser: /assets/images/opengl2.jpg
sidebar:
  - title: "Role"
    image: /assets/images/opengl2.jpg
    image_alt: "logo"
    text: "Back-end Developer"
  - title: "Responsibilities"
    text: "Creating the objects including the target, the boundaries, walls, the shooter, and the projectile."
  - title: "Technologies"
    text: "OpenGL, Visual Studio, C++"
gallery:
  - url: /assets/images/opengl2.jpg
    image_path: /assets/images/opengl2.jpg
    alt: "Game Window"
  - url: /assets/images/opengl1.png
    image_path: /assets/images/opengl1.png
    alt: "Instructions for controls"
---

During our 3D gamification course we learnt how to create basic objects and games using OpenGL, some linear algebra, and some C/C++. This project in particular used some simple objects, but required AABB (Axis-Aligned Bounding Box) collision to know where the projectile landed on the board. Depending on where it landed it would calculate the score and add to the total. A pretty simple project, but quite a bit of work (collision took a while to get right). The project is public on my GitHub for anyone interested in checking out the code.

{% include gallery caption="An image of the game as well as the controls listed." %}
