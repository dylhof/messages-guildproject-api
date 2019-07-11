# Messages - Dylan Hofmann Guild Project

This is the backend respository for Dylan Hofmann's messaging app which can be found at 
#### https://github.com/dylhof/messages-guildproject-ui

## Getting Started:
#### Additional set up instructions for the front end can be found at the link above.

Clone the repository:
```
git clone https://github.com/dylhof/messages-guildprojects-api
```

install the dependencies:
From your terminal within your project directory run:
```
$ npm install
```
Start the server:
```
$ npm start
```

## API Calls
### Base URL:
  > ```http://localhost:3001```

### GET:
``` GET /chat```:
  > This Endpoint will return all available chat messages

  **Example Response:**

  ```
  [
    {"id": "1",
    "user": "Dylan",
    "message": "Guild is Awesome!"},
    {"id": "2",
    "user": "Eric",
    "message": "Yes! Guild is indeed Awesome!"}
  ]
```
### POST:
  > This Endpoint will add a chat message to the server:

``` POST /chat:```

  **Required Input for Request Body:**

| Name      | Type      | Description|
|-----------|-----------|------------|
|`id`     | `string`  | unique id for the message|
|`user`   | `string`  | user sending message|
|`message`   | `string`  | message|


