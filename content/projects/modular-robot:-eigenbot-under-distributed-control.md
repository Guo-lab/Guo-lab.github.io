<!-- ---
title: "Modular Robot: EigenBot under Distributed Control"
startDate: "2023-12-27"
endDate: "2024-09-01"
type: "research"
--- -->

<div class="container py-4">
  <div class="col-md-12 d-flex align-items-center">
<!-- SVG -->
    <img src="/images/projects/eigenbot/EigenBot_front_page_draft.png"
         alt="OCRL Logo"
         class="img-fluid"
         style="max-width: 120px; margin-right: 1rem;">

<h1 class="mb-4" style="font-family: 'Old Standard TT', serif; margin-top: 0.5rem; margin-bottom: 2rem;"> 
 <a href="https://eigenbot-dnlc.github.io/" style="text-decoration: none; color: #007bff;">
    <strong>EigenBot: Modular Robot under Distributed Control</strong>
  </a>
</h1>
</div>

<br>

<p class="lead">
A sophisticated modular robotics research project focused on developing distributed control frameworks for the EigenBot platform. This work combines advanced gait development, firmware implementation, and distributed neural locomotion control to achieve robust autonomous locomotion across diverse terrain conditions and operational scenarios.
</p>

<div class="text-center my-4">
<video controls loop autoplay muted style="width:75%; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
  <source src="/videos/projects/eigenbot/Eigenbot.mp4" type="video/mp4" />
</video>
<p>EigenBot demonstration showcasing distributed neural locomotion control and adaptive gait execution in complex environments.</p>
</div>

<hr/>

<br>

## <strong>Research Overview</strong>

<p>
This research project at the BioRobotics Lab focused on advancing the capabilities of the EigenBot modular robot through comprehensive firmware development, distributed control system design, and robust performance validation. The work addresses fundamental challenges in modular robotics including distributed coordination, adaptive locomotion, and real-time system optimization.
</p>

<p>
The project emphasizes the development of control frameworks that balance computational efficiency with dynamic adaptability, critical requirements for achieving reliable distributed control in modular robotic systems operating in unpredictable environments.
</p>

<br>
<hr/>

<h1 style="margin-top: 2.5rem; margin-bottom: 0rem;"> <strong>Technical Contributions</strong></h1>

<div class="row my-5 align-items-center">
    <h3 style="color: #007bff;">
      <span style="font-size: 1.5rem; margin-right: 0.5rem;">🚶</span>
      <strong>Gait Development & Simulation</strong>
    </h3>
    <p>
      Developed curve-walking gaits for EigenBot, enabling smooth navigation through complex terrain and obstacle-filled environments.
    </p>
  <div class="col-md-5 mb-4">
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Implemented curve-walking gaits for smooth path navigation</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Validated gait performance in simulation environments</li>
      </ul>
    </div>
      <div class="text-center">
        <img src="/images/projects/eigenbot/diagram.jpg"
        alt="MMPUG Heterogeneous Robot Team"
        class="img-fluid rounded shadow-sm"
        style="width:80%; max-width:100%; height:auto; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
        <p style="margin-top: 10px;">Neural Control System Architecture Diagram</p>
      </div>
  </div>

  <div class="col-md-7 text-center">
    <video controls loop autoplay muted style="width:90%; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
      <source src="/videos/projects/eigenbot/curve_walking.mp4" type="video/mp4" />
    </video>
    <p style="color: #007bff; margin-top: 10px;">D-NLC facilitates curve walking by integrating a modular neuron into the ThC joint network. This neuron modifies the inner middle leg’s movement, allowing it to switch its heading. Upon activation, it reverses leg direction or adjusts protractor-retractor range for precise turns. Tested curve walking in simulation, this adaptation ensures agile and controllable navigation in varied environments.</p>
  </div>
</div>

<div class="row my-5 align-items-center">
  <!-- <div class="col-md-6 text-center">
    <video controls loop autoplay muted style="width:90%; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
      <source src="/videos/projects/eigenbot/Eigenbot.mp4" type="video/mp4" />
    </video>
    <p style="color: #28a745; font-weight: 500; margin-top: 10px;">Firmware implementation for modular robot control</p>
  </div> -->
  <!-- <div class="col-md-6 mb-4"> -->
    <h3 style="color: #28a745;">
      <span style="font-size: 1.5rem; margin-right: 0.5rem;">💾</span>
      <strong>Firmware Development & </strong>
      <span style="font-size: 1.5rem; margin-right: 0.5rem;">📡</span>
      <strong> Communication Protocol Improvement</strong>
    </h3>
    <p>
      Redesigned the serial communication system between robot modules to enable real-time coordination and improve system reliability.
    </p>
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
       <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Eliminated latency issues in inter-module communication</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Improved data integrity and transmission reliability</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Created auto-configuration tools to auto-set EEPROM for faster development. Reduced debugging time and improved development efficiency</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Fixed critical Cortex-M3 implementation memory management issues</li>
      </ul>
    </div>
  <!-- </div> -->
</div>

<hr/>

  <div class="col-md-12 d-flex align-items-center">
<!-- SVG -->
    <img src="/images/projects/eigenbot/python-logo-only.png"
         alt="OCRL Logo"
         class="img-fluid"
         style="max-width: 60px; margin-right: 1rem;">

<h2 style="margin-top: 3.5rem; margin-bottom: 0rem;"> <strong>Validation, Experiments, Analysis and Paper Writing</strong></h2>
</div>


<div class="row my-5 align-items-top">
  <div class="col-md-12 mb-4">
    <h3 style="color: #6f42c1;">
      <span style="font-size: 1.5rem; margin-right: 0.5rem;">📊</span>
      <strong>Hardware Validation Pipeline</strong>
    </h3>
    <p>
      Established comprehensive performance assessment framework using OptiTrack motion capture systems for precise validation of locomotion behaviors and control system effectiveness.
    </p>
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>OptiTrack integration</strong> providing high-precision motion tracking for performance analysis</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Gait phase difference measurement</strong> quantifying locomotion coordination accuracy</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Leg stance duration analysis</strong> evaluating stability and balance performance</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Comprehensive benchmarking metrics</strong> enabling objective performance evaluation</li>
      </ul>
    </div>

  </div>
</div>


<hr/>

<h3 style="margin-top: 3.5rem; margin-bottom: 1rem;"> <strong>Paper & Presentation</strong> </h3>

<p>
 <a href="https://ieeexplore.ieee.org/document/11128090" style="text-decoration: none; color: #007bff;">
    <strong>Bio-inspired Distributed Neural Locomotion Controller (D-NLC) for Robust Locomotion and Emergent Behaviors</strong>
</a>
</p>

<div class="text-center my-4">
<iframe width="80%" height="500" src="https://www.youtube.com/embed/O39SGxDwapY?si=NTnBkvCepf7YCq07" 
        title="EigenBot Video Presentation" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen
        style="border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2); max-width: 100%;">
</iframe>
<p style="margin-top: 10px;"><strong>Video Presentation: Bio-inspired Distributed Neural Locomotion Controller</strong></p>
</div>

<h3 style="margin-top: 3.5rem; margin-bottom: 1rem;"> <strong>Acknowledgments</strong> </h3>

<p>
Thanks to Professor Howie Choset and Project Scientist Lu Li for their guidance and support throughout this project. Additional thanks to Zhikai Zhang, Henry Kou, Ishayu Shikhare, and the other members of our BioRobotics Lab team for their collaboration and contributions.
</p>


</div>