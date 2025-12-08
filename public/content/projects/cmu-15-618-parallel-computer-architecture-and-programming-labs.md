<!-- ---
title: "CMU 15-618 Parallel Computer Architecture and Programming Labs"
startDate: "2024-12-22"
endDate: "2025-01-23"
type: "course"
--- -->

<div class="container py-4">

<h1 class="mb-4" style="font-family: 'Old Standard TT', serif; margin-top: 0.5rem; margin-bottom: 2rem;"><strong>Parallel Computer Architecture and Programming Labs</strong> </h1>

<p class="lead">
An exploration of parallel computing through hands-on implementation and performance analysis. This course covered SIMD programming with ISPC, GPU computing with CUDA, and distributed computing with OpenMP and MPI, culminating in solving complex real-world parallel computing problems.
</p>

<div class="text-center my-4">
<img src="/images/projects/cmu_course_project/618pc/VLSI_routing.jpg"
     alt="VLSI Routing Parallel Implementation"
     class="img-fluid rounded shadow-sm"
     style="width:75%; max-width:100%; height:auto; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
<p>Parallel VLSI wire routing implementation demonstrating scalable distributed computing techniques.</p>
</div>

<hr/>

<!-- ## <strong>Overview</strong>

<br>
<p>
This course provided comprehensive coverage of parallel computing architectures and programming models with emphasis on practical implementation and performance optimization.
</p>

<br>
<hr/> -->

<h1 style="margin-top: 3.5rem; margin-bottom: 2rem;"> <strong>Assignments</strong></h1>

<!-- ========================================= -->
<!-- PHASE 1: SIMD & VECTORIZATION             -->
<!-- ========================================= -->

<div style="border-left: 4px solid #007bff; padding-left: 1.5rem; margin: 3rem 0;">
  <h2 style="color: #007bff; margin-bottom: 1rem;"><strong>Phase 1: SIMD Programming & Vectorization</strong></h2>

  <div class="row my-4 align-items-center">
      <h3 style="color: #007bff;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">🔀</span>
        <strong>Lab 1: SIMD Programming & Performance Analysis</strong>
      </h3>
    <div class="col-md-5 mb-4">
      <p style="font-size: 1.05rem;">
        Foundation laboratory implementing SIMD parallelization techniques and performance optimization using Pthreads and Intel SPMD Program Compiler (ISPC).
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Parallel fractal generation</strong> implementation with Pthreads for multi-core scalability</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>ISPC vectorization</strong> exploring SIMD instruction-level parallelism</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>SAXPY optimization</strong> (single-precision a×x plus y) with SIMD and task parallelism</li>
        </ul>
      </div>
    </div>
    <div class="col-md-7 text-center">
      <img src="/images/projects/cmu_course_project/618pc/speedup_performance.png"
           alt="Pthread Speedup Performance"
           class="img-fluid rounded shadow-sm"
           style="height: 250px; width: auto; object-fit: contain;">
      <p style="color: #007bff; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">Pthread speedup performance analysis showing scalability for the pralallel fractal generation tasks</p>
    </div>
  </div>
  <div class="row my-4">
    <div class="col-md-12">
      <h4 style="color: #007bff; margin-bottom: 1rem;"><strong>📊 Performance Analysis Results</strong></h4>
      <p style="font-size: 1.05rem;">Implemented the streaming and showcased how it would influence the speedup, bandwidth and GFLOPS.</p>
    </div>
  </div>

  <div class="row my-3">
    <div class="col-md-5 text-center mb-3">
      <img src="/images/projects/cmu_course_project/618pc/saxpy1.jpg"
           alt="SAXPY SIMD Performance"
           class="img-fluid rounded shadow-sm"
           style="height: 200px; width: auto; object-fit: contain;">
      <p style="color: #007bff; font-weight: 500; font-size: 0.9rem; margin-top: 8px;"> <strong>SIMD Speedup:</strong> 1.03x with ISPC task parallelization</p>
    </div>
    <div class="col-md-7 text-center mb-3">
      <img src="/images/projects/cmu_course_project/618pc/saxpy2.jpg"
           alt="SAXPY Streaming Performance"
           class="img-fluid rounded shadow-sm"
           style="height: 200px; width: auto; object-fit: contain;">
      <p style="color: #007bff; font-weight: 500; font-size: 0.9rem; margin-top: 8px;"><strong>Streaming Impact:</strong> Bandwidth & GFLOPS optimization</p>
    </div>
  </div>
</div>

<!-- ========================================= -->
<!-- PHASE 2: GPU COMPUTING                    -->
<!-- ========================================= -->

<div style="border-left: 4px solid #28a745; padding-left: 1.5rem; margin: 3rem 0;">
  <h2 style="color: #28a745; margin-bottom: 0.5rem;"><strong>Phase 2: GPU Computing with CUDA</strong></h2>

  <div class="row my-4 align-items-center">
    <div class="col-md-5 text-center">
      <img src="/images/projects/cmu_course_project/618pc/render_rgb.jpg"
           alt="CUDA Circle Renderer"
           class="img-fluid rounded shadow-sm"
           style="height: 250px; width: auto; object-fit: contain;">
      <p style="color: #28a745; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">CUDA circle rendering with RGB visualization</p>
    </div>
    <div class="col-md-7 mb-4">
      <h3 style="color: #28a745;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">🎯</span>
        <strong>Lab 2: GPU Computing with CUDA</strong>
      </h3>
      <p style="font-size: 1.05rem;">
        Advanced GPU programming laboratory implementing parallel algorithms using CUDA for massively parallel computation on graphics processing units.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>CUDA scan function</strong> implementation for parallel prefix sum operations</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Peak detection algorithm</strong> optimized for GPU parallel execution</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Circle renderer implementation</strong> demonstrating GPU graphics pipeline optimization</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- GPU Animation Showcase -->
  <div class="text-center my-4">
    <h4 style="color: #28a745; margin-bottom: 1rem;"><strong>🎬 Real-Time GPU Animation</strong></h4>
    <video controls loop autoplay muted style="width:50%; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
      <source src="/videos/projects/cmu_course_project/618pc/snow.mp4" type="video/mp4" />
    </video>
    <p style="color: #28a745; font-weight: 500; margin-top: 10px;">Dynamic snow rendering effect demonstrating advanced CUDA parallel processing capabilities for real-time visual effects.</p>
  </div>
</div>

<!-- ========================================= -->
<!-- PHASE 3: DISTRIBUTED COMPUTING            -->
<!-- ========================================= -->

<div style="border-left: 4px solid #dc3545; padding-left: 1.5rem; margin: 3rem 0;">
  <h2 style="color: #dc3545; margin-bottom: 0.5rem;"><strong>Phase 3: Distributed Computing Systems</strong></h2>

  <div class="row my-4 align-items-center">
        <h3 style="color: #dc3545;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">🔄</span>
        <strong>Lab 3 & 4: OpenMP & MPI Implementation</strong>
      </h3>
    <div class="col-md-6 mb-4">
      <p style="font-size: 1.05rem;">
        Advanced distributed computing implementation solving complex VLSI wire routing problems using both shared-memory (OpenMP) and distributed-memory (MPI) parallel programming models.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>VLSI wire routing optimization</strong> for electronic design automation applications</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Within-wire routing parallelization</strong> optimizing individual wire path computation</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Across-wire routing parallelization</strong> distributing multiple wire computations across processors</li>
        </ul>
      </div>
    </div>
    <div class="col-md-6 text-center">
      <img src="/images/projects/cmu_course_project/618pc/performance-asst3.jpg"
            alt="asst3"
              class="img-fluid rounded shadow-sm"
              style="height: auto; width: 80%; object-fit: contain;">
      <p style="color: #dc3545; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">Speedup Performance Comparison under OpenMP implementation</p>
    </div>
  </div>

  <div class="text-center my-4">
  <img src="/images/projects/cmu_course_project/618pc/wire-routing-solver.jpg"
        alt="Wire Routing Solver"
           class="img-fluid rounded shadow-sm"
           style="width:80%; max-width:100%; height:auto; object-fit: contain;">
  <p style="color: #dc3545; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">Wire Routing Solver design in Asst3</p>
  </div>

  <!-- <div>


  </div> -->
  


</div>
<hr/>

<h3 style="margin-top: 3.5rem; margin-bottom: 1rem;"> <strong>Acknowledgments</strong> </h3>

<p>
Thanks to the CMU 15-618 open-source course materials.
</p>

</div>