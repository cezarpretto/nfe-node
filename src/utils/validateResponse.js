const validateResponse = (response) => {
  return new Promise(async (resolve, reject) => {
    try {
      const responseJson = response[0]
      const responseXmlString = response[1]
      const xMotivo = await extractXMotivo(responseXmlString)
      // console.log(response)
      if (xMotivo.toLowerCase().includes('rejeicao')) {
        return reject(new Error(xMotivo))
      }

      resolve(response)
    } catch (e) {
      reject(e)
    }
  })
}

const extractXMotivo = (string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const regex = new RegExp(/<xMotivo>(.+?)<\/xMotivo>/i)
      const extracted = regex.exec(string)
      if (!extracted) {
        return reject(new Error('xMotivo não foi retornado do WebService'))
      }

      resolve(extracted[1])
    } catch (e) {
      reject(e)
    }
  })
}

export default validateResponse
