# 🎮 Mobile Controller Setup Guide

<p align="left">
  <strong>Turn your Android device into a virtual PC gamepad over your local Wi-Fi network.</strong>
</p>

---

### 📥 Downloads
> Both the **Windows Server** and the **Android Mobile App** can be downloaded directly from our official website.

---

## 🎯 Who is this setup for?

<table width="100%">
  <tr>
    <td>
      <ul>
        <li><strong>Casual Gamers:</strong> If you love playing cozy games, simulators, or casual titles that don’t require intense button-mashing, this is a perfect fit.</li>
        <li><strong>The Curious & Budget-Conscious:</strong> Want to test out how an Xbox 360 controller layout feels on your PC without breaking the bank? This lets you test the waters completely for free.</li>
      </ul>
      <p>⚠️ <em><strong>Note on Latency:</strong> This setup relies on local network streaming. Because there is inherent wireless latency, it is <strong>not</strong> recommended for competitive, fast-paced, or hardcore gaming where rapid button spamming is required.</em></p>
    </td>
  </tr>
</table>

---

## 💻 1. Server Setup (PC / Laptop)

1. **Download the Server Bundle** from the website to your Windows computer.
2. **Install the Drivers First:** Before running the main server, double-click **`ViGEmBus_1.22.0_x64_x86_arm64.exe`**. Follow the installation wizard and grant administrative permissions if prompted. 
3. **Launch the Server:** You can now safely run **`MobileControllerServer.exe`**.
4. <p>🛡️ <strong>Firewall Note:</strong> If you use any third-party antivirus or firewall software, make sure this application is added to its trusted whitelist.</p>

---

## 📱 2. Mobile App Setup (Android)

1. **Download the APK file** directly from the website onto your Android phone.
2. **Install the App:** Tap the downloaded `.apk` file to install it. 
   * *Note: If prompted by Android, allow installation from "Unknown Sources" or your browser.*
3. **Permissions:** Grant any runtime permissions if requested by the application.

---

## 🔗 3. Connection Setup

> 🚨 **IMPORTANT:** Both your PC and your Android phone **must** be connected to the exact same local Wi-Fi network.

1. **Find your PC's IP Address:**
   * Press the Windows Search bar, type `cmd`, and open the **Command Prompt**.
   * Type `ipconfig` and press **Enter**.
   * Locate and write down your **IPv4 Address** (it usually looks like `192.168.1.X` or `10.0.0.X`).
2. **Open the Server:** Launch `MobileControllerServer.exe` on your PC. A terminal window will open up.
3. **Open the Mobile App:** Launch the app on your Android phone and tap **Connect**.
4. **Link the Devices:** Type the PC's **IPv4 Address** into the prompt box on your phone.
5. **Confirm Connection:** The PC terminal window will update to say **`CONNECTED`**, and a green indicator light will activate on the mobile app.

<br />

<p align="center">
  🎉 <strong>You are all set! Leave the server running in the background, launch your game, and enjoy.</strong>
</p>

---

## 🛠️ Common Issues & Troubleshooting

### 🔑 1. Connection Times Out / App Won't Connect
The Windows Defender Firewall frequently blocks fresh local server applications. 
* Search for **"Allow an app through Windows Firewall"** in the Windows search bar and open it.
* Click **Change Settings** at the top right.
* Look for `MobileControllerServer.exe` in the list and ensure **both** the Private and Public checkboxes are ticked.
* *If it's missing from the list:* Click **Allow another app...**, browse to where you downloaded `MobileControllerServer.exe`, add it, and check both boxes.

### 🌐 2. Network Isolation Issues
Even if devices are on the "same" router, they might be isolated by network bands.
* Ensure both your phone and PC are explicitly utilizing the exact same network name.
* Ensure both devices are communicating on the same wireless bandwidth (e.g., both on **2.4GHz** or both on **5GHz**). 

### 🚫 3. Third-Party Software Blocks
* If you utilize standalone suites like Norton, McAfee, or Avast, their aggressive smart-firewalls will drop local network packets. Manually add `MobileControllerServer.exe` to their specific inbound exclusion lists.
