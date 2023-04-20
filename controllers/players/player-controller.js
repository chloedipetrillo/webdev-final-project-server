
const api_url = "https://fantasy.premierleague.com/api/bootstrap-static/";

let players = [];

async function getApi(name) {

    players = [];

    const response = await fetch(api_url);
    let data = await response.json();
    let counter = 0;
    for (let i = 0; i < data.elements.length; i++) {
        let team = data.elements[i].team;
        team--;
        let position = data.elements[i].element_type;
        position--;

        let teamName = data.teams[team].name;

        let playerPosition = data.element_types[position].singular_name;

        let fullName = data.elements[i].first_name + " " + data.elements[i].second_name

        if(data.elements[i].first_name.toLowerCase().startsWith(name.toLowerCase()) ||
            teamName.toLowerCase().startsWith(name.toLowerCase()) ||
            playerPosition.toLowerCase().startsWith(name.toLowerCase()) ||
            fullName.toLowerCase().startsWith(name.toLowerCase()) ||
            data.elements[i].second_name.toLowerCase().startsWith(name.toLowerCase())) {
            if(counter === 20)
                break;
            counter++;
            let photoLink = data.elements[i].code + ".png"
            let playerData = {
                "first_name": data.elements[i].first_name,
                "second_name": data.elements[i].second_name,
                "team_name": teamName,
                "value": data.elements[i].now_cost / 10,
                "position": playerPosition,
                "photo": "https://resources.premierleague.com/premierleague/photos/players/110x140/p" + photoLink,
                "_id": data.elements[i].code +"",
                "chance_playing_next_round" : data.elements[i].chance_of_playing_next_round,
                "minutes": data.elements[i].minutes,
                "goals_scored": data.elements[i].goals_scored,
                "assists": data.elements[i].assists,
                "clean_sheets": data.elements[i].clean_sheets,
                "saves": data.elements[i].saves,
                "goals_conceded": data.elements[i].goals_conceded
            }

            players.push(playerData);
        }
    }
}

const PlayerController = (app) => {
    app.get('/api/players/:pid', findPlayersById)
}

const findPlayersById = async (req, res) => {
    const playerId = req.params['pid'].substring(1);
    const p = await getApi(playerId);
    players.forEach(function (player) {

     });

    res.json(players);
}


export default PlayerController

