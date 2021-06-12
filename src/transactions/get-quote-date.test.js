const getQuoteDate = require('./get-quote-date');

it('should return null when quote date is invalid', () => {
  const callData =
    '0x415565b0000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec700000000000000000000000024e3794605c84e580eea4972738d633e8a7127c8000000000000000000000000000000000000000000000000000000010bda9524000000000000000000000000000000000000000000000515bb2cfe48d9daa98400000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000003e0000000000000000000000000000000000000000000000000000000000000074000000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000032000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec7000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000002e000000000000000000000000000000000000000000000000000000000000002e000000000000000000000000000000000000000000000000000000000000002c0000000000000000000000000000000000000000000000000000000010bda952400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000012556e6973776170563300000000000000000000000000000000000000000000000000000000000000000000010bda95240000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000e592427a0aece92de3edee1f18e0157c0586156400000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000042dac17f958d2ee523a2206206994597c13d831ec70001f4a0b86991c6218b36c1d19d4a2e9eb0ce3606eb480001f4c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000024e3794605c84e580eea4972738d633e8a7127c8000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000002c000000000000000000000000000000000000000000000000000000000000002c000000000000000000000000000000000000000000000000000000000000002a0ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000002556e6973776170563200000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000515bb2cfe48d9daa983000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000f164fc0ec4e93095b804a4795bbe1e041497b92a00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000002000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000024e3794605c84e580eea4972738d633e8a7127c8000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000004000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec700000000000000000000000024e3794605c84e580eea4972738d633e8a7127c8000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000000869584cd00000000000000000000000086003b044f70dac0abc80ac8957305b6370893ed0000000000000000000000000000000000000000000000ca59288c';

  const quoteDate = getQuoteDate(callData);

  expect(quoteDate).toBeNull();
});

it('should return quote date when valid', () => {
  const callData =
    '0x5f575529000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000224e4ee71cc400000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000c307846656544796e616d69630000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000026000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002b591e99afe9f32eaa6214f7b7629768c40eeb390000000000000000000000000000000000000000000000000220176884a462000000000000000000000000000000000000000000000000000000006489a7d84e00000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000004cd85ed27de0000000000000000000000000011ededebf63bef0ea2d2d071bdf88f71543ec6fb00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000128d9627aa400000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000220176884a462000000000000000000000000000000000000000000000000000000006489a7d84e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000002b591e99afe9f32eaa6214f7b7629768c40eeb39869584cd00000000000000000000000011ededebf63bef0ea2d2d071bdf88f71543ec6fb0000000000000000000000000000000000000000000000f11cf7e1f260c4a890000000000000000000000000000000000000000000000000a7';

  const quoteDate = getQuoteDate(callData);

  expect(quoteDate).toEqual(new Date('2021-06-12T12:29:04.000Z'));
});

it('should return null when call data does not contain a quote date', () => {
  const callData =
    '0xa32fe0a100000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000444645a55b642a87dbe6329d818aa84ae4477bd93174f8f7eb81a68185e2c4ad73087cbe1d8000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000003c0000000000000000000000000000000000000000000000000000000000000032464a3bc150000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000169eec5d27e3000000000000000000000000000000000000000000000000000000000000000002a000000000000000000000000056178a0d5f301baf6cf3e1cd53d9863437345bf90000000000000000000000008d90113a1e286a5ab3e496fbd1853f265e5913c6000000000000000000000000465eea759643116c69174f46f5c181e7a4b3cf9a0000000000000000000000008d90113a1e286a5ab3e496fbd1853f265e5913c600000000000000000000000000000000000000000000000000000000eac91c02000000000000000000000000000000000000000000000000169eec5d27e30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060c4a9c73880c488a3464a8318e348f94032fc26e5e0fa7b34f92a3a2e0e73f7be7b0016000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000001e00000000000000000000000000000000000000000000000000000000000000024f47261b0000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec7000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024f47261b0000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000421ce75970d904b87b37e74e05e24dcd9d080d77ffd0438264233496e5d6cbe1396801f431ba7a5d198ee7091f6fab1438d12a26f73a010030323a1b506608410b34030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000561bd6347b4ad9b8a8734175a0751a848e2d5ae25983628de0dbd32cdbcb6d68dcb265b599616d4f1a40e2a4ae248c8271d0eb329af80645394af36e10ad4cdb0876465eea759643116c69174f46f5c181e7a4b3cf9a040000000000000000000000000000000000000000000000000000000000000000000000000000';

  const quoteDate = getQuoteDate(callData);

  expect(quoteDate).toBeNull();
});
