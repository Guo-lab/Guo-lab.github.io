---
title: "CMU 15-645 Personal Project BusTub - A Relational DBMS"
startDate: "2024-05-13"
endDate: "2024-07-08"
type: "course"
---

<div class="container py-4">

<div class="row align-items-center my-4">
  <div class="col-md-12 d-flex align-items-center">
    <!-- SVG -->
    <img src="/images/projects/cmu_course_project/15645db/bustub-whiteborder.svg"
         alt="BusTub Database System Logo"
         class="img-fluid"
         style="max-width: 160px; margin-right: 1rem;">
    <!-- Title -->
    <h1 class="m-0">
      <strong>BusTub - A Relational Database Management System</strong>
    </h1>
  
  </div>
</div>

<p class="lead">
  A comprehensive implementation of a relational database management system, featuring advanced storage management, query execution, optimization, and multi-version concurrency control. This project demonstrates deep understanding of database internals and systems programming.
</p>

<br>

<hr/>
<div class="col-md-10">
    <h2><strong>Overview</strong></h2>
</div>

<p>
BusTub is a fully featured relational DBMS that I implemented as a personal project, building on the open-source starter code from CMU 15-645. The system includes all major components of a modern database: storage management with buffer pooling, disk-backed indexing, query execution and optimization, and transaction support with MVCC.
</p>

<p>
This project involved implementing LRU-K policy, disk scheduling, buffer pool management, extendible hashing, SQL query executors, query optimization rules, and optimistic multi-version concurrency control across four comprehensive projects.
</p>

<div class="text-center my-4">
<video controls loop autoplay muted style="width:80%; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
  <source src="/videos/projects/cmu_course_project/15645db/bustub.mp4" type="video/mp4" />
</video>
<p>BusTub database system demonstration showing query execution and transaction processing.</p>
</div>

<hr/>

<h1 style="margin-top: 3.5rem; margin-bottom: 2rem;"> <strong>Project Components</strong></h1>

<!-- ========================================= -->
<!-- PROJECT LAYOUT                            -->
<!-- ========================================= -->

<!-- Projects 0-2: Three Column Layout -->
<div class="row my-5">
  
  <!-- Project 0 Text -->
  <div class="col-md-4 mb-4">
      <h3 style="color: #007bff;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">🗂️</span>
        <strong>Project 0: C++ Primer</strong>
      </h3>
      <p>
        Implemented a Trie with read-write locks to get familiar with C++, debugging with LLDB, and function factory patterns in BusTub.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Trie data structure</strong> with concurrent access support</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Read-write locks</strong> for thread safety</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>C++ fundamentals</strong> and debugging skills</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Function factory pattern</strong> implementation</li>
        </ul>
      </div>
  </div>

  <!-- Project 1 Text -->
  <div class="col-md-4 mb-4">
      <h3 style="color: #28a745;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">💾</span>
        <strong>Project 1: Storage Manager</strong>
      </h3>
      <p>
        Implemented a complete buffer pool in the storage manager with LRU-K replacement policy and disk scheduling capabilities.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>LRU-K Replacement Policy</strong> for intelligent page eviction and page usage track in the buffer pool</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Disk Scheduler</strong> with shared queue for request scheduling and processing</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Buffer Pool Manager</strong> for page fetching from the disk with the Disk Scheduler and storage</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Dirty page scheduling</strong> for efficient disk writes</li>
        </ul>
      </div>
  </div>

  <!-- Project 2 Text -->
  <div class="col-md-4 mb-4">
      <h3 style="color: #dc3545;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">🔍</span>
        <strong>Project 2: Hash Index</strong>
      </h3>
      <p>
        Implemented disk-backed hash index using extendible hashing with dynamic bucket splitting and directory management.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Page Guard layer</strong> for safe page access</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Extendible hash table</strong> with three-layer architecture</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Dynamic bucket splitting</strong> and directory growing</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Bucket merging</strong> and directory shrinking</li>
        </ul>
      </div>
  </div>

</div>

<!-- Projects 0-2: Images Row -->
<div class="row my-4">
  
  <!-- Project 0 Image -->
  <div class="col-md-4 text-center mb-3">
    <img src="/images/projects/cmu_course_project/15645db/proj0-result.jpg"
         alt="Project 0 Trie Implementation Results"
         class="img-fluid rounded shadow-sm"
         style="max-width: 90%; max-height: 700px; object-fit: contain;">
    <p style="color: #007bff; font-weight: 500;">Project 0 results showing successful Trie implementation with concurrent access.</p>
  </div>

  <!-- Project 1 Image -->
  <div class="col-md-4 text-center mb-3">
    <img src="/images/projects/cmu_course_project/15645db/proj1-result.jpg"
         alt="Project 1 Buffer Pool Manager Results"
         class="img-fluid rounded shadow-sm"
         style="max-width: 90%; max-height: 700px; object-fit: contain;">
    <p style="color: #28a745; font-weight: 500;">Project 1 results demonstrating efficient buffer pool management and LRU-K replacement policy.</p>
  </div>

  <!-- Project 2 Image -->
  <div class="col-md-4 text-center mb-3">
    <img src="/images/projects/cmu_course_project/15645db/proj2-result.jpg"
         alt="Project 2 Hash Index Implementation Results"
         class="img-fluid rounded shadow-sm"
         style="max-width: 90%; max-height: 700px; object-fit: contain;">
    <p style="color: #dc3545; font-weight: 500;">Project 2 results showing successful extendible hash index with point search and deletion support.</p>
  </div>

</div>

<br>

<!-- Project 3: Two Column Layout -->
<div class="row my-5 align-items-center">
  
  <!-- Project 3 Text -->
  <div class="col-md-6 mb-4">
      <h3 style="color: #6f42c1;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">⚡</span>
        <strong>Project 3: Query Execution</strong>
      </h3>
      <p>
        Created comprehensive SQL query execution engine with operator executors and optimization rules for efficient query processing.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Storage executors</strong> (SeqScan, Insert, Update, Delete, IndexScan)</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Join executors</strong> (NestedLoopJoin, HashJoin with optimization)</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Aggregation executor</strong> with hash table grouping</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Window functions</strong>, Sort, Limit, Top-N optimization</li>
        </ul>
      </div>
  </div>

  <!-- Project 3 Image -->
  <div class="col-md-6 text-center">
    <img src="/images/projects/cmu_course_project/15645db/proj3-result.jpg"
         alt="Project 3 Query Execution Results"
         class="img-fluid rounded shadow-sm"
         style="max-width: 90%; max-height: 300px; object-fit: contain;">
    <p style="color: #6f42c1; font-weight: 500;">Project 3 results demonstrating comprehensive SQL query execution and optimization capabilities.</p>
  </div>

</div>

<br>

<!-- Project 4: Two Column Layout -->
<div class="row my-5 align-items-center">
  
  <!-- Project 4 Text -->
  <div class="col-md-6 mb-4">
      <h3 style="color: #fd7e14;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">🔒</span>
        <strong>Project 4: Concurrency Control</strong>
      </h3>
      <p>
        Added comprehensive transaction support by implementing optimistic multi-version concurrency control (MVCC) with timestamp-based coordination.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Watermark timestamp allocation</strong> for transaction ordering</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Tuple reconstruction</strong> and garbage collection</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>MVCC operations</strong> (scan, insert, delete, update)</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Primary key index</strong> MVCC support</li>
        </ul>
      </div>
  </div>

  <!-- Project 4 Image -->
  <div class="col-md-6 text-center">
    <img src="/images/projects/cmu_course_project/15645db/proj4-result.jpg"
         alt="Project 4 MVCC Implementation Results"
         class="img-fluid rounded shadow-sm"
         style="max-width: 90%; max-height: 300px; object-fit: contain;">
    <p style="color: #fd7e14; font-weight: 500;">Project 4 results showing successful MVCC implementation with optimistic concurrency control.</p>
  </div>

</div>

<div class="row my-4">
  <div class="col-md-12">
    <h4 style="color: #fd7e14;">🚧 <strong>Future Enhancements</strong></h4>
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Transaction Abort</strong> - Complete abort handling for tainted transactions</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Serializable Verification</strong> - Enhanced isolation level support</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Performance Optimizations</strong> - Additional query and storage optimizations</li>
      </ul>
    </div>
  </div>
</div>

<hr/>

<h1 style="margin-top: 3.5rem; margin-bottom: 2rem;"> <strong>Development Statistics</strong> </h1>

<div class="row my-4">
  <div class="col-md-6 mb-4">
    <h4 style="color: #28a745;">📊 <strong>Overall Impact</strong></h4>
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Total files changed:</strong> 173</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Lines added:</strong> 5,921</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Lines removed:</strong> 2,447</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Total development time:</strong> 161 hours 32 minutes</li>
      </ul>
    </div>
  </div>

  <div class="col-md-6 mb-4">
    <h4 style="color: #007bff;">🎯 <strong>Final Code Statistics</strong></h4>
    <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px;">
      <code>git diff --stat master 23fall-p4</code>
      <br><br>
      <strong>173 files changed, 5921 insertions(+), 2447 deletions(-)</strong>
    </div>
  </div>
</div>

<hr/>

<h1 style="margin-top: 3.5rem; margin-bottom: 2rem;"> <strong>Course Note</strong> </h1>

<p>
This project was completed as part of CMU 15-645 Database Systems, a comprehensive course covering the internals of database management systems. The course provided an in-depth exploration of storage management, indexing, query processing, optimization, and transaction management - all fundamental components of modern database systems.
</p>

<p>
Through this hands-on implementation experience, I gained practical understanding of how real database systems work under the hood, from low-level buffer pool management to high-level SQL query optimization. The project challenged me to implement production-quality algorithms and data structures while maintaining code correctness and performance.
</p>

<hr/>

<h3 style="margin-top: 3.5rem; margin-bottom: 1rem;"> <strong>Acknowledgments</strong> </h3>

<p>
Thanks to the CMU 15-645 TAs for their help with this project.
</p>

</div>