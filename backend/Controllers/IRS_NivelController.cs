using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Data;
using backend.Models;

namespace backend.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class IRS_NivelController : ControllerBase
  {
    private readonly SybaseContext _context;
    private readonly DataContext _datacontext;

    public IRS_NivelController(SybaseContext context, DataContext datacontext)
    {
      _context = context;
      _datacontext = datacontext;
    }
    // GET: api/IRS_Nivel
    [HttpGet]
    public async Task<ActionResult<IEnumerable<NivelAreaDto>>> GetNIVEL()
    {
      int area;
      List<NivelAreaDto> nca = new List<NivelAreaDto>();

      var niveis = _context.NIVEL;
      foreach (var nivel in niveis)
      {
        area = _datacontext.IRS_Area_Nivels.Where(a => a.NivelId == nivel.nivelid).Select(a => a.AreaId).FirstOrDefault();
        nca.Add(new NivelAreaDto()
        {
          nivelid = nivel.nivelid,
          areaid = area,
          shortdesc = nivel.shortdesc,
          desc = nivel.desc,
          vencimento = nivel.vencimento,
          abonos = nivel.abonos,
          subsrefeicao = nivel.subsrefeicao,
          despesas = nivel.despesas,
          atribviatura = nivel.atribviatura,
          despesasviatura = nivel.despesasviatura,
          despesasgasolina = nivel.despesasgasolina,
          variavel = nivel.variavel,
          premio = nivel.premio
        });
      }
      return nca;
    }

    // GET: api/IRS_Nivel/5
    [HttpGet("{id}")]
    public async Task<ActionResult<NivelAreaDto>> GetIRS_Nivel(int id)
    {
      var nivel = _context.NIVEL.Where(n => n.nivelid == id).FirstOrDefault();

      int area = _datacontext.IRS_Area_Nivels.Where(a => a.NivelId == nivel.nivelid).Select(a => a.AreaId).FirstOrDefault();
      NivelAreaDto nca = new NivelAreaDto();
      {
        nca.nivelid = nivel.nivelid;
        nca.areaid = area;
        nca.shortdesc = nivel.shortdesc;
        nca.desc = nivel.desc;
        nca.vencimento = nivel.vencimento;
        nca.abonos = nivel.abonos;
        nca.subsrefeicao = nivel.subsrefeicao;
        nca.despesas = nivel.despesas;
        nca.atribviatura = nivel.atribviatura;
        nca.despesasviatura = nivel.despesasviatura;
        nca.despesasgasolina = nivel.despesasgasolina;
        nca.variavel = nivel.variavel;
        nca.premio = nivel.premio;
      };

      return nca;

    }
  }
}
