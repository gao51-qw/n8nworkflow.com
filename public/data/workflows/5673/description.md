![Screenshot 20250704 at 18.13.54.png](fileId:1678)
## 🔐 Advanced SSL Health Monitor
### 👤 Who is this for?
#### This workflow is designed for **DevOps engineers, IT administrators, and security professionals** who need comprehensive **SSL certificate monitoring and health assessment** across multiple domains — featuring **dual verification** and **professional reporting** without relying on expensive monitoring services.

---

### 🧩 What It Does
1. **Daily Trigger** runs the workflow every morning for proactive monitoring.
2. **URL Collection** fetches the list of website URLs to monitor from your data source.
3. **Dual SSL Analysis**:
   - **Free SSL Assessment Script** — Get from [sysadmin-toolkit](https://github.com/Bubobot-Team/sysadmin-toolkit/) on Github 
   - **SSL-Checker.io API** — External verification for cross-validation
4. **Comprehensive Health Check**:
   - Certificate expiration monitoring (customizable threshold)
   - SSL configuration security assessment
   - Protocol support analysis (TLS 1.3, 1.2, deprecated protocols)
   - Cipher suite strength evaluation
   - Vulnerability scanning (POODLE, BEAST, etc.)
   - Compliance checking (PCI DSS, NIST, FIPS)
5. **Smart Alert System** sends Discord notifications when:
   - Certificates expire within threshold (default: 30 days)
   - SSL configuration issues detected (weak ciphers, deprecated protocols)
   - Security vulnerabilities found
   - Compliance standards not met
   - Grade drops below acceptable level (configurable)

---

### 🎯 Key Features
- **🔄 Dual Verification**: Cross-checks results between internal scanner and external API
- **📊 SSL Labs-Style Grading**: A+ to F rating system with detailed analysis
- **🛡️ Security Assessment**: Vulnerability detection and compliance checking
- **📱 Discord Integration**: Rich embed notifications with color-coded alerts
---

### ⚙️ Setup Instructions
1. **Data Source**:  
   - Configure your URL source from Notion
   - Ensure it contains a `URL` column with domains to monitor
2. **Credentials**:  
   - Set up **Discord webhook** for alert notifications
   - Configure any required **API credentials** for data sources
3. **Customize Thresholds**:  
   - **Expiration Alert**: Days before expiry (default: 30 days)
   - **Grade Threshold**: Minimum acceptable SSL grade (default: B)
   - **Alert Severity**: Choose which issues trigger notifications
4. **Advanced Configuration**:
   - Modify **vulnerability checks** based on your security requirements
   - Adjust **compliance standards** for your industry needs
   - Customize **Discord message formatting** and alert channels

---

### 🧠 Technical Notes
- **Dual-Check Reliability**: Combines custom Bubobot scanner with ssl-checker.io for maximum accuracy
- **No Vendor Lock-in**: Uses free public APIs and open-source tools
- **Professional Reporting**: Generates SSL Labs-quality assessments
- **Security-First Approach**: Comprehensive vulnerability and compliance checking
- **Flexible Alerting**: Discord integration with rich formatting and conditional logic


This workflow provide a **comprehensive SSL security monitoring solution** that rivals enterprise-grade tools while remaining completely open-source and free.