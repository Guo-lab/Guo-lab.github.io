<!-- ---
title: "Undergraduate Research, Unsupervised Backdoor Attack on GNNs"
startDate: "2023-02-10"
endDate: "2023-06-10"
type: "research"
--- -->


<div class="container py-4">

<h1 class="mb-4" style="font-family: 'Old Standard TT', serif; margin-top: 1.5rem; margin-bottom: 2.5rem;">
  <strong>Unsupervised Backdoor Attack on Graph Neural Networks</strong>
</h1>

<br>
  <p class="lead mb-4">
    A novel research investigation into unsupervised backdoor attacks on Graph Neural Networks (GNNs), leveraging advanced unsupervised learning techniques such as MoCo (Momentum Contrast) to design adaptive and efficient attack mechanisms while exploring previously overlooked vulnerabilities in graph-based machine learning systems.
  </p>

<br>
  <div class="text-center mb-4">
    <img src="/images/projects/undergraduate_backdoor_attack/flowchart.png"
         alt="Unsupervised Backdoor Attack Flowchart"
         class="img-fluid rounded shadow-sm"
         style="width:80%; max-width:100%; height:auto; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
    <p class="mt-2" style="font-size:0.9rem;">
      Research methodology flowchart illustrating the unsupervised backdoor attack framework for Graph Neural Networks.
    </p>
  </div>

<br>
  <hr class="mb-4"/>

  <h2 class="mb-3"><strong>Research Overview</strong></h2>

  <p class="mb-3">
    A backdoor attack is a type of adversarial attack that manipulates a model's predictions by embedding specific patterns into the input data.
  </p>

  <p class="mb-3">
    This undergraduate thesis focuses on a cutting-edge and underexplored area: <strong>unsupervised backdoor attacks on Graph Neural Networks</strong> by targeting the contrastive pretraining of a graph encoder. While traditional supervised backdoor attacks on GNNs have been extensively studied, the unsupervised variant presents a more severe threat landscape with significantly lower attack requirements and broader applicability.
  </p>

  <h3 class="mb-3"><strong>Method</strong></h3>
  <p>
  During MoCo‑style contrastive pretraining, we insert a small trigger subgraph into selected graphs and treat them as positive pairs, causing the encoder to encode the trigger as a salient feature. Since pretraining is unsupervised, the trigger subtly aligns with a specific latent representation. Downstream models then inherit this poisoned space, and adding the trigger at test time reliably forces graphs toward an attacker-chosen embedding, inducing misclassification.
  </p>



<h3 style="margin-top: 3.5rem; margin-bottom: 1rem;"> <strong>Acknowledgments</strong> </h3>

<p>
Thanks to Professor Di Jin and Dr. Bingdao Feng for their guidance and support throughout this research project.
</p>

</div>