/**
 * Created by mrcode on 16-6-21.
 */

let express = require('express'),
    router  = express.Router(),
    path    = require('path'),
    user    = require('./models/user.js')

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../dist/index.html')));

router.get('/test', (req, res) => res.send('hello world'));

router.get('/users', (req, res)=> {
    user((err, data) => {
        let response = {}
        if(err){
            response.error = '不能获取用户信息'
        } else {
            response.data = data
        }

        res.send(response)
    })
})

module.exports = router;