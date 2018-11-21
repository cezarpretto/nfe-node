// const urlPortal = 'http://www.portalfiscal.inf.br/nfe'
const webservices = require('./webservices.json')

// const webservices = {
//   MT: {
//     homologacao: {
//       consultaCadastro: {
//         method: 'consultaCadastroAsync',
//         versao: '2.00',
//         urlWsdl: 'https://homologacao.sefaz.mt.gov.br/nfews/v2/services/CadConsultaCadastro4?wsdl',
//         urlNamespace: `${urlPortal}/wsdl/CadConsultaCadastro4`,
//         urlPortal
//       },
//       statusServicoNF: {
//         method: 'nfeStatusServicoNFAsync',
//         versao: '4.00',
//         urlWsdl: 'https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeStatusServico4?wsdl',
//         urlNamespace: `${urlPortal}/wsdl/NfeStatusServico4`,
//         urlPortal,
//         service: 'NfeStatusServico4',
//         port: 'NfeStatusServico4Soap',
//         func: 'nfeStatusServicoNF'
//       },
//       consultaProtocolo: {
//         method: 'nfeStatusServicoNFAsync',
//         versao: '4.00',
//         urlWsdl: 'https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeStatusServico4?wsdl',
//         urlNamespace: `${urlPortal}/wsdl/NfeStatusServico4`,
//         urlPortal
//       }
//     },
//     producao: {
//       consultaCadastro: {
//         method: 'consultaCadastroAsync',
//         versao: '2.00',
//         urlWsdl: 'https://nfe.sefaz.mt.gov.br/nfews/v2/services/CadConsultaCadastro4?wsdl',
//         urlNamespace: `${urlPortal}/wsdl/CadConsultaCadastro4`,
//         urlPortal,
//         service: 'CadConsultaCadastro4',
//         port: 'CadConsultaCadastro4Soap12',
//         func: 'consultaCadastro'
//       },
//       statusServicoNF: {
//         method: 'nfeStatusServicoNFAsync',
//         versao: '4.00',
//         urlWsdl: 'https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeStatusServico4?wsdl',
//         urlNamespace: `${urlPortal}/wsdl/NfeStatusServico4`,
//         urlPortal,
//         service: 'NfeStatusServico4',
//         port: 'NfeStatusServico4Soap',
//         func: 'nfeStatusServicoNF'
//       },
//       consultaProtocolo: {
//         versao: '4.00',
//         urlWsdl: 'https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeConsulta4?wsdl',
//         urlNamespace: `${urlPortal}/wsdl/NFeConsultaProtocolo4`,
//         urlPortal,
//         service: 'NfeConsulta4',
//         port: 'NfeConsulta4Soap',
//         func: 'nfeConsultaNF'
//       }
//     }
//   },
//   SP: {
//     homologacao: {
//       consultaCadastro: {
//         method: 'consultaCadastroAsync',
//         versao: '2.00',
//         urlWsdl: 'https://homologacao.sefaz.mt.gov.br/nfews/v2/services/CadConsultaCadastro4?wsdl',
//         urlNamespace: `${urlPortal}/wsdl/CadConsultaCadastro4`,
//         urlPortal
//       },
//       statusServicoNF: {
//         method: 'nfeStatusServicoNFAsync',
//         versao: '4.00',
//         urlWsdl: 'https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeStatusServico4?wsdl',
//         urlNamespace: `${urlPortal}/wsdl/NfeStatusServico4`,
//         urlPortal
//       },
//       consultaProtocolo: {
//         method: 'nfeStatusServicoNFAsync',
//         versao: '4.00',
//         urlWsdl: 'https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeStatusServico4?wsdl',
//         urlNamespace: `${urlPortal}/wsdl/NfeStatusServico4`,
//         urlPortal
//       }
//     },
//     producao: {
//       consultaCadastro: {
//         method: 'consultaCadastroAsync',
//         versao: '4.00',
//         urlWsdl: 'https://nfe.fazenda.sp.gov.br/ws/cadconsultacadastro4.asmx?wsdl',
//         urlNamespace: `${urlPortal}/wsdl/CadConsultaCadastro4`,
//         urlPortal,
//         service: 'CadConsultaCadastro4',
//         port: 'CadConsultaCadastro4Soap12',
//         func: 'consultaCadastro'
//       },
//       statusServicoNF: {
//         method: 'nfeStatusServicoNFAsync',
//         versao: '4.00',
//         urlWsdl: 'https://nfe.fazenda.sp.gov.br/ws/nfestatusservico4.asmx?wsdl',
//         urlNamespace: `${urlPortal}/wsdl/NfeStatusServico4`,
//         urlPortal,
//         service: 'NfeStatusServico4',
//         port: 'NfeStatusServico4Soap',
//         func: 'nfeStatusServicoNF'
//       },
//       consultaProtocolo: {
//         versao: '4.00',
//         urlWsdl: 'https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeConsulta4?wsdl',
//         urlNamespace: `${urlPortal}/wsdl/NFeConsultaProtocolo4`,
//         urlPortal,
//         service: 'NfeConsulta4',
//         port: 'NfeConsulta4Soap',
//         func: 'nfeConsultaNF'
//       }
//     }
//   },
//   MS: {
//     homologacao: {
//       consultaCadastro: {
//         method: 'consultaCadastroAsync',
//         versao: '2.00',
//         urlWsdl: 'https://hom.nfe.sefaz.ms.gov.br/ws/CadConsultaCadastro4?wsdl',
//         urlNamespace: `${urlPortal}/wsdl/CadConsultaCadastro4`,
//         urlPortal
//       },
//       statusServicoNF: {
//         method: 'nfeStatusServicoNFAsync',
//         versao: '4.00',
//         urlWsdl: 'https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeStatusServico4?wsdl',
//         urlNamespace: `${urlPortal}/wsdl/NfeStatusServico4`,
//         urlPortal
//       }
//     },
//     producao: {
//       consultaCadastro: {
//         method: 'consultaCadastroAsync',
//         versao: '2.00',
//         urlWsdl: 'https://nfe.sefaz.ms.gov.br/ws/CadConsultaCadastro4?wsdl',
//         urlNamespace: `${urlPortal}/wsdl/CadConsultaCadastro4`,
//         urlPortal
//       },
//       statusServicoNF: {
//         method: 'nfeStatusServicoNFAsync',
//         versao: '4.00',
//         urlWsdl: 'https://nfe.sefaz.ms.gov.br/ws/NFeStatusServico4?wsdl',
//         urlNamespace: `${urlPortal}/wsdl/NfeStatusServico4`,
//         urlPortal,
//         service: 'NfeStatusServico4',
//         port: 'NfeStatusServico4Soap',
//         func: 'nfeStatusServicoNF'
//       }
//     }
//   },
//   GO: {
//     homologacao: {
//       consultaCadastro: {
//         method: 'consultaCadastroAsync',
//         versao: '2.00',
//         urlWsdl: 'https://homolog.sefaz.go.gov.br/nfe/services/CadConsultaCadastro4?wsdl',
//         urlNamespace: `${urlPortal}/wsdl/CadConsultaCadastro4`,
//         urlPortal
//       },
//       statusServicoNF: {
//         method: 'nfeStatusServicoNFAsync',
//         versao: '4.00',
//         urlWsdl: 'https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeStatusServico4?wsdl',
//         urlNamespace: `${urlPortal}/wsdl/NfeStatusServico4`,
//         urlPortal
//       }
//     },
//     producao: {
//       consultaCadastro: {
//         method: 'consultaCadastroAsync',
//         versao: '2.00',
//         urlWsdl: 'https://nfe.sefaz.go.gov.br/nfe/services/CadConsultaCadastro4?wsdl',
//         urlNamespace: `${urlPortal}/wsdl/CadConsultaCadastro4`,
//         urlPortal,
//         service: 'CadConsultaCadastro4',
//         port: 'CadConsultaCadastro4Soap12',
//         func: 'consultaCadastro'
//       },
//       statusServicoNF: {
//         method: 'nfeStatusServicoNFAsync',
//         versao: '4.00',
//         urlWsdl: 'https://nfe.sefaz.go.gov.br/nfe/services/NFeStatusServico4?wsdl',
//         urlNamespace: `${urlPortal}/wsdl/NfeStatusServico4`,
//         urlPortal,
//         service: 'NfeStatusServico4',
//         port: 'NfeStatusServico4Soap',
//         func: 'nfeStatusServicoNF'
//       }
//     }
//   },
//   MG: {
//     homologacao: {
//       consultaCadastro: {
//         method: 'consultaCadastroAsync',
//         versao: '2.00',
//         urlWsdl: 'https://hnfe.fazenda.mg.gov.br/nfe2/services/cadconsultacadastro2?wsdl',
//         urlNamespace: `${urlPortal}/wsdl/CadConsultaCadastro4`,
//         urlPortal
//       },
//       statusServicoNF: {
//         method: 'nfeStatusServicoNFAsync',
//         versao: '4.00',
//         urlWsdl: 'https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeStatusServico4?wsdl',
//         urlNamespace: `${urlPortal}/wsdl/NfeStatusServico4`,
//         urlPortal
//       }
//     },
//     producao: {
//       consultaCadastro: {
//         method: 'consultaCadastroAsync',
//         versao: '2.00',
//         urlWsdl: 'https://nfe.fazenda.mg.gov.br/nfe2/services/cadconsultacadastro2?wsdl',
//         urlNamespace: `${urlPortal}/wsdl/CadConsultaCadastro4`,
//         urlPortal
//       },
//       statusServicoNF: {
//         method: 'nfeStatusServicoNFAsync',
//         versao: '4.00',
//         urlWsdl: 'https://nfe.fazenda.mg.gov.br/nfe2/services/NFeStatusServico4?wsdl',
//         urlNamespace: `${urlPortal}/wsdl/NfeStatusServico4`,
//         urlPortal,
//         service: 'NfeStatusServico4',
//         port: 'NfeStatusServico4Soap',
//         func: 'nfeStatusServicoNF'
//       }
//     }
//   }
// }

const getWebservice = ({ uf, tpAmb = 'homologacao', nome = '' }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const serviceData = webservices[nome]
      const { urlPortal } = webservices
      if (serviceData) {
        serviceData.urlPortal = urlPortal
        serviceData.urlNamespace = `${urlPortal}${serviceData.urlNamespace}`
        serviceData.urlWsdl = await getUrlWsdl({serviceData, tpAmb, uf})
        delete serviceData.urls
        console.log(serviceData)
        return resolve(serviceData)
      }

      reject(new Error(`A UF passada ainda não foi implementada. UF: ${uf}`))
    } catch (e) {
      reject(e)
    }
  })
}

const getUrlWsdl = ({serviceData, tpAmb, uf}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const urls = serviceData.urls.find(x => x.uf.toUpperCase() === uf.toUpperCase())
      const url = `${urls[tpAmb]}?wsdl`
      if (!url) {
        return reject(new Error('A UF informada ainda não possui esse webservice!'))
      }

      resolve(url)
    } catch (e) {
      reject(e)
    }
  })
}

export {
  getWebservice
}
