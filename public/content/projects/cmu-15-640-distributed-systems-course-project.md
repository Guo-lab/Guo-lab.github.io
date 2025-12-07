---
title: "CMU 15-640 Distributed Systems Course Project"
startDate: "2024-02-01"
endDate: "2024-05-01"
type: "course"
---

<div class="container py-4">

<h1 style="margin-top: 0.5rem; margin-bottom: 2rem;"> <strong>Distributed Systems Course Projects</strong> </h1>

<p class="lead">
A comprehensive exploration of distributed systems concepts through hands-on implementation of core distributed computing technologies. This project covered remote procedure calls, file caching proxies, scalable web services, and two-phase commit protocols.
</p>

<hr/>

<br>

## <strong>Overview</strong>

<p>
Throughout this course, I implemented and evaluated various distributed systems components, from fundamental RPC mechanisms to complex distributed transaction protocols. Each project progressively built understanding of distributed systems challenges including consistency, scalability, fault tolerance, and concurrency management.
</p>

<p>
The projects provided deep insights into how distributed systems design decisions impact system performance, reliability, and overall capability in real-world distributed computing environments.
</p>

<br>
<hr/>

<h1 style="margin-top: 3.5rem; margin-bottom: 2rem;"> <strong>Project Components</strong></h1>

<!-- ========================================= -->
<!-- PROJECT LAYOUT                            -->
<!-- ========================================= -->

<div class="row my-5">
  
  <div class="col-md-6 mb-4">
      <h3 style="color: #007bff;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">📡</span>
        <strong>Project 1: Remote Procedure Call (RPC)</strong>
      </h3>
      <p>
        Implemented Remote Procedure Call (RPC) which lies in the Stub layer, handling serialization and de-serialization with concurrency support.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Stub layer implementation</strong> for RPC functionality</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Serialization/deserialization</strong> mechanisms</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Concurrency support</strong> by forking child processes for each client</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>File descriptor offset</strong> to distinguish local calls from RPCs</li>
        </ul>
      </div>
  </div>

  <div class="col-md-6 text-center">
    <img src="/images/projects/cmu_course_project/640ds/image.png"
         alt="RPC Architecture and Implementation"
         class="img-fluid rounded shadow-sm"
         style="max-width: 90%;">
    <p>RPC implementation architecture showing stub layer and client-server communication.</p>
  </div>

</div>

<div class="row my-4">
    <h3 style="color: #28a745;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">💾</span>
        <strong>Project 2: File-Caching Proxy</strong>
    </h3>
    <p>
      Implemented a File-Caching Proxy with open-close session semantics and LRU replacement policy for cache management.
    </p>
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Open-close session semantics</strong> for proxy operations</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>LRU replacement policy</strong> for cache management</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>JAVA RMI Interface</strong> for proxy-server communication</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Check-on-use and last-close-win</strong> strategies</li>
      </ul>
    </div>

  <div class="col-md-12">
    <h4 style="color: #28a745;">🔒 <strong>Concurrency & Consistency Management</strong></h4>
    <p>
      Most concurrency in this project is maintained by the <code>ConcurrentHashMap</code>. I made a trade-off to get efficiency but lose some flexibility by using my own lock. However, only using <code>ConcurrentHashMap</code> could not solve all concurrency issues. I also used <code>synchronized</code> for cache insertion, eviction, and deletion; and <code>ReentrantReadWriteLock</code> for the file-level lock in the server.
    </p>
  </div>
</div>

<br>

<div class="row my-5">
  
  <div class="col-md-6 mb-4">
      <h3 style="color: #dc3545;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">🌐</span>
        <strong>Project 3: Three-Tier Scalable Web Service</strong>
      </h3>
      <p>
        Implemented a Three-Tier Scalable Web Service and fine-tuned it to satisfy dynamic or unexpected workloads by auto-scaling.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Auto-scaling capabilities</strong> for dynamic workloads</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Performance benchmarking</strong> and bottleneck analysis</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Three-tier architecture</strong> with load balancing</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Simple but <strong>complex and decent behaviors</strong></li>
        </ul>
      </div>
  </div>

  <div class="col-md-6 text-center">
    <img src="/images/projects/cmu_course_project/640ds/3tier.jpg"
         alt="Three-Tier Web Service Architecture"
         class="img-fluid rounded shadow-sm"
         style="max-width: 90%;">
    <p>Three-tier scalable web service architecture with auto-scaling capabilities.</p>
  </div>

</div>

<div class="row my-2">
  
  <div class="col-md-6 text-center">
    <img src="/images/projects/cmu_course_project/640ds/2PC.jpg"
         alt="Two-Phase Commit Protocol"
         class="img-fluid rounded shadow-sm"
         style="max-width: 90%;">
    <p>Two-phase commit protocol implementation for distributed transaction management.</p>
  </div>

  <div class="col-md-6 mb-2">
      <h3 style="color: #6f42c1;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">🔄</span>
        <strong>Project 4: Two-Phase Commit Protocol</strong>
      </h3>
      <p>
        Implemented a two-phase commit protocol for a single server and several User Nodes, ensuring safe and consistent process of generating and publishing group collages.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Coordinator-participant model</strong> with vote collection</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Commit/abort decision</strong> mechanism</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Failure recovery mechanism</strong> with persistent logging</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Crash and restart handling</strong> for server and User Nodes</li>
        </ul>
      </div>
  </div>

</div>

<div class="row mb-4">
  <div class="col-md-12">
    <h4 style="color: #6f42c1;">⚡ <strong>Transaction Management</strong></h4>
    <p>
      The server, as a coordinator, would collect User Nodes' votes and decide whether to commit or abort the transaction. The User Nodes, as participants, would vote and follow the server's decision. I also designed a failure recovery mechanism with persistent logging to handle the crashes and restarts of the server and User Nodes.
    </p>
  </div>
</div>

<hr/>

<h1 style="margin-top: 2.5rem; margin-bottom: 2rem;"> <strong>Key Achievements</strong> </h1>

<div style="margin-left: 1rem;">
  <ul class="list-unstyled">
    <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Successfully implemented complete RPC system with concurrency and serialization support</li>
    <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Designed file caching proxy with advanced consistency models and cache management</li>
    <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Built scalable three-tier web service with auto-scaling and performance optimization</li>
    <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Implemented robust two-phase commit protocol with failure recovery mechanisms</li>
    <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Gained deep understanding of distributed systems challenges and trade-offs</li>
  </ul>
</div>

<hr/>

<h3 style="margin-top: 3.5rem; margin-bottom: 1rem;"> <strong>Acknowledgments</strong> </h3>

<p>
Thanks to the CMU 15-640 TAs for their help with these projects.
</p>

</div>