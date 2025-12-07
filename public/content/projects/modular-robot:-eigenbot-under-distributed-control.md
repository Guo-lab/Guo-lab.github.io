---
title: "Modular Robot: EigenBot under Distributed Control"
startDate: "2023-12-27"
endDate: "2024-09-01"
type: "research"
---

# EigenBot: Distributed Control for Modular Robotics

## Project Overview

This project focuses on developing a biologically-inspired distributed control system for modular robots, specifically targeting six-legged locomotion patterns observed in insects. Working under Professor Howie Choset and Researcher Lu Li at CMU's Biorobotics Lab, I contributed to both the algorithmic development and hardware implementation of this innovative bio-inspired system.

## Key Contributions

### 🧠 Algorithm Development
**Implemented curve walking algorithm in CoppeliaSim**, inspired by six-leg insects' behavior, based on a biologically inspired distributed control framework. The algorithm enables smooth, coordinated movement patterns that mimic natural insect locomotion.

### ⚙️ Hardware Development  
**Developed Eigenbot EEPROM parameters auto-setting tools**, significantly accelerating the Hexapod gaits tuning process. This tooling reduced configuration time from hours to minutes, enabling rapid iteration on gait parameters.

### 🔧 System Integration & Testing
**Tested firmware and debugged communication protocols** - redesigned the topology structure to ensure the robot's stability and reliability. This involved extensive troubleshooting of module-to-module communication and optimization of the distributed control architecture.

### 📊 Experimental Setup & Validation
**Built comprehensive testing environment** including:
- Custom terrain construction for diverse locomotion testing
- Motion capture system setup using OptiTrack for precise performance analysis  
- Data collection pipeline for performance metrics evaluation

## Technical Implementation

### Distributed Control Framework
The EigenBot system employs a distributed control architecture where each module operates semi-autonomously while coordinating with neighboring modules. This approach offers several advantages:

- **Fault tolerance**: Individual module failures don't compromise the entire system
- **Scalability**: Easy addition or removal of modules
- **Biological authenticity**: Mirrors how real insects coordinate limb movement

### Curve Walking Algorithm
The curve walking implementation focuses on:
- **Dynamic gait adaptation**: Real-time adjustment to terrain and obstacles
- **Energy efficiency**: Optimized movement patterns to reduce power consumption
- **Stability maintenance**: Ensuring continuous ground contact and balance

### Performance Validation
Using the OptiTrack motion capture system, we collected comprehensive data on:
- Locomotion efficiency across different terrains
- Gait stability under various conditions
- Energy consumption patterns
- Module coordination effectiveness

## Research Impact

This work contributes to the broader field of modular robotics by demonstrating how biological principles can be effectively translated into engineered systems. The distributed control approach offers promising applications in:

- **Search and rescue operations** where adaptability is crucial
- **Exploration missions** in challenging environments
- **Reconfigurable robotics** for multi-purpose applications

## Technical Skills Developed

- **Simulation environments**: CoppeliaSim for robotics simulation
- **Embedded systems**: EEPROM programming and firmware development
- **Motion capture**: OptiTrack system operation and data analysis
- **Distributed systems**: Multi-agent coordination and communication protocols
- **Bioinspired design**: Translation of biological principles to engineering solutions

---

*This research was conducted at Carnegie Mellon University's Biorobotics Lab under the supervision of Professor Howie Choset and Researcher Lu Li, representing a significant contribution to the field of modular and bio-inspired robotics.*