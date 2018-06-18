let data = [{ item: 'get milk' }, { item: 'walk dog' }, { item: 'some thing' }]
const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extend: false });

module.exports = (app) => {
    app.get('/todo', (req, res) => {
        res.render('todo', { todoList: data });
    })
    app.post('/todo', urlencodedParser, (req, res) => {
        data.push(req.body);
        res.json(data);
    })
    app.delete('/todo/:item', (req, res) => {
        data = data.filter(function (todo) {
            return todo.item.replace(/ /g, "-") !== req.params.item;
        });
    })
}