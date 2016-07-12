///<reference path="../typings/index.d.ts"/>
///<reference path="../src/sut.ts"/>
///<reference path="./TestFiles.ts"/>

module SutTests {

    describe('started state', () => {

        it('should work based on state', () => {
            var actual = Sut.dosomething(TestFiles.workStartedState);
            expect(actual).toEqual('I work');
        })
    })

}