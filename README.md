# traveler-expo-app

Frontend repo for the traveler application. The backend is currently not hosted and you will need to run the [backend](https://github.com/Revenology/traveler) for the application to work correctly.
A mock service is to be implemented for running the frontend application by itself.

## Setup

Run the following commands.

```bash
npm install
```

## Running app

To run the application run one of the following command based on your platform:

```bash
npm start

# Or if you are using yarn

yarn start
```

Scan the QR code that renders in the CLI. Note that the browser implementation is currently broken.

## Running storybook

To run the storybook web server run the following command.

```bash
npm run story book
```

## Branching rules

Please branch using the following convention

```bash
#Feature
git checkout -b 'feature/feature_description'

#Bugfix
git checkout -b 'bugfix/bugfix_description'

#Test
git checkout -b 'test/test_name'
```
