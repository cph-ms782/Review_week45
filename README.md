Review_week45


Wednesday

  * What is the advantage (if any) for a REST-based API of using JWT’s compared to session Cookies  
  **Everything is in the token. You just need to handle the token.**

  
  * What is the disadvantage (if any) with the implemented JWT-solution  
  **Token will never expire. You have to save token somewhere making it vulnerable**


  * What will a client (Single Page WEB, Mobile App, etc.) have to do in order to use this API  
  **It has to add username and password to body of initial request, and the returned token to header of next request**


