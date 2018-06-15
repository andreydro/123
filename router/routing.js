var windowLog = console.log;

var console = {
  log: (text) => {
    windowLog(text);
    document.querySelector('#logs').innerHTML += `${text}<br />`;
  }
};

/* global HashRouter */
var router = new HashRouter({
  routes: [{
    name: 'index',
    match: '',
    onBeforeEnter: () => console.log('onBeforeEnter index'),
    onEnter: () => console.log('onEnter index'),
    onLeave: () => console.log('onLeave index')
  }, {
    name: 'city',
    match: /city=(.+)/,
    onBeforeEnter: (city) => console.log(`onBeforeEnter city:${city}`),
    onEnter: (city) => console.log(`onEnter city:${city}`),
    onLeave: (city) => console.log(`onLeave city:${city}`)
  }, {
    name: 'about',
    match: (text) => text === 'about',
    onBeforeEnter: () => console.log(`onBeforeEnter about`),
    onEnter: () => {
      console.log(`onEnter about`);
      document.querySelector('#content').innerHTML = '<h1>About</h1>';
    },
    onLeave: () => {
      console.log(`onLeave about`);
      document.querySelector('#content').innerHTML = '';
    }
  }]
});