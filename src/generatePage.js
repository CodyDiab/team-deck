
const generateCard = require("./generateManager")

// const generateInterns = require("./generateIntern")

// const generateEngineers = require("./generateEngineer")


const generateManagers = (managers)=> {
    
    if(managers.length>=1){
    
    for(i = 0; i < managers.length; i++){
      const  manager = managers[i]
         
            generateCard(manager) 
          
         
           
        
    }
    
  } else{
      return``
  }
}
const generateEngineers = (engineers)=> {
    if(engineers.length>=1){
    for(i = 0; i < engineers.length; i++){
       const engineer = engineers[i]
       console.log(engineer.github)
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
  }else{
      return``
  } 
}
const generateInterns = (interns)=> {
    if(interns.length>=1) {
    for(i = 0; i < interns.length; i++){
       const intern = interns[i]
       console.log(intern.email)
        return`
        <div class="uk-card-default uk-card-body">
        <h3 class="uk-card-title">${intern.name}</h3>
        <h4>Intern<i class="fas fa-chess-pawn"></i></h4>
        <ul class="uk-list uk-list-divider">
            <li>Id:${intern.id}</li>
            <li>Email:<a href="mailto:${intern.email}">${intern.email}</a></li>
            <li>University:${intern.school}</li>
        </ul>

    </div>
        `
    }
  }else{
      return``
  }
}


const generatePage = (managers,engineers,interns) => {
    return`
    <!DOCTYPE html>
<html lang="en">
 <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.4.6/dist/css/uikit.min.css" />
    <script src="https://kit.fontawesome.com/6d78533c1d.js" crossorigin="anonymous"></script>
<body>
      <div class="">
          <div class="uk-background-secondary uk-light uk-height-small">
            <h1 class="uk-heading-bullet uk-heading-xlarge">Team Deck<i class="fas fa-chess-board"></i></h1>
          </div>
          
         <main class="uk-child-width-1-4@m uk-text-center" uk-grid>
           ${generateManagers(managers)}
           ${generateEngineers(engineers)}
           ${generateInterns(interns)}

       </main>
      

    <script src="https://cdn.jsdelivr.net/npm/uikit@3.4.6/dist/js/uikit.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.4.6/dist/js/uikit-icons.min.js"></script>
  </body>
</html>



    `
}



module.exports=generatePage 