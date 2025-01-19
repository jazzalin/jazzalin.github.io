---
layout: page
title: Eventful landings
img: /assets/img/publication_preview/esagnc2023.png
github: https://gitlab.com/EuropeanSpaceAgency/trajectory-to-events
category: space
---

<div class="publications">
  {% bibliography -f papers -q @*[doi=10.5270/esa-gnc-icatt-2023-202]* %}
</div>

Vision-based navigation continues to play an important role during approach and descent to the surface of the Moon, Mars and small solar system bodies. The process by which an optical navigation (OPNAV) camera acquires images of the environment to navigate relative to surface landmarks is well-established [1]. However, in recent years, the frame-by-frame capturing method of conventional framing cameras has been disrupted by biologically-inspired *silicon retina*, more commonly known as event-cameras [2]. These vision sensors achieve high dynamic range and high temporal resolution thanks to asynchronous image pixels which independently respond to changes in scene brightness. As relative motion between the scene and the camera is needed to trigger such *events*, the camera does not capture redundant static information, consuming less power as a result.

These properties have led neighbouring disciplines to revisit more primitive visual cues for motion estimation [3]. One in particular is the optical flow, or the perception of apparent motion induced by the relative motion of objects in the visual field of view, which has been the subject of long-standing research in the field of navigation and landing [4]. Given the stringent power budgets of modern spacecrafts, extreme illumination contrasts in space and the development of increasingly independent on-board computing solutions, there is great interest in exploring event-based sensing opportunities for descent and landing applications.

<br>
## Project goals
<br>

This project aims to demonstrate how event-based vision could complement existing optical navigation systems in future mission concepts. An event-based dataset is envisioned to support several investigations into future onboard opportunities in the area of terrain relative navigation. First, a dataset of synthetic event streams corresponding to simulated landings on the Moon and Mars is generated (Fig. 1, right). The project's second component focuses on motion estimation as an example application. The inverse problem consists in first estimating the motion field induced by the simulated descent (Fig.1, left) by means of optical flow reconstruction from events. Then, the motion of the spacecraft can be recovered from the estimated flow.

|![Eventful landing animation](/assets/img/eventful/eventful_landing.gif 'Eventful landing animation')|
|:-:|
|*Fig. 1: Motion field induced by a simulated descent on a Moon-like surface and the corresponding event-based representation*|

<br>
## Dataset
<br>

Trajectory specifications are input into a data pipeline which generates events corresponding to the motion of features in the scene. The pipeline builds upon previous work on event-based vision for ventral landings [5] by considering non-ventral descents to the surface of the Moon and Mars. The landing simulations are obtained by manipulating the viewpoint of a pinhole camera in the Planet and Asteroid Natural Scene Generator (PANGU) [6] and feeding the synthetic scenes to a video-to-event converter [7]. The resulting dataset captures dynamic, event-based representations of common surface features such as craters, boulders and the target body's horizon.

|![Trajectory-to-event dataset pipeline](/assets/img/eventful/pipeline.png 'Trajectory-to-event dataset pipeline')|
|:-:|
|*Fig. 2: Event-based dataset pipeline with inverse problems: (1) optical flow reconstruction and (2) partial state estimation*|

<br>
## References
<br>

[1] Johnson A. E. et al. (2008). Overview of Terrain Relative Navigation Approaches for Precise Lunar Landing. 2008 IEEE Aerospace Conference, Big Sky, MT, USA, pp. 1-10, https://doi.org/10.1109/AERO.2008.4526302

[2] Gallego, G. et al. (2022). Event-based vision: A survey. IEEE Transactions on Pattern Analysis and Machine Intelligence, 44 (1), 154-180. https://doi.org/10.1109/TPAMI.2020.3008413

[3] Pijnaker Hordijk, B. J. et al. (2018). Vertical landing for micro air vehicles using event-based optical flow. J Field Robotics. 35: 69– 90. https://doi.org/10.1002/rob.21764 

[4] Gibson, J. J. (1950). The perception of the visual world. Houghton Mifflin.

[5] McLeod, S. et al. (2023). Globally Optimal Event-Based Divergence Estimation for Ventral Landing. Computer Vision – ECCV 2022 Workshops. ECCV 2022. Lecture Notes in Computer Science, vol 13801. Springer, Cham. https://doi.org/10.1007/978-3-031-25056-9_1

[6] Martin, I., & Dunstan, M. (2021). Pangu v6: Planet and asteroid natural scene generation utility. https://pangu.software/ 

[7] Hu, Y. et al. (2021). v2e: From Video Frames to Realistic DVS Events. 2021 IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW), Nashville, TN, USA, 2021, pp. 1312-1321, https://doi.org/10.1109/CVPRW53098.2021.00144