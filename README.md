# React Scoreboard with Redux Store 

*This is part of a larger project built exclusively for the iPad, and has been sized to meet this spec. UX and layout were organized by other parties.*

**Demo:** [http://projects.angiesiudevworks.com/reactscoreboard/](http://projects.angiesiudevworks.com/reactscoreboard/)

Finds the 3 people/characters based on a set of chosen factors (Background path) or a chosen quote (Mindset path). 
1. Via the Background path, choose 1 to 3 primary factors and as many corresponding subfactors as desired. Each person has a score associated with each of these factors (see `_data/people.json`). Based on the factors chosen, each person's score will be totaled up and the 3 with the highest scores will be returned in descending order. If there is a tie, then the tied results would be listed in alphabetical order.
2. Via the Mindset path, the 3 people associated with that quote will be returned (see `_data/quotes.json`).
