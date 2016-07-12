module.exports = function (w) {
    return {
        files: [
            'src/**/*.ts'
        ],
        tests: [
            'tests/**/*.ts'
        ]
        ,
        compilers: {
            'src/**/*.ts': w.compilers.typeScript({ orderFilesByReferenceComments: true })
        }
    }
}