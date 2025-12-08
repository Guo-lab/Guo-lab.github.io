---
title: "CMU 18-797 Course Project, Blind Source Separation"
startDate: "2023-10-15"
endDate: "2023-12-15"
type: "course"
---

<div class="container py-4">

<h1 class="mb-4" style="font-family: 'Old Standard TT', serif; margin-top: 0.5rem; margin-bottom: 2rem;"><strong>Blind Source Separation for Motor Unit Signal Analysis</strong> </h1>

<p class="lead">
A machine learning signal processing project that applies blind source separation techniques to identify and separate different Motor Units (MUs) from electromyography signals. This project combines signal processing, machine learning, and biological signal analysis to achieve effective motor unit decomposition.
</p>


<hr/>

## <strong>Project Overview</strong>

<p>
Based on biological principles, we recognized that different Motor Units (MUs) possess unique peak characteristics. Therefore, the key to identifying different MUs lies in the detection and analysis of these peaks.
</p>

<p>
This project implements a comprehensive signal processing pipeline that includes signal filtering, peak detection, principal component analysis (PCA), K-means clustering, and dynamic time warping (DTW) analysis for effective motor unit separation.
</p>

<div class="text-center my-4">
<img src="/images/projects/cmu_course_project/mlsp/797-pipeline.jpg"
     alt="MLSP Signal Processing Pipeline"
     class="img-fluid rounded shadow-sm"
     style="max-width:80%;">
<p>Complete signal processing workflow for blind source separation of motor unit signals.</p>
</div>

<hr/>

<h1 style="margin-top: 3.5rem; margin-bottom: 1rem;"> <strong>Technical Approach</strong></h1>


<!-- ========================================= -->
<!-- TECHNICAL COMPONENTS LAYOUT               -->
<!-- ========================================= -->

<div class="row my-5">
  
  <div class="col-md-6 mb-4">
      <h3 style="color: #007bff;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">📊</span>
        <strong>Signal Processing Pipeline</strong>
      </h3>
      <p>
        Multi-stage signal processing approach designed to extract meaningful features from raw electromyography data.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Signal Filtering</strong> - preprocessing to remove noise and artifacts</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Peak Detection</strong> - identifying characteristic motor unit activation peaks</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Feature Extraction</strong> - capturing unique MU characteristics</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Multi-axis Analysis</strong> - processing signals across different channels</li>
        </ul>
      </div>
  </div>

  <div class="col-md-6 mb-4">
      <h3 style="color: #28a745;">
        <span style="font-size: 1.5rem; margin-right: 0.5rem;">🤖</span>
        <strong>Machine Learning Methods</strong>
      </h3>
      <p>
        Advanced ML techniques for dimensionality reduction and motor unit classification.
      </p>
      <div style="margin-left: 1rem;">
        <ul class="list-unstyled mt-3">
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Principal Component Analysis (PCA)</strong> - reducing signal dimensionality</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>K-means Clustering</strong> - separating different motor units</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Dynamic Time Warping (DTW)</strong> - peak alignment and similarity analysis</li>
          <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Pattern Recognition</strong> - identifying unique MU signatures</li>
        </ul>
      </div>
  </div>

</div>

<div class="row my-4">
  <div class="col-md-12">
    <h3 style="color: #6f42c1;">💡 <strong>Key Insights</strong></h3>
    <p>
      We could observe that the PCA and K-means clustering algorithm could reduce the dimension of multi-axis signals and thus separate the MUs effectively. The DTW algorithm could also align the peaks of different MUs and calculate the similarity between them.
    </p>
  </div>
</div>

<hr/>

<h1 style="margin-top: 3.5rem; margin-bottom: 2rem;"> <strong>Experimental Results</strong> </h1>

<div class="row my-5">
  
  <div class="col-md-4 mb-4">
      <h4 style="color: #dc3545;">
        <strong>Steady Force Analysis</strong>
      </h4>
      <div class="text-center my-3">
        <img src="/images/projects/cmu_course_project/mlsp/steady_output.png"
             alt="Steady Force Signal Separation Results"
             class="img-fluid rounded shadow-sm"
             style="max-width: 100%;">
        <p>Motor unit separation results for steady force conditions showing clear signal decomposition.</p>
      </div>
  </div>

  <div class="col-md-4 mb-4">
      <h4 style="color: #fd7e14;">
        <strong>Increasing Force - Case I</strong>
      </h4>
      <div class="text-center my-3">
        <img src="/images/projects/cmu_course_project/mlsp/increasing_1_output.png"
             alt="Increasing Force Signal Separation Case 1"
             class="img-fluid rounded shadow-sm"
             style="max-width: 100%;">
        <p>Signal separation performance under gradually increasing force conditions.</p>
      </div>
  </div>

  <div class="col-md-4 mb-4">
      <h4 style="color: #17a2b8;">
        <strong>Increasing Force - Case II</strong>
      </h4>
      <div class="text-center my-3">
        <img src="/images/projects/cmu_course_project/mlsp/incr_2_output.png"
             alt="Increasing Force Signal Separation Case 2"
             class="img-fluid rounded shadow-sm"
             style="max-width: 100%;">
        <p>Additional validation of separation algorithm under dynamic force conditions.</p>
      </div>
  </div>

</div>

<hr/>

<h1 style="margin-top: 3.5rem; margin-bottom: 2rem;"> <strong>Key Achievements</strong> </h1>

<div style="margin-left: 1rem;">
  <ul class="list-unstyled">
    <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Successfully implemented comprehensive blind source separation pipeline for motor unit analysis</li>
    <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Demonstrated effective motor unit decomposition across different force conditions</li>
    <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Applied advanced machine learning techniques including PCA, K-means, and DTW for signal analysis</li>
    <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Validated approach on both steady-state and dynamic force scenarios</li>
    <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> Contributed to biomedical signal processing research with practical motor unit identification solution</li>
  </ul>
</div>

<hr/>

<h3 style="margin-top: 3.5rem; margin-bottom: 1rem;"> <strong>Acknowledgments</strong> </h3>

<p>
Thanks to the CMU 18-797 TAs, especially Prakarsh Yadav, for their help with this project. Thank you to my teammates, Yibo Peng, Xiaoxi Wei, Zhiyu Yi, and Yihui Chen.
</p>

</div>