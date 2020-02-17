module.exports = {
  name: 'active_trader_metrics_monthly',
  config: {
    description: 'Monthly active trader metrics',
    dest: {
      index: 'active_trader_metrics_monthly',
    },
    sync: {
      time: {
        delay: '60s',
        field: 'date',
      },
    },
    source: {
      index: ['fills'],
    },
    frequency: '1m',
    pivot: {
      group_by: {
        date: {
          date_histogram: {
            field: 'date',
            calendar_interval: '1M',
          },
        },
      },
      aggregations: {
        activeMakers: {
          cardinality: {
            field: 'maker.keyword',
          },
        },
        activeTakers: {
          cardinality: {
            field: 'taker.keyword',
          },
        },
        activeTraders: {
          cardinality: {
            field: 'traders.keyword',
          },
        },
      },
    },
  },
};