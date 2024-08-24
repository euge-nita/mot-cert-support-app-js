**Login Application**

This project is based on a Login Application which will be used to test automated checks. It will run an E2E automation check where user is able to log in to an app. Said check will later generate a report with details of test run.

**Getting started**

**Prerequisites:** 
It is important to have the following software, tools, libraries and dependencies available 

Software: 
Java
Visual studio code
Github
Google Chrome browser

Tools and Libraries
Library Manager: NPM
Runner: Jest
Actor: React-Testing-Library
Assertion: Jest
Reporter: Jest-Junit

Dependencies:
In order to have the required dependencies available, this command needs to be run in terminal: 

npm install -save @testing-library/react jest nock jest-junit

**Before running tests**
It is important to check and make sure that the latest changes have been pushed to the corresponding GitHub repository.
In order to do this checks, the command: git status (which can be triggered from the terminal). This result will show if there are changes in files which have not yet been commited and pushed to the repository.
If there are uncommited changes, they can be commited by running: git add .
Then the changes will be commited so it is time to push those changes into the repository. This will be done by typing the command: git push origin main

**How to test?**
In VisualCode locally - **before** pushing 
First of all, run the npm start command in the terminal, so that FE is available for the code to run and show the UI. The "wiremock" drawing will be shown in the terminal if FE has been successfully started.
Then, run the command: npm test. The test run will start and details on its run will be provided in the terminal. After run is finished, there are two possible results:
PASS: meaning that the test has been successfully run and the checks in it passed without errors.
FAIL: which means that the test was not successful for whichever reason it might be.
OR
Just clicking on F5 will trigger the run (unless the F5 key is not set up to trigger the run)

In Github - **after** pushing
As the code deployed to the repository includes an automated check, this will be run on GitHub once code with latest changes has been pushed.
If the check result was either failure or success, it will be possible to see it inside the commit details. 
Once inside the details of the test run, it will be possible to "Re-run all jobs" and re-trigger test run if test failed. 