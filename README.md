Review_week45


Wednesday

  * What is the advantage (if any) for a REST-based API of using JWT’s compared to session Cookies  
  **Everything is in the token. You just need to handle the token.**

  
  * What is the disadvantage (if any) with the implemented JWT-solution  
  **Token will never expire. You have to save token somewhere making it vulnerable**


  * What will a client (Single Page WEB, Mobile App, etc.) have to do in order to use this API  
  **It has to add username and password to body of initial request, and the returned token to header of next request**  


### h)  
* Did this logout involve the server  
**No, server calls. Token is just deleted on client**
* Is the token (if kept somewhere, still valid?)  
**It's valid**
 * If your  answer to the question above was yes, is this a problem?, and if, how could it have been solved?  
** It will expire 10 minuttes later, so server could reject it**


### Friday SP7  
* Describe the term Single Page Application and why it relevant for modern web-applications  
****
* Describe the functionality of client-side routing  
****
* Explain about Routing in React, including Necessary includes, overall strategy, and relevant Controls like: HashRouter, BrowserRouter, Switch, Route, Link, NavLink, Prompt
****
* Explain (preferably by demonstrating how you did it) how to pass arguments using the Route component.
****




