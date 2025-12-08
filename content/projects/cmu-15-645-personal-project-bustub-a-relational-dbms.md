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
<h1 class="mb-4" style="font-family: 'Old Standard TT', serif; margin-top: 0.5rem; margin-bottom: 2rem;">
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
  <div class="col-md-3 mb-4">
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
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>LRU-K Replacement Policy implementation</strong> to track page access in the buffer pool</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Disk Scheduler with shared queue </strong> to schedule and process disk requests efficiently</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Buffer Pool Manager implementation</strong> coordinating page fetching from disk via Disk Scheduler, in-memory page management, and dirty page write-back scheduling</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Dirty page scheduling optimization</strong> for efficient disk write operations when pages are evicted or explicitly instructed to flush to persistent storage</li>
        </ul>
      </div>
  </div>

  <!-- Project 2 Text -->
  <div class="col-md-5 mb-4">
      <h3 style="color: #dc3545;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">🔍</span>
        <strong>Project 2: Hash Index</strong>
      </h3>
      <p>
        Implemented disk-backed hash index using extendible hashing as the hashing scheme with dynamic bucket splitting and directory management.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Page Guard layer implementation</strong> and enhanced Buffer Pool Manager integration for safer and easier memory management and page allocation and collection</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Three-layer extendible hash table architecture</strong> consisting of <code>Header Page, Directory Page</code>, and <code>Bucket Page</code> layers with support for insertions, point search, and deletions</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Dynamic bucket splitting and directory growing</strong> during insert operations. <strong>Bucket merging and directory shrinking</strong> during remove operations. </li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Most-significant and least-significant bit indexing for scalable hash table expansion. With <code>FetchPageWrite</code> and <code>FetchPageRead</code> buffer pool APIs ensuring proper concurrency control</li>
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
         style="max-width: 90%; max-height: 800px; object-fit: contain;">
    <p style="color: #007bff; font-weight: 500;">Project 0 results showing successful Trie implementation with concurrent access.</p>
  </div>

  <!-- Project 1 Image -->
  <div class="col-md-4 text-center mb-3">
    <img src="/images/projects/cmu_course_project/15645db/proj1-result.jpg"
         alt="Project 1 Buffer Pool Manager Results"
         class="img-fluid rounded shadow-sm"
         style="max-width: 90%; max-height: 800px; object-fit: contain;">
    <p style="color: #28a745; font-weight: 500;">Project 1 results demonstrating efficient buffer pool management and LRU-K replacement policy.</p>
  </div>

  <!-- Project 2 Image -->
  <div class="col-md-4 text-center mb-3">
    <img src="/images/projects/cmu_course_project/15645db/proj2-result.jpg"
         alt="Project 2 Hash Index Implementation Results"
         class="img-fluid rounded shadow-sm"
         style="max-width: 90%; max-height: 800px; object-fit: contain;">
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
        Created comprehensive SQL query execution engine with operator executors and optimization rules to transform query plans for efficient query processing.
      </p>
      <p>
      Construct my own SQL queries to test the executor implementation.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-3"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Storage-related executors implementation:</strong> Built complete <code>SeqScan</code> executor for sequential table scanning with tuple iteration, <code>Insert/Update/Delete</code> executors for data modification operations with proper indexing integration, <code>IndexScan</code> executor for efficient index-based retrieval, and intelligent <code>SeqScan</code> to <code>IndexScan</code> optimizer that automatically transforms query plans when beneficial index conditions are detected</li>
          <div class="text-center my-3">
            <img src="/images/projects/cmu_course_project/15645db/image-1.png"
              alt="Project 3 Query Execution Architecture"
              class="img-fluid rounded shadow-sm"
              style="max-width: 80%; max-height: 300px; object-fit: contain;">
            <p style="color: #6f42c1; font-size: 0.9rem; margin-top: 0.5rem;">Query execution</p>
          </div>
          <li class="mb-3"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Advanced join executors with optimization:</strong> Implemented <code>NestedLoopJoin</code> supporting both left and inner joins with complete right tuple matching and null tuple auto-population for left joins, <code>HashJoin</code> executor using hash table optimization for equi-condition joins with hash key mapping, and NLJ to <code>HashJoin</code> optimizer that recursively converts multiple equi-conditions into hash join keys for optimal performance</li>
          <li class="mb-3"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Aggregation executor with hash table grouping:</strong> Designed hash table-based aggregation mapping group-by columns to aggregation results, supporting efficient <code>GROUP BY</code> operations, aggregate function processing (COUNT, SUM, AVG, MIN, MAX), and proper handling of grouped result concatenation for complex aggregation queries</li>
          <li class="mb-3"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Window functions, sorting, and optimization:</strong> Implemented comprehensive window function executor with partition-based calculations (without sorting support for uniform partition results), <code>Sort</code> executor with proper tuple ordering, <code>Limit</code> executor for result set restriction, and <code>Top-N</code> optimizer using priority queue heap implementation for efficient <code>ORDER BY ... LIMIT</code> queries with row-by-row window function computation from first to current row per partition</li>
        </ul>
      </div>
  </div>

  <!-- Project 3 Image -->
  <div class="col-md-6 text-center">
    <img src="/images/projects/cmu_course_project/15645db/proj3-result.jpg"
         alt="Project 3 Query Execution Results"
         class="img-fluid rounded shadow-sm"
         style="max-width: 90%; max-height: 900px; object-fit: contain;">
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
          <li class="mb-3"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Watermark timestamp allocation and transaction coordination:</strong> Implemented comprehensive watermark-based timestamp allocation system for transaction ordering in optimistic multi-version concurrency control, including transaction lifecycle management with proper timestamp tracking, conflict detection mechanisms, and transaction state management for coordinating concurrent database operations</li>
          <li class="mb-3"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Tuple reconstruction and garbage collection system:</strong> Built tuple version chain management with historical tuple reconstruction capabilities, automatic garbage collection for outdated tuple versions, version chain traversal for reading committed data at specific timestamps, and efficient memory management</li>
          <li class="mb-3"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Complete MVCC operations implementation:</strong> Developed full suite of MVCC operations including <code>scan</code>, <code>insert</code>, <code>delete</code>, and <code>update</code> operations</li>
          <li class="mb-3"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Primary key index MVCC integration:</strong> Designed specialized MVCC support for primary key indexes where index entries maintain consistent RID pointers throughout tuple lifecycle, implemented insert-to-deleted-position optimization to reuse deleted tuple slots for same primary key values, and built comprehensive <code>insert/delete/update</code> support for indexed data with proper version chain maintenance and index consistency guarantees</li>
        </ul>
      </div>
  </div>

  <!-- Project 4 Image -->
  <div class="col-md-6 text-center">
    <img src="/images/projects/cmu_course_project/15645db/proj4-result.jpg"
         alt="Project 4 MVCC Implementation Results"
         class="img-fluid rounded shadow-sm"
         style="max-width: 90%; max-height: 900px; object-fit: contain;">
    <p style="color: #fd7e14; font-weight: 500;">Project 4 results showing successful MVCC implementation with optimistic concurrency control.</p>
  </div>

</div>

<div class="row my-4">
  <div class="col-md-12">
    <h4 style="color: #fd7e14;">🚧 <strong>Future Enhancements</strong></h4>
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Transaction Abort</strong>. ToDo: Complete abort handling for tainted transactions. Before this is implemented, transactions that go into the tainted state will cause other transactions to abort on the write-conflicting tuples, and we cannot continue modifying the tuples when any of the transactions aborts.</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Serializable Verification</strong>: Enhanced isolation level support</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Performance Optimizations</strong>: Additional query and storage optimizations</li>
      </ul>
    </div>
  </div>
</div>

<hr/>

<h1 style="margin-top: 3.5rem; margin-bottom: 2rem;"> <strong>Development Statistics</strong> </h1>
  <div class="col-md-6 mb-4">
    <h4 style="color: #007bff;">🎯 <strong>Final Code Statistics</strong></h4>
    <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px;">
      <code>git diff --stat master 23fall-p4</code><br>
      <code><strong>173 files changed, 5921 insertions(+), 2447 deletions(-)</strong></code>
      <br><br>
      <code>Time spent: total 161 hrs 32 mins</code>
    </div>
  </div>
</div>

<hr/>

<h3 style="margin-top: 3.5rem; margin-bottom: 1rem;"> <strong>Acknowledgments</strong> </h3>

<p>
Thanks to Cundao and the Discord discussions while I was doing this project.
</p>

<hr>
<h3 style="margin-top: 3.5rem; margin-bottom: 1rem;"> <strong>Course Notes</strong> </h3>
    <img src="/images/projects/cmu_course_project/15645db/course-notes.jpg"
         alt="Project 4 MVCC Implementation Results"
         class="img-fluid rounded shadow-sm"
         style="max-width: 90%; max-height: 1500px; object-fit: contain;">

</div>