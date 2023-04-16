
const api_url = "https://fantasy.premierleague.com/api/bootstrap-static/";

let players = [];

async function getApi(pid) {
    players = []
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


        if(data.elements[i].code === pid) {
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
                "_id": data.elements[i].code + "",
                "chance_playing_next_round" : data.elements[i].chance_of_playing_next_round,
                "news": data.elements[i].news,
                "news_added": data.elements[i].news_added,
                "status": data.elements[i].status,
                "value_season": data.elements[i].value,
                "minutes": data.elements[i].minutes,
                "goals_scored": data.elements[i].goals_scored,
                "assists": data.elements[i].assists,
                "clean_sheets": data.elements[i].clean_sheets,
                "goals_conceded": data.elements[i].goals_conceded,
                "own_goals": data.elements[i].own_goals,
                "penalties_saved": data.elements[i].penalties_saved,
                "penalties_missed": data.elements[i].penalties_missed,
                "yellow_cards": data.elements[i].yellow_cards,
                "red_cards": data.elements[i].red_cards,
                "saves": data.elements[i].saves,
                "influence": data.elements[i].influence,
                "creativity": data.elements[i].creativity,
                "threat": data.elements[i].threat,
                "starts": data.elements[i].starts,


            }

            players.push(playerData);
            break;


        }
    }
    // players.forEach(function(player) {
    //     console.log(player);
    // });
    // console.log("players are : " + players[0].string);
    // return players
    // show(data);
}

const SearchController = (app) => {
    app.get('/api/search/:pid', findPlayersById)
}

const findPlayersById = async (req, res) => {
    const playerId = req.params['pid'].substring(1);
    let pid = parseInt(playerId)
    const p = await getApi(pid);

    players.forEach(function (player) {

    });


    res.json(players[0]);
}




export default SearchController;

