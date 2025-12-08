---
title: "CMU 18-746: SSD Customized Flash Translation Layer"
startDate: "2024-09-03"
endDate: "2024-10-26"
type: "course"
---

<div class="container py-4">

<h1 class="mb-4" style="font-family: 'Old Standard TT', serif; margin-top: 0.5rem; margin-bottom: 2rem;"> <strong>SSD Customized Flash Translation Layer</strong> </h1>

<p class="lead">
A dual-mode Flash Translation Layer (FTL) implementation for CMU's 18-746 Storage Systems course.  
It includes a hybrid log-block mapping FTL and an optimized page-level FTL designed for a fixed SSD configuration.
</p>

<br>

<hr/>

## <strong>Project Demo</strong>

<div class="text-center my-4">
<video controls loop autoplay muted style="width:80%; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
  <source src="/videos/projects/cmu_course_project/ssd/ssd_after_debugging.mp4" type="video/mp4" />
</video>
<p class="text-muted mt-2">Simulation of the optimized FTL showing real-time logical-to-physical address translation.</p>
</div>

<hr/>

<h1 style="margin-top: 3.5rem; margin-bottom: 2rem;"> <strong>FTL Architecture Overview</strong></h1>



<div class="row align-items-center my-4">
    <div class="col-md-3">
        <p>
          To address different workload requirements, this project implements two complementary Flash Translation Layer strategies that provide flexible and high-performance storage solutions. The system encapsulates the Block Manager and Address Translator separately, allowing for independent optimization of read and write paths.
        </p>
        <p>
            The MyFTL implementation (for optimized page-level FTL) separates core components: the Block Manager handles physical flash management, while the Address Translator handles logical-to-physical mapping.
        </p>
    </div>
    <div class="col-md-9 text-center">
        <img src="/images/projects/cmu_course_project/ssd/myFTL.jpg"
             alt="FTL Architecture Diagram"
             class="img-fluid rounded shadow-sm"
             style="max-width: 100%;">
    </div>
    
</div>

<!-- ========================================= -->
<!-- TWO COLUMN LAYOUT: HYBRID vs OPTIMIZED   -->
<!-- ========================================= -->

<br>

<div class="row my-5">
  
  <div class="col-md-6 mb-4">
      <h3 style="color: #007bff;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">⚙️</span>
        <strong>Hybrid Log-Block Mapping</strong>
      </h3>
      <p>
        A flexible architecture focused on robust wear-leveling and configurable garbage collection (GC).
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Overprovisioned log reservation region for <strong>durability</strong></li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Cleaning reservation blocks</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Normal mapping address space</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Multiple GC policies (Round Robin, LRU, Greedy by minimum effort, LFS Cost-Benefit)</li>
        </ul>
      </div>
  </div>

  <div class="col-md-6">
      <h3 style="color: #28a745;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">⚡</span>
        <strong>Optimized Page-Level FTL</strong>
      </h3>
      <p>
        A high-performance design engineered specifically for fixed hardware configurations to <strong>minimize write amplification</strong>, lower memory cost, and gain better endurance.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Page-level mapping</strong> for low write amplification</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Optimized metadata structures for more efficient memory usage</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Independent and safe read/write paths</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Greedy block selection GC for <strong>predictable behavior</strong></li>
        </ul>
      </div>
    </div>

</div>

<hr/>

<h1 style="margin-top: 3.5rem; margin-bottom: 2rem;"> <strong>Key Features</strong> </h1>

<div style="margin-left: 1rem;">
  <ul>
    <li style="margin-bottom: 0.5rem;">Efficient logical-to-physical address mapping</li>
    <li style="margin-bottom: 0.5rem;">Endurance-focused wear-leveling & garbage collection</li>
    <li style="margin-bottom: 0.5rem;">Memory-optimized metadata</li>
    <li style="margin-bottom: 0.5rem;">Benchmarking across multiple GC strategies</li>
    <li style="margin-bottom: 0.5rem;">Modular, extensible FTL architecture</li>
  </ul>
</div>


</div>
