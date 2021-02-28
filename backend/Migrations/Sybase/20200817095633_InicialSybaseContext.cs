using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace backend.Migrations.Sybase
{
  public partial class InicialSybaseContext : Migration
  {
    protected override void Up(MigrationBuilder migrationBuilder)
    {
      migrationBuilder.CreateTable(
          name: "DW_COLABORADORNIVEL",
          columns: table => new
          {
            colaboradorid = table.Column<decimal>(type: "numeric(10,0)", nullable: true),
            nome = table.Column<string>(type: "varchar(100)", nullable: true),
            estado_colaborador = table.Column<string>(type: "varchar(20)", nullable: true),
            nivel = table.Column<string>(type: "varchar(100)", nullable: true),
            data_inicio = table.Column<DateTime>(type: "datetime", nullable: true),
            data_fim = table.Column<DateTime>(type: "datetime", nullable: true),
            vencimento = table.Column<decimal>(type: "money", nullable: true),
            abonos = table.Column<decimal>(type: "money", nullable: true),
            subs_refeicao = table.Column<decimal>(type: "money", nullable: true),
            despesas = table.Column<decimal>(type: "money", nullable: true),
            viatura = table.Column<decimal>(type: "money", nullable: true),
            despesas_viatura = table.Column<decimal>(type: "money", nullable: true),
            despesas_gasolina = table.Column<decimal>(type: "money", nullable: true),
            variavel = table.Column<decimal>(type: "money", nullable: true),
            premio = table.Column<decimal>(type: "money", nullable: true),
            nivelactual = table.Column<string>(type: "varchar(3)", nullable: true)
          });

      migrationBuilder.CreateTable(
          name: "NIVEL",
          columns: table => new
          {
            nivelid = table.Column<decimal>(type: "numeric(10,0)", nullable: false),
            shortdesc = table.Column<string>(type: "varchar(30)", nullable: true),
            desc = table.Column<string>(type: "varchar(100)", nullable: true),
            vencimento = table.Column<decimal>(type: "money", nullable: true),
            abonos = table.Column<decimal>(type: "money", nullable: true),
            subsrefeicao = table.Column<decimal>(type: "money", nullable: true),
            despesas = table.Column<decimal>(type: "money", nullable: true),
            atribviatura = table.Column<decimal>(type: "money", nullable: true),
            despesasviatura = table.Column<decimal>(type: "money", nullable: true),
            despesasgasolina = table.Column<decimal>(type: "money", nullable: true),
            variavel = table.Column<decimal>(type: "money", nullable: true),
            premio = table.Column<decimal>(type: "money", nullable: true)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_NIVEL", x => x.nivelid);
          });
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
      migrationBuilder.DropTable(
          name: "DW_COLABORADORNIVEL");

      migrationBuilder.DropTable(
          name: "NIVEL");
    }
  }
}
