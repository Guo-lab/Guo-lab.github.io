---
title: "MMPUG, Multi-Modal Perception Uber Good"
startDate: "2024-05-01"
endDate: "2024-09-01"
type: "research"
---

<div class="container py-4">

<h1 class="mb-4" style="font-family: 'Old Standard TT', serif; margin-top: 0.5rem; margin-bottom: 2rem;"> 
 <a href="https://www.ri.cmu.edu/project/mmpug-multi-model-perception-uber-good/" style="text-decoration: none; color: #007bff;">
    <strong>MMPUG: Multi-Modal Perception Uber Good</strong> 
  </a>
</h1>

<p class="lead">
A sophisticated heterogeneous agent system integrating three RC cars (UGVs) and two Spot robots in a collaborative multi-agent framework. The system combines advanced viewpoint-based exploration planning, trajectory libraries for rapid obstacle avoidance, and high-speed path following capabilities for complex autonomous navigation missions.
</p>

<div class="text-center my-4">
<img src="/images/projects/mmpug/mmpug_groupshot-scaled.jpg"
     alt="MMPUG Heterogeneous Robot Team"
     class="img-fluid rounded shadow-sm"
     style="width:80%; max-width:100%; height:auto; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
<p>MMPUG heterogeneous agent system featuring multiple RC cars and Spot robots working collaboratively in complex environments.</p>
</div>

<hr/>
<br>

## <strong>Project Overview</strong>

<p>
MMPUG represents a cutting-edge approach to heterogeneous multi-agent robotics, combining diverse robotic platforms to achieve superior performance in complex navigation and exploration tasks. The system integrates ground vehicles and legged robots in a unified framework that leverages the unique capabilities of each platform type.

I contributed to the design of the global planner with using **A*** and **Theta*** algorithms, and developed a systematic planning interface, ensuring seamless integration with the lower-level iLQR controller through well-structured waypoint connections, and designed efficient replanning strategies.

My contributions significantly improved the adaptability, safety, and efficiency of MMPUG convoys, expanding their capabilities in complex, heterogeneous environments.
</p>
<br>

<hr/>

<h1 style="margin-top: 3.5rem; margin-bottom: 2rem;"> <strong>Technical Contributions</strong></h1>

<div class="row my-3 align-items-center">
    <h3 style="color: #007bff;">
      <span style="font-size: 1.5rem; margin-right: 0.5rem;">🗺️</span>
      <strong>Global Path Planning Architecture</strong>
    </h3>
  <div class="col-md-6 mb-4">
    <p>
      Designed and implemented sophisticated global planning algorithms using <b>A*</b> and <b>Theta*</b> search methods, providing optimal path generation for heterogeneous robot teams in complex environments.
    </p>
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>A* implementation</strong> for optimal path finding in discrete grid environments</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Theta* algorithm integration</strong> enabling any-angle path planning for smoother trajectories</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Systematic planning interface</strong> coordinating between high-level planning and low-level control</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Efficient replanning strategies</strong> adapting to dynamic environmental changes and provide real-time optimized solutions</li>
      </ul>
    </div>
  </div>
  <div class="col-md-6 text-center">
    <video controls loop autoplay muted style="width:100%; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
      <source src="/videos/projects/mmpug/June_6_final-demo-2-cases.mp4" type="video/mp4" />
    </video>
    <p style="color: #007bff; font-weight: 500; margin-top: 10px;">How real-time replanning benefits long-horizon planning</p>
  </div>
</div>

<div class="row my-1 align-items-start">
    <h3 style="color: #28a745;">
      <span style="font-size: 1.5rem; margin-right: 0.5rem;">🎯</span>
      <strong>Planning-Control Integration</strong>
    </h3>
    <div class="col-md-6 mb-4">
        <p>
          Developed seamless integration between high-level planning and low-level control through well-structured waypoint connections, ensuring robust execution of complex autonomous behaviors.
        </p>
      </div>
      <div class="col-md-6 mb-4 text-center">
        <video controls loop autoplay muted style="width:100%; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
      <source src="/videos/projects/mmpug/Aug_13_PASS_03_show_control.mp4" type="video/mp4" />
        </video>
        <p style="color: #28a745; font-weight: 500; margin-top: 10px;">How low-level iLQR control cooperates with high-level global planning: the vehicle makes minor adjustments based on control commands while still adhering to the planned path.</p>
      </div>
</div>

<div class="row my-1">

  <div class="col-md-6 mb-4">
      <h3 style="color: #fd7e14;">
      <span style="font-size: 1.5rem; margin-right: 0.5rem;">🔧</span>
      <strong>Simulation-to-Reality Transfer</strong>
    </h3>
    <p>
      Addressed critical challenges encountered during the transition from simulation to real-world deployment, implementing sophisticated solutions to overcome practical limitations and enhance system robustness.
    </p>
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Physical constraint adaptation</strong> accommodating real-world hardware limitations and environmental factors</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>2.5D orientation optimization</strong> that accounts for vehicle kinematics, improving planning efficiency through effective pruning</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Implemented <strong>dynamic obstacle filter</strong> to enhance real-time responsiveness</li>        
      </ul>
    </div>
<h3 style="color: #fd7e14;">
  <span style="font-size: 1.5rem; margin-right: 0.5rem;">🗓️</span>
  <strong>Future Improvements</strong>
</h3>

<div style="margin-left: 1rem;">
  <ul class="list-unstyled mt-3">
    <li class="mb-2">
      <i class="bi bi-circle-fill"
         style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i>
      Support larger-scale global maps and full 3D mapping
    </li>
    <li class="mb-2">
      <i class="bi bi-circle-fill"
         style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i>
      Integrate heterogeneous agents into the planning framework
    </li>
    <li class="mb-2">
      <i class="bi bi-circle-fill"
         style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i>
      <strong>Scalable multi-robot deployment</strong> leveraging distributed planning and
      communication-efficient coordination
    </li>
    <li class="mb-2">
      <i class="bi bi-circle-fill"
         style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i>
      <strong>Enhanced sim-to-real transfer</strong> through domain randomization and
      uncertainty modeling
    </li>
  </ul>
</div>
    </div>
    <div class="col-md-6 mb-4">
      <!-- Final Simulation-to-Reality Results -->
      <div class="text-center my-4">
        <video controls loop autoplay muted style="width:100%; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
          <source src="/videos/projects/mmpug/Aug_13_PASS_024.mp4" type="video/mp4" />
        </video>
        <p style="color: #fd7e14; font-weight: 500; margin-top: 10px;">Final simulation-to-reality results demonstrating successful deployment of the Global Planner</p>
      </div>
    </div>

  </div>

  <!-- 2.5D Optimization Demonstration -->
  <div style="border: 2px solid #fd7e14; border-radius: 15px; padding: 0rem; margin: 0rem 0;">
    <div class="row">
      <!-- First two videos in inner box -->
      <div class="col-md-8 mb-2">
        <div style="border: 1px solid #fd7e14; border-radius: 10px; padding: 0.5rem;">
          <div class="row">
            <div class="col-md-6 text-center mb-2">
              <video controls loop muted style="width:100%; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
                <source src="/videos/projects/mmpug/July_good.mp4" type="video/mp4" />
              </video>
              <p style="color: #fd7e14; font-weight: 500; font-size: 0.8rem; margin-top: 4px; margin-bottom: 0;">Smooth planning with 2.5D optimization</p>
            </div>
            <div class="col-md-6 text-center mb-2">
              <video controls loop muted style="width:100%; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
                <source src="/videos/projects/mmpug/July_with-oscill2.mp4" type="video/mp4" />
              </video>
              <p style="color: #fd7e14; font-weight: 500; font-size: 0.8rem; margin-top: 4px; margin-bottom: 0;">Without optimization, oscillatory behavior</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Third video -->
      <div class="col-md-4 text-center mb-2">
        <video controls loop muted style="width:100%; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
          <source src="/videos/projects/mmpug/July_whyuseful.mp4" type="video/mp4" />
        </video>
        <p style="color: #fd7e14; font-weight: 500; font-size: 0.8rem; margin-top: 4px; margin-bottom: 0;">Application scenario for 2.5D optimization. E.g. The planner may see a path as feasible, but the vehicle could still get trapped in a narrow obstacle gap.</p>
      </div>
    </div>
  </div>
  
</div>


<h3 style="margin-top: 3.5rem; margin-bottom: 1rem;"> <strong>Acknowledgments</strong> </h3>

<p>
Thanks to Dr. Matthew J. Travers and his PhD students's guidance and support.
</p>

</div>