import { defineConfig } from 'umi';
import proxy from './proxy';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    name: 'Ant Design',
    locale: false,
  },
  fastRefresh: {},
  dva: {
    immer: true,
    hmr: true,
  },
  proxy,
  routes,
});
