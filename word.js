var soccer = {
		mlsLeague: ["New York FC", "NY Red Bull", "New England Revolution", "Philadelphia Union", "Columbus Crew", "Orlando City SC", "Toronto FC", "Montreal Impact", "DC United", "Chicago Fire SC", "Atlanta United FC", "Vancouver Whitecaps", "Seattle Sounders", "Portland Timbers", "Real Salt Lake", "Houston Dynamo", "FC Dallas", "Sporting Kansas", "Colorado Rapids", "San Jose Earthquakes", "LA Galaxy", "Los Angeles FC", "Minnesota FC"]
	}


var rand = 0;
var word = "";


function mls(){
	rand = Math.floor(Math.random()*soccer.mlsLeague.length);
	word = soccer.mlsLeague[rand];
	hangman();
}

module.exports = mls;