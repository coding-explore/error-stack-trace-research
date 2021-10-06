Error.prepareStackTrace = function (error, callSites) {
  return error.toString() + '\n' + callSites.map(callSite => {
    return '    -> ' + callSite.getFunctionName() + ' (' +
      callSite.getFileName() + ':' +
      callSite.getLineNumber() + ':' +
      callSite.getColumnNumber() + ')'
  }).join('\n')
}

function c() {
  thrownewError('error!!!')
}

function b() {
  c()
}

function a() {
  b()
}
try {
  a()
} catch (e) {
  console.log(e.stack)
}