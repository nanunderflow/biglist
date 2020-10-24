import _ from 'lodash';

const delay = ms => new Promise(r => setTimeout(r, ms));

const api = (fn) => (...args) => {
  const rnd = Math.floor(Math.random() * 2000);
  return delay(rnd).then(() => fn.apply(null, args));
}

const getInitial = api(() => {
  return _.reverse(_.map(_.range(1, 10), _.toString));
});

const getNewer = api(startPos => {
  const rnd = Math.floor(Math.random() * 5) + 2;
  return _.reverse(_.map(_.range(1, rnd), i => `${i + Number(startPos)}`));
});

export default {
  getInitial,
  getNewer
}


