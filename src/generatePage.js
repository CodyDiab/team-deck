
const generateManagers = require("./generateManager")

const generateInterns = require("./generateIntern")

const generateEngineers = require("./generateEngineer")



// const generatePage = (managers,engineers,interns) => {
//    for(i=0;i<managers.length;i++){
//       const manager = managers[i]
//     console.log( `
    
//     <main class="uk-child-width-1-4@m uk-text-center" uk-grid>
//             <div class="uk-card-default uk-card-body">
//                 <h3 class="uk-card-title">${manager.getName()}</h3>
//                 <h4>Manager<i class="fas fa-chess-queen"></i></h4>
//                 <ul class="uk-list uk-list-divider">
//                     <li>Id:${manager.getId()}</li>
//                     <li>Email:<a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
//                     <li>Office number:${manager.getOfficeNumber()}</li>
//                 </ul>
    
    
//     `)


//    }
// }
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
      </div>

    <script src="https://cdn.jsdelivr.net/npm/uikit@3.4.6/dist/js/uikit.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.4.6/dist/js/uikit-icons.min.js"></script>
  </body>
</html>



    `
}



module.exports=generatePage 