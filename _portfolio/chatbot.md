---
title: "Chatbot - IBM Watson"
excerpt: "Creating a bot with IBM Watson and Node-RED for our Cognitive Computing course."
header:
  image: #Image for the top goes here
  teaser: "https://www.uctoday.com/wp-content/uploads/2018/10/BMWatson.jpg"
sidebar:
  - title: "Role"
    image: "https://www.uctoday.com/wp-content/uploads/2018/10/BMWatson.jpg"
    image_alt: "logo"
    text: "Bot setup, Node-RED/Slack Hook-up"
  - title: "Responsibilities"
    text: "For this application I setup a simple bot with Watson that was meant to help fix a user's printer issues. It was hooked up to Slack through Node-RED so a user could communicate with it."
  - title: "Technologies"
    text: "Watson, IBM, Node-RED"
gallery:
  - url: /assets/images/Watson/image1.png
    image_path: /assets/images/Watson/image1.png
    alt: #"Self Driving"
  - url: /assets/images/Watson/image2.png
    image_path: /assets/images/Watson/image2.png
    alt: #"Self Driving"
  - url: /assets/images/Watson/image3.png
    image_path: /assets/images/Watson/image3.png
    alt: #"Self Driving"
  - url: /assets/images/Watson/image4.png
    image_path: /assets/images/Watson/image4.png
    alt: #"Self Driving"
  - url: /assets/images/Watson/image5.png
    image_path: /assets/images/Watson/image5.png
    alt: #"Self Driving"
  - url: /assets/images/Watson/image6.png
    image_path: /assets/images/Watson/image6.png
    alt: #"Self Driving"
  - url: /assets/images/Watson/image7.png
    image_path: /assets/images/Watson/image7.png
    alt: #"Self Driving"
  - url: /assets/images/Watson/image8.png
    image_path: /assets/images/Watson/image8.png
    alt: #"Self Driving"
  - url: /assets/images/Watson/image9.png
    image_path: /assets/images/Watson/image9.png
    alt: #"Self Driving"
  - url: /assets/images/Watson/image10.png
    image_path: /assets/images/Watson/image10.png
    alt: #"Self Driving"
---

For our Cognitive Computing course we had an assignment to set up a bot using IBM Watson. The bot was meant to solve a problem that a user may have so in my case I created one that was meant to help a user with printer problems. I set up intents which are essentially purposes/goals that are expressed by the users input. So an example intent may be printer_brand which could be a user asking about a certain brand of printer. 

{% include gallery caption="A few images of intents I set up as well as the Node-RED layout and Slack test chat." %}

Once we set up proper intents and responses we were tasked with hooking it up using Node-RED and slack. Our bot would be able to communicate through Slack just as it would through the IBM web interface. It was quick and simple to deploy and even easier to use.
