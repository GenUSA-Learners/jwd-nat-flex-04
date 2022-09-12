# It's Best to Test

## Directions

1. Make a new folder in your code editor and call it 'best-to-test'

2. cd into that folder and add an app.js file

3. Run 'npm init' **Note: make sure the entry point is app.js while you're going through the init prompts

4. Using the command line, install mocha and chai packages with the command ```'npm install mocha chai --save-dev'```
   **Note: this will save the packages as devDependencies

5. We want to be able to run the tests using the command 'npm run test' ...
   So, in the package.json file, replace the content of the string assigned to "test" with "mocha"
   It should look like this --> ```"test": "mocha"```

6. Save the package.json file

7. By default, mocha is going to look for a folder called 'test' ...
   So, add a folder called 'test' to the root directory (best-to-test folder)

8. cd into the test folder and create a file to test your app.js file called 'appTest.js'

9. We need to bring in our assertion library, and the file that will contain the code we're testing. Add the following lines of code to the top of the file:
   ```const assert = require('chai').assert;```
   ```const app = require('../app');```

10. Next, create a test by adding the following describe function block:
   ```describe('App', function(){```
   ```it('should return hello', function(){```
   ```assert.equal(app(), 'hello');```
   ```});```
  ```});```

11. In the terminal, run the command 'npm run test'
   **Note: your test will fail

12. Now we write the code to make the test pass. Open your app.js and add the following code:
   ```module.exports = function(){```
   ```return 'hello';```
   ```}```

13. Back in your terminal, run the test command again to see a passing test
   **Pro tip: to avoid having to scroll up to view your test results, you can run 'npm run test -s' OR you can go to the package.json file and where it says ```"test": "mocha"``` ...change it to ```"test": "mocha || true"```

14. Now that you've worked your way through the Test-driven development cycle with guidance, try writing one on your own. Add another it block inside the decribe function to test that the function returns a string. The test should pass without any additional modifications to the function.

15. Try refactoring your code to only bring in the function you're testing, rather than the entire app.js file. If it's done correctly, the test will still pass.
    **Helpful links: <https://www.sitepoint.com/understanding-module-exports-exports-node-js/>
   <https://support.smartbear.com/testcomplete/docs/scripting/calling-routines/declared-in-another-unit/javascript.html>

16. It's usually a good idea to assign the function you're testing to a result variable. Within the it blocks, assign the function to a variable called result and refactor the tests so they pass.
