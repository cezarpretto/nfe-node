const estados = require('./estados.json')

const ufToIbgeCode = (uf = '') => {
  return new Promise(async (resolve, reject) => {
    try {
      const estado = estados[uf.toUpperCase()]
      if (estado) {
        return resolve(estado.ibgeCode)
      }

      reject(new Error('A UF informada não existe.'))
    } catch (e) {
      reject(e)
    }
  })
}

export { ufToIbgeCode }
