---
layout: page
title: ESCAPE from Bennu
img: /assets/img/bennu/orx_particles_orb_C.png
github: https://github.com/jazzalin/escape-bennu
category: space
---

<div class="publications">
  {% bibliography -f papers -q @*[doi=10.21741/9781644902813-124]* %}
</div>

An *active* asteroid shows evidence of mass loss caused by natural processes, such as water sublimation or the impact of another asteroid, or as a result of human-planned activities (e.g., DART mission). Detecting and interpreting the dynamic properties of these small solar system bodies (SSB) constitute important scientific objectives of sample-return and flyby missions as they may hold the key to understanding their past and future [1]. In the case of asteroid Bennu, such activity was only detected in situ. As visiting spacecraft OSIRIS-REx planned its approach, its navigation cameras picked up on centimetre-size rocks being ejected from the surface, some remaining in Bennu's orbit, others escaping its gravitational pull entirely. Whether for situational awareness to guarantee spacecraft safety or scientific observation, missions like OSIRIS-REx benefit from early detection and tracking of such events [2]. Following the discovery of particle ejection events, several autonomous detection and tracking approaches have been considered to increase the scientific return of time-constrained missions [3]. Challenges of this approach include the need to detect and match particles from frame to frame under high dynamic range and fast relative dynamics, for which visual identification methods such as *blinking* images are still often used.

Dynamic vision sensing has been shown to be an effective low-power solution to capture data from environments with high dynamic range [4]. These biologically-inspired sensors, commonly known as event-cameras, benefit from independent pixels that asynchronously respond to brightness changes in the scene, departing from the standard frame-based representation of visual intensities. Feature detection and tracking is one area where these novel sensors shine as the absence of frames allows for continuous and asynchronous tracking of multiple objects [5]. The advantages of event-based cameras over standard frame cameras, especially in terms of overall power consumption and dynamic range, has motivated a number of recent studies on their suitability for space applications [6], notably in the area of space situational awareness [7].

<br>
<h2>Project goals</h2>
<br>

This project aims to further evaluate dynamic vision sensing for future space applications. By reviewing data collected in past missions, we can identify dynamic scenes where an event-based sensor could, in theory, augment visual data capture and contribute to the mission's scientific objectives. We select the particle ejection episodes observed around active asteroid Bennu to present a use case for event-based multi-object tracking in orbit of a target of scientific interest.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <Image class="img-fluid rounded z-depth-1" src="{{ '/assets/img/bennu/orx_particles_orb_C.png' | relative_url }}" align="center" alt="" title="Visualization of OSIRIS-REx trajectory"/>
    </div>
</div>
<div class="caption">
    Fig. 1: Bennu-fixed particle ejection visualization based on the interpolation of SPICE kernels from 2019-09-13T21:00:00 to 2019-09-14T00:00:00
</div>

The first step consists in simulating an event-based representation of an active asteroid from the point of view of a realistic trajectory under lighting conditions that capture the high dynamic range of the deep space environment. Fig. 1 reconstructs from the openly-available SPICE kernels [8] an episode where multiple particles were observed near the surface of Bennu. Particular attention is given to the representation of the centimetre-size particles temporarily orbiting the asteroid, as reported by the OSIRIS-REx mission. The second phase of the project focuses on the development of event-based particle detection and tracking algorithms.

<br>
<h2>Simulation</h2>
<br>

The particle ejection episodes illustrated in Fig. 1 can be rendered more realistically with computer graphics tools such as Blender. Blender has been used in the past to create textured SSBs, including asteroids resembling the rubble-pile surface of asteroid Bennu [9], to which it is straightforward to add renders of centimetre-size particles. The simulated pinhole camera in Blender is then controlled according to the sampled trajectories depicted in Fig. 1 to generate sequences of frames capturing the active asteroid under realistic lighting conditions. To simulate dynamic vision sensing, the frames are passed through a video-to-event simulator [10], where the sensitivity and the noise of the emulated sensor can be calibrated. Following adequate parameterization of the camera model, particle ejection scenes such as the one depicted on the left in Fig. 2 are reconstructed, from which synthetic event-based representations are then derived (center and right). Given the asynchronous nature of dynamic vision sensing, the illustrations represent accumulations of positive (blue) and negative (red) changes in light brightness into event-frames to allow for a comparison with standard light intensity images.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <Image class="img-fluid rounded z-depth-1" src="{{ '/assets/img/bennu/ejecta_render_3x.png' | relative_url }}" align="center" alt="" title="Reconstruction of particle ejection episode"/>
    </div>
</div>
<div class="caption">
    Fig. 2: Reconstruction of a particle ejection episode: (a) the particles are difficult to detect in the photorealistic render, (b) yet accumulation of synthetic events in a single frame make the particles more easily identifiable against the dynamic background noise (b) and clearly visible in the absence of noise (c) (the arrows indicate the ejecta direction)
</div>

The noisy representation of particle ejection episodes (centre image above) will subsequently be used to evaluate event-based multi-object detection and tracking algorithms.


<br>
<h2>References</h2>
<br>

[1] Lauretta, D. S. et al. (2019). Episodes of particle ejection from the surface of the active asteroid (101955) Bennu. Science, 366 (6470), eaay3544. https://doi.org/10.1126/science.aay3544 

[2] Chesley, S. R. et al. (2020). Trajectory estimation for particles observed in the vicinity of (101955) Bennu. Journal of Geophysical Research: Planets, 125, e2019JE006363. https://doi.org/10.1029/2019JE006363 

[3] Liounis, A. J. et al. (2020). Autonomous detection of particles and tracks in optical images. Earth and Space Science, 7, e2019EA000843. https://doi.org/10.1029/2019EA000843 

[4] Gallego, G. et al. (2022). Event-based vision: A survey. IEEE Transactions on Pattern Analysis and Machine Intelligence, 44 (1), 154-180. https://doi.org/10.1109/TPAMI.2020.3008413

[5] Lagorce, X. et al. (2015). Asynchronous Event-Based Multikernel Algorithm for High-Speed Visual Features Tracking. IEEE Transactions on Neural Networks and Learning Systems, vol. 26, no. 8, pp. 1710-1720. https://doi.org/10.1109/TNNLS.2014.2352401

[6] Izzo, D. et al. (2022). Neuromorphic computing and sensing in space. arXiv preprint arXiv:2212.05236. https://doi.org/10.48550/arXiv.2212.05236 

[7] S. Afshar et al. (2020). Event-Based Object Detection and Tracking for Space Situational Awareness. IEEE Sensors Journal, vol. 20, no. 24, pp. 15117-15132.  https://doi.org/10.1109/JSEN.2020.3009687

[8] Hergenrother, C. W. et al. (2020). Photometry of particles ejected from active asteroid (101955) Bennu. Journal of Geophysical Research: Planets, 125, e2020JE006381. https://doi.org/10.1029/2020JE006381 

[9] Pajusalu M. et al. (2022) SISPO: Space Imaging Simulator for Proximity Operations. PLOS ONE 17(3): e0263882. https://doi.org/10.1371/journal.pone.0263882

[10] Hu, Y. et al. (2021). v2e: From Video Frames to Realistic DVS Events. 2021 IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW), Nashville, TN, USA, 2021, pp. 1312-1321, https://doi.org/10.1109/CVPRW53098.2021.00144
