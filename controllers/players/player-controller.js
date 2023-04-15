
const api_url = "https://fantasy.premierleague.com/api/bootstrap-static/";

let players = [];

async function getApi(name) {

    players = [];

    const response = await fetch(api_url);
    let data = await response.json();
    let counter = 0;
    for (let i = 0; i < data.elements.length; i++) {
        // console.log("inside here")
        // console.log(data.elements[i]);
        let team = data.elements[i].team;
        team--;
        // console.log("Team : " + data.teams[team].name);
        // console.log("Value : " + data.elements[i].now_cost / 10);
        // element_type
        let position = data.elements[i].element_type;
        position--;

        let teamName = data.teams[team].name;

        let playerPosition = data.element_types[position].singular_name;

        let fullName = data.elements[i].first_name + " " + data.elements[i].second_name

        if(data.elements[i].first_name.toLowerCase().includes(name.toLowerCase()) ||
            teamName.toLowerCase().includes(name.toLowerCase()) ||
            playerPosition.toLowerCase().includes(name.toLowerCase()) ||
            fullName.toLowerCase().includes(name.toLowerCase()) ||
            data.elements[i].second_name.toLowerCase().includes(name.toLowerCase())) {
            if(counter === 20)
                break;
            // console.log(data.elements[i]);
            // console.log("Counter is : " + counter);
            // console.log("First name : " + data.elements[i].first_name);
            // console.log("Last name : " + data.elements[i].second_name);
            // console.log("Squad number : " + data.elements[i].squad_number);
            // let team = data.elements[i].team;
            // team--;
            // // console.log("Team : " + data.teams[team].name);
            // // console.log("Value : " + data.elements[i].now_cost / 10);
            // // element_type
            // let position = data.elements[i].element_type;
            // position--;
            // console.log("Position : " + data.element_types[position].singular_name);
            counter++;
            let photoLink = data.elements[i].code + ".png"
            let playerData = {
                "first_name": data.elements[i].first_name,
                "second_name": data.elements[i].second_name,
                "team_name": teamName,
                "value": data.elements[i].now_cost / 10,
                "position": playerPosition,
                "photo": "https://resources.premierleague.com/premierleague/photos/players/110x140/p" + photoLink,
                "_id": data.elements[i].code,
            }

            players.push(playerData);
        }
    }
    // players.forEach(function(player) {
    //     console.log(player);
    // });
    // console.log("players are : " + players[0].string);
    // return players
    // show(data);
}

const PlayerController = (app) => {
    app.get('/api/players/:pid', findPlayersById)
}

const findPlayersById = async (req, res) => {
    const playerId = req.params['pid'].substring(1);
    // console.log("inside here : " + playerId)
    // let players = [];
    const p = await getApi(playerId);

    players.forEach(function (player) {

     });

    res.json(players);
}


export default PlayerController

