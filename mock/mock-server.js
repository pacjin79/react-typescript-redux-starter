import {mockdb} from './db';
import {create, router, bodyParser, rewriter, defaults} from 'json-server';

const server = create();
const routes = require('./router.json');
const appRoutes = router(mockdb());
const middlewares = defaults();

server.use(middlewares);
server.use(bodyParser);

// custom routes
server.post('/auth', (req, res) => {
    console.log('req here = ', req.body);
    const {
        email, password
    } = req.body;

    if(email && email.endsWith('@biolog.com')) {
        res.status(200).json({
            email: email,
            firstname: 'Leo',
            lastname: 'Jin',
            isAuthenticated: true
        });
    } else {
        res.status(400).json({
            message: 'Invalid credentials',
            request: req.body,
            isAuthenticated: false
        })
    }
});
// static routes
server.use(rewriter(routes));
server.use(appRoutes);

server.listen(3100, () => console.log('Json server is running at port 3100'));

