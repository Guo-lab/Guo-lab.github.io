<!-- ---
title: "CMU 18-349: Embedded System Design"
startDate: "2025-01-15"
endDate: "2025-04-27"
type: "course"
--- -->

<div class="container py-4">

<div class="row align-items-center my-4">
  <div class="col-md-12 d-flex align-items-center">
  <h1 class="mb-4" style="font-family: 'Old Standard TT', serif; margin-top: 0.5rem; margin-bottom: 2rem;"> <strong>CMU 18-349 Embedded System Design</strong> </h1>

  </div>
</div>


<p class="lead">
Embedded systems engineering course featuring complete design and implementation of a real-time operating system (RTOS) from scratch. Built comprehensive embedded applications from bare-metal ARM assembly bootloaders through sophisticated PID motor control systems, integrating custom PCB hardware with multi-threaded software using Rate Monotonic Scheduling and priority ceiling protocols.
</p>

<br>


<div class="text-center my-4">
<video controls loop autoplay muted
     class="img-fluid rounded shadow-sm"
     style="width:60%; max-width:100%; height:auto; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
  <source src="/videos/projects/cmu_course_project/embedded/IMG_1975.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
<p style="margin: 0 0 0.25rem 0;">
  Real-time PID motor control demonstration on custom PCB with RTOS scheduling and encoder feedback.
</p>
<p style="margin: 0;">
  Final system integration showcasing hardware-software coordination.
</p>
</div>

<hr/>

## <strong>Course Overview</strong>

<br>
<p>
This course delivered intensive hands-on experience in embedded systems engineering, emphasizing the complete development cycle from hardware PCB design through sophisticated real-time software systems. The curriculum progressed systematically through 6 laboratories: custom PCB design using Autodesk Fusion 360, ARM assembly bootloader implementation, STM32 ARM Cortex-M programming, memory-mapped I/O device drivers, timer-based interrupt systems , complete RTOS kernel development with scheduling theory, and PID-controlled motor systems.
</p>

<p>
The capstone achievement was implementing a full real-time operating system featuring PendSV-based context switching, Rate Monotonic Scheduling with UB schedulability analysis, thread control blocks, mutex synchronization using Immediate Priority Ceiling Protocol (IPCP), and integration with hardware-driven PWM motor control using quadrature encoder feedback and finite state machine-based position tracking.
</p>

<br>
<hr/>

<h1 style="margin-top: 3.5rem; margin-bottom: 2rem;"> <strong>Lab Components</strong></h1>

<!-- ========================================= -->
<!-- LAB 0: PCB DESIGN & HARDWARE FOUNDATION  -->
<!-- ========================================= -->

<div class="row my-5 align-items-start">
    <h3 style="color: #007bff;">
      <span style="font-size: 1.5rem; margin-right: 0.5rem;">🔧</span>
      <strong>Lab 0: PCB Design & Hardware Foundation</strong>
    </h3>
    <p>
      Foundation laboratory focusing on embedded hardware design, PCB layout, and circuit implementation for microcontroller-based systems.
    </p>
  <div class="col-md-3 mb-4">
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Custom PCB design using Autodesk Fusion 360</strong> for complete car control system with motor drivers and sensor interfaces</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Component placement and trace routing</strong> for Arduino shield compatibility and electrical safety.</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Schematic design and Gerber file generation</strong> for professional PCB fabrication</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>H-bridge motor driver integration</strong> with servo controllers, keypads, and LCD display modules</li>
      </ul>
    </div>
  </div>

  <div class="col-md-5 text-center">
    <img src="/images/projects/cmu_course_project/embedded/PCB_schematic.jpg"
         alt="Custom PCB Design"
         class="img-fluid rounded shadow-sm"
         style="height: 100%; width:auto; object-fit: contain;">
    <p style="color: #007bff; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">PCB Schematic Design</p>
  </div>
    <div class="col-md-4 text-center">
    <img src="/images/projects/cmu_course_project/embedded/PCB_v0.jpg"
         alt="Custom PCB Design"
         class="img-fluid rounded shadow-sm"
         style="height: 100%; width: auto; object-fit: contain;">
    <p style="color: #007bff; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">Custom PCB designed using Autodesk Fusion 360 for complete embedded motor control system with H-bridge drivers, servo controllers, and sensor interfaces.</p>
  </div>
</div>

<!-- ========================================= -->
<!-- LAB 1-2: BOOTLOADER & DEVICE DRIVERS      -->
<!-- ========================================= -->

<div class="row my-5 align-items-start gx-0">
    <h3 style="color: #28a745;">
      <span style="font-size: 1.5rem; margin-right: 0.5rem;">⚡</span>
      <strong>Lab 1-2: Bootloader & Device Drivers</strong>
    </h3>
    <p>
      Bare-metal ARM programming and memory-mapped I/O device driver development for STM32F401 microcontroller systems.
    </p>
  <div class="col-md-6 mb-4">
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.1rem; vertical-align: middle;"></i> <strong>ARM Cortex-M4 assembly bootloader implementation</strong> with vector table setup, memory initialization, and BSS zeroing for STM32F401</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.1rem; vertical-align: middle;"></i> <strong>UART communication drivers</strong> with both polling and interrupt-driven modes (interrupt mode implemented later in the lab)</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.1rem; vertical-align: middle;"></i> <strong>I2C protocol implementation</strong> for LCD control and sensor communication</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.1rem; vertical-align: middle;"></i> <strong>ADC sensor interfaces</strong> and keypad input processing with memory-mapped I/O</li>
      </ul>
    </div>
  </div>

  <div class="col-md-6 mb-4">
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.1rem; vertical-align: middle;"></i> <strong>Custom initialization routines</strong> for flash-to-SRAM data copying and memory layout management</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.1rem; vertical-align: middle;"></i> <strong>Linker script configuration</strong> for proper memory mapping and section allocation</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.1rem; vertical-align: middle;"></i> <strong>Hardware abstraction layers</strong> for GPIO, RCC, and peripheral register access</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.1rem; vertical-align: middle;"></i> <strong>Device driver architecture</strong> with modular and reusable peripheral interfaces</li>
      </ul>
    </div>
  </div>

  <div class="col-md-3 text-center mb-3">
    <img src="/images/projects/cmu_course_project/embedded/adc_test_compressed.jpeg"
         alt="ADC Sensor Testing"
         class="img-fluid rounded shadow-sm"
         style="height: auto; width: 90%; object-fit: contain;">
    <p style="color: #28a745; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">ADC sensor interface testing</p>
  </div>

  <div class="col-md-4 text-center mb-3">
    <img src="/images/projects/cmu_course_project/embedded/IMG_9437_compressed.jpeg"
         alt="Hardware Setup and Testing"
         class="img-fluid rounded shadow-sm"
         style="height: auto; width: 95%; object-fit: contain;">
    <p style="color: #28a745; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">LED and button driver validation</p>
  </div>

  <div class="col-md-5 text-center mb-3">
    <img src="/images/projects/cmu_course_project/embedded/led_button_test.jpg"
         alt="LED Button Interface Testing"
         class="img-fluid rounded shadow-sm"
         style="height: auto; width: 98%; object-fit: contain;">
             <p style="color: #28a745; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">Hardware setup and peripheral testing</p>
  </div>
</div>

<!-- ========================================= -->
<!-- LAB 3: TIMERS & INTERRUPT SYSTEMS        -->
<!-- ========================================= -->

<div class="row my-5 align-items-start">
  <div class="col-md-12 mb-3">
    <h3 style="color: #dc3545;">
      <span style="font-size: 1.5rem; margin-right: 0.5rem;">⏱️</span>
      <strong>Lab 3: Timers & Interrupt Systems</strong>
    </h3>
    <p>
      Advanced timer-based control systems with interrupt handling, system calls, and precise PWM servo control implementation.
    </p>
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>SysTick handler implementation</strong> for precise system timing and scheduling foundation</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Interrupt-driven UART with producer-consumer buffers</strong> enabling efficient asynchronous communication</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>User/kernel mode separation and system calls</strong> with proper privilege level management and ARM calling conventions</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>PWM servo control using general purpose timers</strong> with precise pulse width modulation for actuator positioning</li>
      </ul>
    </div>
  </div>
</div>

<!-- ========================================= -->
<!-- LAB 4: REAL-TIME OPERATING SYSTEM        -->
<!-- ========================================= -->

<div class="row my-5 align-items-start">
  
  <div class="col-md-12 mb-3">
    <h3 style="color: #6f42c1;">
      <span style="font-size: 1.5rem; margin-right: 0.5rem;">🧠</span>
      <strong>Lab 4: Real-Time Operating System (RTOS)</strong>
    </h3>
    <p>
      Complete RTOS implementation from scratch featuring advanced scheduling algorithms, context switching, and synchronization protocols.
    </p>
    </div>
    <div class="col-md-6">
        <div style="margin-left: 1rem;">
          <ul class="list-unstyled mt-3">
            <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>PendSV-based context switching</strong> with complete thread state management and register preservation</li>
            <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Rate Monotonic Scheduling (RMS)</strong> with UB schedulability analysis and priority assignment</li>
            <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Thread Control Blocks (TCB)</strong> and multi-threading support with round-robin and RMS scheduling</li>
          </ul>
        </div>
      </div>
      <div class="col-md-6">
        <div style="margin-left: 1rem;">
          <ul class="list-unstyled mt-3">
            <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Immediate Priority Ceiling Protocol (IPCP)</strong> with mutex synchronization and deadlock avoidance</li>
            <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Thread lifecycle management</strong> including creation, termination, and dynamic resource allocation</li>
            <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>System call interface</strong> for user-kernel communication with proper argument passing and privilege transitions</li>
          </ul>
        </div>
      </div>

  </div>
</div>

<!-- ========================================= -->
<!-- LAB 5: MOTOR CONTROL & SYSTEM INTEGRATION -->
<!-- ========================================= -->

<div class="row my-5 align-items-start">
  <div class="col-md-12 mb-3">
    <h3 style="color: #ff6b35;">
      <span style="font-size: 1.5rem; margin-right: 0.5rem;">🎛️</span>
      <strong>Lab 5: Motor Control & System Integration</strong>
    </h3>
    <p>
      Advanced motor control implementation integrating RTOS, PID algorithms, and hardware-driven systems for precision robotics applications.
    </p>
  </div>
  
  <div class="col-md-12 mb-4">
    <div style="margin-left: 1rem;">
      <ul class="list-unstyled mt-3">
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Hardware-driven PWM motor control</strong> using timer compare registers for precise H-bridge control with variable duty cycles</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Quadrature encoder finite state machines</strong> with EXTI interrupts for accurate position tracking and direction detection</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>PID control algorithms</strong> with tunable parameters for optimal motor speed and position regulation</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Multi-threaded RTOS coordination</strong> with harmonic period scheduling, LCD display threads, and UART communication tasks</li>
        <li class="mb-2"><i class="bi bi-circle-fill" style="font-size: 0.4rem; margin-right: 0.5rem; vertical-align: middle;"></i> <strong>Real-time visualization</strong> with Python serial communication and matplotlib plotting for PID performance analysis</li>
      </ul>
    </div>
  </div>

  <div class="col-md-6 text-center mb-3">
    <video controls autoplay muted loop 
         class="img-fluid rounded shadow-sm"
         style="height: auto; width: 100%; object-fit: contain;">
      <source src="/videos/projects/cmu_course_project/embedded/349-Lab5_compressed.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <p style="color: #ff6b35; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">Terminal-side demo: Real-time PID control visualization and parameter tuning</p>
  </div>

  <div class="col-md-6 text-center mb-3">
    <video  autoplay muted loop  controls
         class="img-fluid rounded shadow-sm"
         style="height: auto; width: 100%; object-fit: contain;">
      <source src="/videos/projects/cmu_course_project/embedded/IMG_1974.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <p style="color: #ff6b35; font-weight: 500; font-size: 0.9rem; margin-top: 8px;">Vehicle-side demo: Motor control system responding to RTOS commands</p>
  </div>
</div>

</div>