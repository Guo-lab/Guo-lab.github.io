# Yondu AI Projects Summary

## Project 1: Ouster LiDAR Integration & Dynamic IMU Calibration
**Branch:** `ouster_integration`
**Timeline:** February - March 2026

### Key Contributions
- Integrated Ouster LiDAR into Yondu's navigation system for improved perception and mapping
- Designed and implemented dynamic IMU calibration to address sensor drift and improve localization accuracy
- Fixed rotation drifting and movement snap issues during robot navigation
- Achieved stable localization and mapping performance after addressing drifting challenges
- Implemented uniform QoS for joint state feedback subscribers to ensure consistent data flow

### Technical Details
- Worked with ROS-based navigation stack
- Addressed real-time sensor fusion challenges between LiDAR and IMU data
- Developed calibration algorithms to maintain accurate pose estimation during robot movement
- Contributed to overall system stability and reliability in warehouse environments

---

## Project 2: Data Post-processing Pipeline Redesign & Optimization
**Branch:** `pipeline-improvements` in `azure_lerobot_pipeline` repository
**Timeline:** February - April 2026

### Performance Optimization Achievements
- **Overall Speedup:** 5-7x faster data processing pipeline
- **Parallel Download Optimization:** Achieved 69.4 MB/s download speed (saturating ISP uplink) using 8 parallel workers
- **CPU Utilization:** Reduced processing time from 227s to 46s (5x speedup) through CPU decode optimization with 4 workers and p4 preset
- **GPU Pipeline Optimization:** Improved NVENC encoding pipeline, identified and addressed GPU bottleneck
- **Memory Efficiency:** Implemented bisect-based per-episode minimum covering set to download only necessary data

### Key Technical Contributions
- **Parallel Architecture:** Implemented parallel H264 download with 8 workers, auto-set worker count to min(32, cpu_count * 4)
- **CPU/GPU Optimization:**
  - Used `ascontiguousarray` vs `tobytes` for 31% encode wall time reduction (89s→62s)
  - Implemented Numba parallel reduction for video stats (26x speedup, 150s→10s)
  - Optimized float32 accumulation in video statistics (2x speedup)
- **Pipeline Redesign:**
  - Overlapped episode N+1 preparation (mcap_load+decode) with episode N Phase A (frames feeding)
  - Replaced sequential ffprobe operations with parallel -count_packets (17s→0s)
  - Fixed pipeline_fps formula and restored decode_segs/video_stats_accum
- **Data Efficiency:** Designed minimum coverage download to eliminate redundant data transfer
- **Tooling:** Built comprehensive profiling system with RSS peak sampling, mcap_mem delta, blocked_puts, pipe MB/s, decode MB/s metrics

### System Impact
- Reduced cloud storage download requirements through intelligent data selection
- Improved CPU and GPU utilization through parallel processing
- Enabled real-time data processing capabilities for warehouse robot teleoperation data
- Created GUI tools for episode management and processing status visualization

---

## Project 3: Experience-based Roadmap Cache & Warehouse Cart Scanning Simulation
**Timeline:** March - April 2026

### Subproject A: Experience-based Roadmap Cache for IK Acceleration
**Branch:** `feat/ik-experienced-based-speedup`

#### Key Contributions
- **Architecture:** Designed and implemented RoadmapCache system with YAML persistence and debounced persistence
- **Performance:** Cached IK solutions and motion plans to accelerate similar pose/trajectory queries
- **Code Structure:** Refactored into modular components:
  - `roadmap_cache.cpp`, `roadmap_cache_lookup.cpp`, `roadmap_cache_persist.cpp`
  - Added `roadmap_cache_detail.hpp` with shared helpers
- **Integration:**
  - Exposed cache parameters via IKSolverNode (`enable_cache`, `cache_path`)
  - Integrated cache with existing PlanningPipeline through `setCache` method
  - Simplified planning pipeline wiring and dropped duplicate static joint-name tables
- **New Modules:**
  - `joint_chain` module for torso/arm joint names, dimensions, and assembling flat joint state
  - `ConvergenceMonitor` for convergence checking (moved out of executor)
  - Reorganized publishers with exposed cap parameters
- **Testing:** Created comprehensive test suite including `test_joint_chain`, `test_roadmap_cache`, `test_trajectory_publisher`

### Subproject B: Warehouse Cart Scanning Simulation Pipeline
**Branch:** `feat/cart-scan-pipeline`

#### System Overview
Built complete simulation pipeline for warehouse cart barcode scanning using humanoid robot:

#### Pipeline Components
1. **QR Code Localization** (`qr_localizer`):
   - Depth unprojection and camera-to-world transform
   - Accurate cart pose estimation from QR codes

2. **Scan Pose Generation** (`scan_pose_generator`):
   - Computes 9 barcode scan poses from QR world position
   - Generates optimal scanning trajectories

3. **IK Dispatch & Execution** (`cart_scan_client_node`):
   - QR detection and barcode verification
   - IK solution dispatch for each scanning pose
   - Integration with motion planning system

4. **Simulation Integration** (`scan_cart_node`):
   - Publishes Zed/left_wrist image, depth, and pose as ROS topics
   - Added camera image/depth access and camera pose to FullSimulation
   - Real-time visualization with virtual camera view

#### Technical Achievements
- **Full Integration:** Successfully tested scanning cart pipeline with vanilla settings
- **Real-time Performance:** Implemented timing logs and performance monitoring
- **Robustness:** Fixed bar code decoding bugs and IK integration issues
- **Visualization:** Created virtual real-time camera view for simulation feedback

#### System Architecture
- ROS-based distributed system with multiple specialized nodes
- Integration with existing IK and motion planning infrastructure
- Support for both simulation and potential real-world deployment

---

## Skills Demonstrated Across Projects

### Technical Skills
- **Robotics:** ROS, IK solving, motion planning, sensor fusion (LiDAR+IMU), localization & mapping
- **Performance Optimization:** Parallel computing, CPU/GPU utilization, pipeline optimization, bottleneck analysis
- **Software Engineering:** C++, Python, Rust, YAML, modular architecture, testing, profiling
- **System Integration:** Multi-sensor systems, simulation-to-reality pipelines, cloud-data processing

### Methodologies
- Data-driven optimization with comprehensive benchmarking
- Incremental refinement through profiling and bottleneck identification
- Modular design for maintainability and extensibility
- Cross-platform development (simulation and real hardware)

### Impact
- **Efficiency:** 5-7x faster data processing, reduced cloud storage requirements
- **Reliability:** Improved localization accuracy, robust barcode scanning
- **Scalability:** Parallel architectures capable of handling warehouse-scale data
- **Maintainability:** Clean, modular codebases with comprehensive testing