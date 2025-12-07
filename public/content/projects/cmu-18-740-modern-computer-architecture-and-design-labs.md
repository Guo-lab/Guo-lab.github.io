---
title: "CMU 18-740 Modern Computer Architecture and Design Labs"
startDate: "2024-09-20"
endDate: "2024-12-06"
type: "course"
---

<div class="container py-4">

<h1 style="margin-top: 0.5rem; margin-bottom: 2rem;"> <strong>Modern Computer Architecture and Design Labs</strong> </h1>

<p class="lead">
A comprehensive exploration of modern processor design through hands-on implementation and analysis. This course covered branch predictors, superscalar out-of-order cores, memory coherence protocols, and heterogeneous computing architectures including Snapdragon 8 Gen 2 analysis.
</p>

<br>

<hr/>

## <strong>Overview</strong>

<p>
Throughout this course, I implemented and evaluated various computer architecture components, from fundamental branch predictors to complex out-of-order processor pipelines. The labs progressively built understanding of modern processor design challenges and solutions.
</p>

<p>
Each lab focused on both implementation and performance analysis, providing deep insights into how architectural decisions impact system performance, energy efficiency, and overall computing capability in modern processors.
</p>

<hr/>

<h1 style="margin-top: 3.5rem; margin-bottom: 2rem;"> <strong>Laboratory Projects</strong></h1>

<!-- ========================================= -->
<!-- LAB PROJECTS LAYOUT                       -->
<!-- ========================================= -->

<div class="row my-5">
  
  <div class="col-md-6 mb-4">
      <h3 style="color: #007bff;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">🧠</span>
        <strong>Lab 1: Branch Predictors</strong>
      </h3>
      <p>
        Implemented and analyzed multiple branch prediction algorithms to understand their impact on processor performance.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Local Predictor</strong> using local branch history</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Global Predictor</strong> with global history patterns</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Hybrid Predictor</strong> combining multiple strategies</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>TAGE Predictor</strong> with tagged geometric history</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Perception Predictor</strong></li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Customized Branch Predictor</strong> combining local branch history and TAGE's core idea (multi-layer branch history and tagged prediction entries) by teammate</li>
        </ul>
      </div>
      <p class="mt-2">
        Benchmarked performance on traces including deepsjeng, imagick, xz, and nab to evaluate predictor effectiveness.
      </p>
  </div>

  <div class="col-md-6 text-center">
    <img src="/images/projects/cmu_course_project/740/predictor.jpg"
         alt="Branch Predictor Architecture"
         class="img-fluid rounded shadow-sm"
         style="max-width:90%;">
    <p>Branch predictor implementations including Local, Global, Hybrid, TAGE, Perception predictor, and customized branch predictor.</p>
  </div>


</div>


<div class="row my-5">
  <div class="col-md-12">
    <h3 style="color: #28a745;">
      <span style="font-size: 1.5rem; margin-right: 0.5rem;">⚡</span>
      <strong>Lab 2: Out-of-Order Execution</strong>
    </h3>
  </div>
</div>

<div class="row my-4">
  <div class="col-md-6 mb-4">
    <p>
      Implemented superscalar out-of-order processor components in <strong>SystemVerilog</strong> for high-performance computing.
    </p>
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Register Renaming</strong> module for dependency elimination</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Reorder Buffer (ROB)</strong> for in-order commit</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Issue Queue (IQ)</strong> for instruction scheduling</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Grid search optimization for ROB/IQ sizing</li>
      </ul>
    </div>
    <p class="mt-3">
      Benchmarked the performance of our O3 processor against in-order and default O3 processors on main metrics: Speedup, Energy, and Energy Efficiency. Prior to this, we grid-searched the parameters of the O3 processor (ROB size, IQ size, etc.) to find the best configuration for our O3 processor.
    </p>
  </div>
  
  <div class="col-md-6 text-center">
    <img src="/images/projects/cmu_course_project/740/lab2.jpg"
         alt="Lab 2 Out-of-Order Processor Results"
         class="img-fluid rounded shadow-sm"
         style="max-width: 90%;">
    <p>Lab 2 Out-of-Order Processor implementation and optimization results.</p>
  </div>
</div>

<div class="row my-4">
  <div class="col-md-12">
    <h4 style="color: #dc3545;">💹 <strong>Performance Analysis Results</strong></h4>
    <p>
      Comprehensive benchmarking comparing in-order vs. out-of-order processor performance across multiple metrics with parameter optimization.
    </p>
  </div>
</div>

<div class="row my-4">
    <div class="col-md-4 text-center mb-3">
        <img src="/images/projects/cmu_course_project/740/speedup_comparison.png"
             alt="Speedup Performance Comparison"
             class="img-fluid rounded shadow-sm"
             style="max-width: 100%;">
        <p><strong>Speedup Comparison</strong><br>Performance gains across different configurations</p>
    </div>
    <div class="col-md-4 text-center mb-3">
        <img src="/images/projects/cmu_course_project/740/energy_comparison.png"
             alt="Energy Consumption Analysis"
             class="img-fluid rounded shadow-sm"
             style="max-width: 100%;">
        <p><strong>Energy Analysis</strong><br>Power consumption patterns and optimization</p>
    </div>
    <div class="col-md-4 text-center mb-3">
        <img src="/images/projects/cmu_course_project/740/energy_eff_comparison.png"
             alt="Energy Efficiency Comparison"
             class="img-fluid rounded shadow-sm"
             style="max-width: 100%;">
        <p><strong>Energy Efficiency</strong><br>Performance per watt optimization results</p>
    </div>
</div>

<br>

<div class="row my-5">
  
  <div class="col-md-6 mb-4">
      <h3 style="color: #6f42c1;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">🔄</span>
        <strong>Lab 3: Memory Coherence</strong>
      </h3>
      <p>
        Dual-focus lab covering cache coherence protocols implementation and comprehensive real-world processor analysis.
      </p>
      <h5 class="mt-4" style="color: #6f42c1;"><strong>Part 1: Classical Cache Coherence Protocols</strong></h5>
      <p>
        Implemented several classical cache memory coherence protocols for inter-core communication:
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>MI Protocol</strong> - basic Modified/Invalid coherence implementation</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>MSI Protocol</strong> - Modified/Shared/Invalid state extension</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>MESI Protocol</strong> - Modified/Exclusive/Shared/Invalid state optimization</li>
        </ul>
      </div>
      <h5 class="mt-4" style="color: #6f42c1;"><strong>Part 2: Snapdragon 8 Gen 2 Analysis</strong></h5>
      <p>
        Explored the <strong>CPU cores of Snapdragon 8 Gen 2</strong> with comprehensive performance analysis including core utilization, power consumption, and scheduling policies. Conducted stressed tests to evaluate:
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> CPU cores' <strong>cache performance</strong> analysis</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Parallelism</strong> capabilities and efficiency</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Power consumption</strong> patterns under stress</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Performance of <strong>branch predictors, ROB & IQ</strong></li>
        </ul>
      </div>
  </div>
  
  <div class="col-md-6 mb-4">
      <h3 style="color: #fd7e14;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">🚀</span>
        <strong>Lab 4 & 5: Heterogeneous Computing</strong>
      </h3>
      <p>
        Comprehensive exploration of modern heterogeneous architectures spanning CPU, GPU, and NPU components with advanced optimization techniques.
      </p>
      <h5 class="mt-4" style="color: #fd7e14;"><strong>GPU Computing & Analysis</strong></h5>
      <p>
        Beyond the benchmarking work with <strong>Snapdragon Profiler</strong>, we also programmed to solve simple tasks including:
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Shader Processing</strong> implementation and optimization</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>GPU-GPU bandwidth testing</strong> across different configurations</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Divergence Elimination</strong> techniques and analysis</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Snapdragon Profiler</strong> benchmarking and analysis tools</li>
        </ul>
      </div>
      <h5 class="mt-4" style="color: #fd7e14;"><strong>NPU Optimization & AI Inference</strong></h5>
      <p>
        Explored the <strong>specific Heterogeneous Cores of the Snapdragon 8 Gen 2 - NPU</strong>, by benchmarking AI tasks and AI inference. We also performed optimization under Hexagon's VLIW architecture with Hexagon intrinsics.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Snapdragon 8 Gen 2 NPU</strong> architecture exploration and analysis</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>AI tasks and inference</strong> benchmarking on NPU cores</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Hexagon VLIW architecture</strong> optimization with intrinsics</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Performance analysis of <strong>heterogeneous computing</strong> across NPU cores</li>
        </ul>
      </div>
  </div>

</div>


<hr/>

<h1 style="margin-top: 3.5rem; margin-bottom: 2rem;"> <strong>Key Achievements</strong> </h1>

<div style="margin-left: 1rem;">
  <ul class="list-unstyled">
    <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Successfully implemented multiple branch prediction algorithms with detailed performance analysis</li>
    <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Designed and optimized superscalar out-of-order processor components in SystemVerilog</li>
    <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Implemented classical cache coherence protocols for multi-core systems</li>
    <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Conducted comprehensive analysis of Snapdragon 8 Gen 2 heterogeneous architecture</li>
    <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Optimized AI workloads on NPU with Hexagon VLIW architecture and intrinsics</li>
  </ul>
</div>

<hr/>

<h3 style="margin-top: 3.5rem; margin-bottom: 1rem;"> <strong>Acknowledgments</strong> </h1>

<p>
Thanks to my teammate, Raymond Shen, for working together. Thanks to the CMU 18-740 TAs for their help with these projects.
</p>

</div>