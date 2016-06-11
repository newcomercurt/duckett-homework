//this first line of code targets the list item with an id that is not equal to "one" and uses three methods with jquery to
// manipulate the dom resulting in the elements being hidden, creating a pause of 500 miliseconds and a fade in of 1400 miliseconds.
$('li[id!="one"]').hide().delay(500).fadeIn(1400); // semi-colon indicates end of chaining - can be writen on separate lines
//this second line of code targets the first item of the li in the html document to add a class of "next" which will change the styling as appropriate.
$('li:first-child').addClass('next');
//from what i am looking at, it appears that this will target the priority child of li and add a class of highlight but i have never seen this before and it does not appear in the html file. please advise.
$('li.priority').addClass('highlight');
