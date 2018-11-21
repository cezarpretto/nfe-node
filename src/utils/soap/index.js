import soap from 'soap'
import axios from 'axios'

const createClient = ({ certificado, senha, urlWsdl, service, port, func }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const security = new soap.ClientSSLSecurityPFX(certificado, senha)
      const options = {
        preserveWhitespace: false,
        disableCache: true,
        returnFault: true,
        // rejectUnauthorized: false,
        // forceSoap12Headers: true,
        wsdl_options: {
          forever: true,
          // rejectUnauthorized: false,
          strictSSL: false,
          pfx: certificado,
          passphrase: senha,
          connection: 'keep-alive',
          xmlKey: 'keykey'
        }
      }
      const client = await soap.createClientAsync(urlWsdl, options)
      client.setSecurity(security)
      const fn = Object.keys(client).find(x => x.toLowerCase().includes('async'))
      const request = mountRequest({ service, port, func, client })
      client.request = request
      resolve(client)
    } catch (e) {
      reject(e)
    }
  })
}

const mountRequest = ({ service, port, func, client }) => {
  try {
    return (body = '') => {
      return new Promise(async (resolve, reject) => {
        try {
          const method = client[`${func}Async`]
          const response = await method({ $xml: body.split('\n').map(x => x.trim()).join('') })
          resolve(response)
        } catch (e) {
          reject(e)
        }
      })
    }
  } catch (e) {
    throw e
  } finally {

  }
}

export {
  createClient
}
