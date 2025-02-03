# Glamour Store

Welcome to Glamour Store, a landing page designed to showcase the business of Glamour Store, a local shop in Igrejinha. This project was developed as part of a freelance job.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Contribution](#contribution)
- [License](#license)

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **CSS**: For styling the application.
- **Google Fonts**: For typography.
- **Cypress**: For end-to-end testing.
- **Mocha**: For running tests.
- **Chai**: For assertions in tests.

## Installation

To run the project locally, follow the steps below:

1. Clone the repository:
   ```bash
   git clone https://github.com/seu-usuario/glamour-store.git
   cd glamour-store
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

In the project directory, you can run the following commands:

### `npm start`

Runs the application in development mode. The page will reload automatically when you make changes.

### `npm test`

Runs the tests in interactive mode.

### `npm run build`

Creates an optimized version of the application for production in the `build` folder.

### `npm run eject`

Removes the default configuration of Create React App and allows you to customize the project configuration.

## Project Structure

The project structure is organized to facilitate development and maintainability. Below is an overview of the main directories and files:

- **src/**: This is the main source directory where all the application code resides.
  - **components/**: Contains reusable React components such as `Header`, `Footer`, and `Main`.
  - **pages/**: Contains different pages of the application, including the `NotFound` page.
  - **admin/**: Contains components related to administrative tasks, such as `ProductEditor`.
  - **App.js**: The main application component that sets up routing and layout.
  - **index.js**: The entry point of the application where the React app is rendered.

- **public/**: Contains static files that are served directly, such as `index.html`, `manifest.json`, and icons.

- **package.json**: Contains metadata about the project, including dependencies, scripts, and configuration for tools like ESLint.

- **README.md**: This file, which provides an overview of the project, installation instructions, and other relevant information.

## How It Was Made

The Glamour Store landing page was built using React, a popular JavaScript library for building user interfaces. The application follows a component-based architecture, allowing for reusable and maintainable code.

### Key Features:
- **Responsive Design**: The application is designed to be responsive, ensuring a good user experience on both desktop and mobile devices.
- **Routing**: React Router is used to manage navigation between different sections of the landing page.
- **State Management**: The application uses React's built-in state management to handle product data and user interactions.
- **Testing**: The project includes tests using Mocha, Chai, and Cypress to ensure the application functions correctly and to facilitate future development.

### Development Process:
1. **Setup**: The project was initialized using Create React App, which provides a solid foundation for React applications.
2. **Component Development**: Individual components were developed and styled using CSS, ensuring a cohesive look and feel.
3. **Testing**: Tests were written to cover critical functionality, ensuring that the application behaves as expected.
4. **Deployment**: The application can be built for production using the `npm run build` command, which optimizes the code for performance.

This project serves as a showcase for the Glamour Store, highlighting its offerings and providing essential information to potential customers.

## Contribution

Contributions to this project are welcome. If you find a bug or want to add a new feature, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
