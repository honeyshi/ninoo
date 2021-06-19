import { resolve as _resolve } from 'path';

export const resolve = {
  extensions: ['.tsx', '.ts', '.js', '.svg'],
  alias: {
    root: _resolve(__dirname, 'src'),
    components: 'root/components',
    core: 'root/core',
  },
  rules: [
    {
      test: /\.less$/,
      use: [
        {
          loader: 'less-loader',
        },
      ],
    },
  ],
};
