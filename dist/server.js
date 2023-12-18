'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const dotenv_1 = __importDefault(require('dotenv'));
const config_1 = __importDefault(require('./config/config'));
const cors_1 = __importDefault(require('cors'));
const helmet_1 = __importDefault(require('helmet'));
const index_1 = __importDefault(require('./router/index'));
const server = (0, express_1.default)();
server.use((0, cors_1.default)());
const port = process.env.PORT || 5001;
server.options('*', (0, cors_1.default)());
(0, config_1.default)();
dotenv_1.default.config();
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: true }));
server.use(express_1.default.static('public'));
server.use((0, helmet_1.default)());
server.use('/app', index_1.default);
server.get('/', (req, res) => {
  res.status(200).json({ api: 'blog is UP' });
  server.listen(port, () =>
    console.log(`\n** Server is listening on the port ${port} **\n`)
  );
});
