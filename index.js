import NFeNode from './src/services'
import { readFile } from 'fs-extra'

const main = async () => {
  try {
    const certificado = await readFile('./certificado.pfx')
    const senha = '12345678'
    const nfeNode = new NFeNode({ certificado, senha })
    // const responseCadastro = await nfeNode.consultaCadastro({
    //   uf: 'MT',
    //   tpAmb: 'producao',
    //   argumentos: { nome: 'CNPJ', valor: '04084183000121' }
    // })
    //
    // console.log(JSON.stringify(responseCadastro, null, 2))

    const responseStatus = await nfeNode.consultaStatusSefaz({
      uf: 'MT',
      tpAmb: 'producao'
    })

    console.log(responseStatus)

    // const responseChave = await nfeNode.consultaChaveSefaz({
    //   uf: 'MT',
    //   tpAmb: 'producao',
    //   chave: '51181004084183000121550030001193781060388610'
    // })
    //
    // console.log(JSON.stringify(responseChave, null, 2))

  } catch (e) {
    console.error(e)
  }
}

main()
