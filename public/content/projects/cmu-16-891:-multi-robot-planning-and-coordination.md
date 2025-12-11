<div class="container py-4">

<div class="row align-items-center my-4">
  <div class="col-md-12 d-flex align-items-center">
    <!-- Title -->
  <h1 class="mb-4" style="font-family: 'Old Standard TT', serif; margin-top: 0.5rem; margin-bottom: 2rem;"> <strong>CMU 16-891 Multi-Robot Planning and Coordination</strong> </h1>

  </div>
</div>

<br>

<p class="lead">
Comprehensive study of multi-agent path finding algorithms and coordination strategies for autonomous robot systems. Progressed from fundamental MAPF algorithms through robust planning techniques, real-time execution policies, uncertainty handling to cutting-edge research in hybrid CBS-RRT* frameworks.
</p>


<div class="text-center my-4">
<video controls autoplay muted loop
     class="img-fluid rounded shadow-sm"
     style="width:75%; max-width:100%; height:auto; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
  <source src="/videos/projects/cmu_course_project/891mapf/UR5e Robot Planner Test - 21 April 2025-2.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
<p>Multi-robot coordination demonstrating advanced path planning algorithms, CBS-RRT* on multiple UR5e arms.</p>
</div>

<hr/>
<br>

## <strong>Overview</strong>
<p>
Successfully implemented and analyzed fundamental MAPF algorithms including Joint-State A*, Space-Time A*, Prioritized Planning, and Conflict-Based Search, demonstrating mastery of algorithm optimality, completeness, and computational complexity properties. Developed advanced k-Robust CBS with target assignment integration using Hungarian algorithm optimization, creating sophisticated coordination systems capable of handling execution delays and environmental uncertainty.
</p>

<p>
Designed and validated CBS-RRT*, a novel hybrid algorithm integrating conflict-based search with sampling-based motion planning for continuous space multi-robot coordination, with applications demonstrated across drone swarms, robotic arm coordination, and warehouse automation scenarios. Research contribution represents advancement in continuous space multi-robot planning for real-world deployment challenges.
</p>


<hr/>

<h1 style="margin-top: 3rem; margin-bottom: 1rem;"> <strong>Technical Components</strong></h1>

<!-- ========================================= -->
<!-- HW1: FUNDAMENTAL MAPF ALGORITHMS          -->
<!-- ========================================= -->

<div class="row my-3 align-items-start">
    <h3 style="color: #007bff;">
      <span style="font-size: 1.5rem; margin-right: 0.5rem;">🧩</span>
      <strong>HW1: Fundamental MAPF Algorithms</strong>
    </h3>
    <p>
      Implementation and analysis of core Multi-Agent Path Finding algorithms with comprehensive study of optimality, completeness, and computational properties.
    </p>
  <div class="col-md-4 mb-4">
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Joint-State A* and Space-Time A*</strong> with analysis of exponential branching factor growth</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Prioritized Planning implementation</strong> with edge case handling for goal conflicts and higher-priority agent coordination</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Conflict-Based Search (CBS)</strong> with systematic conflict detection, constraint resolution, and optimality guarantees</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Algorithm analysis and comparison</strong> through designed MAPF instances</li>
      </ul>
    </div>
  </div>

  <div class="col-md-8 text-center">
  <div class="row my-0 align-items-center">
    <img src="/images/projects/cmu_course_project/891mapf/table_hw1.jpg"
         alt="MAPF Algorithm Comparison"
         class="img-fluid rounded shadow-sm"
         style="height: auto; width: 90%; object-fit: contain;">
    <p style="color: #007bff; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">MAPF algorithm performance analysis</p>
  <div class="row my-0 align-items-center">
    <div class="text-center">
    <video controls autoplay muted loop
     class="img-fluid rounded shadow-sm"
     style="width:50%; max-width:100%; height:auto; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
      <source src="/videos/projects/cmu_course_project/891mapf/test20.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    </div>
    <p style="color: #007bff; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">Solved map instance, test case #20</p>
    </div>
    </div>
  </div>
</div>

<!-- ========================================= -->
<!-- HW2: ROBUST PLANNING & TARGET ASSIGNMENT  -->
<!-- ========================================= -->

<div class="row my-5 align-items-start gx-0">
    <h3 style="color: #28a745;">
      <span style="font-size: 1.5rem; margin-right: 0.5rem;">🎯</span>
      <strong>HW2: Robust Planning & Target Assignment</strong>
    </h3>
    <p>
      Advanced multi-robot coordination techniques incorporating robustness to execution delays, optimal target assignment, and real-time execution policies for warehouse automation scenarios.
    </p>
  <div class="col-md-6 mb-4">
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.1rem; vertical-align: middle;"></i> <strong>k-Robust CBS implementation</strong> enforcing safety margins of k time-steps between robots for delay tolerance</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.1rem; vertical-align: middle;"></i> <strong>Target assignment strategies</strong> including random assignment, distance-based Hungarian algorithm optimization</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.1rem; vertical-align: middle;"></i> <strong>Target Assignment CBS (TA-CBS)</strong> for joint optimization of agent-goal assignment and path planning</li>
      </ul>
    </div>
  </div>

  <div class="col-md-6 mb-4">
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.1rem; vertical-align: middle;"></i> <strong>Temporal Plan Graph (TPG) execution</strong> for decentralized coordination under arbitrary execution delays</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.1rem; vertical-align: middle;"></i> <strong>Real-time execution policies</strong> handling probabilistic command failures and adaptive replanning</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.1rem; vertical-align: middle;"></i> <strong>Warehouse automation validation</strong> with comprehensive performance evaluation across multiple scenarios</li>
      </ul>
    </div>
  </div>
  
  <div class="row my-4 align-items-center">
    <div class="col-md-5 text-center">
      <video controls autoplay muted loop
         class="img-fluid rounded shadow-sm"
         style="width:60%; max-width:100%; height:auto; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
        <source src="/videos/projects/cmu_course_project/891mapf/k_robust_cbs.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p style="color: #28a745; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">k-Robust CBS with safety margins</p>
    </div>
    <div class="col-md-7 text-center">
      <video controls autoplay muted loop
         class="img-fluid rounded shadow-sm"
         style="width:60%; max-width:100%; height:auto; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
        <source src="/videos/projects/cmu_course_project/891mapf/k_robust_cbs_tpg.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p style="color: #28a745; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">k-Robust CBS with TPG execution policies</p>
    </div>
  </div>
</div>

<!-- ========================================= -->
<!-- FINAL PROJECT: CBS-RRT* RESEARCH          -->
<!-- ========================================= -->

<div class="row my-5 align-items-start">
  <div class="col-md-12 mb-3">
    <h3 style="color: #dc3545;">
      <span style="font-size: 1.5rem; margin-right: 0.5rem;">🔬</span>
      <strong>Final Project: CBS-RRT* Research Innovation</strong>
    </h3>
    <p>
      Novel research contribution developing hybrid CBS-RRT* algorithm for scalable multi-robot planning in uncertain 3D environments with applications in aerospace and exploration domains.
    </p>
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Hybrid algorithm design</strong> replacing traditional A*-based low-level search in p-Robust CBS with RRT* sampling-based exploration</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Continuous space adaptation</strong> enabling smooth navigation in high-dimensional environments with enhanced scalability</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Application domains</strong> including aerial drone swarms, 3D warehouse logistics, and potential drone-arm coordination in the future</li>
      </ul>
    </div>
  </div>
  
  <!-- UML Architecture -->
  <div class="row my-4 align-items-center">
    <div class="col-md-12 text-center">
      <img src="/images/projects/cmu_course_project/891mapf/UML_in_report.jpg"
           alt="CBS-RRT* UML Architecture"
           class="img-fluid rounded shadow-sm"
           style="width:100%; max-width:100%; height:auto; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
      <p style="color: #dc3545; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">CBS-RRT* System Architecture and UML Design</p>
    </div>
  </div>
  
  <!-- CBS-A* vs CBS-RRT* Comparison for Drones -->
  <div class="row my-3 align-items-center">
    <div class="col-md-12 mb-2">
      <h4 style="color: #dc3545; margin-bottom: 1rem;">
        <strong>Algorithm Comparison: CBS-A* vs CBS-RRT* for 3D Drone Coordination</strong>
      </h4>
    </div>
    <!-- CBS-A* Group -->
    <div class="col-md-6">
      <div style="border: 2px solid #007bff; border-radius: 10px; padding: 15px; margin: 5px;">
        <h5 style="color: #007bff; text-align: center; margin-bottom: 15px;"><strong>CBS-A* Lower-Level Planner</strong></h5>
        <div class="row">
          <div class="col-6 text-center">
            <img src="/images/projects/cmu_course_project/891mapf/AStar_0.jpg"
                 alt="CBS-A* Scenario 1"
                 class="img-fluid rounded shadow-sm"
                 style="width:100%; height:auto; border-radius:8px;">
            <p style="color: #007bff; font-weight: 500; font-size: 0.8rem; margin-top: 5px;">Scenario 1</p>
          </div>
          <div class="col-6 text-center">
            <img src="/images/projects/cmu_course_project/891mapf/Astar_2.jpg"
                 alt="CBS-A* Scenario 2"
                 class="img-fluid rounded shadow-sm"
                 style="width:100%; height:auto; border-radius:8px;">
            <p style="color: #007bff; font-weight: 500; font-size: 0.8rem; margin-top: 5px;">Scenario 2</p>
          </div>
        </div>
      </div>
    </div>
    <!-- CBS-RRT* Group -->
    <div class="col-md-6">
      <div style="border: 2px solid #28a745; border-radius: 10px; padding: 15px; margin: 5px;">
        <h5 style="color: #28a745; text-align: center; margin-bottom: 15px;"><strong>CBS-RRT* Lower-Level Planner</strong></h5>
        <div class="row">
          <div class="col-6 text-center">
            <img src="/images/projects/cmu_course_project/891mapf/RRT_0.jpg"
                 alt="CBS-RRT* Scenario 1"
                 class="img-fluid rounded shadow-sm"
                 style="width:100%; height:auto; border-radius:8px;">
            <p style="color: #28a745; font-weight: 500; font-size: 0.8rem; margin-top: 5px;">Scenario 1</p>
          </div>
          <div class="col-6 text-center">
            <img src="/images/projects/cmu_course_project/891mapf/RRT_2.jpg"
                 alt="CBS-RRT* Scenario 2"
                 class="img-fluid rounded shadow-sm"
                 style="width:100%; height:auto; border-radius:8px;">
            <p style="color: #28a745; font-weight: 500; font-size: 0.8rem; margin-top: 5px;">Scenario 2</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- CBS-RRT* for Different Arm Configurations -->
  <div class="row my-1 align-items-center">
    <div class="col-md-12 mb-3">
      <h4 style="color: #dc3545; margin-bottom: 1rem;">
                <strong>Scalability and Intersection Analysis: CBS-RRT* for Multi-Arm Coordination</strong>
      </h4>
    </div>
    <div class="col-md-12 text-center mb-3">
      <img src="/images/projects/cmu_course_project/891mapf/report_arm_setup.png"
           alt="Multi-Arm Experimental Setup"
           class="img-fluid rounded shadow-sm"
           style="width:75%; max-width:100%; height:auto; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
      <p style="color: #dc3545; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">Multi-Arm Experimental Setup and Configuration</p>
    </div>
  </div>
  
  <div class="row my-0 align-items-center">
    <div class="col-md-4 text-center">
      <img src="/images/projects/cmu_course_project/891mapf/robot1_start_.jpg"
           alt="Single UR5e Arm Planning"
           class="img-fluid rounded shadow-sm"
           style="width:90%; max-width:100%; height:auto; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
      <p style="color: #dc3545; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">Single UR5e arm planning</p>
    </div>
    <div class="col-md-4 text-center">
      <img src="/images/projects/cmu_course_project/891mapf/robot2_start.jpg"
           alt="Dual UR5e Arms Planning"
           class="img-fluid rounded shadow-sm"
           style="width:90%; max-width:100%; height:auto; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
      <p style="color: #dc3545; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">Dual UR5e arms coordination</p>
    </div>
    <div class="col-md-4 text-center">
      <img src="/images/projects/cmu_course_project/891mapf/robot3_start.jpg"
           alt="Triple UR5e Arms Planning"
           class="img-fluid rounded shadow-sm"
           style="width:90%; max-width:100%; height:auto; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
      <p style="color: #dc3545; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">Triple UR5e arms coordination</p>
    </div>
  </div>
</div>

<!-- ========================================= -->
<!-- TECHNICAL ACHIEVEMENTS                    -->
<!-- ========================================= -->
<!-- 
<div class="row my-5 align-items-start">
  
  <div class="col-md-12 mb-3">
    <h3 style="color: #6f42c1;">
      <span style="font-size: 1.5rem; margin-right: 0.5rem;">📊</span>
      <strong>Technical Achievements & Performance Analysis</strong>
    </h3>
    <p>
      Comprehensive evaluation and benchmarking of implemented algorithms demonstrating significant advances in computational efficiency and solution quality.
    </p>
    </div>
    <div class="col-md-6">
        <div style="margin-left: 1rem;">
          <ul class="list-unstyled mt-3">
            <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Algorithm complexity analysis</strong> comparing Joint-State A* exponential growth against CBS polynomial performance</li>
            <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Optimality vs efficiency trade-offs</strong> demonstrating CBS optimal solutions vs. Prioritized Planning speed advantages</li>
            <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>k-Robust performance validation</strong> showing improved execution success rates under realistic delay conditions</li>
          </ul>
        </div>
      </div>
      <div class="col-md-6">
        <div style="margin-left: 1rem;">
          <ul class="list-unstyled mt-3">
            <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Target assignment optimization</strong> achieving significant cost reduction through Hungarian algorithm integration</li>
            <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Real-time execution validation</strong> demonstrating collision-free operation under probabilistic command failures</li>
            <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Scalability improvements</strong> with CBS-RRT* showing enhanced performance in high-dimensional continuous spaces</li>
          </ul>
        </div>
      </div>

  </div>
</div> -->

<!-- <hr/>

<h3 style="margin-top: 3.5rem; margin-bottom: 1rem;"> <strong>Research Impact & Applications</strong> </h3>

<p>
This course provided comprehensive expertise in state-of-the-art multi-robot coordination techniques essential for autonomous systems deployment in complex real-world environments. The progression from fundamental algorithms through robust planning to novel research contributions demonstrates mastery of both theoretical foundations and practical implementation challenges in multi-agent robotics. The developed CBS-RRT* framework represents a significant contribution to the field, addressing critical scalability limitations in existing approaches for continuous space multi-robot planning.
</p> -->


<hr/>

<h3 style="margin-top: 3.5rem; margin-bottom: 1rem;"> <strong>Acknowledgments</strong> </h3>

<p>
Thanks to 16-891 TAs for their guidance and support. Thanks also to my teammates, Henry Kou and Aditya Bharambe for the collaboration and effort in this course project.
</p>

</div>