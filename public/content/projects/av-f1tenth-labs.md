<!-- ---
title: "AV-F1TENTH-Labs"
startDate: "2024-07-12"
endDate: "2024-07-28"
type: "course"
--- -->

<div class="container py-4">

<h1 class="mb-4" style="font-family: 'Old Standard TT', serif; margin-top: 0.5rem; margin-bottom: 2rem;"> <strong>F1TENTH Autonomous Racing Laboratory</strong> </h1>

<p class="lead">
A comprehensive autonomous racing development program implementing advanced control algorithms and motion planning techniques for autonomous vehicles. This laboratory series covered the complete pipeline from safety systems to sophisticated path planning, culminating in real-world deployment on F1TENTH racing platforms.
</p>

<div class="text-center my-4">
<video controls loop autoplay muted style="width:80%; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
  <source src="/videos/projects/cmu_course_project/f1tenth/lab9.mp4" type="video/mp4" />
</video>
<p><b>Lab 9 Model Predictive Control (MPC)</b> implementation for F1TENTH autonomous racing demonstrating optimal trajectory planning and high-speed control.</p>
</div>

<hr/>

## <strong>Laboratory Overview</strong>

<p>
Throughout this laboratory coding projects,In the labs, I implemented my own AEB, Wall Following, Pure Pursuit control, Gap Following, RRT Planning algorithm, and MPC for the autonomous race car on the platform, F1TENTH. Each laboratory built progressively on the previous work, creating a autonomous vehicle capable of high-speed navigation in complex environments.
</p>

<p>
The development process included extensive simulation validation in RViz and ROS before real-world deployment, ensuring safe and reliable operation of autonomous racing algorithms on physical F1TENTH platforms.  After simulation in Rviz and ROS, I deployed these contorl methods on the real car. 
</p>

<hr/>

<h1 style="margin-top: 3.5rem; margin-bottom: 2rem;"> <strong>Laboratory Components</strong></h1>

<!-- ========================================= -->
<!-- DEVELOPMENT PIPELINE OVERVIEW             -->
<!-- ========================================= -->

<!-- ========================================= -->
<!-- PHASE 1: SAFETY & CONTROL FUNDAMENTALS    -->
<!-- ========================================= -->

<div style="border-left: 4px solid #dc3545; padding-left: 1.5rem; margin: 3rem 0;">
  <h2 style="color: #dc3545; margin-bottom: 1rem;"><strong>Phase 1: Safety & Control Fundamentals</strong></h2>
  
  <div class="row">
  <div class="col-md-5">
  <h3 style="color: #dc3545;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">🚨</span>
        <strong>Lab 2: Automatic Emergency Braking</strong>
  </h3>
  </div>
  <div class="col-md-7">
  <h3 style="color: #28a745;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">🧭</span>
        <strong>Lab 3: Wall Following Control</strong>
  </h3>
  </div>
  </div>

  <div class="row my-4 align-items-center"> 
  
  <div class="col-md-5">
  <div class="row">
  <div class="col-md-6 mb-4">
      <p style="font-size: 1.05rem;">
        Critical safety system implementation using instantaneous time-to-collision (iTTC) calculations for collision avoidance in high-speed scenarios.
      </p>
  </div>
  <div class="col-md-6 text-center">
      <video controls loop muted style="width:100%; height: 250px; object-fit: cover; border-radius:10px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
        <source src="/videos/projects/cmu_course_project/f1tenth/lab2.mp4" type="video/mp4" />
      </video>
      <p style="color: #dc3545; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">Emergency braking system activation</p>
  </div>
  </div>

  </div>

  <div class="col-md-7">

  <div class="row">
  <div class="col-md-6 mb-4">
      <!-- <p style="font-size: 1.05rem;">
       PID control system for autonomous navigation maintaining optimal distance from environmental boundaries.
      </p> -->
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>PID Controller implementation</strong> maintaining system parameters around specified set points</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> The control output <code>u(t)</code> is the steering angle we want the car to drive at. The error term <code>e(t)</code> is the difference between the set point and the parameter we want to maintain around that set point, which is the difference between the desired and actual distance to the wall.</li>
        </ul>
      </div>
  </div>
  <div class="col-md-6 text-center">
      <video controls loop muted style="width:100%; height: 250px; object-fit: cover; border-radius:10px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
        <source src="/videos/projects/cmu_course_project/f1tenth/lab3.mp4" type="video/mp4" />
      </video>
      <p style="color: #28a745; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">PID wall following control</p>
  </div>
  

  </div>


  </div>

  </div> <!--for the row -->

</div>

<!-- ========================================= -->
<!-- PHASE 2: REACTIVE NAVIGATION              -->
<!-- ========================================= -->

<div style="border-left: 4px solid #fd7e14; padding-left: 1.5rem; margin: 3rem 0;">
  <h2 style="color: #fd7e14; margin-bottom: 0.5rem;"><strong>Phase 2: Reactive Navigation & Path Following</strong></h2>

  <div class="row my-4 align-items-center">
      <h3 style="color: #fd7e14;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">🎯</span>
        <strong>Lab 4: Gap Following Algorithm</strong>
      </h3>
    <div class="col-md-5 mb-4">
      <p style="font-size: 1.05rem;">
        Reactive obstacle avoidance system implementing gap detection and following algorithms for dynamic environmental navigation.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Reactive gap detection</strong> identifying navigable spaces in real-time sensor data</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Dynamic obstacle avoidance</strong> adapting to changing environmental conditions</li>
        </ul>
      </div>
    </div>
    <div class="col-md-7 text-center">
      <video controls loop muted style="width:100%; height: 250px; object-fit: cover; border-radius:10px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
        <source src="/videos/projects/cmu_course_project/f1tenth/lab4.mp4" type="video/mp4" />
      </video>
      <p style="color: #fd7e14; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">Dynamic gap following navigation</p>
    </div>
  </div>

  <div class="row my-4 align-items-center">
        <h3 style="color: #6f42c1;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">📍</span>
        <strong>Lab 6: Pure Pursuit Control</strong>
      </h3>
    <div class="col-md-6 text-center">
      <video controls loop muted style="width:100%; height: 250px; object-fit: cover; border-radius:10px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
        <source src="/videos/projects/cmu_course_project/f1tenth/lab6.mp4" type="video/mp4" />
      </video>
      <p style="color: #6f42c1; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">Pure Pursuit waypoint tracking</p>
    </div>
    <div class="col-md-6 mb-4">
      <p style="font-size: 1.05rem;">
        Advanced waypoint tracking system implementing Pure Pursuit algorithms for precise path following and navigation through predefined trajectories.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Waypoint tracking implementation</strong> following predefined navigation points with high accuracy</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Pure Pursuit geometry</strong> calculating optimal steering commands based on vehicle kinematics</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Lookahead distance optimization</strong> adapting pursuit distance based on vehicle speed</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- ========================================= -->
<!-- PHASE 3: ADVANCED PLANNING & OPTIMIZATION -->
<!-- ========================================= -->

<div style="border-left: 4px solid #007bff; padding-left: 1.5rem; margin: 3rem 0;">
  <h2 style="color: #007bff; margin-bottom: 2rem;"><strong>Phase 3: Advanced Planning & Optimization</strong></h2>
      <h3 style="color: #007bff;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">🗺️</span>
        <strong>Lab 7: RRT Motion Planning</strong>
      </h3>
      <p style="font-size: 1.05rem;">
        Sophisticated motion planning system using sampling-based RRT algorithms for complex environment navigation and path optimization.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Sampling-based RRT algorithm</strong> efficiently exploring configuration space for optimal path discovery</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Occupancy grid integration</strong> using probabilistic maps for intelligent obstacle avoidance</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Path-following integration</strong> combining RRT planning with Pure Pursuit control</li>
        </ul>
      </div>

  <div class="row my-4 align-items-center justify-content-center text-center">
      <video controls loop muted style="width:50%; height: auto; object-fit: contain; border-radius:10px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
        <source src="/videos/projects/cmu_course_project/f1tenth/lab7.mp4" type="video/mp4" />
      </video>
      <p style="color: #007bff; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">RRT motion planning in complex environments</p>
  </div>

  <div class="row my-4 align-items-center">
      <h3 style="color: #28a745;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">🎮</span>
        <strong>Lab 9: Model Predictive Control</strong>
      </h3>
      <p style="font-size: 1.05rem;">
        Advanced optimal control system implementing Model Predictive Control for trajectory optimization and high-performance autonomous racing.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Trajectory optimization</strong> computing optimal paths considering vehicle dynamics and constraints</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Receding horizon control</strong> continuously updating control actions based on predictions</li>
        </ul>
      </div>
      <!-- <div class="align-items-center justify-content-center text-center"> -->
      <!-- <video controls loop muted style="width:50%; height: auto; object-fit: cover; border-radius:10px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
        <source src="/videos/projects/cmu_course_project/f1tenth/lab9.mp4" type="video/mp4" />
      </video>
      <p style="color: #28a745; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">MPC trajectory optimization for racing</p>
      </div> -->
  </div>
</div>

<div class="text-center my-4">
<video controls loop muted style="width:70%; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
  <source src="/videos/projects/cmu_course_project/f1tenth/IMG_4732.mp4" type="video/mp4" />
</video>
<p style="color: #28a745; font-weight: 500;">Real-world deployment demonstration showing complete autonomous racing system in action on physical F1TENTH platform.</p>
</div>

<hr/>

<h3 style="margin-top: 3.5rem; margin-bottom: 1rem;"> <strong>Acknowledgments</strong> </h3>

<p>
Thanks to Yaguang Li from CMU Control & Learning Group for providing the racing car platform.
</p>

</div>