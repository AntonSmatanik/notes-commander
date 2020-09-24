# notes-commander

Application is build with help of [create-react-app](https://github.com/facebook/create-react-app) and it is not ejected.

## How to install application

Just use command ```npm i```

## How to start application

Just use command ```npm run start```

## How to run tests

Just use command ```npm run test```

## How is application functioning

HTTP requests done by application are stored and displayed in a form of messages.

I decided to display messages on a left side, notes and form used for manipulation with note are located in the center of the screen and language selector on a right side.

Notes are loaded in a time when is application starting.

After delete / edit / add action is fired on a single note, they are automatically reloaded.

Beside that, application is not loading them from the server.