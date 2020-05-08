import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-require-js',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    }
  ]
};