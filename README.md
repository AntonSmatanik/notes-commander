# notes-commander

Application is build with help of [create-react-app](https://github.com/facebook/create-react-app) and it is not ejected.

## How to install application

Just use command ```npm i```

## How to start application

Just use command ```npm run start```

## How to run tests

Just use command ```npm run test```

## How is application functioning

Information about HTTP requests are stored and displayed in a form of alert messages. There are two types of them. Green (2xx codes) and red ones (various type of errors).

I decided to display messages on a left side, table with notes or form used for manipulation with them is located in the center of the screen and language selector on a right side.

Notes are loaded in a time, when is application starting.

After delete / edit / add actions are fired on a single note and there is no error, all notes are automatically reloaded.

Beside that, application is not loading them from the server.
