const _ = require('lodash');
const { JOB, QUEUE } = require('../constants');
const { publishJob } = require('../queues');
const relayerRegistry = require('../relayers/relayer-registry');

const isOrderMatcher = relayerId => {
  const relayer = _(relayerRegistry)
    .values()
    .find({ lookupId: relayerId });

  return _.get(relayer, 'orderMatcher', false);
};

const calculateTradeCount = relayerId => {
  if (isOrderMatcher(relayerId)) {
    return 0.5;
  }

  return 1;
};

const indexAppFills = async fill => {
  const fillId = fill._id.toString();
  const value = _.get(fill, 'conversions.USD.amount');
  const tradeCount = calculateTradeCount(fill.relayerId);
  const tradeValue = value ? value * tradeCount : null;

  publishJob(QUEUE.INDEXING, JOB.INDEX_APP_FILLS, {
    attributions: fill.attributions,
    fillDate: fill.date,
    fillId,
    maker: fill.maker,
    taker: fill.taker,
    tradeCount,
    tradeValue,
    transactionHash: fill.transactionHash,
  });
};

module.exports = indexAppFills;
