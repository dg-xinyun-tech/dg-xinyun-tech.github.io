/* ========================================
   案例数据 - 兼容 file:// 协议
   同时提供 JSON 版本在 data/cases.json
   ======================================== */
window.CASES_DATA = [
  {
    id: 101,
    industry: "network",
    industryZh: "组网方案",
    industryEn: "Networking",
    title: { zh: "点对点控制", en: "Point-to-Point Control" },
    summary: { zh: "设备之间直接建立无线链路，实现低延时、高可靠的一对一控制与数据传输，适用于无人机遥控、机器人直控、遥测遥控等场景。", en: "Direct wireless link between devices for low-latency, high-reliability one-to-one control and data transmission, ideal for drone remote control, robot direct control, and telemetry scenarios." },
    icon: '<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><rect x="25" y="75" width="50" height="50" rx="8" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.8)" stroke-width="2"/><rect x="125" y="75" width="50" height="50" rx="8" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.8)" stroke-width="2"/><line x1="75" y1="100" x2="125" y2="100" stroke="rgba(255,255,255,0.9)" stroke-width="2" stroke-dasharray="6 4"/><circle cx="85" cy="100" r="3" fill="rgba(255,255,255,0.9)"><animate attributeName="cx" values="85;115;85" dur="2s" repeatCount="indefinite"/></circle><text x="50" y="145" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="11">设备A</text><text x="150" y="145" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="11">设备B</text></svg>',
    gradient: "linear-gradient(135deg,#1e3a8a,#3b82f6)",
    tags: ["点对点", "低延时", "直连控制"],
    client: { zh: "无人机、机器人、遥测遥控等直连场景", en: "Drones, robots, telemetry and remote control" },
    metrics: [
      { value: "<10ms", label: { zh: "传输延时", en: "Latency" } },
      { value: "100Mbps", label: { zh: "最高速率", en: "Max Rate" } },
      { value: "99.9%", label: { zh: "链路可靠性", en: "Reliability" } },
      { value: "视距", label: { zh: "传输距离", en: "Range" } }
    ],
    background: { zh: "在无人机遥控、机器人直控、遥测遥控等场景中，需要设备之间建立直接的无线链路，实现低延时、高可靠的一对一控制与数据传输。点对点通信是最基础的组网方式，结构简单、延时最低，适用于对实时性要求极高的控制类场景。", en: "In drone remote control, robot direct control, and telemetry scenarios, devices need to establish a direct wireless link for low-latency, high-reliability one-to-one control and data transmission. Point-to-point communication is the most basic networking method with simple structure and minimum latency, suitable for real-time control scenarios." },
    solution: { zh: "采用直连无线链路，设备A与设备B之间直接建立通信连接，无需中间节点。支持自适应调制解调，根据信道质量动态调整传输速率；支持前向纠错（FEC）和自动重传机制，保障数据可靠性；支持多种工作频段（800MHz/1.4GHz/2.4GHz），适应不同应用场景；支持AES/ZUC/SNOW3G数据加密，保障通信安全。", en: "Direct wireless link between Device A and Device B without intermediate nodes. Supports adaptive modulation, dynamically adjusting rate based on channel quality; FEC and automatic retransmission for reliability; multiple frequency bands (800MHz/1.4GHz/2.4GHz); AES/ZUC/SNOW3G encryption for security." },
    results: { zh: "点对点控制模式下，传输延时可低至10ms以内，满足实时控制需求；结构简单、部署便捷，无需额外中继设备；支持视距内稳定传输，速率最高可达100Mbps；广泛应用于无人机遥控、机器人直控、遥测遥控等对延时敏感的场景。", en: "Point-to-point control mode achieves latency below 10ms for real-time control; simple structure and easy deployment without relay equipment; stable line-of-sight transmission up to 100Mbps; widely used in drone remote control, robot direct control, and telemetry scenarios." }
  },
  {
    id: 102,
    industry: "network",
    industryZh: "组网方案",
    industryEn: "Networking",
    title: { zh: "中继桥接传输", en: "Relay Bridge Transmission" },
    summary: { zh: "通过中继节点转发信号，突破视距限制，大幅延伸传输距离，支持多跳中继，适用于山地、城市峡谷、超长距离等复杂环境下的无线通信。", en: "Signal forwarding through relay nodes to overcome line-of-sight limitations and extend transmission range, supporting multi-hop relay for complex environments such as mountains, urban canyons, and ultra-long-distance communication." },
    icon: '<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><rect x="10" y="80" width="40" height="40" rx="6" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.8)" stroke-width="2"/><rect x="80" y="70" width="40" height="60" rx="6" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,1)" stroke-width="2"/><rect x="150" y="80" width="40" height="40" rx="6" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.8)" stroke-width="2"/><line x1="50" y1="100" x2="80" y2="100" stroke="rgba(255,255,255,0.7)" stroke-width="2" stroke-dasharray="5 3"/><line x1="120" y1="100" x2="150" y2="100" stroke="rgba(255,255,255,0.7)" stroke-width="2" stroke-dasharray="5 3"/><circle cx="60" cy="100" r="3" fill="rgba(255,255,255,0.9)"><animate attributeName="cx" values="55;75;55" dur="1.5s" repeatCount="indefinite"/></circle><circle cx="140" cy="100" r="3" fill="rgba(255,255,255,0.9)"><animate attributeName="cx" values="125;145;125" dur="1.5s" repeatCount="indefinite"/></circle><text x="30" y="140" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="10">源节点</text><text x="100" y="150" text-anchor="middle" fill="rgba(255,255,255,0.9)" font-size="10" font-weight="bold">中继</text><text x="170" y="140" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="10">目标节点</text></svg>',
    gradient: "linear-gradient(135deg,#065f46,#10b981)",
    tags: ["中继", "多跳", "超视距"],
    client: { zh: "山地、城市峡谷、超长距离等复杂环境", en: "Mountains, urban canyons, ultra-long-distance" },
    metrics: [
      { value: "16跳", label: { zh: "中继跳数", en: "Max Hops" } },
      { value: "150km", label: { zh: "单跳延伸", en: "Per-hop Range" } },
      { value: "<20ms", label: { zh: "单跳延时", en: "Per-hop Latency" } },
      { value: "99.5%", label: { zh: "链路可靠性", en: "Reliability" } }
    ],
    background: { zh: "在山地、城市峡谷、超长距离等复杂环境中，设备之间往往无法直接建立视距链路，需要通过中继节点转发信号来突破视距限制，延伸传输距离。中继桥接是实现超视距、远距离通信的关键技术，广泛应用于山区巡检、跨海通信、城市复杂环境等场景。", en: "In mountains, urban canyons, and ultra-long-distance environments, devices often cannot establish direct line-of-sight links. Relay nodes forward signals to overcome LOS limitations and extend range. Relay bridging is key for beyond-line-of-sight communication in mountain inspection, cross-sea, and complex urban environments." },
    solution: { zh: "采用中继节点转发机制，信号从源节点经过一个或多个中继节点转发到目标节点。支持多跳中继，最多支持16跳；中继节点支持信号放大与再生，保障传输质量；支持自动路由选择，根据链路质量动态选择最优中继路径；支持频段复用，提高频谱利用率；支持中继节点即插即用，快速部署。", en: "Relay node forwarding mechanism, signals pass through one or more relay nodes from source to destination. Supports up to 16 hops; relay nodes amplify and regenerate signals for quality; automatic routing selects optimal path based on link quality; frequency reuse for spectrum efficiency; plug-and-play relay deployment." },
    results: { zh: "中继桥接传输可有效突破视距限制，单跳中继可延伸传输距离150km，多跳中继可实现更远距离通信；适用于山地、城市峡谷、跨海等复杂环境；支持自动路由和动态调整，保障链路稳定性；单跳延时低于20ms，满足多数远距离通信场景需求。", en: "Relay bridging effectively overcomes LOS limitations, extending range by 150km per hop with multi-hop for greater distances; suitable for mountains, urban canyons, and cross-sea environments; automatic routing and dynamic adjustment ensure link stability; per-hop latency below 20ms for most long-range scenarios." }
  },
  {
    id: 103,
    industry: "network",
    industryZh: "组网方案",
    industryEn: "Networking",
    title: { zh: "星形组网", en: "Star Network" },
    summary: { zh: "中心节点统一管理多个终端节点，结构简单、易于扩展，支持1对多数据采集与集中监控，适用于智慧园区、工业物联网、多点传感监测等场景。", en: "Central node uniformly manages multiple terminal nodes with simple structure and easy scalability, supporting one-to-many data collection and centralized monitoring for smart parks, industrial IoT, and multi-point sensor monitoring." },
    icon: '<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><circle cx="100" cy="100" r="22" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,1)" stroke-width="2"/><circle cx="100" cy="35" r="14" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.8)" stroke-width="2"/><circle cx="165" cy="70" r="14" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.8)" stroke-width="2"/><circle cx="165" cy="130" r="14" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.8)" stroke-width="2"/><circle cx="100" cy="165" r="14" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.8)" stroke-width="2"/><circle cx="35" cy="130" r="14" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.8)" stroke-width="2"/><circle cx="35" cy="70" r="14" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.8)" stroke-width="2"/><line x1="100" y1="78" x2="100" y2="49" stroke="rgba(255,255,255,0.6)" stroke-width="1.5"/><line x1="118" y1="88" x2="153" y2="73" stroke="rgba(255,255,255,0.6)" stroke-width="1.5"/><line x1="118" y1="112" x2="153" y2="127" stroke="rgba(255,255,255,0.6)" stroke-width="1.5"/><line x1="100" y1="122" x2="100" y2="151" stroke="rgba(255,255,255,0.6)" stroke-width="1.5"/><line x1="82" y1="112" x2="47" y2="127" stroke="rgba(255,255,255,0.6)" stroke-width="1.5"/><line x1="82" y1="88" x2="47" y2="73" stroke="rgba(255,255,255,0.6)" stroke-width="1.5"/><text x="100" y="104" text-anchor="middle" fill="rgba(255,255,255,0.9)" font-size="9" font-weight="bold">中心</text></svg>',
    gradient: "linear-gradient(135deg,#9a3412,#f97316)",
    tags: ["星形", "1对多", "集中管理"],
    client: { zh: "智慧园区、工业物联网、多点传感监测", en: "Smart parks, industrial IoT, multi-point sensing" },
    metrics: [
      { value: "64个", label: { zh: "终端数量", en: "Max Nodes" } },
      { value: "100Mbps", label: { zh: "中心带宽", en: "Center BW" } },
      { value: "集中", label: { zh: "管理方式", en: "Management" } },
      { value: "即插即用", label: { zh: "终端入网", en: "Onboarding" } }
    ],
    background: { zh: "在智慧园区、工业物联网、多点传感监测等场景中，需要一个中心节点统一管理多个终端节点，实现数据集中采集与监控。星形组网结构简单、易于管理和扩展，是多点数据采集场景的理想选择，广泛应用于园区监控、工厂数据采集、环境监测等领域。", en: "In smart parks, industrial IoT, and multi-point sensing scenarios, a central node uniformly manages multiple terminal nodes for centralized data collection and monitoring. Star networking has simple structure, easy management and scalability, ideal for multi-point data collection in park monitoring, factory data acquisition, and environmental monitoring." },
    solution: { zh: "采用中心节点+终端节点的星形拓扑结构，中心节点负责统一管理和数据汇聚，终端节点负责数据采集和执行。中心节点支持同时接入最多64个终端节点；支持时分多址（TDMA）和频分多址（FDMA），避免终端间干扰；支持终端节点自动入网和离线检测；支持中心节点与终端节点之间的双向通信；支持中心节点冗余备份，提高系统可靠性。", en: "Star topology with central node and terminal nodes. Central node manages and aggregates data, terminals collect and execute. Supports up to 64 terminals simultaneously; TDMA and FDMA to avoid interference; automatic terminal onboarding and offline detection; bidirectional communication; central node redundancy for reliability." },
    results: { zh: "星形组网结构简单、部署便捷，中心节点统一管理，终端节点即插即用；支持最多64个终端节点同时接入，满足大规模多点采集需求；中心节点集中处理数据，便于监控和决策；适用于智慧园区、工业物联网、环境监测、智慧农业等场景，系统稳定可靠，维护便捷。", en: "Star networking features simple structure, easy deployment, unified central management, and plug-and-play terminals. Supports up to 64 simultaneous terminals for large-scale multi-point collection; central data processing for monitoring and decision-making; suitable for smart parks, industrial IoT, environmental monitoring, and smart agriculture with stable and reliable operation." }
  },
  {
    id: 104,
    industry: "network",
    industryZh: "组网方案",
    industryEn: "Networking",
    title: { zh: "MESH组网", en: "MESH Network" },
    summary: { zh: "节点之间动态自组网、多跳中继，无中心节点，任意节点故障不影响整体网络，支持大规模分布式部署，适用于应急通信、战场传感、智慧城市等场景。", en: "Dynamic self-organizing network with multi-hop relay, no central node, any node failure does not affect the overall network, supporting large-scale distributed deployment for emergency communications, battlefield sensing, and smart cities." },
    icon: '<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><line x1="50" y1="50" x2="100" y2="80" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/><line x1="100" y1="80" x2="150" y2="50" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/><line x1="50" y1="50" x2="80" y2="130" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/><line x1="100" y1="80" x2="120" y2="150" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/><line x1="150" y1="50" x2="130" y2="120" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/><line x1="80" y1="130" x2="120" y2="150" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/><line x1="130" y1="120" x2="120" y2="150" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/><line x1="80" y1="130" x2="130" y2="120" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/><line x1="50" y1="50" x2="150" y2="50" stroke="rgba(255,255,255,0.3)" stroke-width="1"/><circle cx="50" cy="50" r="14" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.9)" stroke-width="2"/><circle cx="150" cy="50" r="14" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.9)" stroke-width="2"/><circle cx="100" cy="80" r="16" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,1)" stroke-width="2"/><circle cx="80" cy="130" r="14" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.9)" stroke-width="2"/><circle cx="130" cy="120" r="14" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.9)" stroke-width="2"/><circle cx="120" cy="150" r="14" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.9)" stroke-width="2"/></svg>',
    gradient: "linear-gradient(135deg,#831843,#ec4899)",
    tags: ["MESH", "自组网", "多跳中继"],
    client: { zh: "应急通信、战场传感、智慧城市等大规模分布式场景", en: "Emergency comms, battlefield sensing, smart cities" },
    metrics: [
      { value: "64个", label: { zh: "节点数量", en: "Max Nodes" } },
      { value: "自动", label: { zh: "路由选择", en: "Routing" } },
      { value: "自愈", label: { zh: "网络恢复", en: "Self-healing" } },
      { value: "无中心", label: { zh: "拓扑结构", en: "Topology" } }
    ],
    background: { zh: "在应急通信、战场传感、智慧城市等大规模分布式场景中，网络环境复杂多变，节点可能随时加入或离开，需要网络具备自组织、自愈合能力。MESH组网无中心节点，节点之间动态自组网、多跳中继，任意节点故障不影响整体网络，是高可靠性场景的理想选择，广泛应用于应急救援、军事通信、智慧城市、大规模环境监测等领域。", en: "In emergency communications, battlefield sensing, and smart city scenarios, network environments are complex and dynamic with nodes joining or leaving. Networks need self-organizing and self-healing capabilities. MESH networking has no central node, nodes dynamically self-organize with multi-hop relay, and any node failure does not affect the overall network. Widely used in emergency rescue, military communications, smart cities, and large-scale environmental monitoring." },
    solution: { zh: "采用无中心MESH拓扑结构，所有节点地位平等，节点之间自动发现邻居并建立链路。支持动态路由协议，根据链路质量和节点状态自动选择最优传输路径；支持多跳中继，数据可经过多个节点转发到达目标；支持网络自愈，当某个节点故障或离开时，网络自动重新路由，保障通信不中断；支持节点即插即用，自动入网；支持AES/ZUC/SNOW3G端到端加密，保障通信安全。", en: "Decentralized MESH topology with all nodes equal, nodes automatically discover neighbors and establish links. Dynamic routing protocol selects optimal path based on link quality and node status; multi-hop relay forwards data through multiple nodes; network self-healing automatically reroutes when a node fails or leaves; plug-and-play automatic onboarding; AES/ZUC/SNOW3G end-to-end encryption for security." },
    results: { zh: "MESH组网无中心节点，无单点故障，网络可靠性高；支持节点动态加入和离开，网络自动调整；支持多跳中继，覆盖范围广；支持网络自愈，任意节点故障不影响整体通信；支持最多64个节点同时组网，满足大规模分布式部署需求；适用于应急通信、战场传感、智慧城市、大规模环境监测等场景，部署快速、维护便捷、可靠性高。", en: "MESH networking has no central node and no single point of failure for high reliability; supports dynamic node joining and leaving with automatic network adjustment; multi-hop relay for wide coverage; self-healing ensures any node failure does not affect overall communication; supports up to 64 nodes simultaneously for large-scale distributed deployment; suitable for emergency communications, battlefield sensing, smart cities, and large-scale environmental monitoring with rapid deployment, easy maintenance, and high reliability." }
  },
  {
    id: 1,
    industry: "finance",
    industryZh: "金融",
    industryEn: "Finance",
    title: { zh: "某国有银行数字化转型项目", en: "State-owned Bank Digital Transformation" },
    client: { zh: "某国有大型商业银行", en: "A Large State-owned Commercial Bank" },
    summary: { zh: "为银行构建全栈数字化平台，实现核心系统上云与智能风控升级", en: "Built full-stack digital platform, core system cloud migration and smart risk control upgrade" },
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:80px;height:80px"><path d="M3 21h18"/><path d="M3 10h18"/><path d="M5 6l7-3 7 3"/><path d="M4 10v11"/><path d="M20 10v11"/><path d="M8 14v3"/><path d="M12 14v3"/><path d="M16 14v3"/></svg>',
    gradient: "linear-gradient(135deg,#1e3a8a,#3b82f6)",
    tags: ["云计算", "大数据", "AI风控", "核心系统"],
    metrics: [
      { value: "60%", label: { zh: "运营成本降低", en: "Cost Reduction" } },
      { value: "3x", label: { zh: "交易处理速度", en: "Transaction Speed" } },
      { value: "99.99%", label: { zh: "系统可用性", en: "Availability" } },
      { value: "85%", label: { zh: "风险识别准确率", en: "Risk Accuracy" } }
    ],
    background: { zh: "该国有银行面临核心系统老化、数据孤岛严重、风控效率低等挑战，亟需进行全面数字化转型。项目涉及核心系统上云、数据中台建设、智能风控平台搭建等多个子项目。", en: "The state-owned bank faced challenges including aging core systems, severe data silos, and low risk control efficiency, requiring comprehensive digital transformation involving core system cloud migration, data platform construction, and smart risk control platform." },
    solution: { zh: "采用智创云平台构建银行专有云，实现核心系统平滑迁移；建设统一数据中台，打通各业务线数据；基于智创大模型平台构建智能风控系统，实现实时风险识别与预警；部署零信任安全网关保障金融级安全。", en: "Built bank private cloud using Zhichuang Cloud for smooth core system migration; constructed unified data platform to break data silos; built smart risk control system based on Zhichuang LLM Platform for real-time risk identification; deployed Zero Trust Gateway for financial-grade security." },
    results: { zh: "项目上线后，银行运营成本降低60%，交易处理速度提升3倍，系统可用性达到99.99%，智能风控识别准确率达85%，成功通过等保三级认证，成为银行业数字化转型标杆案例。", en: "After launch, operating costs reduced by 60%, transaction speed increased 3x, system availability reached 99.99%, risk control accuracy reached 85%, passed Level-3 security certification, becoming a benchmark case for banking digital transformation." }
  },
  {
    id: 2,
    industry: "manufacturing",
    industryZh: "智能制造",
    industryEn: "Manufacturing",
    title: { zh: "某汽车制造工厂智能升级", en: "Automotive Manufacturing Factory Smart Upgrade" },
    client: { zh: "某头部新能源汽车制造商", en: "A Leading NEV Manufacturer" },
    summary: { zh: "打造工业互联网平台，实现生产全流程数字化与智能质检", en: "Built industrial IoT platform for full-process digitalization and smart quality inspection" },
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:80px;height:80px"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/></svg>',
    gradient: "linear-gradient(135deg,#065f46,#10b981)",
    tags: ["工业互联网", "机器视觉", "边缘计算", "数字孪生"],
    metrics: [
      { value: "40%", label: { zh: "生产效率提升", en: "Efficiency Gain" } },
      { value: "99.5%", label: { zh: "质检准确率", en: "QC Accuracy" } },
      { value: "30%", label: { zh: "不良率下降", en: "Defect Reduction" } },
      { value: "5000+", label: { zh: "设备接入数", en: "Devices Connected" } }
    ],
    background: { zh: "该新能源汽车制造商年产量超50万辆，但生产线存在设备数据不互通、质检依赖人工、生产调度不智能等问题，亟需通过工业互联网实现智能制造升级。", en: "The NEV manufacturer produces over 500K vehicles annually, but faced issues including non-interconnected equipment data, manual quality inspection, and inefficient production scheduling, requiring industrial IoT upgrade." },
    solution: { zh: "部署智联物联网平台接入全厂5000+设备，实现设备数据实时采集与监控；在产线部署智联边缘计算网关+智创视觉识别系统，实现AI智能质检；构建数字孪生系统，实现生产全流程可视化与智能调度。", en: "Deployed Zhilian IoT Platform to connect 5000+ factory devices for real-time data collection; deployed Zhilian Edge Gateway + Zhichuang Vision AI for AI-powered quality inspection; built digital twin system for full-process visualization and smart scheduling." },
    results: { zh: "项目实施后，生产效率提升40%，质检准确率达到99.5%，产品不良率下降30%，设备OEE提升25%，实现了从传统制造向智能制造的跨越，成为行业标杆工厂。", en: "After implementation, production efficiency increased by 40%, QC accuracy reached 99.5%, defect rate decreased by 30%, equipment OEE increased by 25%, achieving the leap from traditional manufacturing to smart manufacturing, becoming an industry benchmark factory." }
  },
  {
    id: 3,
    industry: "retail",
    industryZh: "零售电商",
    industryEn: "Retail",
    title: { zh: "某连锁零售全渠道数字化", en: "Chain Retail Omnichannel Digitalization" },
    client: { zh: "某全国连锁零售品牌", en: "A National Chain Retail Brand" },
    summary: { zh: "构建线上线下一体化零售平台，实现会员、库存、营销全打通", en: "Built online-offline integrated retail platform, unified membership, inventory, marketing" },
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:80px;height:80px"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
    gradient: "linear-gradient(135deg,#9a3412,#f97316)",
    tags: ["全渠道零售", "会员系统", "智能推荐", "数据中台"],
    metrics: [
      { value: "200%", label: { zh: "线上销售增长", en: "Online Sales Growth" } },
      { value: "35%", label: { zh: "复购率提升", en: "Repurchase Rate" } },
      { value: "5000万", label: { zh: "会员总数", en: "Total Members" } },
      { value: "98%", label: { zh: "库存准确率", en: "Inventory Accuracy" } }
    ],
    background: { zh: "该连锁零售品牌在全国拥有2000+门店，但线上线下渠道割裂，会员数据不互通，库存管理混乱，营销效率低，亟需构建全渠道数字化零售体系。", en: "The chain retail brand has 2000+ stores nationwide, but faced fragmented online-offline channels, non-interconnected member data, chaotic inventory management, and low marketing efficiency, requiring omnichannel digital retail system." },
    solution: { zh: "基于智创云平台构建全渠道零售中台，打通线上商城与线下门店POS系统；建设统一会员中心，实现5000万会员数据整合；利用智创大模型构建智能推荐系统，实现千人千面个性化营销；部署数据中台实现库存、销售、会员数据实时分析。", en: "Built omnichannel retail middle platform based on Zhichuang Cloud, connecting online mall and offline POS; constructed unified member center integrating 50M member data; built smart recommendation system using Zhichuang LLM for personalized marketing; deployed data platform for real-time inventory, sales, member analytics." },
    results: { zh: "项目上线后，线上销售额增长200%，会员复购率提升35%，库存准确率达到98%，营销ROI提升3倍，成功实现全渠道数字化转型，成为零售行业数字化标杆。", en: "After launch, online sales increased by 200%, member repurchase rate increased by 35%, inventory accuracy reached 98%, marketing ROI increased 3x, successfully achieving omnichannel digital transformation, becoming a retail industry benchmark." }
  },
  {
    id: 4,
    industry: "healthcare",
    industryZh: "医疗健康",
    industryEn: "Healthcare",
    title: { zh: "某三甲医院智慧医疗建设", en: "Tertiary Hospital Smart Healthcare Construction" },
    client: { zh: "某省级三甲综合医院", en: "A Provincial Tertiary General Hospital" },
    summary: { zh: "建设智慧医院平台，实现AI辅助诊断、智能影像与医疗数据治理", en: "Built smart hospital platform with AI-assisted diagnosis, smart imaging, medical data governance" },
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:80px;height:80px"><path d="M12 2v20"/><path d="M2 12h20"/><circle cx="12" cy="12" r="10"/></svg>',
    gradient: "linear-gradient(135deg,#831843,#ec4899)",
    tags: ["AI医疗", "智能影像", "数据治理", "远程会诊"],
    metrics: [
      { value: "95%", label: { zh: "影像诊断准确率", en: "Imaging Accuracy" } },
      { value: "50%", label: { zh: "诊断效率提升", en: "Diagnosis Efficiency" } },
      { value: "30%", label: { zh: "平均住院日缩短", en: "LOS Reduction" } },
      { value: "100万+", label: { zh: "年服务患者", en: "Annual Patients" } }
    ],
    background: { zh: "该三甲医院年门诊量超300万人次，面临医生工作负荷大、影像诊断效率低、医疗数据不规范、基层医院诊疗能力不足等挑战，亟需通过AI与数字化提升医疗服务能力。", en: "The tertiary hospital has over 3M annual outpatient visits, facing heavy doctor workload, low imaging diagnosis efficiency, non-standardized medical data, and insufficient grassroots hospital diagnosis capability, requiring AI and digitalization to improve healthcare services." },
    solution: { zh: "部署智创视觉识别系统构建AI影像诊断平台，支持CT、MRI、X光等多模态影像智能分析；基于智创大模型构建AI辅助诊断系统，提供临床决策支持；建设医疗数据中台实现数据标准化治理；搭建远程会诊平台连接基层医院。", en: "Deployed Zhichuang Vision AI for AI imaging diagnosis platform supporting CT, MRI, X-ray multimodal analysis; built AI-assisted diagnosis system based on Zhichuang LLM for clinical decision support; constructed medical data platform for standardized data governance; built remote consultation platform connecting grassroots hospitals." },
    results: { zh: "项目实施后，影像诊断准确率达到95%，医生诊断效率提升50%，患者平均住院日缩短30%，远程会诊覆盖50+基层医院，年服务患者超100万人次，显著提升了区域医疗服务水平。", en: "After implementation, imaging diagnosis accuracy reached 95%, doctor diagnosis efficiency increased by 50%, average length of stay decreased by 30%, remote consultation covered 50+ grassroots hospitals, serving over 1M patients annually, significantly improving regional healthcare services." }
  },
  {
    id: 5,
    industry: "logistics",
    industryZh: "智慧物流",
    industryEn: "Logistics",
    title: { zh: "某物流集团智慧供应链平台", en: "Logistics Group Smart Supply Chain Platform" },
    client: { zh: "某全国性综合物流集团", en: "A National Comprehensive Logistics Group" },
    summary: { zh: "打造智慧物流平台，实现车辆调度、仓储管理、路径优化全链路智能化", en: "Built smart logistics platform for vehicle scheduling, warehouse management, route optimization" },
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:80px;height:80px"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',
    gradient: "linear-gradient(135deg,#1e3a8a,#06b6d4)",
    tags: ["智慧物流", "IoT追踪", "AI调度", "数字孪生"],
    metrics: [
      { value: "25%", label: { zh: "物流成本降低", en: "Cost Reduction" } },
      { value: "40%", label: { zh: "配送效率提升", en: "Delivery Efficiency" } },
      { value: "10万+", label: { zh: "车辆接入数", en: "Vehicles Connected" } },
      { value: "99%", label: { zh: "准时送达率", en: "On-time Rate" } }
    ],
    background: { zh: "该物流集团拥有10万+车辆、500+仓库，但存在车辆调度不智能、仓储管理粗放、运输路径不优、货物追踪不实时等问题，物流成本居高不下，亟需智慧化升级。", en: "The logistics group has 100K+ vehicles and 500+ warehouses, but faced inefficient vehicle scheduling, extensive warehouse management, suboptimal routes, non-real-time cargo tracking, and high logistics costs, requiring smart upgrade." },
    solution: { zh: "部署智联物联网平台接入10万+车辆与仓储设备，实现货物全程实时追踪；基于智创大模型构建AI智能调度系统，实现车辆与订单智能匹配；利用智创数据中台构建路径优化算法，降低空驶率；搭建数字孪生平台实现物流全链路可视化。", en: "Deployed Zhilian IoT Platform connecting 100K+ vehicles and warehouse equipment for real-time cargo tracking; built AI smart scheduling system based on Zhichuang LLM for intelligent vehicle-order matching; used Zhichuang Data Platform for route optimization algorithm to reduce empty driving; built digital twin platform for full logistics visualization." },
    results: { zh: "项目上线后，物流成本降低25%，配送效率提升40%，车辆空驶率下降35%，准时送达率达到99%，仓储周转率提升30%，实现了从传统物流向智慧物流的转型，成为行业标杆。", en: "After launch, logistics costs reduced by 25%, delivery efficiency increased by 40%, empty driving rate decreased by 35%, on-time delivery rate reached 99%, warehouse turnover increased by 30%, achieving transformation from traditional to smart logistics, becoming an industry benchmark." }
  },
  {
    id: 6,
    industry: "government",
    industryZh: "智慧城市",
    industryEn: "Smart City",
    title: { zh: "某省会城市智慧城市大脑", en: "Provincial Capital Smart City Brain" },
    client: { zh: "某新一线城市人民政府", en: "A New First-tier City Government" },
    summary: { zh: "构建城市级智慧城市大脑，实现城市治理、交通、安防、环保全面智能化", en: "Built city-level smart city brain for urban governance, traffic, security, environmental intelligence" },
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:80px;height:80px"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9v.01"/><path d="M9 12v.01"/><path d="M9 15v.01"/><path d="M9 18v.01"/></svg>',
    gradient: "linear-gradient(135deg,#134e4a,#14b8a6)",
    tags: ["智慧城市", "城市大脑", "AI治理", "数据中台"],
    metrics: [
      { value: "30%", label: { zh: "城市事件处置效率", en: "Event Handling Efficiency" } },
      { value: "20%", label: { zh: "交通拥堵缓解", en: "Traffic Congestion Relief" } },
      { value: "500万+", label: { zh: "接入物联网设备", en: "IoT Devices Connected" } },
      { value: "95%", label: { zh: "市民满意度", en: "Citizen Satisfaction" } }
    ],
    background: { zh: "该新一线城市常住人口超1200万，城市治理面临交通拥堵、事件处置慢、环保监测难、安防压力大等挑战，亟需构建城市级智慧城市大脑实现精细化治理。", en: "The new first-tier city has over 12M residents, facing challenges including traffic congestion, slow event handling, difficult environmental monitoring, and high security pressure, requiring city-level smart city brain for refined governance." },
    solution: { zh: "基于智创云平台构建城市级云基础设施，支撑500万+物联网设备接入；建设城市数据中台，打通公安、交通、环保、城管等20+部门数据；基于智创大模型构建AI城市治理引擎，实现事件智能发现与自动派单；部署智创视觉识别系统实现交通与安防智能分析。", en: "Built city-level cloud infrastructure based on Zhichuang Cloud supporting 5M+ IoT devices; constructed city data platform connecting 20+ departments including police, traffic, environment, urban management; built AI city governance engine based on Zhichuang LLM for intelligent event discovery and auto dispatch; deployed Zhichuang Vision AI for traffic and security analysis." },
    results: { zh: "项目上线后，城市事件处置效率提升30%，交通拥堵指数下降20%，环保监测覆盖率达到100%，安防响应时间缩短50%，市民满意度达到95%，成为全国智慧城市建设标杆。", en: "After launch, city event handling efficiency increased by 30%, traffic congestion index decreased by 20%, environmental monitoring coverage reached 100%, security response time shortened by 50%, citizen satisfaction reached 95%, becoming a national smart city benchmark." }
  }
];
