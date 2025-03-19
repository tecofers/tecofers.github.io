---
layout: portfolio
title: Sample Whitepapers
---

**Performance Evaluation of RPM-Based CentOS and Debian-Based Ubuntu Under DDoS Attack**

**Abstract**

This whitepaper presents a comparative analysis of two prominent Linux server distributions—CentOS and Ubuntu—under Distributed Denial of Service (DDoS) attacks. The study aims to assess the reliability of realistic experimentation in evaluating DDoS resilience, moving beyond traditional simulation-based approaches. Initial findings indicate that CentOS exhibits superior performance metrics compared to Ubuntu when subjected to DDoS attacks using the Siege tool.

**Introduction**

Linux server distributions are foundational to enterprise infrastructures, with CentOS and Ubuntu being among the most widely adopted. CentOS, derived from Red Hat Enterprise Linux (RHEL), is renowned for its stability and security, making it a preferred choice for enterprise environments. Ubuntu, based on Debian, emphasizes user-friendliness and frequent updates, appealing to a broad spectrum of users, from desktop enthusiasts to server administrators.

The escalating frequency and sophistication of DDoS attacks necessitate robust server operating systems capable of maintaining performance under such conditions. This study evaluates the performance of CentOS and Ubuntu when subjected to DDoS attacks, providing insights into their resilience and suitability for critical applications.

**Problem Statement**

Traditional DDoS research often relies on simulation-based experiments, which may not fully capture the complexities of real-world scenarios. This study seeks to validate the reliability of realistic experimentation by subjecting CentOS and Ubuntu servers to actual DDoS attacks, thereby providing empirical data on their performance and resilience.

**Methodology**

The experimental setup involved deploying CentOS and Ubuntu servers configured with default settings. Both servers were subjected to Layer 7 DDoS attacks using the Siege tool, a widely recognized HTTP load testing and benchmarking utility. Key performance metrics, including availability, response time, and throughput, were measured and analyzed.

**Results**

The initial tests yielded the following results:

- **Availability**: CentOS maintained an average availability of 99.97%, while Ubuntu's availability averaged 99.93%.
- **Response Time**: CentOS exhibited lower response times compared to Ubuntu under DDoS conditions.
- **Throughput**: CentOS achieved a throughput of 0.69 MB/sec over an average period of 79.33 seconds, significantly higher than Ubuntu's 0.18 MB/sec.

These findings suggest that CentOS outperforms Ubuntu in maintaining availability, responsiveness, and data throughput during DDoS attacks.

**Discussion**

The superior performance of CentOS under DDoS conditions can be attributed to several factors inherent to its design and architecture:

- **Stability and Reliability**: CentOS's alignment with RHEL ensures rigorous testing and stability, making it well-suited for handling high-stress scenarios such as DDoS attacks.
- **Performance Optimization**: CentOS's conservative update cycle focuses on stability and performance, potentially contributing to its resilience under attack.

However, it is essential to recognize that these results are based on specific test conditions. Factors such as server configuration, network environment, and attack vectors can influence performance outcomes.

**Proposed Solutions for Further Research**

To build upon these findings, the following avenues for further research are proposed:

- **Diverse Attack Vectors**: Expanding the study to include Layer 4 (Transport Layer) DDoS attacks would provide a more comprehensive understanding of each distribution's resilience.
- **Firewall Integration**: Evaluating the impact of deploying firewalls and other security measures on server performance under DDoS conditions.
- **Extended Toolset**: Utilizing a variety of DDoS tools beyond Siege to assess server performance across different attack methodologies.

**Benefits and Outcomes**

This study provides valuable insights for organizations in selecting appropriate server operating systems based on performance under DDoS attack scenarios. Understanding the resilience of CentOS and Ubuntu aids in making informed decisions aligned with specific application requirements and security considerations.

**Visual Aids**

[Note: Visual aids, including graphs and charts illustrating the performance metrics, are available upon request.]

**References**

- Cheung, M. (2016). *Market Share Analysis: Server Operating Systems, Worldwide, 2016*. Gartner Research.
- IDC. (2018). *Worldwide Operating Systems and Subsystems Market Shares, 2017*.
- Osterweil, E., Stavrou, A., & Zhang, L. (2019). *20 Years of DDoS: A Call to Action*. arXiv preprint arXiv:1904.02739.
- Kupreev, O., et al. (2019). *DDoS Attacks in Q3 2019*. Kaspersky. Retrieved from [https://securelist.com/DDoS-report-q3-2019/94958/](https://securelist.com/DDoS-report-q3-2019/94958/)

**Conclusion**

The preliminary findings indicate that CentOS demonstrates superior performance compared to Ubuntu when subjected to Layer 7 DDoS attacks using the Siege tool. However, a comprehensive analysis involving diverse attack vectors, security configurations, and real-world scenarios is essential to draw definitive conclusions. This study underscores the importance of empirical experimentation in evaluating server resilience, providing a foundation for informed decision-making in server operating system selection.

--- 