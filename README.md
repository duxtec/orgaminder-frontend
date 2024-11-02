# OrgaMinder Frontend

![vue.s](https://img.shields.io/badge/vue.js-ffffff?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![vuetify](https://img.shields.io/badge/vuetify-ffffff?style=for-the-badge&logo=vuetify&logoColor=1867C0)
![JavaScript](https://img.shields.io/badge/JavaScript-ffffff?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Firebase](https://img.shields.io/badge/Firebase-ffffff?style=for-the-badge&logo=firebase&logoColor=DD2C00)
![Material Design](https://img.shields.io/badge/Material%20Design-ffffff?style=for-the-badge&logo=materialdesign&logoColor=000000)
![Material Design Icons](https://img.shields.io/badge/Material%20Design%20Icons-2196F3?style=for-the-badge&logo=materialdesignicons&logoColor=white)
![jsonwebtokens](https://img.shields.io/badge/json%20web%20tokens-ffffff?style=for-the-badge&logo=jsonwebtokens&logoColor=000000)
![Axios](https://img.shields.io/badge/Axios-ffffff?style=for-the-badge&logo=axios&logoColor=5e30e5)
![.ENV](https://img.shields.io/badge/.ENV-ffffff?style=for-the-badge&logo=.env&logoColor=ECD53F)
![commitlint](https://img.shields.io/badge/.commitlint-ffffff?style=for-the-badge&logo=commitlint&logoColor=000000)
![Webpack](https://img.shields.io/badge/Webpack-ffffff?style=for-the-badge&logo=webpack&logoColor=227bc1)
![Babel](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-ffffff?style=for-the-badge&logo=eslint&logoColor=5138c4)
![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white)

## Description

For the backend repository, please visit [OrgaMinder Backend on GitHub](https://github.com/duxtec/orgaminder-backend).

OrgaMinder Frontend is an application designed to facilitate the organization and management of tasks and projects. This system was created with the goal of providing a robust and scalable solution, enabling users to manage their daily activities efficiently and collaboratively.

The frontend is responsible for ...

## Features


## Installation

To set up the OrgaMinder Frontend project locally, follow these steps:

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 14.x or later
- **npm**: Version 6.x or later (comes with Node.js)

### Step-by-Step Installation

1. **Clone the Repository**

   Clone the project repository to your local machine using Git:

   ```bash
   git clone https://github.com/duxtec/OrgaMinder-Frontend.git
   ```

2. **Navigate to the Project Directory**

   Change into the project directory:

   ```bash
   cd OrgaMinder-Frontend
   ```

3. **Install Dependencies**

   Install the required dependencies using npm:

   ```bash
   npm install
   ```

4. **Configure Firebase**

   Register app is required for authentication in Firebase. Please refer to the [Firebase Configuration](#firebase-configuration) section for detailed instructions.

6. **Start the Development Server**

   ```bash
   npm run serve
   ```

   The server should now be running on `http://localhost:8080`.

### Firebase Configuration

To enable Firebase services in the OrgaMinder Backend, follow these setup steps to configure Firebase for your environment.

1. **Create a Firebase Project**

   First, create a new project in the Firebase console:

   [Firebase Console](https://console.firebase.google.com)

   You can follow Firebase’s official documentation for more details on setting up a project:

   [Firebase Project Setup](https://firebase.google.com/docs/admin/setup)

2. **Register your app**
To register your app with Firebase, please follow these instructions:

    1. Go to the Firebase Console: [Firebase Console](https://console.firebase.google.com/).
    2. Create a new project or select an existing project.
    3. Click on "Add app" and choose the web option.
    4. Follow the prompts to register your app.
    5. Put your firebaseConfig in the Firebase.js file

    For detailed instructions, you can refer to the official documentation at this link: [Firebase Setup Guide](https://firebase.google.com/docs/web/setup#register-app).

    **Important:** Don't forget to export both the `auth` and `firestore` services after setting up your Firebase configuration to ensure they are available for use in your application.

3. **Place the Firebase Configuration File**

After these steps, Firebase should be successfully configured for your project, enabling access to its features.

## Usage

To start using the OrgaMinder Frontend, follow these steps for development, building and production:

### Development
1. Run the development server:
   ```bash
   npm run serve
   ```
   This will start the server in development mode, reloading on changes for streamlined development.

   The server should now be running on `http://localhost:8080`.

### Build
1. To build the project for production:
   ```bash
   npm run build
   ```
   This command compiles and optimizes the application for deployment.

### Production
1. After the build process, make sure to use the contents of the dist (or build) folder to deploy your application on the production server. This folder contains the optimized files necessary for running your Vue application in a production environment. Place these files on your web server to serve the application to users effectively.

## API Documentation
1. To explore the API documentation:
   - Access the [OrgaMinder Backend on GitHub](https://github.com/duxtec/orgaminder-backend).

These instructions should get you up and running with the OrgaMinder Backend!

## Architecture

The OrgaMinder Frontend was designed following clean code principles and a clear separation of responsibilities, ensuring scalability and maintainability as the project grows. Here is a brief overview of the main project folders and their roles:

The architecture of the Vue application is organized in a modular structure, enhancing maintainability and scalability. Here's a breakdown of the key directories and their roles:

### Main Entry Point
- **`main.js`**: The entry point for the application, where Vue is instantiated and global configurations are applied.

### Root Directory (`src`)
- **`App.vue`**: The main Vue component that serves as the entry point for the application.

### Assets
- **`assets/`**: Contains static assets such as images and logos used throughout the application.

### Components
- **`components/`**: Houses reusable Vue components, organized into subdirectories:
  - **`boards/`**: Contains components related to different board types, such as:
    - **`AccountBoard.vue`**
    - **`CalendarBoard.vue`**
    - **`KanbanBoard.vue`**
  - **`forms/`**: Includes form components, like:
    - **`LoginForm.vue`** and its associated logic file.
  - **`layout/`**: Contains layout components, such as:
    - **`LoggedLayout.vue`** for user-specific layouts.
  - **`modal/`**: Contains modal components for task creation and updates:
    - **`TaskCreateModal.vue`** and **`TaskUpdateModal.vue`**, each with their own logic files.

### Configuration
- **`config/`**: Contains configuration files, such as **`api.js`** for managing API endpoints.

### Firebase
- **`firebase.js`**: Handles Firebase initialization and configuration for authentication and data storage.

### Pages
- **`pages/`**: Contains page components that represent distinct views in the application:
  - **`LoginPage.vue`**: The login view.
  - **`TasksPage.vue`**: The tasks view, along with its logic file.

### Plugins
- **`plugins/`**: Includes configurations for third-party plugins, such as Vuetify for UI components and Webfont Loader for font management.

### Router
- **`router/`**: Contains the routing configuration, specifically **`index.js`**, which defines the application's routes.

### Services
- **`services/`**: Contains service files for handling business logic and API calls, such as **`taskService.js`**.

### Styles
- **`styles/`**: Typically contains global stylesheets or specific styles for the application.

### Utilities
- **`utils/`**: Contains utility functions, such as **`auth.js`** for authentication-related logic.

### Overall Architecture
The architecture promotes separation of concerns, making it easier to manage different aspects of the application. Each directory serves a specific purpose, enabling developers to locate and modify components, services, and configurations efficiently. This modular approach enhances collaboration and reduces complexity as the application grows.

## Contact

If you have any questions, suggestions, or feedback about the OrgaMinder Frontend, please feel free to reach out:

- **Email**: [contato@tpereira.com.br](mailto:contato@tpereira.com.br)
- **GitHub**: [Dux Tecnologia](https://github.com/duxtec)
- **Project Repository**: [OrgaMinder Frontend on GitHub](https://github.com/duxtec/orgaminder-frontend)
- **Frontend Project Repository**: [OrgaMinder Backend on GitHub](https://github.com/duxtec/orgaminder-backend)

We appreciate your interest and contributions!

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this software in accordance with the license terms. For more details, please refer to the [LICENSE](LICENSE) file included in the repository.