<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Health Questionnaire Mobile Application</h1>
    <p>This is a mobile application designed for EasyMedical that enables digital collection of patient intake forms, including patient information, health questionnaires, HIPAA acknowledgment, and financial information. The application is built using React Native, TypeScript, and Redux for state management.</p>
    <h2>Table of Contents</h2>
    <ul>
        <li><a href="">Features</a></li>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#running-the-application">Running the Application</a></li>
        <li><a href="#project-structure">Project Structure</a></li>
        <li><a href="#dependencies">Dependencies</a></li>
        <li><a href="#screens-overview">Screens Overview</a></li>
        <li><a href="#troubleshooting">Troubleshooting</a></li>
    </ul>
    <h2 id="features">Features</h2>
    <ul>
        <li>Collection of Patient Information</li>
        <li>Health History Questionnaire</li>
        <li>HIPAA Acknowledgement Form</li>
        <li>Financial Information Form</li>
        <li>Redux for State Management</li>
        <li>Navigation using React Navigation</li>
    </ul>
    <h2 id="prerequisites">Prerequisites</h2>
    <p>Before you begin, ensure you have met the following requirements:</p>
    <ul>
        <li><strong>Node.js</strong> (v14.x or higher)</li>
        <li><strong>npm</strong> (v6.x or higher) or <strong>yarn</strong> (v1.x or higher)</li>
        <li><strong>Expo CLI</strong> (v5.x or higher)</li>
        <li><strong>React Native CLI</strong></li>
        <li>An Android or iOS device/emulator, or Expo Go app installed on your mobile device for testing.</li>
    </ul>
    <h2 id="installation">Installation</h2>
    <p>Follow these steps to install and set up the project locally:</p>
    <ol>
        <li><strong>Clone the repository</strong>:
            <pre><code>git clone https://github.com/hrishikasamani/CareWalletApp.git
cd CareWalletApp</code></pre>
        </li>
        <li><strong>Install dependencies</strong>:
            Using npm:
            <pre><code>npm install</code></pre>
            Or using yarn:
            <pre><code>yarn install</code></pre>
        </li>
        <li><strong>Install Expo CLI globally (if not already installed)</strong>:
            <pre><code>npm install -g expo-cli</code></pre>
        </li>
    </ol>
    <h2 id="running-the-application">Running the Application</h2>
    <p>To start the application, follow these steps:</p>
    <ol>
        <li><strong>Start the Expo server</strong>:
            <pre><code>expo start</code></pre>
            This will open a new browser window with Expo Dev Tools. You can then scan the QR code with your Expo Go app (iOS/Android) or select an emulator to run the app.
        </li>
        <li><strong>Run on an Android/iOS Emulator</strong>:
            <ul>
                <li>For Android: Press <code>a</code> in the terminal.</li>
                <li>For iOS: Press <code>i</code> in the terminal.</li>
            </ul>
        </li>
    </ol>
    <h2 id="project-structure">Project Structure</h2>
    <p>Here’s a brief overview of the project structure:</p>
    <pre><code>.
├── client
│   ├── src
│   │    ├── api        # Reusable components
│   │    ├── redux      # Redux store setup and slices
│   │    └── screens    # All the screens in the app
│   ├── App.tsx         # Main entry point of the app
│   ├── package.json    # Project dependencies and scripts
│   └── tsconfig.json   # TypeScript configurationApp.tsx
├── server
│   ├── index.js        # Connects front-end to back-end
│   └── package.json    # Project dependencies and scripts
├── README.md           # Project documentation
└── App.tsx
</code></pre>
    <h2 id="dependencies">Dependencies</h2>
    <p>The project relies on several key dependencies:</p>
    <pre><code>"dependencies": {
    "@react-navigation/native": "^6.1.1",
    "@react-navigation/native-stack": "^6.9.9",
    "react-native-paper": "^5.8.0",
    "react-redux": "^8.1.1",
    "@reduxjs/toolkit": "^1.9.5",
    "expo": "^49.0.12",
    "expo-status-bar": "^1.5.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-native": "0.72.3",
    "react-native-gesture-handler": "~2.12.0",
    "react-native-safe-area-context": "4.6.3",
    "react-native-screens": "~3.22.0"
  }</code></pre>
    <h2 id="screens-overview">Screens Overview</h2>
    <ul>
        <li><strong>HomeScreen</strong>: The landing screen with links to all forms.</li>
        <li><strong>PatientFormScreen</strong>: Collects general patient information.</li>
        <li><strong>HealthQuestionnaireScreen</strong>: Collects patient's health history.</li>
        <li><strong>HIPAAAcknowledgementScreen</strong>: Displays and collects HIPAA consent.</li>
        <li><strong>FinancialInformationScreen</strong>: Collects patient's financial details.</li>
        <li><strong>FormConfirmationScreen</strong>: Displays confirmation after form submission.</li>
    </ul>
    <h2 id="troubleshooting">Troubleshooting</h2>
    <p>If you encounter issues while running the application, consider the following:</p>
    <ul>
        <li><strong>Error: <code>expo</code> command not found</strong>: Ensure Expo CLI is installed globally:
            <pre><code>npm install -g expo-cli</code></pre>
        </li>
        <li><strong>Stuck on Metro Bundler</strong>: Try clearing cache:
            <pre><code>expo start -c</code></pre>
        </li>
        <li><strong>Dependency Issues</strong>: Run:
            <pre><code>npm install --legacy-peer-deps</code></pre>
        </li>
    </ul>
    <p>If problems persist, refer to the official documentation for the relevant dependencies or create an issue in this repository.</p>

</body>
</html>
