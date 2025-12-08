<!-- ---
title: "CMU 16-745-Optimal-Control Course Labs"
startDate: "2024-07-23"
endDate: "2024-08-16"
type: "course"
--- -->

<div class="container py-4">

<div class="row align-items-center my-4">
  <div class="col-md-12 d-flex align-items-center">
    <!-- SVG -->
    <img src="/images/projects/cmu_course_project/745ocrl/77026328.png"
         alt="OCRL Logo"
         class="img-fluid"
         style="max-width: 120px; margin-right: 1rem;">
    <!-- Title -->
  <h1 class="mb-4" style="font-family: 'Old Standard TT', serif; margin-top: 0.5rem; margin-bottom: 2rem;"> <strong>CMU 16-745 Optimal Control Course Coding Assignments</strong> </h1>

  </div>
</div>

<br>

<p class="lead">
A comprehensive exploration of optimal control theory through hands-on implementation of advanced algorithms including LQR, iLQR, Model Predictive Control (MPC), and trajectory optimization methods. These labs provided deep insights into nonlinear control systems, convex optimization, and real-world applications for robotic systems including quadrotors, bipedal walkers, and autonomous vehicles.
</p>

<br>

<div class="text-center my-4">
<img src="/images/projects/cmu_course_project/745ocrl/optimal_rendezvous_docking_mpc_convex_cropped.gif"
     alt="Optimal Rendezvous Docking MPC"
     class="img-fluid rounded shadow-sm"
     style="width:75%; max-width:100%; height:auto; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
<p>Advanced MPC implementation for spacecraft rendezvous docking demonstrating optimal trajectory planning and control.</p>
</div>

<hr/>

## <strong>Course Overview</strong>

<br>
<p>
This course provided comprehensive coverage of optimal control theory with emphasis on practical implementation and real-world applications. Each laboratory assignment built progressively on fundamental optimization concepts, culminating in sophisticated control systems for complex robotic platforms.
</p>

<p>
The laboratory work combined theoretical understanding with hands-on implementation, covering everything from basic quadratic programming to advanced trajectory optimization for hybrid systems with complex dynamics and constraints.
</p>

<br>
<hr/>

<h1 style="margin-top: 3.5rem; margin-bottom: 2rem;"> <strong>Laboratory Components</strong></h1>

<!-- ========================================= -->
<!-- LAB 1: FUNDAMENTALS & QP SOLVERS          -->
<!-- ========================================= -->

<div class="row my-5 align-items-start">
    <h3 style="color: #007bff;">
      <span style="font-size: 1.5rem; margin-right: 0.5rem;">🧮</span>
      <strong>Lab 1: Fundamentals & QP Solvers</strong>
    </h3>
    <p>
      Foundation laboratory implementing core optimization algorithms and solvers essential for optimal control applications.
    </p>
  <div class="col-md-6 mb-4">
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Integration methods implementation</strong> for numerical solution of differential equations</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Newton Method optimization</strong></li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Gauss-Newton based solution of the KKT conditions</strong> (Lagrangian QP subproblems with constraints) </li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Augmented Lagrangian Quadratic Problem Solver</strong> for constrained optimization</li>
      </ul>
    </div>
  </div>

  <div class="col-md-6 text-center">
    <img src="/images/projects/cmu_course_project/745ocrl/falling_brick.gif"
         alt="Falling Brick QP Simulation"
         class="img-fluid rounded shadow-sm"
         style="height: auto; width: 100%; object-fit: contain;">
    <p style="color: #007bff; font-weight: 500; font-size: 0.9rem; margin-top: 0px;">Falling brick simulation demonstrating QP solver implementation</p>
  </div>
</div>

<!-- ========================================= -->
<!-- LAB 2: LQR & MPC DEVELOPMENT              -->
<!-- ========================================= -->

<div class="row my-5 align-items-start gx-0">
    <h3 style="color: #28a745;">
      <span style="font-size: 1.5rem; margin-right: 0.5rem;">🎯</span>
      <strong>Lab 2: LQR & MPC Development</strong>
    </h3>
    <p>
      Advanced control system design implementing Linear Quadratic Regulators and Model Predictive Control for complex dynamical systems.
    </p>
  <div class="col-md-4 mb-4">
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.1rem; vertical-align: middle;"></i> <strong>Finite / Infinite Horizon LQR</strong> involving convex optimization and Riccati equation solutions</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.1rem; vertical-align: middle;"></i> <strong>Linearization-based LQR</strong> for nonlinear systems with local linear approximations</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.1rem; vertical-align: middle;"></i> <strong>Convex Trajectory Optimization</strong> for smooth and efficient path planning</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.1rem; vertical-align: middle;"></i> <strong>Convex MPC Solver implementation</strong> for rendezvous docking missions with real-time constraints</li>
      </ul>
    </div>
  </div>

  <div class="col-md-4">
    <div class="text-center mb-1">
      <img src="/images/projects/cmu_course_project/745ocrl/ihlqr_tuning.gif"
           alt="iLQR Tuning Process"
           class="img-fluid rounded shadow-sm"
           style="height: 100%; width: 100%; object-fit: contain;">
      <p style="color: #28a745; font-weight: 500; font-size: 0.8rem; margin-top: 1px;">ihlqr tuning process</p>
    </div>
  </div>
  <div class="col-md-4">
    <div class="text-center">
      <img src="/images/projects/cmu_course_project/745ocrl/optimal_rendezvous_docking_mpc_convex.gif"
           alt="Optimal Rendezvous Docking MPC"
           class="img-fluid rounded shadow-sm"
           style="height: 100%; width: auto; object-fit: contain;">
      <p style="color: #28a745; font-weight: 500; font-size: 0.8rem; margin-top: 1px;">MPC rendezvous docking</p>
    </div>
  </div>

</div>

<!-- ========================================= -->
<!-- LAB 3: NONLINEAR PROGRAMMING & iLQR       -->
<!-- ========================================= -->

<div class="row my-5 align-items-start">
  <div class="col-md-12 mb-3">
    <h3 style="color: #dc3545;">
      <span style="font-size: 1.5rem; margin-right: 0.5rem;">🔄</span>
      <strong>Lab 3: Nonlinear Programming & iLQR</strong>
    </h3>
    <p>
      Advanced nonlinear optimization techniques applied to complex robotic systems including quadrotors and underactuated systems.
    </p>
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>IPOPT nonlinear programming</strong> solving complex optimization problems with direct collocation (DIRCOL) methods for trajectory optimization for underactuated systems like cart-pole swing-up control</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Iterative LQR for quadrotors</strong> enabling precise trajectory following and smooth path tracking</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Safety distance constraints</strong> incorporating collision avoidance into optimization framework by applying nonlinear programming (NLP) for quadrotors using IPOPT</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Quadrotor reorientation control</strong> with complex 3D maneuvering capabilities</li>
      </ul>
    </div>
  </div>

  <div class="col-md-3 text-center mb-3">
    <img src="/images/projects/cmu_course_project/745ocrl/swingup_ipopt.gif"
         alt="Cart-Pole Swing-up IPOPT"
         class="img-fluid rounded shadow-sm"
         style="height: auto; width: 100%; object-fit: contain;">
    <p style="color: #dc3545; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">Cart-pole swing-up using IPOPT</p>
  </div>

  <div class="col-md-3 text-center mb-3">
    <img src="/images/projects/cmu_course_project/745ocrl/quadrotor_ilqr.gif"
         alt="Quadrotor iLQR Control"
         class="img-fluid rounded shadow-sm"
         style="height: auto; width: 80%; object-fit: contain;">
    <p style="color: #dc3545; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">Quadrotor trajectory following with iLQR</p>
  </div>

  <div class="col-md-6 text-center mb-3">
    <img src="/images/projects/cmu_course_project/745ocrl/quadrotor_reorient_ipopt.gif"
         alt="Quadrotor Reorientation IPOPT"
         class="img-fluid rounded shadow-sm"
         style="height: auto; width: 100%; object-fit: contain;">
    <p style="color: #dc3545; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">Quadrotor reorientation with IPOPT</p>
  </div>
</div>

<!-- ========================================= -->
<!-- LAB 4: ADVANCED CONTROL & HYBRID SYSTEMS  -->
<!-- ========================================= -->

<div class="row my-5 align-items-start">
  
  <div class="col-md-12 mb-3">
    <h3 style="color: #6f42c1;">
      <span style="font-size: 1.5rem; margin-right: 0.5rem;">🤖</span>
      <strong>Lab 4: Advanced Control & Hybrid Systems</strong>
    </h3>
    <p>
      Sophisticated control techniques for complex systems including iterative learning control and hybrid system trajectory optimization.
    </p>
    </div>
    <div class="col-md-4">
        <div style="margin-left: 1rem;">
          <ul class="list-unstyled mt-3">
            <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Iterative Learning Control (ILC)</strong> for bicycle model with performance improvement over repeated trials</li>
            <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Hybrid Trajectory Optimization</strong> for bipedal walker systems with IPOPT</li>
            <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> The hybrid system switches between different modes of operation, each governed by its own set of dynamics.</li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 text-center">
        <img src="/images/projects/cmu_course_project/745ocrl/nonlinear_bicycle_model_iterative_learning_control.gif"
            alt="Iterative Learning Control Bicycle"
            class="img-fluid rounded shadow-sm"
            style="height: auto; width: 100%; object-fit: contain;">
        <p style="color: #6f42c1; font-weight: 500; font-size: 0.9rem; margin-top: 10px;">Bicycle model iterative learning control</p>
      </div>
      <div class="col-md-5 text-center">
        <img src="/images/projects/cmu_course_project/745ocrl/hybrid_biped_walker_ipopt.gif"
            alt="Hybrid Biped Walker IPOPT"
            class="img-fluid rounded shadow-sm"
            style="height: auto; width: 100%; object-fit: contain;">
        <p style="color: #6f42c1; font-weight: 500; font-size: 0.9rem; margin-top: 10px;">Hybrid bipedal walker trajectory optimization with IPOPT</p>
      </div>

  </div>
</div>

<hr/>

<h3 style="margin-top: 3.5rem; margin-bottom: 1rem;"> <strong>Acknowledgments</strong> </h3>

<p>
Thanks to the CMU 16-745 open-source course materials.
</p>

</div>