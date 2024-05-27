---
title: "Local-Global Defense against Unsupervised Adversarial Attacks on Graphs"
collection: publications
permalink: /publications/2023-06-17-local-global-unsupervised-adversarial-attack-2
# excerpt: 'This paper is about fixing template issue #693.'
date: 2024-02-17
venue: 'Proceedings of the AAAI Conference on Artificial Intelligence'
paperurl: 'https://ojs.aaai.org/index.php/AAAI/article/view/25979'
citation: 'Jin, D., Feng, B., Guo, S., Wang, X., Wei, J., & Wang, Z. (2023). Local-Global Defense against Unsupervised Adversarial Attacks on Graphs. Proceedings of the AAAI Conference on Artificial Intelligence, 37(7), 8105-8113. '
bib: "@article{Jin_Feng_Guo_Wang_Wei_Wang_2023,\ntitle={Local-Global Defense against Unsupervised Adversarial Attacks on Graphs},\nvolume={37},\nurl={https://ojs.aaai.org/index.php/AAAI/article/view/25979},\nDOI={10.1609/aaai.v37i7.25979},\n number={7},\njournal={Proceedings of the AAAI Conference on Artificial Intelligence},\nauthor={Jin, Di and Feng, Bingdao and Guo, Siqi and Wang, Xiaobao and Wei, Jianguo and Wang, Zhen},\nyear={2023},\nmonth={Jun.},\npages={8105-8113}\n}"
---
Abstract
---
Unsupervised pre-training algorithms for graph representation learning are vulnerable to adversarial attacks, such as first-order perturbations on graphs, which will have an impact on particular downstream applications. Designing an effective representation learning strategy against white-box attacks remains a crucial open topic. Prior research attempts to improve representation robustness by maximizing mutual information between the representation and the perturbed graph, which is suboptimal because it does not adapt its defense techniques to the severity of the attack. To address this issue, we propose an unsupervised defense method that combines local and global defense to improve the robustness of representation. Note that we put forward the Perturbed Edges Harmfulness (PEH) metric to determine the riskiness of the attack. Thus, when the edges are attacked, the model can automatically identify the risk of attack. We present a method of attention-based protection against high-risk attacks that penalizes attention coefficients of perturbed edges to encoders. Extensive experiments demonstrate that our strategies can enhance the robustness of representation against various adversarial attacks on three benchmark graphs.
