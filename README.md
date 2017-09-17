# Guiles-Theme-Phone-Calls-In-ES6

Quick ES6 code to make and receive calls that play Guile's Theme over the phone using the Twilio Node.js module.

## Installation

Standard installation:

```bash
yarn
yarn upgrade
```

In you have not done that already, install `Babel` globally. This will allow you to use the `babel-node` command line tool to run ES6 scripts directly.

```bash
npm i -g babel-cli
```

Also, you need to install `babel-preset-env`:

```bash
yarn add babel-preset-env -D
```

and add the following code to your `.babelrc` file:

```json
{
  "presets": [
    ["env", {
      "targets": {
        "node": "current"
      }
    }]
  ]
}
```

## Run

```bash
babel-node index.js
```

## Test

Open up a new terminal window and try hitting it with curl to make sure everything is working and we receive XML as a response:

```bash
curl -X POST http://localhost:3000/voice
```

The response should look like this:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response><Play>http://ocrmirror.org/files/music/remixes/Street_Fighter_2_Guile%27s_Theme_Goes_with_Metal_OC_ReMix.mp3</Play>
</Response>
```

## ngrok

Install globally:

```bash
npm i -g ngrok
```

Start `ngrok` listening on port 3000:

```bash
ngrok http 3000
```
