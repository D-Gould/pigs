var express = require('express');
var router = express.Router();

/* GET game listing. */
router.get('/', function(req, res, next) {
    function shufflePlayers(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    let nextTurn = 0
    function shiftNextTurn(players) {
        nextTurn = (nextTurn + 1) % players.size
    }

    const players = Object.values(req.query).filter(item => item).map(name => {return {name: name, score: 0}})
    if (players.size === 0) {
        // add an error message here
    }
    shufflePlayers(players)


    res.render('choice', {title: "Pigs", players: players, nextTurn: players[nextTurn].name});
});

module.exports = router;