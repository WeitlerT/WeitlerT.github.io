---
title: "QA Analyst - Eyecarrot Innovations WIP"
excerpt: "While at Eyecarrot for my co-op I was tasked with creating a fully automated QA testing system using Jenkins."
header:
  image: #Image for the top goes here
  teaser: /assets/images/eyecarrot.png
sidebar:
  - title: "Role"
    image: /assets/images/eyecarrot.png
    image_alt: "logo"
    text: "Testing applications, Writing test cases, Writing test scripts, Building automated QA system"
  - title: "Responsibilities"
    text: "I was responsible for finding bugs, writing test scripts using Cucumber, and eventually building an automated system using Jenkins and running my scripts off of it."
  - title: "Technologies"
    text: "iOS, Android, Cucumber, Gherkin, Jenkins, xCode"
gallery:
  #- url: /assets/images/selfdriving.jpg
  #  image_path: /assets/images/selfdriving.jpg
  #  alt: "Self Driving"
---

Working at Eyecarrot was a great opportunity not only because of the different things I got to work on, but also because the team was great to work with. The work they are doing on eye care is great, you can check them out at [https://www.eyecarrot.com/](https://www.eyecarrot.com/).

When I started working here one of the first things I was doing was going through their application and trying to find bugs. I would go through every page and every option, essentially trying to break the app. I would record my steps including every button pressed and if I found a bug/exploit I would mark it down. Eventually I began writing test scripts for the iOS application using [Cucumber](https://cucumber.io/) and a language called [Gherkin](https://cucumber.io/docs/gherkin/). I would go through the application in xCode, noting down UI element names to use in the test scripts. I wrote dozens of different scripts to test out different user scenarios. After a few weeks of writing some scripts out I began working on the Jenkins automated testing system.

Building the system took me a while because I had never done something like it before. Eventually I ended up with a system that would wait for a new build to be pushed to GitHub which would then trigger the testing to begin. It would pull the latest build of the application and begin running each test script on it. Results would be recorded and formatted accordingly then emailed **only** if any problems were found. It would point at where the test failed so the devs could easily find what caused the problem.

I don't have any images to show because all my work was on the IP of the company, but I am happy to explain more of my work if you contact me about it.
