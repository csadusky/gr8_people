# Frontend Developer Project

Welcome! For this project, we'll ask you to work through three tasks to complete the implementation of a SPA using React. Following the completion of the project, we'll ask you to respond to a few questions about the work you completed.

The requirements for each task can be found in [./TASKS.md](./TASKS.md) and your responses should be placed in the file [./RESPONSES.md](./RESPONSES.md). 

Individual tasks are not given a time limit, but we value your time, so try not to spend too much of your time on any one task. If there is something you would have like to do given more time, note so in your responses. You will not be assessed on length of time taken to complete each task, but we will use your feedback to refine the assignment for future candidates.

## Rules

1. The project must be completed without assistance from others, though you may refer to any any pre-compiled reference material. 
2. You may install and use any third-pary npm module, but you should explain and defend your choice in your responses.
3. Refrain from making any major refactors to the application hierarchy.

Good luck!

## About the SPA

At GR8 People, we offer our customers one single solution to manage their hiring process from start to finish. One feature we support is the ability to pass job postings through an internal approval process before being opened to the public.

This application allows users to manage a simplified version of our job approvals. It's current state is incomplete, but the application will allow a user to 

1. List all approvals along with their status.
2. View the detail of a single approval, and,
3. Add a new approval.

The main application entrypoint is `./src/App.js` where you will find the following component hierarchy:

```
> App
   > AddApproval
   > AddApprovalErrors
   > ApprovalList
   > ApprovalView
```

## Stack

- App: [React](https://reactjs.org/) + [Create React App](https://github.com/facebook/create-react-app) (README reproduced below)
- Styles: [react-jss](https://cssinjs.org/react-jss/)
- Tests: [Jest](https://jestjs.io/) + [Enzyme](https://airbnb.io/enzyme/)

The application was initially developed using `Node v10.15.3` and `npm v6.9.0`. While the app may run using older versions, we make no guarantees.

## Running the App

To get started, run the following command:

```sh
npm install
```

To start the application in dev mode, run the following command:

```sh
npm start
```

To run tests each time a file changes, run the following command:

```sh
npm test
```

---

# Create React App README

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
