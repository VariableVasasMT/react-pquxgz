import React from 'react';
import Tus from '@uppy/tus';
import { Dashboard } from '@uppy/react';
import '@uppy/core/dist/style.css';
import '@uppy/progress-bar/dist/style.css';
const uppy = new Uppy()
  .use(Webcam)
  .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files' });

export default function App() {
  // const uppy = useUppy(() => {
  //   return new Uppy().use(Tus, { endpoint: 'https://tusd.tusdemo.net/files' });
  // });
  return <Dashboard uppy={uppy} plugins={['Webcam']} />;
}
