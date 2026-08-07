/* =========================================================================
   EDIT YOUR DATA HERE. Every page on the site reads from this one file.
   ========================================================================= */

const PROFILE = {
  name: "Ditto D",
  role: "SOC Analyst | Cybersecurity Enthusiast",
  email: "dittodickson03@gmail.com",
  phone: "+91 8438710313",
  linkedin: "https://linkedin.com/in/dittodickson",
  github: "https://github.com/ditto03",
  location: "Kanyakumari, Tamil Nadu, India",
  about:
    "B.Sc. Computer Science graduate with an EC-Council Certified SOC Analyst (CSA) certification. Passionate about threat detection, SIEM, incident response, and security monitoring. Hands-on experience with Splunk, Wireshark, Burp Suite, Nmap, Kali Linux, and Linux log analysis.",
  resumeHref: "SOC_Analyst_Resume.pdf"
};

const SKILLS = [
  {
    id: "MOD-01",
    name: "SIEM & Log Analysis",
    desc: "Splunk, SPL queries, log analysis, correlation, dashboard creation and alert triage.",
    tags: ["Splunk", "SPL", "SIEM", "Correlation"]
  },
  {
    id: "MOD-02",
    name: "Threat Detection",
    desc: "IOC identification, incident triage, security monitoring and threat investigation.",
    tags: ["Threat Hunting", "IOC", "Triage"]
  },
  {
    id: "MOD-03",
    name: "Network Security",
    desc: "Packet capture, protocol analysis and troubleshooting using Wireshark.",
    tags: ["Wireshark", "TCP/IP", "DNS"]
  },
  {
    id: "MOD-04",
    name: "Web Application Security",
    desc: "Security testing using Burp Suite and understanding of OWASP Top 10.",
    tags: ["Burp Suite", "OWASP Top 10"]
  },
  {
    id: "MOD-05",
    name: "Scanning & Enumeration",
    desc: "Host discovery, service enumeration and vulnerability identification using Nmap.",
    tags: ["Nmap", "Reconnaissance"]
  },
  {
    id: "MOD-06",
    name: "Operating Systems",
    desc: "Windows, Linux and Kali Linux administration with command-line proficiency.",
    tags: ["Windows", "Linux", "Kali"]
  },
  {
    id: "MOD-07",
    name: "Networking",
    desc: "Strong understanding of TCP/IP, HTTP, HTTPS, DNS, SSH and common network services.",
    tags: ["Networking", "HTTP", "HTTPS", "SSH"]
  },
   {
    id: "MOD-08",
    name: "Threat Intelligence (TADA v2)",
    desc: "Hands-on experience using TADA v2 to document, analyze, and publish cyber threat intelligence. Skilled in profiling threat actors, documenting victim details, classifying incidents, writing analyst notes, and creating structured threat reports.",
    tags: ["Threat Intelligence", "TADA v2", "Threat Analysis", "Incident Reporting"]
  }
];

const CASES = [
  {
    id: "CASE-01",
    status: "resolved",
    title: "SIEM Log Analysis & Threat Detection using Splunk",
    summary:
      "Built a SIEM use case to detect SSH brute-force attacks using Linux authentication logs.",
    findings: [
      "Collected Ubuntu auth.log into Splunk.",
      "Created SPL queries for failed SSH login detection.",
      "Detected brute-force attacks based on repeated failed logins.",
      "Configured real-time alerts for suspicious authentication events.",
      "Reduced false positives through event correlation."
    ],
    tags: ["Splunk", "Linux", "SSH", "SIEM", "SPL"],
    page: "case-01.html"
  },
  {
    id: "CASE-02",
    status: "completed",
    title: "Communication Barrier Nullifier – Sign Language Recognition",
    summary:
      "Machine learning project that converts sign language into speech in real time.",
    findings: [
      "Implemented MediaPipe hand landmark detection.",
      "Trained Random Forest, AdaBoost and Gradient Boosting models.",
      "Improved prediction accuracy using Hybrid Stacking.",
      "Integrated speech-to-text and text-to-speech communication."
    ],
    tags: ["Python", "OpenCV", "MediaPipe", "Machine Learning"],
    page: "case-02.html"
  }
];

const CREDS = [
  {
    name: "EC-Council Certified SOC Analyst (CSA)",
    issuer: "EC-Council",
    meta:
      "Security Monitoring • Incident Response • Threat Intelligence • Log Analysis",
    initials: "CSA"
  },
   {
    name: "Cybersecurity Job Simulation  (FJS)",
    issuer: "Forage",
    meta:
      "Phishing • Incident Response • SOC • Threat Analysis",
    initials: "FJS"
  }
];

const DOCS = [
  {
    name: "Resume",
    ext: "pdf",
    meta: "Latest Resume",
    href: "SOC_Analyst_Resume.pdf"
  },
  {
    name: "EC-Council CSA Certificate",
    ext: "pdf",
    meta: "Certification",
    href: "ECC-CSA-Certificate.pdf"
  },
  {
    name: "Cybersecurity Job Simulation Certificate",
    ext: "pdf",
    meta: "Certification",
    href: "Cybersecurity Job Simulation Certificate.pdf"
  },
   {
    name: "Cybersecurity Project",
    ext: "pdf",
    meta: "Splunk SIEM Project",
    href: "Monitoring Failed SSH Login Activities in Splunk.pdf"
  },
  {
    name: "Academic Project",
    ext: "pdf",
    meta: "Sathyabama Institute of Science and Technology",
    href: "Acadamic Project.pdf"
  },
   {
    name: "Degree Certificate",
    ext: "pdf",
    meta: "B.sc. Computer Science",
    href: "Degree Certificate.pdf"
  }
];

const EDUCATION = [
  {
    year: "2022 – 2025",
    title: "B.Sc. Computer Science",
    org: "Sathyabama Institute of Science and Technology • CGPA: 7.65"
  },
  {
    year: "2020 – 2022",
    title: "Higher Secondary (12th)",
    org: "Pius XI Higher Secondary School"
  },
  {
    year: "2019 – 2020",
    title: "SSLC (10th)",
    org: "St. Joseph High School"
  }
];

const LOG_TICKER = [
  {
    lvl: "OK",
    msg: "profile.log: <strong>Ditto D</strong> loaded successfully"
  },
  {
    lvl: "OK",
    msg: "cert.log: <strong>EC-Council CSA</strong> certification verified"
  },
  {
    lvl: "INFO",
    msg: "skills.log: <strong>Splunk, Wireshark, Burp Suite, Nmap, Kali Linux</strong> initialized"
  },
  {
    lvl: "OK",
    msg: "project.log: <strong>SSH Brute Force Detection using Splunk</strong> completed"
  },
  {
    lvl: "OK",
    msg: "project.log: <strong>Sign Language Recognition System</strong> completed"
  },
  {
    lvl: "WARN",
    msg: "career.log: <strong>Seeking SOC Analyst L1 / Cybersecurity opportunities</strong>"
  }
];
