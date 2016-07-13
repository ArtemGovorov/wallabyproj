module.exports = function (w) {
    return {
        files: [
            'src/**/*.ts',
            'tests/**/*.ts',
            '!tests/**/*Tests.ts'
        ],
        tests: [
            'tests/**/*Tests.ts'
        ]
        ,
        compilers: {
            'src/**/*.ts': w.compilers.typeScript({ orderFilesByReferenceComments: true })
        }
    }
}
