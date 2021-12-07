using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProAtividade.API.Data;
using ProAtividade.API.Models;

namespace ProAtividade.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        private readonly DataContext _context;
        
        public AtividadeController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Atividade> Get(){
            return _context.Atividades;
        }

        [HttpGet("{id}")]
        public Atividade GetbyId(int id){
            return _context.Atividades.FirstOrDefault(a => a.Id == id);
        }

        [HttpPost]
        public IEnumerable<Atividade> Post(Atividade atividade){
            _context.Atividades.Add(atividade);

            if(_context.SaveChanges() > 0){
                return _context.Atividades;
            }
            
            throw new Exception("Não foi possível adicionar a atividade");
        }

        [HttpPut("{id}")]
        public Atividade Put(int id, Atividade atividade)
        {    
            if(atividade.Id != id) throw new Exception("Você está tentando atualizar a atividade errada!");

            _context.Update(atividade);
            
            if(_context.SaveChanges() > 0){
                return _context.Atividades.FirstOrDefault(a => a.Id == id);
            }

            return new Atividade();
        }

        [HttpDelete("{id}")]
        public bool Delete(int id){
            var atividade = _context.Atividades.FirstOrDefault(a => a.Id == id);

            if(atividade == null) throw new Exception("Você está tentando deletar uma atividade inexistente!");

            _context.Remove(atividade);

            return _context.SaveChanges() > 0;
        }
    }
}