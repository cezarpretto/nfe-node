import { getWebservice } from '../utils/webservices'
import { createClient } from '../utils/soap'
import validateResponse from '../utils/validateResponse'
import { ufToIbgeCode } from '../utils/codigoIbge'
import chalk from 'chalk'

const consultaStatusSefaz = ({ certificado: { certificado, senha }, uf, tpAmb = 'homologacao' }) => {
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
      } = await getWebservice({ uf, tpAmb, nome: 'statusServicoNF' })
      console.log(chalk.red(urlWsdl))
      const codigoUF = await ufToIbgeCode(uf)
      const client = await createClient({ certificado, senha, urlWsdl, service, port, func })
      console.log(client.describe())
      const body = `
        <consStatServ xmlns="${urlPortal}" versao="${versao}">
          <tpAmb>1</tpAmb>
          <cUF>${codigoUF}</cUF>
          <xServ>STATUS</xServ>
        </consStatServ>
      `
      const response = await client.request(body)
      const validResponse = await validateResponse(response)
      const data = response[0].retConsStatServ
      resolve(data)
    } catch (e) {
      reject(e)
    }
  })
}

export default consultaStatusSefaz
