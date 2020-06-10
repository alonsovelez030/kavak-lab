var emailsUnicos = function(emails) {
    if(emails instanceof Array) {
       var newEmails = emails.map(
         (email) => {
           var splitEmail = email.split('@');
           var splitNameDot = splitEmail[0].split('.');
           var splitNameSymbol = splitEmail[0].split('+');
           
           email = splitNameSymbol[0] + '@' + splitEmail[1];
           
           if(splitNameDot[0].length === 2){
             email = splitNameDot[0] + splitNameDot[1] + '@' + splitEmail[1];
           }
           
           return email;
         } 
       );
       return newEmails;
    } else {
      console.log('must be an Array');
    }
};
  
  
var send = emailsUnicos([
    'test.email+alex@kavak.com',
    'test.e.mail+bob.cathy@kavak.com',
    'testemail+david@kavak.com',
    'pe.dro@kavak.com',
    'ma.ria@kavak.com'
]);

console.log(send);
  
  
  
  
  
  