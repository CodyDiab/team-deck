

const managerCard = manager => {
    
    return `
            <div class="uk-card-default uk-card-body">
                <h3 class="uk-card-title">${manager.name}</h3>
                <h4>Manager<i class="fas fa-chess-queen"></i></h4>
                <ul class="uk-list uk-list-divider">
                    <li>Id:${manager.id}</li>
                    <li>Email:<a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li>Office number:${manager.officeNumber}</li>
                </ul>
        
           </div>
        `
    }
  




module.exports = managerCard; 