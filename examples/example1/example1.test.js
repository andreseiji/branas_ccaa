const example1 = require('./example1_after');

test('Should calculate a taxi ride in normal days', function() {
  // given
  const distance = 1000;
  const date = new Date('2021-07-10T10:00:00');
  // when
  const price = example1.calculateRide(distance, date);
  // then
  expect(price).toBe(2100);
});

test('Should calculate a taxi ride in at night', function() {
  const distance = 1000;
  const date = new Date('2021-07-10T22:00:00');
  const price = example1.calculateRide(distance, date);
  expect(price).toBe(3900);
});

test('Should calculate a taxi ride on Sunday', function() {
  const distance = 1000;
  const date = new Date('2021-07-11T10:00:00');
  const price = example1.calculateRide(distance, date);
  expect(price).toBe(2900);
});
