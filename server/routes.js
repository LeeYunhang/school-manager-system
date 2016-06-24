/**
 * Created by mrcode on 16-6-21.
 */

let express = require('express'),
    router  = express.Router()
    path    = require('path')

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../dist/index.html')));

router.get('/test', (req, res) => res.send('hello world'));

module.exports = router;