# Introduction to JavaScript - Debrief

* Start by linking your js file to your html file
* Open in browser/live server so you can see your changes in real time and notice how the code morphs the `live browser page`

1. FizzBuzz
   * Create variable `myNumber`
   * Check that the value of the `myNumber` is of type `number`
   * If `myNumber` is not a number, print 'This is not a number' to the console.
   * If value of `myNumber` is a multiple of 3 print 'Fizz' to the console
   * If value of `myNumber` is a multiple of 5 print 'Buzz' to the console
   * If the value of `myNumber` is a multiple of both 3 and 5 (ex. 15) print FizzBuzz to the console
   * If the value of `myNumber` is any other number print the value of `myNumber` to the console.
   * Reference Codecademy lessons: Introduction- Arithmetic Opertaors, Conditional Statements lessons 3, 4, 5,and 9

2. E-Commerce Item list
    * Use a swtich statement to print the price of the each item in the store to the console.
    * Ex. If the value of the variable is 'shoes' then, the statement `Shoes are $50` should be printed to the console.
    * Reference: Codecademy lesson 10

    Items:
     * Shoes- $50
     * Jeans- $25
     * Hat- $12
     * Socks- $2
     * If the variable input is not an item in the store, then print 'Invalid Item' to the console.

3. Print a random integer (whole number) between 50 (inclusive) and 100 (exclusive)  to the console
    * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

## Part 1 - Fork and Clone the project

* Begin by _forking_ this project into a personal repository.
   ** To do this, click the `Fork` button located at the top right of this page.
* Navigate to your github profile to find the _newly forked repository_.
* Clone the repository from **your account** into the directory on your computer that you use to keep your projects (ex. `dev` directory).
    ** Remember this from the lessons on Git and Github?
        * Go to the green `Code` button in the top right of this repository
        * Select `https` and then COPY that url
        * Open Git Bash on your computer, `cd` to a directory where you wish to save this assignment to work on
        * Type `git clone ` followed by the URL you copied from Github
        * `cd` into the repository for this assignment that you have just cloned.
* Open the newly cloned project in a code editor (ex. Visual Studio Code).

### Part 2 - Edit the _cloned_ project

* from a text editor (i.e. - Visual Studio Code, Notepad ++, etc...), select:
  * `File` > `Add Folder to WorkSpace`
    * Select the directory you use to store your projects (ex. `dev` directory)
    * From the text editor, in the directory you use to store your projects (ex. `dev` directory), locate the newly cloned project folder.
    * Expand the project from the _project explorer (may just be called `explorer`)_
    * Modify the `app.js`file to complete the assignment.


### Part 3 - _Pushing_ new changes to repository

* From a _terminal_ navigate to the root directory of the _cloned_ project.
* From the root directory of the project, execute the following commands:
    * `git add .`
        * Add all files in current directory to the staging area
    * `git commit -m ' **write a commit message explaining what you did in that commit** '`
        * Save all staged changes to local repository
    * `git push -u origin main`
        * Push changes from local repository to remote repository

### Part 4 - Submitting assignment

* From the browser, navigate to the _forked_ project from **your** Github account.
* Click the `Pull Requests` tab.
* Select `New Pull Request`
