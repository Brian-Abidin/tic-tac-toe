# tic-tac-toe

A project done as part of the Odin Project curriculum.

The purpose of this project is to create a functioning tic-tac-toe game
using knowledge of HTML, CSS, and JavaScript learned from the Odin Project 
Curriculum. Up to 2 players can play and input their name inside the input fields
on the webpage. The user then decides who goes first, x or o. Player 1 is given
the X symbol and Player 2 is given the O symbol. If the users have not input 
all the necessary information, a warning text will appear telling the users 
to please do so. 

Upon filling all the required fields and clicking the new button the new button
will disappear. A 3x3 grid will appear and text above the grid will display 
who's turn it is. The grid is made using an array inside the gameboard object 
and each box is filled using DOM manipulation. 

If the game results in a Draw, the text will let the user know it is a draw and
all the text contents will turn darkorange. If the game results in a win by
by either player, the symbols that achieved the 3 in a row requirement will be
highlighted in green and the text above the grid will display the winner's name.

Upon clicking the reset button all information fields will be emptied and the
grid and everything inside the game div will be deleted. The information page
will be displayed and users can re input their information to start the game
again. 
