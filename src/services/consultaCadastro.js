import { getWebservice } from '../utils/webservices'
import { createClient } from '../utils/soap'
import validateResponse from '../utils/validateResponse'

const consultaCadastro = ({ certificado: { certificado, senha }, uf, tpAmb = 'homologacao', argumentos: { nome, valor } }) => {
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
      } = await getWebservice({ uf, tpAmb, nome: 'consultaCadastro' })
      const client = await createClient({ certificado, senha, urlWsdl, service, port, func })
      const body = `
        <nfeDadosMsg xmlns="${urlNamespace}">
          <ConsCad xmlns="${urlPortal}" versao="${versao}">
            <infCons>
              <xServ>CONS-CAD</xServ>
              <UF>${uf}</UF>
              <${nome}>${valor}</${nome}>
            </infCons>
          </ConsCad>
        </nfeDadosMsg>
      `
      const response = await client.request(body)
      const data = response[0].consultaCadastroResult.retConsCad
      const validResponse = await validateResponse(response)
      resolve(data)
    } catch (e) {
      reject(e)
    }
  })
}

export default consultaCadastro
