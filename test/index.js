import test from 'tape';
import isInteger from 'is-integer';
import * as utils from '../src/';

// Test getRandomValueInRange utility function
test('getRandomValueInRange', ({ test }) => {
  test('should returns a random value within a min and max value', t => {
    t.plan(1);

    const { getRandomValueInRange } = utils;

    const min = -Math.random() * 100;
    const max = Math.random() * 100;

    for (let i = 0; i < 100; i++) {
      const value = getRandomValueInRange(min, max);
      if (value < min || value > max) {
        return t.fail(`${value} is outside of [${min}, ${max}] range`);
      }
    }

    t.pass('ok');
  });

  test('should returns a random rounded value within a min and max value', t => {
    t.plan(1);

    const { getRandomValueInRange } = utils;

    const min = Math.round(-Math.random() * 100);
    const max = Math.round(Math.random() * 100);

    for (let i = 0; i < 100; i++) {
      const value = getRandomValueInRange(min, max, true);

      if (!isInteger(value)) {
        return t.fail(`${value} is not an integer`);
      }

      if (value < min || value > max) {
        return t.fail(`${value} is outside of [${min}, ${max}] range`);
      }
    }

    t.pass('ok');
  });
});

// Test mapValueToRange utility function
test('mapValueToRange', ({ test }) => {
  test('should map a value from one range to another', t => {
    t.plan(1);

    const { mapValueToRange } = utils;

    for (let i = 0; i < 100; i++) {
      const val = mapValueToRange(i, 0, 100, 0, 1);
      if (val !== i / 100) {
        return t.fail();
      }
    }

    t.pass('ok');
  });
});

// Test isPowerOfTwo utility function
test('isPowerOfTwo', ({ test }) => {
  test('should tell if a number if a power of two', t => {
    t.plan(1);

    const { isPowerOfTwo } = utils;

    const multiples = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096];

    for (let i = 0; i < 4097; i++) {
      const value = isPowerOfTwo(i);
      const expected = multiples.indexOf(i) === -1 ? false : true;

      if (value !== expected) {
        return t.fail(`${i}, expected: ${expected}, value: ${value}`);
      }
    }

    t.pass('ok');
  });
});

// Test roundToMultiple utility function
test('roundToMultiple', ({ test }) => {
  test('should round a number to a given multiple', t => {
    const { roundToMultiple } = utils;

    t.equal(roundToMultiple(0.9, 2), 0);
    t.equal(roundToMultiple(1.1, 2), 2);
    t.equal(roundToMultiple(2.5, 2), 2);
    t.equal(roundToMultiple(3.5, 2), 4);
    t.equal(roundToMultiple(3.5, 2), 4);
    t.equal(roundToMultiple(2, 6), 0);
    t.equal(roundToMultiple(4, 6), 6);
    t.equal(roundToMultiple(34, 6), 36);

    t.end();
  });
});
