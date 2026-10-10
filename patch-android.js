// Passt das von Capacitor erzeugte Android-Projekt an (Berechtigungen).
const fs = require("fs");
const manifestPath = "android/app/src/main/AndroidManifest.xml";
let m = fs.readFileSync(manifestPath, "utf8");
const add = [];
if (!m.includes("android.permission.CAMERA"))
  add.push('    <uses-permission android:name="android.permission.CAMERA" />');
if (!m.includes("android.permission.RECORD_AUDIO"))
  add.push('    <uses-permission android:name="android.permission.RECORD_AUDIO" />');
if (!m.includes("android.hardware.camera"))
  add.push('    <uses-feature android:name="android.hardware.camera" android:required="false" />');
if (add.length) m = m.replace("</manifest>", add.join("\n") + "\n</manifest>");
fs.writeFileSync(manifestPath, m);
console.log("Android-Projekt angepasst.");
