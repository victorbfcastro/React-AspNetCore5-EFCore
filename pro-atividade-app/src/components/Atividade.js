import React from 'react'

export default function Atividade(props) {
    function prioridadeLabel(param) {
        switch (param) {
          case '1':
            return "Baixa"
          case '2':
            return "Normal"
          case '3':
            return "Alta"
          default:
            return "Não definido"
        }
      }
    
      function prioridadeIcone(param) {
        switch (param) {
          case '1':
            return "smile"
          case '2':
            return "meh"
          case '3':
            return "frown"
          default:
            return "Não definido"
        }
      }
    
      function cardStyle(param){
        switch(param){
          case '1':
            return "success"
          case '2':
            return "warning"
          case '3':
            return "danger"
          default:
            return "dark"
        }
      }
    
    return (
        <div className={"card mb-2 shadow-sm border border-" + cardStyle(props.ativ.prioridade)}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">
                  <span className="badge bg-secondary me-2">{props.ativ.id}</span>
                  - {props.ativ.titulo}
                </h5>
                <h6>
                  Prioridade:
                  <span className={"ms-1 text-" + cardStyle(props.ativ.prioridade)} >
                    <i className={"me-1 far fa-" + prioridadeIcone(props.ativ.prioridade)}></i>
                    {prioridadeLabel(props.ativ.prioridade)}
                  </span>
                </h6>
              </div>
              <p className="card-text">{props.ativ.descricao}</p>
              <div className="d-flex justify-content-end pt-3 m-0 border-top">
                <button className="btn btn-outline-primary btn-sm me-1" onClick={() => props.selecionarAtividade(props.ativ.id)}>
                  <i className="fas fa-pen me-2"></i>Editar</button>
                <button className="btn btn-outline-danger btn-sm" onClick={() => props.deletarAtividade(props.ativ.id)}>
                  <i className="fas fa-trash me-2" ></i>Deletar</button>
              </div>
            </div>
          </div>
    )
}
