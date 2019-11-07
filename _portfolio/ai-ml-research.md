---
title: "AI/ML Fashion Project - Tensorflow WIP"
excerpt: "A research team I was on for a fashion app that utilized machine learning. The primary platform used was Tensorflow"
header:
  image: #Image for the top goes here
  teaser: "https://sanet.pics/storage-5/0619/ij6udU0NrgCjdIdblyoRlle0tCakXTXf.png"
sidebar:
  - title: "Role"
    image: "https://sanet.pics/storage-5/0619/ij6udU0NrgCjdIdblyoRlle0tCakXTXf.png"
    image_alt: "logo"
    text: "Scripting, Training Model, iOS Development"
  - title: "Responsibilities"
    text: "Responsibilities were split between my partner and I because we were both trying to learn the same things about machine learning. We both trained the model and worked on the python scripts as well as the iOS app. I usually put together the presentations when we had a meeting with the clients."
  - title: "Technologies"
    text: "Tensorflow, Python, Machine Learning, iOS, Mobile Application"
gallery:
  - url: /assets/images/selfdriving.jpg
    image_path: /assets/images/selfdriving.jpg
    alt: #"Self Driving"
  - url: /assets/images/selfdriving.jpg
    image_path: /assets/images/selfdriving.jpg
    alt: #"Self Driving"
  - url: /assets/images/selfdriving.jpg
    image_path: /assets/images/selfdriving.jpg
    alt: #"Self Driving"
---

I cannot give out too much detail about the clients or the exact product they wanted, however I can give a general overview of the project and the technologies used. We were tasked with creating a mobile app using machine learning that would take an image of some article of clothing, be able to identify what article of clothing it was (shirt, sweater, jeans, etc...), be able to identify the brand, and try to pull a price from online. We used Tensorflow as our platform and use a python script to actually run the model from the iOS app as we could not run the model directly from the mobile device due to the computation power required.   

{% include gallery caption="Some images I pulled from our presentations. Shows some accuracies we had while testing our model on random images of clothing." %}

We trained hundreds of images over the year I worked on it and ended up with pretty good accuracies. Starting off we had pretty low accuracies, but as you can see in the images above we ended up with some pretty high accuracy results. We learnt a lot while training the model including the importance of weights, the quality/size of the image, and the amount of data the model needs to become highly accurate. Training the model on the different articles of clothing was step 1. Step 2 was to train it on the brands such as Gucci and Etro. We followed the same process with the brands and got the application to a point where it could give you the article of clothing as well as a brand. We had begun working on pulling prices from online, but didn't get it polished enough to present to our clients before we left the research team.
