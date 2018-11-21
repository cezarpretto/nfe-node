import { getWebservice } from '../utils/webservices'
import { createClient } from '../utils/soap'
import validateResponse from '../utils/validateResponse'

const consultaChaveSefaz = ({ certificado: { certificado, senha }, uf, tpAmb = 'homologacao', chave }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {
        method,
        versao,
        urlWsdl,
        urlNamespace,
        urlPortal,
        service,
        port,
        func
      } = await getWebservice({ uf, tpAmb, nome: 'consultaProtocolo' })
      const client = await createClient({ certificado, senha, urlWsdl, service, port, func })
      const body = `
        <consSitNFe xmlns="${urlPortal}" versao="${versao}">
          <tpAmb>${tpAmb === 'producao' ? 1 : 2}</tpAmb>
          <xServ>CONSULTAR</xServ>
          <chNFe>${chave}</chNFe>
        </consSitNFe>
      `
      const response = await client.request(body)
      const data = response[0].retConsSitNFe
      const validResponse = await validateResponse(response)
      resolve(data)
    } catch (e) {
      reject(e)
    }
  })
}

export default consultaChaveSefaz
