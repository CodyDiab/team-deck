

const engineerCard = (engineers)=> {
    if(engineers){
    for(i = 0; i < engineers.length; i++){
       const engineer = engineers[i]
        return`
             <div class="uk-card-default uk-card-body">
              <h3 class="uk-card-title">${engineer.name}</h3>
              <h4>Engineer<i class="fas fa-chess-knight"></i></h4>
              <ul class="uk-list uk-list-divider">
                  <li>Id:${engineer.id}</li>
                  <li>Email:<a href="mailto:${engineer.email}">${engineer.email}</a></li>
                  <li>GitHub:<a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
              </ul>

          </div>
        `
    }
  } 
}


module.exports = engineerCard;