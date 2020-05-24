


const internCard = (interns)=> {
    if(interns) {
    for(i = 0; i < interns.length; i++){
       const intern = interns[i]
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
  }
}



module.exports = internCard