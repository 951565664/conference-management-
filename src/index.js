import dva from 'dva';
import './index.less';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/mainM'));
app.model(require('./models/topM'));
app.model(require('./models/KQhuskyTableM'));
app.model(require('./models/WZhuskyTableM'));
app.model(require('./models/BMhuskyTableM'));
app.model(require('./models/JLhuskyTableM'));
app.model(require('./models/YHhuskyTableM'));
app.model(require('./models/LXhuskyTableM'));
app.model(require('./models/SBhuskyTableM'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
