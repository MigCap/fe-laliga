This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

During the development process I haven't got time to add any test neither unitary or end to end ones.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn lint:eslint:fix`

**Note: used to the lint-staged pre-commit check!**
**Note: Ihave used husky as a dependency for this specific task**

This has been implemented as per requirement.

## Lazy loading Components

I have used Suspense mode convined with lazy to achieve lazy loading of different routes.

## Added both eslint and prettier code styling tools

Both have been config adding specific plugins.

## Added support for absolute imports

Config inside jsconfig.json

## DELETE & PUT API methods

They are not modifing the list itself so I just redirect to users list once the action has been completed succesfully

## Styles

- Decided to use Grommet as main UI library. Its gonna give me quick acces to UI components
- Added style components to create some ui components & global style.
- Added sass support. Created variables file.
- Did a bit of mix & match of both 3.

## Dependencies

Locked versions.

## Errors

I had not time to implement error catching.
I just got them in my redux store from the catch of sagas methods.

## Routing

Standard library 'react-router-dom'.
Added connection to redux throw the store config file.

**Note: I could further extend folder architecture, routing functionalities, etc ... but I couldn't have enought time to do a better job**

**Note: Thank you for taking time on revising this!!!**
