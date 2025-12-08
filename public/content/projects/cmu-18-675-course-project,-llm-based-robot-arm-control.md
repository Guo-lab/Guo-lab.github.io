---
title: "CMU 18-675 Course Project, LLM-based Robot Arm Control"
startDate: "2024-01-15"
endDate: "2024-04-15"
type: "course"
---

<div class="container py-4">

<h1 class="mb-4" style="font-family: 'Old Standard TT', serif; margin-top: 0.5rem; margin-bottom: 2rem;"><strong>LLM-based Robot Arm Control System</strong> </h1>

<p class="lead">
A robotic manipulation system for the UR5e robot arm that integrates Large Language Model processing for real-time, natural language user commands. This project combines advanced motion planning, control theory, and AI to create an intelligent robotic system capable of interpreting and executing complex manipulation tasks through conversational interfaces.
</p>

<div class="text-center my-4">
<video controls loop autoplay muted style="width:80%; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
  <source src="/videos/projects/cmu_course_project/675/LLM-ur5e.mp4" type="video/mp4" />
</video>
<p>UR5e robot arm demonstration showing LLM-guided manipulation tasks with real-time natural language command processing.</p>
</div>

<hr/>

<br> 

## <strong>Project Overview</strong>

<div class="row align-items-center">
    <!-- Left: Text -->
      <p>
      This project developed a comprehensive robotic manipulation system that bridges the gap between natural language instructions and precise robot control. By integrating Large Language Model capabilities with advanced motion planning algorithms, the system enables users to command complex manipulation tasks through conversational interfaces.
      </p>
    <div class="col-md-7">
      <p>
      The final implementation successfully demonstrated pick-and-place operations with <b>our customized robot arm and the UR5e robot arm</b>, incorporating <b>RRT path planning</b>, <b>customized LQR / Differential IK (inverse kinematics) control</b> strategies, and <b>constraint-aware motion execution</b> for safe and efficient task execution.
      </p>
      <p>Customized robot arm shown on the right.</p>
    </div>
    <!-- Right: Image -->
    <div class="col-md-5 text-center">
      <img src="/images/projects/cmu_course_project/675control/customized_arm.jpg" alt="Customized robot arm" class="img-fluid rounded shadow">
    </div>
</div>

<br> 
<hr/>


<!-- 
<h1 style="margin-top: 3.5rem; margin-bottom: 2rem;"> <strong>Technical Architecture</strong></h1>

<!-- ========================================= -->
<!-- TECHNICAL COMPONENTS LAYOUT               -->
<!-- ========================================= -->

<!-- <div class="row my-5">
  
  <div class="col-md-6 mb-4">
      <h3 style="color: #007bff;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">🤖</span>
        <strong>Large Language Model Integration</strong>
      </h3>
      <p>
        Advanced natural language processing system that interprets user commands and translates them into actionable robot behaviors with environmental awareness.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Real-time command interpretation</strong> processing natural language instructions into structured robot actions</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Environmental context awareness</strong> understanding workspace objects and constraints for safe manipulation</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Task decomposition capabilities</strong> breaking complex commands into executable sub-tasks and motion primitives</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Adaptive learning interface</strong> improving command interpretation accuracy through interaction feedback</li>
        </ul>
      </div>
  </div>

  <div class="col-md-6 mb-4">
      <h3 style="color: #28a745;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">🎯</span>
        <strong>Motion Planning & Path Generation</strong>
      </h3>
      <p>
        Sophisticated path planning system using RRT algorithms to generate collision-free trajectories for complex manipulation tasks in dynamic environments.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>RRT (Rapidly-exploring Random Tree) planner</strong> generating optimal collision-free paths through configuration space</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Dynamic obstacle avoidance</strong> real-time path adaptation for moving objects and workspace changes</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Multi-objective optimization</strong> balancing path length, smoothness, and execution time constraints</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Workspace boundary handling</strong> ensuring safe operation within defined robot reach and joint limits</li>
        </ul>
      </div>
  </div>

</div> -->

<!-- <div class="row my-5">
  
  <div class="col-md-6 mb-4">
      <h3 style="color: #dc3545;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">⚙️</span>
        <strong>Advanced Control Systems</strong>
      </h3>
      <p>
        Hybrid control architecture combining LQR and Pseudo-Inverse control strategies for precise trajectory tracking and manipulation accuracy.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Customized LQR Controller</strong> providing optimal state feedback control with dynamic cost function adaptation</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Pseudo-Inverse Control implementation</strong> handling redundant degrees of freedom for dexterous manipulation tasks</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Hybrid control switching</strong> dynamically selecting control strategies based on task requirements and robot state</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Real-time trajectory tracking</strong> ensuring precise execution of planned paths with minimal tracking error</li>
        </ul>
      </div>
  </div>

  <div class="col-md-6 mb-4">
      <h3 style="color: #6f42c1;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">🔄</span>
        <strong>Simulation & Validation Environment</strong>
      </h3>
      <p>
        Comprehensive simulation framework enabling safe development, testing, and validation of complex manipulation behaviors before real-world deployment.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>High-fidelity UR5e simulation</strong> accurate physics modeling for realistic behavior prediction and testing</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Interactive object placement</strong> dynamic environment configuration for diverse manipulation scenarios</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Performance metrics evaluation</strong> comprehensive analysis of success rates, execution times, and trajectory quality</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Safety validation protocols</strong> testing emergency stops and collision avoidance before hardware deployment</li>
        </ul>
      </div>
  </div>

</div> -->

<!-- <hr/> -->

<!-- <h1 style="margin-top: 3.5rem; margin-bottom: 2rem;"> <strong>Key Capabilities</strong></h1>

<div class="row my-4">
  <div class="col-md-12">
    <h4 style="color: #fd7e14;">🎯 <strong>Pick-and-Place Operations</strong></h4>
    <p>
      The system successfully demonstrated complex pick-and-place operations through natural language commands, showcasing the integration of all system components for real-world manipulation tasks.
    </p>
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Object identification and localization</strong> using computer vision and workspace awareness</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Grasping strategy selection</strong> adaptive gripper control based on object properties and task requirements</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Precise placement control</strong> accurate positioning with sub-centimeter precision for assembly tasks</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Multi-stage task execution</strong> coordinating approach, grasp, transport, and placement phases</li>
      </ul>
    </div>
  </div>
</div>

<hr/>

<h1 style="margin-top: 3.5rem; margin-bottom: 2rem;"> <strong>Future Enhancements</strong></h1>

<div class="row my-4">
  <div class="col-md-12">
    <h4 style="color: #28a745;">🔬 <strong>Work in Progress</strong></h4>
    <p>
      Ongoing development focuses on expanding system capabilities and improving robustness for diverse manipulation scenarios.
    </p>
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Enhanced manipulation accuracy</strong> integrating additional control techniques for sub-millimeter precision tasks</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Trajectory smoothness optimization</strong> implementing advanced path smoothing algorithms for natural robot motion</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Adaptive control capabilities</strong> dynamic parameter tuning for varying payload and environmental conditions</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Advanced LLM interaction</strong> refining natural language processing for more complex task descriptions and contextual understanding</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Multi-robot coordination</strong> extending the system to support collaborative manipulation with multiple robot arms</li>
      </ul>
    </div>
  </div>
</div> -->


<h3 style="margin-top: 2.5rem; margin-bottom: 1.5rem;"> <strong>Thoughts & Notes</strong> </h3>

LLMs offer an <b>intuitive natural language interface</b> that allows users to control robot arms without needing to learn specialized programming languages or command formats. This greatly <b>enhances usability and lowers the barrier</b> for non-experts to interact with robotic systems.

In robotics, LLMs act as a <b>high-level task interpreter</b>: they convert user instructions into structured commands that can be executed by the robot. Their contextual understanding enables them to handle vague, incomplete, or novel instructions by inferring intent and selecting appropriate actions. This <b>adaptability</b> allows robots to respond more flexibly to new tasks and dynamic environments.

Beyond command interpretation, LLMs also contribute <b>reasoning capabilities that support higher-level decision making</b>. They can <b>identify constraints, evaluate feasible strategies, and assist in task planning</b> by incorporating both user intent and environmental cues. This integration of language, context, and reasoning enables robotic systems that are safer and more autonomous, capable, and user-aligned.

<br>
<hr/>

<h3 style="margin-top: 3.5rem; margin-bottom: 1rem;"> <strong>Acknowledgments</strong> </h3>

<p>
Thanks to 18-675 TA Haoming Jing for his guidance and support throughout the semester. Thanks also to my teammates, Yaguang Li, Zhanxun Liu, and Renjian Ruan for the collaboration and effort in this course project.
</p>

</div>