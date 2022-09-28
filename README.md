# Lodash Testing Exercise

This repo is a loose modification of the main `lodash` package. The intention of this repo is to serve as an exercist for learning how to write unit tests. 

## Getting Started
1. Link up with a partner
2. Clone this repo (`git clone git@github.com:mo-fippi/lodash-dev-time.git`)
3. Run `npm install`
4. Run `npm run test`. Tests for `add.js` should pass, and there should be zero coverage for the rest
5. Choose some methods inside `lib/` and write some tests for it!!!

## Folder Structure

A subset of lodash methods have been selected and put into various folders inside `lib` for testing. The remaining methods are all contained within the `.extras` folder, and may be tested if you really feel like it.


Note: Only tests located within `lib/tests/*` will be executed unless you manually run them or modify the `test` script in `package.json`.

## Writing & Running Unit Tests

Create a new file in the `lib/tests` directory and write your test assertions there. Tests can be run using `npm run test`. This will run all the tests and output a readable coverage report.

## Notes

If using VS Code as your IDE, it's worth checking out the [Wallaby](https://wallabyjs.com/docs/intro/get-started-vscode.html) extension which will run your tests constantly within your IDE and give you visual details about how your tests are running. Note: you'll need to re-start wallaby every now and then as the free version requires you to do so.
