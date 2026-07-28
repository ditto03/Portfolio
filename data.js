/* =========================================================================
   EDIT YOUR DATA HERE. Every page on the site reads from this one file.
   ========================================================================= */

const PROFILE = {
  email: "dittodickson03@gmail.com",
  phone: "+91 8438710313",
  linkedin: "linkedin.com/in/dittodickson",
  github: "github.com/ditto03",
  resumeHref: "#" // replace with a real link to your resume file
};

const SKILLS = [
  { id: "MOD-01", name: "SIEM & Log Analysis", desc: "Splunk: SPL queries, log analysis, event correlation, alert triage.", tags: ["Splunk","SPL","Correlation"] },
  { id: "MOD-02", name: "Security Concepts", desc: "OWASP Top 10, IOC identification, alert prioritization, incident triage.", tags: ["OWASP Top 10","IOC","Triage"] },
  { id: "MOD-03", name: "Network Security", desc: "Wireshark: packet analysis, traffic monitoring, protocol inspection.", tags: ["Wireshark","Packet Analysis"] },
  { id: "MOD-04", name: "Web Security Testing", desc: "Burp Suite: HTTP/HTTPS traffic analysis, vulnerability assessment.", tags: ["Burp Suite","Vuln. Assessment"] },
  { id: "MOD-05", name: "Networking", desc: "TCP/IP, DNS, HTTP/HTTPS, protocol analysis, network troubleshooting.", tags: ["TCP/IP","DNS"] },
  { id: "MOD-06", name: "Operating Systems", desc: "Windows, Linux, Kali Linux — command-line ops and log analysis.", tags: ["Linux","Windows","Kali"] },
  { id: "MOD-07", name: "Scanning & Enumeration", desc: "Nmap: host discovery, port scanning, service enumeration.", tags: ["Nmap","Recon"] },
];

// "page" points each case to its detail page. Add more cases the same way.
const CASES = [
  {
    id: "CASE-01",
    status: "resolved", // "resolved" | "completed"
    title: "SIEM Log Analysis & Threat Detection using Splunk",
    summary: "Configured Splunk to ingest Linux SSH authentication logs and built a real-time detection rule for unauthorized login attempts.",
    findings: [
      "Ingested Ubuntu /var/log/auth.log into Splunk and set source type to linux_secure.",
      "Wrote SPL queries to surface failed SSH logins, brute-force patterns, and repeat offenders by IP.",
      "Correlated authentication events across log sources to reduce false positives and surface real IOCs.",
      "Built and tested a real-time alert on \"Failed password\" events with medium severity triage.",
    ],
    tags: ["Splunk","SPL","Linux","SSH","Real-Time Alerting"],
    page: "case-01.html"
  },
  {
    id: "CASE-02",
    status: "completed",
    title: "Communication Barrier Nullifier — Sign Language ML",
    summary: "Real-time sign-language-to-speech system using computer vision and an ensemble of classical ML models.",
    findings: [
      "Used MediaPipe to track 21 hand landmarks per frame for gesture recognition.",
      "Trained and evaluated Random Forest, AdaBoost, and Gradient Boosting classifiers.",
      "Combined models with a Hybrid Stacking classifier to improve overall accuracy.",
      "Added bidirectional text-to-speech and speech-to-text conversion for two-way communication.",
    ],
    tags: ["Python","OpenCV","MediaPipe","Scikit-learn"],
    page: "case-02.html"
  },
];

const CREDS = [
  { name: "EC-Council Certified SOC Analyst (CSA)", issuer: "EC-Council", meta: "Security monitoring · Incident response · Threat intel · Alert triage · Log analysis", initials: "CSA" },
];

const DOCS = [
  { name: "Resume", ext: "pdf", meta: "Updated recently", href: "#" },
  { name: "CSA_Certificate", ext: "pdf", meta: "EC-Council", href: "#" },
  { name: "Academic_Transcript", ext: "pdf", meta: "Sathyabama IST", href: "#" },
];

const EDUCATION = [
  { year: "2022 – 2025", title: "B.Sc. Computer Science", org: "Sathyabama Institute of Science and Technology · CGPA 7.65" },
  { year: "2020 – 2022", title: "12th Grade", org: "Pius XI Higher Secondary School · 64.83%" },
  { year: "2019 – 2020", title: "10th Grade", org: "St. Joseph High School · 95.6%" },
];

const LOG_TICKER = [
  { lvl: "OK", msg: "auth.log: session opened for user <strong>ditto</strong> — role: SOC Analyst L1" },
  { lvl: "INFO", msg: "cert.log: <strong>EC-Council CSA</strong> credential verified" },
  { lvl: "INFO", msg: "skills.log: <strong>Splunk, Wireshark, Burp Suite, Nmap</strong> loaded" },
  { lvl: "OK", msg: "case.log: <strong>CASE-01</strong> SSH brute-force detection — resolved" },
  { lvl: "OK", msg: "case.log: <strong>CASE-02</strong> sign-language ML system — completed" },
  { lvl: "WARN", msg: "status.log: currently <strong>seeking SOC / cybersecurity opportunities</strong>" },
];
