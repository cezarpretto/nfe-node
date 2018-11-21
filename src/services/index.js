import consultaCadastro from './consultaCadastro'
import consultaStatusSefaz from './consultaStatusSefaz'
import consultaChaveSefaz from './consultaChaveSefaz'

function NFeNode ({ certificado, senha }) {
  this._certificado = certificado
  this._senha = senha

  this.getCertificado = function getCertificado () {
    return {
      certificado: this._certificado,
      senha: this._senha
    }
  }

  this.consultaCadastro = ({
    uf,
    tpAmb = 'homologacao',
    argumentos
  }) =>
    consultaCadastro({
      certificado: this.getCertificado(),
      uf,
      tpAmb,
      argumentos
    })

  this.consultaStatusSefaz = ({
    uf,
    tpAmb = 'homologacao',
    argumentos
  }) =>
    consultaStatusSefaz({
      certificado: this.getCertificado(),
      uf,
      tpAmb
    })

  this.consultaChaveSefaz = ({
    uf,
    tpAmb = 'homologacao',
    chave
  }) =>
    consultaChaveSefaz({
      certificado: this.getCertificado(),
      uf,
      tpAmb,
      chave
    })
}

export default NFeNode
