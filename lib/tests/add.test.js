import add from "../1.simple/add";

describe('add', () => {
    it('should correctly add two numbers together', () => {
        expect(add(1, 2)).toEqual(3);
    });
    it('should concatenate when one or more parameters are of type string', () => {
        expect(add(1, '2')).toEqual("12");
    });
    it('should return NaN when one or more parameters are of type Symbol', () => {
        const res = add(1, Symbol("hello"));
        expect(res).toEqual(NaN);
    });
    it('should concatenate with the Symbol name when adding a Symbol and string', () => {
        const res = add("1", Symbol("hello"));
        expect(res).toEqual("1Symbol(hello)");
    });
    it('should return NaN when one or more parameters are of type Object', () => {
        const res = add(1, {});
        expect(res).toEqual(NaN);
    });
    it('should ignore undefined values when calculating result', () => {
        const secondParamUndefined = add(1, undefined);
        expect(secondParamUndefined).toEqual(1);

        const firstParamUndefined = add(undefined, 2);
        expect(firstParamUndefined).toEqual(2);

        const bothParamsUndefined = add(undefined, undefined);
        expect(bothParamsUndefined).toEqual(0);
    });
});