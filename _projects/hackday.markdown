---
layout: page
title: Clearpath Hackday
description: Yet another line marking robot...
img: /assets/img/hackbot.jpg
github: https://github.com/ljazzal/hackday-logo-painter
importance: 3
category: 2019
---

During the 2019 Clearpath Summer hackday challenge, our team of three decided to build yet another line marking robot for turf. However, instead of converting the office backyard into a soccer pitch, we thought we could pull-off a publicity stunt by printing the company logo, large enough to be captured by a drone's camera flying overhead. Well, we didn't quite get to that stage.. but we got pretty close! The logo was parsed as a polygon whose vertices were then converted into local GPS coordinates to allow for waypoint navigation.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/hackbot.jpg' | relative_url }}" alt="" title="hackbot"/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/hackday.png' | relative_url }}" alt="" title="hackday result"/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/logo.png' | relative_url }}" alt="" title="clearpath logo" />
    </div>
</div>
<div class="caption">
    Husky with RTK GPS borrowed to run the demo (left); planned demo path (middle) based on the company logo (right)
</div>
