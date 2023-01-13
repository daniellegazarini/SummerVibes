const app = require('./app');
require('dotenv').config();

const PORT = 3001;

app.listen(PORT, async () => {
  // eslint-disable-next-line no-console
  console.log(`API TrybeCash está sendo executada na porta ${PORT}`);
});
