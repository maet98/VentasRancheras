import { token } from "../src/models/token";
export var Token;

export function getToken() {
    token.findAll({
        limit: 1,
        order: [ [ 'createdAt', 'DESC' ]]
      }).then(function(entries){
          if(entries.length > 0){
              Token = entries[0].token;
              return Token;
          }
      }); 
}
