module.exports = {
  name: 'network_metrics_hourly',
  config: {
    description: 'Hourly network metrics',
    dest: {
      index: 'network_metrics_hourly',
    },
    sync: {
      time: {
        delay: '60s',
        field: 'updatedAt',
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
            calendar_interval: '1h',
          },
        },
      },
      aggregations: {
        fillCount: {
          value_count: {
            field: '_id',
          },
        },
        fillVolume: {
          sum: {
            field: 'value',
          },
        },
        protocolFeesETH: {
          sum: {
            field: 'protocolFeeETH',
          },
        },
        protocolFeesUSD: {
          sum: {
            field: 'protocolFeeUSD',
          },
        },
        tradeCount: {
          sum: {
            field: 'tradeCountContribution',
          },
        },
        tradeVolume: {
          sum: {
            field: 'tradeVolume',
          },
        },
      },
    },
  },
};