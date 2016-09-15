### Mandatory features
1. An interactive board which renders on page load
2. A way for players to mark an empty space on their turn
3. The turns should alternate (red, black, red, black, etc.)
4. A player should not be able to mark a space that has already been played
5. The game should announce a winner if a player gets four tokens in a row, horizontally or vertically

### Recommended features
1. The game should announce a winner if a player gets four tokens in a row diagonally
2. The game should end when there is a winner, or if the game is a tie
3. The game should report the end state
Additionally you should use CSS to ensure a reasonable amount of styling to keep your project presentable.

###  Advanced features
Going above and beyond the basic implementation is desirable, should you have the time.  Feel free to enhance your project with any of the following features:
1. A button on `game over` to reset the game back to initial state
2. A way to keep track of Player 1 vs. Player 2 wins
- An option to play vs. a computer with AI
  - Level 1: Random empty space is good enough
  - Level 2: Computer chooses a space which immediately blocks a player win
3. Add in the ability to store a game to play later.  This might use Firebase or local storage to do so.
4. Add in the ability to play live with somebody remotely.  This will definitely need to use [Firebase](https://www.firebase.com/).

## Expectations
### You

As a student you should be doing the following things:

- **Code Planning**
  Plan out your project before you begin. Pseudo-code your project thoroughly!
  What data structures will you need (objects, arrays)?
  How will you organize your code?
  Pseudo-code out any thorny issues you might already anticipate.

- **User Experience planning** wireframes - https://wireframe.cc/xUPOI6

- Write *user stories* from the perspective of the user:
  "As a user I want to be able to click on x and have y happen". Sign up for Trello `https://trello.com/`, a handy to-do list style project planner.

  As a user:

  Step I - name editing
    - I want to set up my name in the name fields
        -> This updates the player names in the board and connects with messages in the display
            -> When player press "edit names" a new popup window appears saying:
                -> Please write player 1 and player two names and press ok (two fields are necessary)
        -> If no new names setup, game can start with default names Blue and Red
          -> Names can be written in the color of the tokens for easy identification of the teams

    -> Step II - Start game
        -> Whether names have been edited on step I is irrelevant for the game start.
              Just the scoreboard and the display following messages should be impacted
        -> Any player presses the button "New game" and the display shows which player turn is!
            -> Must setup a random player function to decide player starting and show message and then change turns always in the following matches

    -> Step III - Play the game
        -> set up the dropping zone with a hover listener
        -> move the tokens to the different fields
        -> After each play display shows "playerName turn"
        -> ensure the engine can identify when there are 4 on a row and in which direction
        -> When this condition is met display message "playerName won! Congratulations! the current score is... Press new game to start game or new match to start a new  match."
        - >When no more spaces left and no 4 in a line, display message: "This game is a draw! the current score is... Press new game to start game or new match to start a new match."

    -> Step IV - During the game
        -> press edit names - updates the names and the messages displayed
        -> press new game or new match - pops up message: "you are about to stop this game. the current game will end as a draw. Please confirm or cancel."
            -> if player chooses confirm - display message "this game is a draw. the current score is... Press new game to start the game or new match to start a new match."
            -> if player choose cancel; close pop up and return to game.





- **Version Control**  
  Use **git** and **github** for version control, and make frequent incremental commits to prevent large scale implosions. Make a fresh repo outside the class repo for your project.

- **Hosting**  
  Host your application on **githubpages**, or something similar so the class and instructors can use it. Your game must be in its own repo (not in the class repo) in order to have it hosted.

### Us

Since your instructors will be assessing your work, they will look for the following things:

- **Project Workflow**  
Did you you plan your project before you started? Did you use source control as expected for the phase of the program you’re in (detailed above)?

- **Technical Requirements**  
Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

- **Creativity**  
Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user?

- **Code Quality**  
Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?

- **Problem Solving**  
Are you able to defend why you implemented your solution in a certain way? Can you demonstrate that you thought through alternative implementations?

# Deliverables

By the time the project is over, we will expect the following from you:

* A **working game, built by you**, hosted somewhere on the internet
* A **link to your hosted working app**
* A **git repository hosted on Github**  NOT inside your wdi-remote repository. Frequent commits dating back to the very beginning of the project
* **A ``readme.md`` file** with explanations of the technologies used, the approach taken, a link to your live site, installation instructions, unsolved problems, etc.

Most importantly a **technical demonstration** of your app which:

* Is 5 minutes in length
* Shows off all features of the app
* Explains the technical details
* Explains the technical challenges
* Explains which improvements you might make


<br>
<hr>

### Suggested Ways to Get Started
​
​
* **Wireframe** Make a drawing of what your app will look like in all of the stages of the game (what does it look like as soon as you log on to the site? What does it look like while the player is playing? What does it look like when the player wins / loses?).

* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually.

* **Use your Development Tools** (console.log, inspector, alert statements, etc) to debug and solve problems

* Work through the lessons in class for help and inspiration! Think about adding relevant code to your game each day - you are given 5 days so that you can work on it in small chunks, COMMIT OFTEN. We will be looking at your commit dates and comments are part of your scoring.

* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.

* **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.

* **Don’t be afraid to write code that you know you will have to remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.
