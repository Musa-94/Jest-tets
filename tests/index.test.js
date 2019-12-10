import {getLetters} from '../src/index';

describe("getLetters", () => {
    it("should return str ", () => {
        const word = "Арбуз";
        const expected = "А\nр\nб\nу\nз\n";

        const actual = getLetters(word);
        
        expect(actual).toEqual(expected);
    })
})
