# This is Daniel's final project for MET CS 601!
[Github link](https://github.com/DLulka/CS601_Final_Lulka)

[Webpage link](https://mellow-bonbon-e92766.netlify.app)

In this file I will go deeper into my project explaining the functions and technologies used.

## Navigation Menu
All the pages have a navigations menu that allows the user to go from oen page to another, it indicates in what page you are and when you hover your mouse over the other options it changes the backgorund of the option. All of this is done with CSS. The name page where you are is indicated by "active".

## Cert.html
This page shows the certifications that I have aquired. When passed through the validator it shows some warnings because I have empty headers that are filled with a JSON. This page gets the information with a promise, using a fetch to get the JSON and then populating the the headers and paragraphs with a javascript that extracts the information of the response of the promise by mapping the data and then sets the information on each header or paragraph. If there is an error it catches it and to write the paragrapsh I am using the back tick. To fire the function that fetches the JSON I use the "onload" option on the body.

## Contact.html
This page allows the users to get in touch with me. It requires all the fiels to be filled, except the comments and from the beginning the submit button is disabled. Through JavaScript I manipulate the DOM to do the fields validations, using REGEX tests to verify that the user is following the rules. The page provides feedback as soon as the user types something in the fields.

## Home.html
This is the landing page and it just provied a brief description of me.

## RM.html
This webpage provides some information about my favorite football club, Real Madrid. This webpage does not pass validation because it uses VUE. VUE is used to displau the header. The webpage also has am accordeon list that is a combination of CSS and VUE. Through VUE it iterates the stats of the players and shows the images of the beginning and end of the webpage. Through CSS there is a vertical accordeon with the picture of each player (Raul or Zidane) and when you hover over them it enlarges and shows you the name of the player and some stats.  

## Travels.html
This page shows 4 cities I have visited. It shows four pictures and when you hove over it the picture changes to show me in that location. To achieve this effect I used VUE, with the "@mouseover" and "@mouseleave" I activated or deactivated a variable and then through ifs and else the image would change. I also have a typewriter effect made with VUE. You can even change the maximum typing speed by modifying the "160" inside the printer function in methods.

## Work.html
In this page I talk a little bit about my work experience. By using VUE, I create a table with nested fors about my experience.

