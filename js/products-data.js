/* ========================================
   产品数据
   ======================================== */
window.PRODUCTS_DATA = [
  // ===== VD601 无线图传模块 =====
  {
    id: 1,
    category: "cat_digital",
    categoryZh: "数字图传",
    categoryEn: "Digital Video Link",
    tags: ["cat_star", "cat_mesh"],
    name: { zh: "VD601 无线图传", en: "VD601 Wireless Video Transmission Module" },
    tagline: { zh: "", en: "" },
    price: { zh: "面议", en: "Contact for price" },
    icon: '<img src="assets/products/vd601.png" style="width:100%;height:100%;object-fit:contain;" alt="VD601">',
    gallery: [
      "assets/products/vd601-view1.png",
      "assets/products/vd601-view2.png",
      "assets/products/vd601-view3.png",
      "assets/products/vd601-view4.png"
    ],
    features: [
      { zh: "远传输距离 150km（点对点地对空）", en: "Long-range transmission 150km (point-to-point)" },
      { zh: "最大传输速率 100Mbps", en: "Max throughput 100Mbps" },
      { zh: "MESH组网64节点 / 中继16跳", en: "MESH 64 nodes / 16-hop relay" },
      { zh: "自适应跳频抗干扰，QPSK/QAM16/QAM64自动适配", en: "Adaptive frequency hopping, QPSK/QAM16/QAM64 auto-adapt" }
    ],
    specs: [
      { label: { zh: "工作频段", en: "Frequency" }, value: { zh: "806-826MHz/1428-1468MHz/1420-1530MHz/2400-2482MHz（可定制）", en: "806-826MHz/1428-1468MHz/1420-1530MHz/2400-2482MHz (customizable)" } },
      { label: { zh: "传输速率", en: "Throughput" }, value: { zh: "最大 100Mbps", en: "Max 100Mbps" } },
      { label: { zh: "工作带宽", en: "Bandwidth" }, value: { zh: "20MHz, 10MHz, 5MHz（可调）", en: "20MHz, 10MHz, 5MHz (adjustable)" } },
      { label: { zh: "数据加密", en: "Encryption" }, value: { zh: "ZUC, SNOW3G, AES", en: "ZUC, SNOW3G, AES" } },
      { label: { zh: "收发模式", en: "TX/RX Mode" }, value: { zh: "单发双收（1T2R），双发双收（2T2R）", en: "1T2R, 2T2R" } },
      { label: { zh: "接口", en: "Interfaces" }, value: { zh: "串口TTL×3 / RS232×2 / LAN×2 / CAN×2 / SBUS×2", en: "TTL×3 / RS232×2 / LAN×2 / CAN×2 / SBUS×2" } },
      { label: { zh: "供电", en: "Power" }, value: { zh: "DC 9~55V", en: "DC 9~55V" } },
      { label: { zh: "工作温度", en: "Temp Range" }, value: { zh: "-20°C ~ 75°C", en: "-20°C ~ 75°C" } },
      { label: { zh: "尺寸重量", en: "Size & Weight" }, value: { zh: "99.1×66.9×30.6mm / 350g（不含天线）", en: "99.1×66.9×30.6mm / 350g (excl. antenna)" } }
    ],
    highlights: [
      { icon: "assets/products/vd601-icon1.png", label: { zh: "最远传输距离", en: "Max Range" }, value: { zh: "150Km", en: "150Km" } },
      { icon: "assets/products/vd601-icon2.png", label: { zh: "中继", en: "Relay" }, value: { zh: "16跳", en: "16 Hops" } },
      { icon: "assets/products/vd601-icon3.png", label: { zh: "最大传输速率", en: "Max Throughput" }, value: { zh: "100Mbps", en: "100Mbps" } },
      { icon: "assets/products/vd601-icon4.png", label: { zh: "星型组网", en: "Star Network" }, value: { zh: "1+64", en: "1+64" } },
      { icon: "assets/products/vd601-icon5.png", label: { zh: "MESH组网", en: "MESH Network" }, value: { zh: "64节点", en: "64 Nodes" } },
      { icon: "assets/products/vd601-icon6.png", label: { zh: "高灵敏度", en: "High Sensitivity" }, value: { zh: "自适应", en: "Adaptive" } }
    ],
    description: { zh: "VD601是一款工业级无线图传模块，支持点对点、点对多、MESH组网等多种组网方式，最远传输距离可达150km，最大传输速率100Mbps。具备自适应跳频抗干扰能力，支持ZUC/SNOW3G/AES数据加密，广泛应用于无人机、无人车、机器人等远距离无线通信场景。", en: "VD601 is an industrial-grade wireless transmission module supporting point-to-point, point-to-multipoint, and MESH networking with up to 150km range and 100Mbps throughput. Features adaptive frequency hopping, ZUC/SNOW3G/AES encryption, ideal for drones, UGVs, robots, and long-range wireless communication." }
  },

  // ===== VA10 高清图传发射模块 =====
  {
    id: 2,
    category: "cat_analog",
    categoryZh: "模拟图传",
    categoryEn: "Analog Video Link",
    name: { zh: "VA10模拟图传", en: "VA10 Analog Video Link" },
    tagline: { zh: "", en: "" },
    price: { zh: "面议", en: "Contact for price" },
    icon: '<img src="assets/products/va10.png" style="width:100%;height:100%;object-fit:contain;" alt="VA10">',
    gallery: [
      "assets/products/va10-view1.png",
      "assets/products/va10-view2.png",
      "assets/products/va10-view3.png",
      "assets/products/va10-view4.png"
    ],
    features: [
      { zh: "4.8-7.2GHz宽频段覆盖", en: "4.8-7.2GHz wide frequency coverage" },
      { zh: "184个频点可选，抗干扰能力强", en: "184 channels selectable, strong anti-interference" },
      { zh: "散热优良，体积小巧，重量轻，安装方便", en: "Excellent heat dissipation, compact size, lightweight, easy installation" }
    ],
    specs: [
      { label: { zh: "频率", en: "Frequency" }, value: { zh: "4867MHz-7210MHz", en: "4867MHz-7210MHz" } },
      { label: { zh: "最大功率", en: "Max Power" }, value: { zh: "4W（25mW/2000mW/4000mW可调）", en: "4W (25mW/2000mW/4000mW adjustable)" } },
      { label: { zh: "输入电压", en: "Input Voltage" }, value: { zh: "DC 7V-36V，支持2-8S电池", en: "DC 7V-36V, 2-8S battery" } },
      { label: { zh: "通讯协议", en: "Protocol" }, value: { zh: "IRC Tramp", en: "IRC Tramp" } },
      { label: { zh: "散热方式", en: "Cooling" }, value: { zh: "铝合金散热片+风扇", en: "Aluminum heatsink + fan" } },
      { label: { zh: "安装孔位", en: "Mounting Holes" }, value: { zh: "20mm*20mm/2mm", en: "20mm*20mm/2mm" } },
      { label: { zh: "尺寸重量", en: "Size & Weight" }, value: { zh: "53×29×17.8mm / 25g", en: "53×29×17.8mm / 25g" } },
      { label: { zh: "天线接口", en: "Antenna Connector" }, value: { zh: "SMA 母座内孔", en: "SMA Female" } }
    ],
    highlights: [
      { icon: "assets/products/va10-icon2.png", label: { zh: "4.8-7.2GHz", en: "4.8-7.2GHz" }, value: { zh: "宽频段", en: "Wide Band" } },
      { icon: "assets/products/va10-icon1.png", label: { zh: "4W高功率", en: "4W High Power" }, value: { zh: "可调", en: "Adjustable" } },
      { icon: "assets/products/va10-icon4.png", label: { zh: "184CH信道", en: "184CH Channels" }, value: { zh: "可选", en: "Selectable" } },
      { icon: "assets/products/va10-icon5.png", label: { zh: "稳定传输", en: "Stable Transmission" }, value: { zh: "抗干扰强", en: "Anti-Interference" } },
      { icon: "assets/products/va10-icon6.png", label: { zh: "全金属外壳", en: "All-Metal Shell" }, value: { zh: "高效散热", en: "Efficient Cooling" } },
      { icon: "assets/products/va10-icon7.png", label: { zh: "轻巧便携", en: "Lightweight" }, value: { zh: "安装简便", en: "Easy Install" } }
    ],
    description: { zh: "VA10是一款4.8-7.2GHz宽频段模拟图传发射模块，最高4W可调发射功率，184个频点可选，全金属外壳散热优良，体积小巧重量轻，广泛应用于竞速无人机、FPV等低延时传输场景。", en: "VA10 is a 4.8-7.2GHz wide-band analog video transmitter with up to 4W adjustable power, 184 channels, all-metal housing with excellent heat dissipation, compact and lightweight, ideal for racing drones, FPV, and low-latency transmission scenarios." }
  },

  // ===== ZS1000 惯性导航传感器 =====
  {
    id: 3,
    category: "cat1",
    categoryZh: "500Hz",
    categoryEn: "500Hz",
    name: { zh: "ZS1000 惯性导航传感器", en: "ZS1000 Inertial Navigation Sensor" },
    tagline: { zh: "高精度陀螺仪加速度计", en: "High-precision IMU" },
    price: { zh: "面议", en: "Contact for price" },
    icon: '<img src="assets/products/zs1000.png" style="width:100%;height:100%;object-fit:contain;" alt="ZS1000">',
    gallery: [
      "assets/products/zs1000.png",
      "assets/products/zs1000-view1.png",
      "assets/products/zs1000-view2.png"
    ],
    features: [
      { zh: "新一代陀螺仪和加速度计，高精度高可靠性", en: "Next-gen gyroscope & accelerometer, high precision & reliability" },
      { zh: "创新软件算法，优秀降噪能力，快速稳定", en: "Innovative algorithms, excellent noise reduction, fast stabilization" },
      { zh: "特别适合震动大慢速系统，极致适应能力", en: "Ideal for high-vibration slow systems, extreme adaptability" },
      { zh: "高速数据传输，输出率高达500Hz", en: "High-speed data output up to 500Hz" },
      { zh: "全金属防护外壳，抗干扰能力强", en: "All-metal protective housing, strong anti-interference" },
      { zh: "地面站可视化界面，支持软件升级", en: "Ground station visualization, software upgradable" }
    ],
    specs: [
      { label: { zh: "角速度量程", en: "Gyro Range" }, value: { zh: "2000dps", en: "2000dps" } },
      { label: { zh: "角速度零偏稳定性", en: "Gyro Bias Stability" }, value: { zh: "6°/h", en: "6°/h" } },
      { label: { zh: "加速度量程", en: "Accel Range" }, value: { zh: "16g", en: "16g" } },
      { label: { zh: "加速度零偏稳定性", en: "Accel Bias Stability" }, value: { zh: "40μg", en: "40μg" } },
      { label: { zh: "横滚/俯仰角精度", en: "Roll/Pitch Accuracy" }, value: { zh: "0.1°", en: "0.1°" } },
      { label: { zh: "输出频率", en: "Output Rate" }, value: { zh: "500Hz", en: "500Hz" } }
    ],
    highlights: [],
    description: { zh: "ZS1000是一款高精度惯性导航传感器，集成新一代陀螺仪和加速度计，搭配创新软件算法实现优秀降噪和快速稳定，输出率高达500Hz，全金属防护外壳抗干扰能力强，广泛应用于无人机、无人车、机器人等需要高精度姿态测量的场景。", en: "ZS1000 is a high-precision inertial navigation sensor integrating next-gen gyroscope and accelerometer with innovative algorithms for excellent noise reduction and fast stabilization, 500Hz output, all-metal housing, ideal for drones, UGVs, robots, and high-precision attitude measurement." }
  },

  // ===== D+ 远距离数传模块 =====
  {
    id: 4,
    category: "cat_digital",
    categoryZh: "数字图传",
    categoryEn: "Digital Video Link",
    tags: ["cat_star", "cat_mesh"],
    name: { zh: "D+ 远距离数传", en: "D+ Long-range Data Link Module" },
    tagline: { zh: "300km地对空 自适应跳频", en: "300km Air-to-Ground Adaptive FHSS" },
    price: { zh: "面议", en: "Contact for price" },
    icon: '<img src="assets/products/d_plus.png" style="width:100%;height:100%;object-fit:contain;" alt="D+">',
    gallery: [
      "assets/products/d_plus.png",
      "assets/products/d_plus-view1.png"
    ],
    features: [
      { zh: "自适应跳频，每秒大于1800次", en: "Adaptive frequency hopping >1800 hops/s" },
      { zh: "地对空距离支持300km", en: "Air-to-ground range up to 300km" },
      { zh: "全双工多路复用通信", en: "Full-duplex multiplexing communication" },
      { zh: "多种数据速率可选（735/370/185/92kbps）", en: "Multiple data rates (735/370/185/92kbps)" },
      { zh: "宽温工业级设计 -40°C~+85°C", en: "Industrial temp range -40°C~+85°C" }
    ],
    specs: [
      { label: { zh: "工作频段", en: "Frequency" }, value: { zh: "820-940MHz", en: "820-940MHz" } },
      { label: { zh: "地对空距离", en: "A2G Range" }, value: { zh: "300km", en: "300km" } },
      { label: { zh: "数据速率", en: "Data Rate" }, value: { zh: "735/370/185/92kbps", en: "735/370/185/92kbps" } },
      { label: { zh: "跳频速度", en: "FHSS Speed" }, value: { zh: ">1800次/秒", en: ">1800 hops/s" } },
      { label: { zh: "通讯方式", en: "Communication" }, value: { zh: "全双工多路复用", en: "Full-duplex multiplexing" } },
      { label: { zh: "工作温度", en: "Temp Range" }, value: { zh: "-40°C ~ +85°C", en: "-40°C ~ +85°C" } }
    ],
    highlights: [
      { icon: "assets/products/highlight_range.png", label: { zh: "最远传输距离", en: "Max Range" }, value: { zh: "300km", en: "300km" } },
      { icon: "assets/products/highlight_relay.png", label: { zh: "中继", en: "Relay" }, value: { zh: "支持16跳", en: "16 Hops" } },
      { icon: "assets/products/highlight_star.png", label: { zh: "星型组网", en: "Star Network" }, value: { zh: "最多1024个", en: "Up to 1024" } },
      { icon: "assets/products/highlight_mesh.png", label: { zh: "MESH组网", en: "MESH Network" }, value: { zh: "最多1024个", en: "Up to 1024" } }
    ],
    description: { zh: "D+是一款工业级远距离数传模块，支持自适应跳频（每秒大于1800次），地对空距离可达300km，全双工多路复用通信，多种数据速率可选，宽温工业级设计，广泛应用于无人机、无人车、遥测遥控等远距离数据传输场景。", en: "D+ is an industrial-grade long-range data link module with adaptive frequency hopping (>1800 hops/s), up to 300km air-to-ground range, full-duplex multiplexing, multiple data rates, industrial temp range, ideal for drones, UGVs, telemetry, and long-range data transmission." }
  },

  // ===== VD602 无线图传模块 =====
  {
    id: 5,
    category: "cat_digital",
    categoryZh: "数字图传",
    categoryEn: "Digital Video Link",
    tags: ["cat_star", "cat_mesh"],
    name: { zh: "VD602 无线图传", en: "VD602 Wireless Video Transmission Module" },
    tagline: { zh: "15km地对空 100Mbps MESH组网", en: "15km A2G 100Mbps MESH" },
    price: { zh: "面议", en: "Contact for price" },
    icon: '<img src="assets/products/vd602.png" style="width:100%;height:100%;object-fit:contain;" alt="VD602">',
    gallery: [
      "assets/products/vd602.png",
      "assets/products/vd602-view2.png",
      "assets/products/vd602-view4.png",
      "assets/products/vd602-view5.png"
    ],
    features: [
      { zh: "15km超远距高清无线图传", en: "Up to 15km long-range HD video transmission" },
      { zh: "支持MESH组网与多跳中继", en: "MESH networking & multi-hop relay" },
      { zh: "最大100Mbps传输速率", en: "Max 100Mbps throughput" },
      { zh: "自适应跳频抗干扰", en: "Adaptive frequency hopping anti-interference" },
      { zh: "ZUC/SNOW3G/AES数据加密", en: "ZUC/SNOW3G/AES data encryption" },
      { zh: "丰富接口：TTL/RS232/LAN/CAN/SBUS", en: "Rich interfaces: TTL/RS232/LAN/CAN/SBUS" }
    ],
    specs: [
      { label: { zh: "工作频段", en: "Frequency" }, value: { zh: "806-826MHz/1428-1468MHz/1420-1530MHz/2400-2482MHz（可定制）", en: "806-826MHz/1428-1468MHz/1420-1530MHz/2400-2482MHz (customizable)" } },
      { label: { zh: "地对空距离", en: "A2G Range" }, value: { zh: "15km", en: "15km" } },
      { label: { zh: "传输速率", en: "Throughput" }, value: { zh: "最大100Mbps", en: "Max 100Mbps" } },
      { label: { zh: "组网方式", en: "Networking" }, value: { zh: "点对点/1对多/中继16跳/MESH 64节点", en: "P2P/1-to-many/16-hop relay/MESH 64 nodes" } },
      { label: { zh: "调制方式", en: "Modulation" }, value: { zh: "QPSK/QAM16/QAM64自动适配", en: "QPSK/QAM16/QAM64 auto-adapt" } },
      { label: { zh: "尺寸重量", en: "Size & Weight" }, value: { zh: "99.1×66.9×21.3mm / 220g", en: "99.1×66.9×21.3mm / 220g" } }
    ],
    highlights: [
      { icon: "assets/products/highlight_speed.png", label: { zh: "最大传输速率", en: "Max Throughput" }, value: { zh: "100Mbps", en: "100Mbps" } },
      { icon: "assets/products/highlight_sensitivity.png", label: { zh: "高灵敏度", en: "High Sensitivity" }, value: { zh: "自适应", en: "Adaptive" } },
      { icon: "assets/products/highlight_range.png", label: { zh: "最远传输距离", en: "Max Range" }, value: { zh: "15Km", en: "15Km" } },
      { icon: "assets/products/highlight_relay.png", label: { zh: "中继", en: "Relay" }, value: { zh: "16跳", en: "16 Hops" } },
      { icon: "assets/products/highlight_star.png", label: { zh: "星型组网", en: "Star Network" }, value: { zh: "1+64", en: "1+64" } },
      { icon: "assets/products/highlight_mesh.png", label: { zh: "MESH组网", en: "MESH Network" }, value: { zh: "64节点", en: "64 Nodes" } }
    ],
    description: { zh: "VD602是一款工业级无线图传模块，支持点对点、点对多、MESH组网等多种组网方式，最远传输距离15km，最大传输速率100Mbps，具备自适应跳频抗干扰和ZUC/SNOW3G/AES数据加密能力，丰富接口满足多种应用场景需求。", en: "VD602 is an industrial-grade wireless transmission module supporting P2P, point-to-multipoint, and MESH networking with up to 15km range and 100Mbps throughput, adaptive frequency hopping, ZUC/SNOW3G/AES encryption, and rich interfaces for diverse applications." }
  },

  // ===== VA20 高清图传发射模块 =====
  {
    id: 6,
    category: "cat_digital",
    categoryZh: "数字图传",
    categoryEn: "Digital Video Link",
    name: { zh: "VA20 高清图传发射", en: "VA20 HD Video Transmitter Module" },
    tagline: { zh: "1.2G 4W VTX", en: "1.2GHz 4W VTX" },
    price: { zh: "面议", en: "Contact for price" },
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:120px;height:120px"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><circle cx="12" cy="12" r="2"/><path d="M17 12h3M4 12h3"/></svg>',
    gallery: [],
    features: [
      { zh: "1.2GHz频段，传输距离远", en: "1.2GHz band, long transmission range" },
      { zh: "最高4W可调发射功率（25mW/2000mW/4000mW）", en: "Up to 4W adjustable power (25mW/2000mW/4000mW)" },
      { zh: "8个频点可选，抗干扰能力强", en: "8 channels selectable, strong anti-interference" },
      { zh: "全金属外壳，散热优良，稳定可靠", en: "All-metal housing, excellent heat dissipation" },
      { zh: "体积小巧，重量轻，安装方便", en: "Compact size, lightweight, easy installation" }
    ],
    specs: [
      { label: { zh: "频率", en: "Frequency" }, value: { zh: "1080-1360MHz", en: "1080-1360MHz" } },
      { label: { zh: "最大功率", en: "Max Power" }, value: { zh: "4W（25mW/2000mW/4000mW可调）", en: "4W (25mW/2000mW/4000mW adjustable)" } },
      { label: { zh: "输入电压", en: "Input Voltage" }, value: { zh: "DC 7V-36V，支持2-8S电池", en: "DC 7V-36V, 2-8S battery" } },
      { label: { zh: "通讯协议", en: "Protocol" }, value: { zh: "IRC Tramp", en: "IRC Tramp" } },
      { label: { zh: "散热方式", en: "Cooling" }, value: { zh: "铝合金散热片+风扇", en: "Aluminum heatsink + fan" } },
      { label: { zh: "尺寸重量", en: "Size & Weight" }, value: { zh: "53×29×17.8mm / 25g", en: "53×29×17.8mm / 25g" } }
    ],
    highlights: [
      { icon: "assets/products/va10-icon2.png", label: { zh: "宽频段", en: "Wide Band" }, value: { zh: "1.2GHz", en: "1.2GHz" } },
      { icon: "assets/products/va10-icon1.png", label: { zh: "高功率", en: "High Power" }, value: { zh: "4W可调", en: "4W Adjustable" } },
      { icon: "assets/products/va10-icon4.png", label: { zh: "信道", en: "Channels" }, value: { zh: "8CH", en: "8CH" } },
      { icon: "assets/products/va10-icon5.png", label: { zh: "抗干扰", en: "Anti-Interference" }, value: { zh: "稳定传输", en: "Stable" } },
      { icon: "assets/products/va10-icon6.png", label: { zh: "散热", en: "Cooling" }, value: { zh: "全金属外壳", en: "All-Metal" } },
      { icon: "assets/products/va10-icon7.png", label: { zh: "便携", en: "Portable" }, value: { zh: "轻巧安装", en: "Lightweight" } }
    ],
    description: { zh: "VA20是一款1.2GHz频段高清图传发射模块，最高4W可调发射功率，8个频点可选，全金属外壳散热优良，体积小巧重量轻，1.2GHz频段绕射能力强，适用于复杂环境下的远距离视频传输场景。", en: "VA20 is a 1.2GHz HD video transmitter with up to 4W adjustable power, 8 channels, all-metal housing, compact and lightweight. The 1.2GHz band offers strong diffraction capability, ideal for long-range video transmission in complex environments." }
  },

  // ===== D 数传模块 =====
  {
    id: 7,
    category: "cat_digital",
    categoryZh: "数字图传",
    categoryEn: "Digital Video Link",
    tags: ["cat_star", "cat_mesh"],
    name: { zh: "D 数传", en: "D Data Link Module" },
    tagline: { zh: "30km地对空 500mW", en: "30km A2G 500mW" },
    price: { zh: "面议", en: "Contact for price" },
    icon: '<img src="assets/products/d.png" style="width:100%;height:100%;object-fit:contain;" alt="D">',
    gallery: [
      "assets/products/d.png",
      "assets/products/d-view1.png"
    ],
    features: [
      { zh: "自适应跳频，每秒大于1800次", en: "Adaptive frequency hopping >1800 hops/s" },
      { zh: "地对空距离支持30km", en: "Air-to-ground range up to 30km" },
      { zh: "500mW发射功率", en: "500mW transmit power" },
      { zh: "全双工多路复用通信", en: "Full-duplex multiplexing communication" },
      { zh: "宽温工业级设计 -40°C~+85°C", en: "Industrial temp range -40°C~+85°C" }
    ],
    specs: [
      { label: { zh: "发射功率", en: "Tx Power" }, value: { zh: "500mW（27dBm）", en: "500mW (27dBm)" } },
      { label: { zh: "地对空距离", en: "A2G Range" }, value: { zh: "30km", en: "30km" } },
      { label: { zh: "数据速率", en: "Data Rate" }, value: { zh: "735/370/185/92kbps", en: "735/370/185/92kbps" } },
      { label: { zh: "无线带宽", en: "Bandwidth" }, value: { zh: "1MHz/500kHz/250kHz/125kHz", en: "1MHz/500kHz/250kHz/125kHz" } },
      { label: { zh: "移动速度", en: "Mobility" }, value: { zh: "<1250km/h", en: "<1250km/h" } },
      { label: { zh: "工作温度", en: "Temp Range" }, value: { zh: "-40°C ~ +85°C", en: "-40°C ~ +85°C" } }
    ],
    highlights: [
      { icon: "assets/products/highlight_range.png", label: { zh: "最远传输距离", en: "Max Range" }, value: { zh: "30Km", en: "30Km" } },
      { icon: "assets/products/highlight_relay.png", label: { zh: "中继", en: "Relay" }, value: { zh: "支持16跳", en: "16 Hops" } },
      { icon: "assets/products/highlight_star.png", label: { zh: "星型组网", en: "Star Network" }, value: { zh: "最多1024个", en: "Up to 1024" } },
      { icon: "assets/products/highlight_mesh.png", label: { zh: "MESH组网", en: "MESH Network" }, value: { zh: "最多1024个", en: "Up to 1024" } }
    ],
    description: { zh: "D是一款工业级数传模块，支持自适应跳频（每秒大于1800次），地对空距离可达30km，500mW发射功率，全双工多路复用通信，多种数据速率和带宽可选，宽温工业级设计，适用于无人机、无人车、遥测遥控等中远距离数据传输场景。", en: "D is an industrial-grade data link module with adaptive frequency hopping (>1800 hops/s), up to 30km air-to-ground range, 500mW power, full-duplex multiplexing, multiple data rates and bandwidths, industrial temp range, ideal for drones, UGVs, telemetry, and medium-range data transmission." }
  },

  // ===== VM+ 图数一体模块 =====
  {
    id: 8,
    category: "cat_digital",
    categoryZh: "数字图传",
    categoryEn: "Digital Video Link",
    tags: ["cat_star", "cat_mesh"],
    name: { zh: "VM+ 图数一体", en: "VM+ Video & Data Integrated Module" },
    tagline: { zh: "500km地对空 47Mbps AES256", en: "500km A2G 47Mbps AES256" },
    price: { zh: "面议", en: "Contact for price" },
    icon: '<img src="assets/products/vm_plus.png" style="width:100%;height:100%;object-fit:contain;" alt="VM+">',
    gallery: [],
    features: [
      { zh: "500km超远距图数一体传输", en: "Up to 500km ultra-long-range video & data transmission" },
      { zh: "最大47Mbps速率", en: "Max 47Mbps throughput" },
      { zh: "AES256加密", en: "AES256 encryption" },
      { zh: "自适应跳频，最快>1000跳/秒", en: "Adaptive FHSS >1000 hops/s" },
      { zh: "双网口+双RS232+UART丰富接口", en: "Dual Ethernet + dual RS232 + UART" },
      { zh: "宽温工业级设计 -40°C~+85°C", en: "Industrial temp range -40°C~+85°C" }
    ],
    specs: [
      { label: { zh: "工作频段", en: "Frequency" }, value: { zh: "600M-2.4GHz（70M-6GHz可定制）", en: "600M-2.4GHz (70M-6GHz customizable)" } },
      { label: { zh: "地对空距离", en: "A2G Range" }, value: { zh: "500km", en: "500km" } },
      { label: { zh: "速率", en: "Throughput" }, value: { zh: "最大47Mbps", en: "Max 47Mbps" } },
      { label: { zh: "加密方式", en: "Encryption" }, value: { zh: "AES256", en: "AES256" } },
      { label: { zh: "调制方式", en: "Modulation" }, value: { zh: "QPSK/16QAM/64QAM自适应", en: "QPSK/16QAM/64QAM auto-adapt" } },
      { label: { zh: "接口", en: "Interfaces" }, value: { zh: "网口×2 / RS232×2 / UART×1 / 天线×2", en: "Ethernet×2 / RS232×2 / UART×1 / Antenna×2" } }
    ],
    highlights: [
      { icon: "assets/products/highlight_range.png", label: { zh: "最远传输距离", en: "Max Range" }, value: { zh: "500km", en: "500km" } },
      { icon: "assets/products/highlight_relay.png", label: { zh: "中继", en: "Relay" }, value: { zh: "支持16跳", en: "16 Hops" } },
      { icon: "assets/products/highlight_star.png", label: { zh: "星型组网", en: "Star Network" }, value: { zh: "支持64个", en: "Up to 64" } },
      { icon: "assets/products/highlight_mesh.png", label: { zh: "MESH组网", en: "MESH Network" }, value: { zh: "支持64个", en: "Up to 64" } }
    ],
    description: { zh: "VM+是一款超远距图数一体模块，地对空距离可达500km，最大47Mbps速率，AES256加密，自适应跳频最快>1000跳/秒，双网口+双RS232+UART丰富接口，宽温工业级设计，广泛应用于大型无人机、无人船、遥测遥控等超远距离图数一体传输场景。", en: "VM+ is an ultra-long-range video & data integrated module with up to 500km air-to-ground range, max 47Mbps throughput, AES256 encryption, adaptive FHSS >1000 hops/s, dual Ethernet + dual RS232 + UART, industrial temp range, ideal for large drones, USVs, telemetry, and ultra-long-range integrated video & data transmission." }
  },

  // ===== V3 图数一体模块 =====
  {
    id: 9,
    category: "cat_digital",
    categoryZh: "数字图传",
    categoryEn: "Digital Video Link",
    tags: ["cat_star", "cat_mesh"],
    name: { zh: "V3 图数一体", en: "V3 Video & Data Integrated Module" },
    tagline: { zh: "150km地对空 30Mbps 三频可选", en: "150km A2G 30Mbps Tri-band" },
    price: { zh: "面议", en: "Contact for price" },
    icon: '<img src="assets/products/v3.png" style="width:100%;height:100%;object-fit:contain;" alt="V3">',
    gallery: [],
    features: [
      { zh: "150km地对空图数一体传输", en: "Up to 150km air-to-ground video & data transmission" },
      { zh: "三频段可选 800MHz/1.4GHz/2.4GHz", en: "Tri-band selectable 800MHz/1.4GHz/2.4GHz" },
      { zh: "最大30Mbps共享速率", en: "Max 30Mbps shared throughput" },
      { zh: "ZUC/SNOW3G/AES128三种加密", en: "ZUC/SNOW3G/AES128 encryption" },
      { zh: "星型组网+MESH可选", en: "Star networking + optional MESH" },
      { zh: "双网口+三路UART丰富接口", en: "Dual Ethernet + triple UART" }
    ],
    specs: [
      { label: { zh: "工作频段", en: "Frequency" }, value: { zh: "800MHz/1.4GHz/2.4GHz", en: "800MHz/1.4GHz/2.4GHz" } },
      { label: { zh: "地对空距离", en: "A2G Range" }, value: { zh: "150km", en: "150km" } },
      { label: { zh: "速率", en: "Throughput" }, value: { zh: "最大30Mbps@20MHz", en: "Max 30Mbps@20MHz" } },
      { label: { zh: "加密方式", en: "Encryption" }, value: { zh: "ZUC/SNOW3G/AES128三种可选", en: "ZUC/SNOW3G/AES128 selectable" } },
      { label: { zh: "组网方式", en: "Networking" }, value: { zh: "点对点/点对多/星型(1+16)/MESH可选", en: "P2P/PtMP/Star(1+16)/optional MESH" } },
      { label: { zh: "接口", en: "Interfaces" }, value: { zh: "网口×2 / UART×3 / 天线×2", en: "Ethernet×2 / UART×3 / Antenna×2" } }
    ],
    highlights: [
      { icon: "assets/products/highlight_range.png", label: { zh: "最远传输距离", en: "Max Range" }, value: { zh: "150km", en: "150km" } },
      { icon: "assets/products/highlight_relay.png", label: { zh: "中继", en: "Relay" }, value: { zh: "支持16跳", en: "16 Hops" } },
      { icon: "assets/products/highlight_star.png", label: { zh: "星型组网", en: "Star Network" }, value: { zh: "支持1+64个", en: "Up to 1+64" } },
      { icon: "assets/products/highlight_mesh.png", label: { zh: "MESH组网", en: "MESH Network" }, value: { zh: "支持64个", en: "Up to 64" } }
    ],
    description: { zh: "V3是一款图数一体模块，地对空距离可达150km，三频段可选（800MHz/1.4GHz/2.4GHz），最大30Mbps共享速率，ZUC/SNOW3G/AES128三种加密，星型组网+MESH可选，双网口+三路UART丰富接口，适用于无人机、无人车、遥测遥控等中远距离图数一体传输场景。", en: "V3 is a video & data integrated module with up to 150km air-to-ground range, tri-band selectable (800MHz/1.4GHz/2.4GHz), max 30Mbps shared throughput, ZUC/SNOW3G/AES128 encryption, star + optional MESH networking, dual Ethernet + triple UART, ideal for drones, UGVs, telemetry, and medium-range integrated video & data transmission." }
  }
];
