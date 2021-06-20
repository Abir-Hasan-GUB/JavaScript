class customError extends Error {
    constructor(msg) {
        super(msg)
        if (Error.captureStackTrace) { // find V8 Engine
            Error.captureStackTrace(this, customError)
        }
    }
}

try {
    console.log('I am Line 1')
    throw new customError('I am your Error')
} catch (e) {
    // console.log(e)
    console.log('This is Custom Error Message')
} finally {
    console.log('I am Finally Block')
}