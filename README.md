# Lodash Testing Exercise

This repo is a loose modification of the main `lodash` package. The intention of this repo is to serve as an exercist for learning how to write unit tests. 

## Folder Structure

A subset of lodash methods have been selected and put into the `lib` folder for testsing. The remaining methods are all contained within the `no-test` folder, and may be moved into `lib/` if you want to expand your selection and write tests for other specific methods. 


`lib/tests/*` is where test files are saved and run from. NOTE: test files saved outside of this directory won't be run unless you manually run them or modify the `test` script in `package.json`.

## Writing & Running Unit Tests

Create a new file in the `lib/tests` directory and write your test assertions there. Tests can be run using `npm run test`. This will run all the tests and output a readable coverage report.

## Notes

If using VS Code as your IDE, it's worth checking out the [Wallaby](https://wallabyjs.com/docs/intro/get-started-vscode.html) extension which will run your tests constantly within your IDE and give you visual details about how your tests are running. Note: you'll need to re-start wallaby every now and then as the free version requires you to do so.