# React Docgen Demo
Demonstrates using react-docgen library to parse react components
and extract metadata into a JSON structure. This could then be used
to train an ML model or it could be used with a GPT prompt to automatically 
generate selenium tests.

## Running the Demo

```
npm install
node src/parseComponents.js
```

This will print the json object presenting metadata for a button componentf
to the terminal. Typically we would output this to a file in our test automation
framework and generate selenium tests from it.
