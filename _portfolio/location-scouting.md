---
title: "iOS - Location Scouting"
excerpt: "Our final capstone project for our program. An application for both iOS and Android."
header:
  image: #Image for the top goes here
  teaser: /assets/images/LocationScout/loc1.png
sidebar:
  - title: "Role"
    image: /assets/images/LocationScout/loc1.png
    image_alt: "logo"
    text: "iOS Development, Database Management"
  - title: "Responsibilities"
    text: "For our capstone I was responsible for the iOS side of things. I also worked on Firebase which we used to store our data on. We also had to update UML models as we worked through the capstone and document our work the a project plan."
  - title: "Technologies"
    text: "iOS, Mobile Application, Firebase, Google Vision, Visual Paradigm"
gallery:
  - url: /assets/images/LocationScout/loc2.png
    image_path: /assets/images/LocationScout/loc2.png
    alt: #"Self Driving"
  - url: /assets/images/LocationScout/loc3.png
    image_path: /assets/images/LocationScout/loc3.png
    alt: #"Self Driving"
  - url: /assets/images/LocationScout/loc4.png
    image_path: /assets/images/LocationScout/loc4.png
    alt: #"Self Driving"
---

For our capstone we worked on an application for location scouters that would make it easier for them to scout out locations. Our capstone development started much later than it was supposed to due to some problems with a strike at our college at the time. I ended up focusing solely on the iOS side and my partner focused on the Android side of the application. We ended up using Firebase to store all of our image data on. Near the end we started testing out Google vision for our image recognition as we wanted to be able to have users take pictures and for tags to be automatically generated. We had this working on the Android application, but we needed more time to train our own model because we only had time to use Google's general model for image recognition which did the trick.

A feature we did not get to add was automatic blurring of parts of images. For example we wanted to be able to automatically have our application blur out license plates and addresses in an image, but this was a little more time consuming than we had initially thought and would require a custom trained model.

{% include gallery caption="Some images of the UML work we did" %}
