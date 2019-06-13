# HW13_FriendFinder
Homework #13 Friend Finder

## Friend Finder ##
### About ###
An app that helps you find a friend -- or possible a date -- after filling out a survey. This full stack site takes in results from the users' surveys, then compares their answers with those from other users. The app then displays the name and picture of the user with the best overall match.

This app uses Express to handle routing and is deployed using Heroku so other users can fill it out.

### Before We Start ###
You will need to run npm install to get the right packages from the package.json otherwise this program will not work.

### How It Works ###
When you run the app it will display home page which will take the user to a survey page with 10 questions. Each answer is on a scale of 1 to 5 based on how the user agrees or disagrees with a question.

After the user answers the questions, the app will determine the user's most compatiable. The user is notified with a modal.

If the user doesn't answer all the questions and fill out the name and add an image it will prompt the user to do so.

The app is deployed [here]: https://obscure-brushlands-43401.herokuapp.com/
