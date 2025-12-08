---
title: "CMU 18-746: Cloud File System"
startDate: "2024-10-26"
endDate: "2024-12-08"
type: "course"
---

<div class="container py-4">

<h1 class="mb-4" style="font-family: 'Old Standard TT', serif; margin-top: 0.5rem; margin-bottom: 2rem;">
 <strong>CloudFS: Cloud-Backed File System</strong> </h1>

<p class="lead">
A hybrid cloud-backed local file system that bridges the gap between high-performance local storage and the virtually infinite capacity of cloud services. Built with FUSE framework, S3 API, and advanced caching strategies.
</p>

<br>

<hr/>

## <strong>System Architecture</strong>

<div class="text-center my-4">
<img src="/images/projects/cmu_course_project/cloudfs/cloudfs.jpg"
     alt="CloudFS Architecture"
     class="img-fluid rounded shadow-sm"
     style="max-width:80%;">
</div>

<hr/>

<h1 style="margin-top: 3.5rem; margin-bottom: 2rem;"> <strong>CloudFS Overview</strong></h1>

<p>
CloudFS, a cloud-backed local file system, bridges the gap between high-performance local storage and the virtually infinite capacity of cloud services. By taking advantages of local solid-state disks (SSD) and cloud storage, CloudFS aims to deliver a seamless, efficient, and robust storage solution.
</p>

<p>
In this project, I developed single-threaded CloudFS, using the FUSE framework, and incorporating S3 service API, archive-lib, libfuse, and several other useful libraries. The necessary metadata of a file will be stored on the local SSD and the file content will first be placed on local device. The file will be transferred to the cloud storage when this file grows large enough. CloudFS is a FUSE-based file system, most of the code will be written to implement functions called through the VFS interface. I built a working prototype using a subset of VFS calls.
</p>

<div class="text-center my-4">
<img src="/images/projects/cmu_course_project/cloudfs/CloudFS_UML.png"
     alt="CloudFS UML Design"
     class="img-fluid rounded shadow-sm"
     style="max-width:80%;">
<p>The UML design of CloudFS showing the modular architecture and component relationships.</p>
</div>

<br>

<!-- ========================================= -->
<!-- THREE COLUMN LAYOUT: KEY FEATURES        -->
<!-- ========================================= -->

<div class="row my-5">
  
  <div class="col-md-4 mb-4">
      <h3 style="color: #007bff;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">🌐</span>
        <strong>Hybrid File System</strong>
      </h3>
      <p>
        Spanning SSD and cloud storage with intelligent data placement decisions.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Metadata stored on <strong>local SSD</strong></li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> File content initially placed locally</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Automatic cloud transfer for large files</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> FUSE-based VFS interface</li>
        </ul>
      </div>
  </div>

  <div class="col-md-4 mb-4">
      <h3 style="color: #28a745;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">🔗</span>
        <strong>Block-Level Deduplication</strong>
      </h3>
      <p>
        Advanced deduplication scheme that eliminates redundant data storage across the system.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> File content divided into <strong>similar-size segments</strong></li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Deduplication manager identifies duplicates</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Unique storage for duplicate blocks</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Rabin fingerprinting</strong> for identification</li>
        </ul>
      </div>
  </div>
  
  <div class="col-md-4">
      <h3 style="color: #dc3545;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">📸</span>
        <strong>Snapshots & Cache</strong>
      </h3>
      <p>
        Comprehensive snapshot management and intelligent LRU caching for performance optimization.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> IOCTL-based snapshot operations</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Create, delete, restore, install snapshots</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>LRU write-back cache</strong></li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Reduced cloud costs & access frequency</li>
        </ul>
      </div>
    </div>

</div>

<hr/>

<h1 style="margin-top: 3.5rem; margin-bottom: 2rem;"> <strong>Performance Results</strong> </h1>

<div class="row align-items-center my-4">
    <div class="col-md-6">
        <h3 style="color: #28a745;">💰 <strong>Cost Optimization</strong></h3>
        <p>
            After implementing the LRU cache system, CloudFS achieved significant cost reductions in cloud operations.
        </p>
        <div style="margin-left: 1rem;">
            <ul class="list-unstyled mt-3">
                <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Reduced costs from $28.7 to $15.4</strong> in test cases</li>
                <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Achieved <strong>#1 position</strong> on the AutoLab scoreboard</li>
                <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Optimized upload/download frequency</li>
                <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> With LRU caching strategy</li>
            </ul>
        </div>
    </div>
    <div class="col-md-6 text-center">
        <img src="/images/projects/cmu_course_project/cloudfs/scoreboard.jpg"
             alt="AutoLab Scoreboard Results"
             class="img-fluid rounded shadow-sm"
             style="max-width: 90%;">
    </div>
</div>

<hr/>

<h1 style="margin-top: 3.5rem; margin-bottom: 2rem;"> <strong>Key Features</strong> </h1>

<div style="margin-left: 1rem;">
  <ul class="list-unstyled">
    <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Efficient data placement between local SSD and cloud storage</li>
    <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Advanced block-level deduplication with Rabin fingerprinting</li>
    <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Comprehensive snapshot management system</li>
    <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> LRU write-back cache for performance optimization</li>
    <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> FUSE-based file system implementation</li>
  </ul>
</div>


</div>