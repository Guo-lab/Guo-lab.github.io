<div class="container py-4">

<div class="row align-items-center my-4">
  <div class="col-md-9 d-flex align-items-center">
    <!-- Title -->
    <h1 class="mb-4" style="font-family: 'Old Standard TT', serif; margin-top: 0.5rem; margin-bottom: 2rem;"> <strong>CMU 18-847 Software Development for Computational Science and Engineering</strong> </h1>
  </div>
  <div class="col-md-3 text-center">
    <!-- Visualization Logo -->
    <img src="/images/projects/cmu_course_project/18847/hq720.jpg" 
         alt="Von Karman Vortex Street" 
         class="img-fluid" 
         style="max-height: 120px; width: auto;">
  </div>
</div>


<p class="lead">
Developed comprehensive particle-in-cell (PIC) vortex dynamics simulator implementing advanced computational fluid dynamics algorithms with Hockney's FFT-based convolution, 4th-order Runge-Kutta integration, and sophisticated vortex phenomena simulation capabilities.
</p>


<div class="my-4">
<div class="row align-items-center my-4">
  <div class="col-md-4 text-center">
      <video controls autoplay muted loop
        class="img-fluid rounded shadow-sm"
        style="width:80%; max-width:100%; height:auto; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2); object-fit:cover;">
      <source src="/videos/projects/cmu_course_project/18847/compressed_movie_6.mp4" type="video/mp4">
      Your browser does not support the video tag.
      </video>
      <p>Two-patch in 2D with low particle density per patch</p>
  </div>
  <div class="col-md-4 text-center">
      <video controls autoplay muted loop
        class="img-fluid rounded shadow-sm"
        style="width:100%; max-width:110%; height:auto; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2); object-fit:cover;">
      <source src="/videos/projects/cmu_course_project/18847/compressed_movie_5.mp4" type="video/mp4">
      Your browser does not support the video tag.
      </video>
      <p>Two-patch with higher particle density per patch</p>
  </div>
  <div class="col-md-4 text-center">
      <video controls autoplay muted loop
        class="img-fluid rounded shadow-sm"
        style="width:80%; max-width:100%; height:auto; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2); object-fit:cover;">
      <source src="/videos/projects/cmu_course_project/18847/compressed_movie_5_md.mp4" type="video/mp4">
      Your browser does not support the video tag.
      </video>
      <p>Two-patch 2D simulation with another view</p>
  </div>
<!-- <p>Von Karman vortex street simulation: Time-dependent computational fluid dynamics using custom FEM solver with Method of Lines integration and advanced visualization.</p> -->
</div>

<hr/>

<br>

## <strong>Overview</strong>
<p>
Successfully developed a comprehensive particle-in-cell (PIC) vortex dynamics simulator from scratch, implementing advanced computational fluid dynamics algorithms including bilinear particle-to-grid deposition, FFT-based convolution using Hockney's method, and 4th-order Runge-Kutta time integration.
</p>

<p>
Built robust computational infrastructure incorporating modern C++ design patterns with templated programming, comprehensive testing frameworks, and production-quality software engineering practices. The implemented framework successfully simulates diverse vortex phenomena from single particle motion validation through multi-patch vortex interactions, demonstrating mastery of both numerical methods and scientific computing software development.
</p>

<p>The final system also reproduces characteristic fluid behaviors, including von Kármán vortex streets, vortex ring interactions, and Kelvin–Helmholtz instabilities. </p>
<br>
<hr/>

<h1 style="margin-top: 2rem; margin-bottom: 0rem;"> <strong>Particle-in-Cell Vortex Dynamics Implementation</strong></h1>

<!-- ========================================= -->
<!-- HW1: MULTIDIMENSIONAL ARRAYS             -->
<!-- ========================================= -->

<div class="row my-3 align-items-start">
  <div class="col-md-12 mb-3">
    <h3 style="color: #6f42c1;">
      <span style="font-size: 1.5rem; margin-right: 0.5rem;">📊</span>
      <strong>Foundation: Multidimensional Array Infrastructure (HW1)</strong>
    </h3>
    <p>
      Foundational templated computational infrastructure providing the building blocks for scientific computing applications and finite difference operations.
    </p>
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Templated multidimensional arrays</strong> supporting arbitrary dimensions with efficient memory layout and access patterns</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Finite difference operators</strong> implementing discretization schemes for partial differential equations</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Modern C++ design patterns</strong> utilizing template metaprogramming for compile-time optimization</li>
      </ul>
    </div>
  </div>
</div>

<!-- ========================================= -->
<!-- HW2: SPARSE LINEAR ALGEBRA & FEM         -->
<!-- ========================================= -->

<div class="row my-3 align-items-start">
    <h3 style="color: #dc3545;">
      <span style="font-size: 1.5rem; margin-right: 0.5rem;">🔬</span>
      <strong>Building Blocks: Sparse Linear Algebra & FEM (HW2)</strong>
    </h3>
  <div class="col-md-4 mb-4">
    <p>
      Comprehensive finite element method implementation with sparse matrix solvers, building upon the multidimensional array infrastructure to provide the computational foundation for discretized field equations.
    </p>
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Sparse matrix factorization</strong> with Jacobi solvers for large-scale linear systems</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Triangular mesh integration</strong> with automated generation and adaptive refinement for complex geometries</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Convergence analysis</strong> demonstrating second-order accuracy with rigorous error norm calculations</li>
      </ul>
    </div>
  </div>

  <div class="col-md-4 text-center">
        <img src="/images/projects/cmu_course_project/18847/A.jpg"
             alt="FEM Analysis A"
             class="img-fluid rounded shadow-sm"
             style="height: auto; width: 90%; object-fit: contain;">
        <p style="color: #dc3545; font-weight: 500; font-size: 0.8rem; margin-top: 4px;">Problem A</p>
  </div>
  <div class="col-md-4 text-center">
        <img src="/images/projects/cmu_course_project/18847/B_2.jpg"
             alt="FEM Analysis B.2"
             class="img-fluid rounded shadow-sm"
             style="height: auto; width: 100%; object-fit: contain;">
        <p style="color: #dc3545; font-weight: 500; font-size: 0.8rem; margin-top: 4px;">Problem B.2</p>
  </div>
</div>

<!-- ========================================= -->
<!-- HW3: FFT ALGORITHMS AND OPTIMIZATION     -->
<!-- ========================================= -->

<div class="row my-3 align-items-start">
  <div class="col-md-12 mb-3">
    <h3 style="color: #28a745;">
      <span style="font-size: 1.5rem; margin-right: 0.5rem;">⚡</span>
      <strong>Advanced Algorithms: Fast Fourier Transform Implementation (HW3)</strong>
    </h3>
    <p>
      Comprehensive FFT algorithm development essential for efficient grid-based field computation, preparing the computational foundation for Hockney's method in particle-in-cell simulations.
    </p>
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Recursive Cooley-Tukey & BRI FFT</strong> implementing optimized algorithms for NlogN complexity and cache efficiency</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Multidimensional FFT & Hockney's method</strong> enabling efficient 2D/3D convolution for Poisson equation solving</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Comprehensive validation</strong> across multiple particle configurations and boundary conditions</li>
      </ul>
    </div>
  </div>
</div>

<!-- ========================================= -->
<!-- FINAL PROJECT: VORTEX SIMULATION         -->
<!-- ========================================= -->

<div class="row my-5 align-items-start">
  <div class="col-md-12 mb-4">
    <h3 style="color: #007bff;">
      <span style="font-size: 1.5rem; margin-right: 0.5rem;">🌊</span>
      <strong>Final Project: Particle-in-Cell Vortex Dynamics Simulator</strong>
    </h3>
    <p>
      Culminating project integrating all previous components into an advanced particle-in-cell implementation, combining Lagrangian particle tracking with Eulerian grid-based field computation for complex fluid dynamics phenomena.
    </p>
  <div class="row">
      <div class="col-md-3">
        <div style="margin-left: 1rem;">
          <ul class="list-unstyled mt-3">
            <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Bilinear particle-to-grid deposition</strong> with interpolation weights for accurate momentum and vorticity transfer</li>
            <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Hockney's FFT-based convolution</strong> enabling efficient Poisson equation solving for velocity field computation</li>
          </ul>
        </div>
      </div>
      <!-- Test Cases Gallery -->
      <div class="col-md-9">
              <div class="row mt-1">
                <div class="col-12">
                  <h6 style="color: #28a745; font-weight: 600; margin-bottom: 15px;">Hockney Method Validation Test Cases</h6>
                </div>
                <div class="col-md-3 col-6 text-center mb-3">
                  <img src="/images/projects/cmu_course_project/18847/singleRho.jpg"
                      alt="Single Particle Test"
                      class="img-fluid rounded shadow-sm"
                      style="height: auto; width: 100%; object-fit: contain;">
                  <p style="color: #28a745; font-weight: 400; font-size: 0.75rem; margin-top: 4px;">Single Particle</p>
                </div>
                <div class="col-md-3 col-6 text-center mb-3">
                  <img src="/images/projects/cmu_course_project/18847/twoRho.jpg"
                      alt="Two Particle Test"
                      class="img-fluid rounded shadow-sm"
                      style="height: auto; width: 100%; object-fit: contain;">
                  <p style="color: #28a745; font-weight: 400; font-size: 0.75rem; margin-top: 4px;">Two Particles</p>
                </div>
                <div class="col-md-3 col-6 text-center mb-3">
                  <img src="/images/projects/cmu_course_project/18847/4Rho.jpg"
                      alt="Four Particle Test"
                      class="img-fluid rounded shadow-sm"
                      style="height: auto; width: 100%; object-fit: contain;">
                  <p style="color: #28a745; font-weight: 400; font-size: 0.75rem; margin-top: 4px;">Four Particles</p>
                </div>
                <div class="col-md-3 col-6 text-center mb-3">
                  <img src="/images/projects/cmu_course_project/18847/6Rho.jpg"
                      alt="Six Particle Test"
                      class="img-fluid rounded shadow-sm"
                      style="height: auto; width: 100%; object-fit: contain;">
                  <p style="color: #28a745; font-weight: 400; font-size: 0.75rem; margin-top: 4px;">Six Particles</p>
                </div>
                <div class="col-md-3 col-6 text-center mb-3">
                  <img src="/images/projects/cmu_course_project/18847/8Rho.jpg"
                      alt="Eight Particle Test"
                      class="img-fluid rounded shadow-sm"
                      style="height: auto; width: 100%; object-fit: contain;">
                  <p style="color: #28a745; font-weight: 400; font-size: 0.75rem; margin-top: 4px;">Eight Particles</p>
                </div>
                <div class="col-md-3 col-6 text-center mb-3">
                  <img src="/images/projects/cmu_course_project/18847/12Rho.jpg"
                      alt="Twelve Particle Test"
                      class="img-fluid rounded shadow-sm"
                      style="height: auto; width: 100%; object-fit: contain;">
                  <p style="color: #28a745; font-weight: 400; font-size: 0.75rem; margin-top: 4px;">Twelve Particles</p>
                </div>
                <div class="col-md-3 col-6 text-center mb-3">
                  <img src="/images/projects/cmu_course_project/18847/boundaryRho.jpg"
                      alt="Boundary Condition Test"
                      class="img-fluid rounded shadow-sm"
                      style="height: auto; width: 100%; object-fit: contain;">
                  <p style="color: #28a745; font-weight: 400; font-size: 0.75rem; margin-top: 4px;">Boundary Conditions</p>
                </div>
                <div class="col-md-3 col-6 text-center mb-3">
                  <img src="/images/projects/cmu_course_project/18847/channelRho.jpg"
                      alt="Channel Flow Test"
                      class="img-fluid rounded shadow-sm"
                      style="height: auto; width: 100%; object-fit: contain;">
                  <p style="color: #28a745; font-weight: 400; font-size: 0.75rem; margin-top: 4px;">Channel Flow</p>
                </div>
              </div>
            </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div style="margin-left: 1rem;">
          <ul class="list-unstyled mt-3">
            <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>4th-order Runge-Kutta integration</strong> ensuring high temporal accuracy for particle trajectory advancement</li>
            <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>VisIt visualization framework</strong> creating sequential VTK files for advanced scientific data analysis</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Vortex Phenomena Gallery -->
    <div class="row mt-4">
      <div class="col-12">
        <h6 style="color: #007bff; font-weight: 600; margin-bottom: 15px;">Complex Vortex Phenomena Simulation Results</h6>
      </div>
      <div class="col-md-3 text-center mb-3">
        <video controls autoplay muted loop
          class="img-fluid rounded shadow-sm"
          style="width:100%; max-width:100%; height:auto; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
        <source src="/videos/projects/cmu_course_project/18847/compressed_movie_Karman.mp4" type="video/mp4">
        Your browser does not support the video tag.
        </video>
        <p style="color: #007bff; font-weight: 500; font-size: 0.85rem; margin-top: 6px;">Von Kármán Vortex Street</p>
      </div>
      <div class="col-md-3 text-center mb-3">
        <video controls autoplay muted loop
          class="img-fluid rounded shadow-sm"
          style="width:100%; max-width:100%; height:auto; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
        <source src="/videos/projects/cmu_course_project/18847/compressed_movie_Kelvin_Helmholtz_md.mp4" type="video/mp4">
        Your browser does not support the video tag.
        </video>
        <p style="color: #007bff; font-weight: 500; font-size: 0.85rem; margin-top: 6px;">Kelvin-Helmholtz Instabilities</p>
      </div>
      <div class="col-md-3 text-center mb-3">
        <video controls autoplay muted loop
          class="img-fluid rounded shadow-sm"
          style="width:100%; max-width:100%; height:auto; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
        <source src="/videos/projects/cmu_course_project/18847/compressed_movie_Leapfrogging_md.mp4" type="video/mp4">
        Your browser does not support the video tag.
        </video>
        <p style="color: #007bff; font-weight: 500; font-size: 0.85rem; margin-top: 6px;">Vortex Ring Leapfrogging</p>
      </div>
      <div class="col-md-3 text-center mb-3">
        <video controls autoplay muted loop
          class="img-fluid rounded shadow-sm"
          style="width:100%; max-width:100%; height:auto; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
        <source src="/videos/projects/cmu_course_project/18847/compressed_movie_two.mp4" type="video/mp4">
        Your browser does not support the video tag.
        </video>
        <p style="color: #007bff; font-weight: 500; font-size: 0.85rem; margin-top: 6px;"></p>
      </div>
    </div>
  </div>
</div>




<hr/>

<h1 class="mt-1 mb-1"><strong>Design Diagrams</strong></h1>

<div class="row my-4">

  <!-- Diagram 1 -->
  <div class="col-md-9 text-start">
    <img src="/images/projects/cmu_course_project/18847/VortexSimulation.svg"
         alt="Vortex Simulation System Structure"
         class="img-fluid rounded shadow-sm"
         style="width: 95%; height: auto; object-fit: contain;">
    <p class="mt-1  text-center" style="color: #6f42c1; font-weight: 500;">
      Vortex Simulation System Structure
    </p>
  </div>

  <!-- Diagram 2 -->
  <div class="col-md-3 text-start">
    <img src="/images/projects/cmu_course_project/18847/Vortex_Particle_Method_Workflow.svg"
         alt="Particle-in-Cell Vortex Method Workflow"
         class="img-fluid rounded shadow-sm"
         style="width: 100%; height: auto; object-fit: contain;">
    <p class="mt-1  text-center" style="color: #6f42c1; font-weight: 500;">
      Particle-in-Cell Vortex Method Workflow
    </p>
  </div>

</div>


<hr/>

<h3 style="margin-top: 3.5rem; margin-bottom: 1rem;"> <strong>Acknowledgments</strong> </h3>
<p>
Thanks to Professor Brian Van Straalen for many insightful
discussions.
</p>
</div>
