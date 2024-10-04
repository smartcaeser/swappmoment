import { fromNow, toNow } from '../src/index';

describe('fromnow', () => {
    test('fromNow returns a string', () => {
        expect(typeof fromNow(new Date())).toBe('string');
    });

    test('toNow returns a string', () => {
        expect(typeof toNow(new Date())).toBe('string');
    });

    // Add more specific tests as needed
});
