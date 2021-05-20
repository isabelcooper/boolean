import {valueToBool} from './toBoolean';

describe('common utility functions for Boolean', () => {
  describe('value_to_bool', () => {

    const arrayOfTrueValues = ['TRUE', 'True', 'true', 'on', '1', 'ON', 1];

    test.each(arrayOfTrueValues)(`returns TRUE`, (testVal) => {
      expect(valueToBool(testVal)).toEqual(true)
    })

    const arrayOfFalseValues =  ['FALSE', 'False', 'false', 'off', '0', 'OFF','', 0, null];

    test.each(arrayOfFalseValues)(`returns FALSE`, (testVal) => {
      expect(valueToBool(testVal)).toEqual(false)
    })

  });
});


