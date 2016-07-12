///<reference path="../typings/index.d.ts"/>
module TestFiles {

    describe('fixturefile', () => {
        it('should be included', () => {
            expect(true).toBeTruthy()
        })
    });

    export const workStartedState = {
        started: true,
        paused: false
    }

    export const workPausedState = {
        started: true,
        paused: false
    }

}