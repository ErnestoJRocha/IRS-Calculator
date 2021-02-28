using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace backend.Migrations
{
    public partial class newInicialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "IRS_Area_Nivels",
                columns: table => new
                {
                    NivelId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AreaId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IRS_Area_Nivels", x => x.NivelId);
                });

            migrationBuilder.CreateTable(
                name: "IRS_Areas",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IRS_Areas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "IRS_Dependents",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    number = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IRS_Dependents", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "IRS_Marital_States",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    status = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IRS_Marital_States", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "IRS_Simulations",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTime>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Syone_User_Name = table.Column<string>(nullable: true),
                    Area = table.Column<string>(nullable: true),
                    Position = table.Column<string>(nullable: true),
                    Marital_Status = table.Column<string>(nullable: true),
                    Dependents = table.Column<double>(nullable: true),
                    Months = table.Column<double>(nullable: true),
                    Days_Months = table.Column<double>(nullable: true),
                    Target_Margin = table.Column<double>(nullable: true),
                    Justified_Expenses = table.Column<double>(nullable: true),
                    Bonus = table.Column<double>(nullable: true),
                    Daily_Rate = table.Column<double>(nullable: true),
                    Car_Type = table.Column<double>(nullable: true),
                    Car_Value = table.Column<double>(nullable: true),
                    Car_Fuel = table.Column<double>(nullable: true),
                    Car_Expenses = table.Column<double>(nullable: true),
                    Extra_Tax = table.Column<double>(nullable: true),
                    Food = table.Column<double>(nullable: true),
                    baseSalaryMonthGross = table.Column<double>(nullable: true),
                    baseSalaryMonthNet = table.Column<double>(nullable: true),
                    baseSalaryYearGross = table.Column<double>(nullable: true),
                    baseSalaryYearNet = table.Column<double>(nullable: true),
                    baseSalaryYearTotal = table.Column<double>(nullable: true),
                    ihtMonthGross = table.Column<double>(nullable: true),
                    ihtMonthNet = table.Column<double>(nullable: true),
                    ihtYearGross = table.Column<double>(nullable: true),
                    ihtYearNet = table.Column<double>(nullable: true),
                    ihtTotal = table.Column<double>(nullable: true),
                    subsRefeicaoMonthGross = table.Column<double>(nullable: true),
                    subsRefeicaoMonthNet = table.Column<double>(nullable: true),
                    subsRefeicaoYearGross = table.Column<double>(nullable: true),
                    subsRefeicaoYearNet = table.Column<double>(nullable: true),
                    subsRefeicaoTotal = table.Column<double>(nullable: true),
                    justifiedExpensesMonthGross = table.Column<double>(nullable: true),
                    justifiedExpensesMonthNet = table.Column<double>(nullable: true),
                    justifiedExpensesYearGross = table.Column<double>(nullable: true),
                    justifiedExpensesYearNet = table.Column<double>(nullable: true),
                    justifiedExpensesTotal = table.Column<double>(nullable: true),
                    carMonthGross = table.Column<double>(nullable: true),
                    carMonthNet = table.Column<double>(nullable: true),
                    carYearGross = table.Column<double>(nullable: true),
                    carYearNet = table.Column<double>(nullable: true),
                    carTotal = table.Column<double>(nullable: true),
                    carExpensesMonthGross = table.Column<double>(nullable: true),
                    carExpensesMonthNet = table.Column<double>(nullable: true),
                    carExpensesYearGross = table.Column<double>(nullable: true),
                    carExpensesYearNet = table.Column<double>(nullable: true),
                    carExpensesTotal = table.Column<double>(nullable: true),
                    carFuelMonthGross = table.Column<double>(nullable: true),
                    carFuelMonthNet = table.Column<double>(nullable: true),
                    carFuelYearGross = table.Column<double>(nullable: true),
                    carFuelYearNet = table.Column<double>(nullable: true),
                    carFuelTotal = table.Column<double>(nullable: true),
                    variableMonthGross = table.Column<double>(nullable: true),
                    variableMonthNet = table.Column<double>(nullable: true),
                    variableYearGross = table.Column<double>(nullable: true),
                    variableYearNet = table.Column<double>(nullable: true),
                    variableTotal = table.Column<double>(nullable: true),
                    bonusMonthGross = table.Column<double>(nullable: true),
                    bonusMonthNet = table.Column<double>(nullable: true),
                    bonusYearGross = table.Column<double>(nullable: true),
                    bonusYearNet = table.Column<double>(nullable: true),
                    bonusTotal = table.Column<double>(nullable: true),
                    totalMonthGross = table.Column<double>(nullable: true),
                    totalMonthNet = table.Column<double>(nullable: true),
                    totalYearGross = table.Column<double>(nullable: true),
                    totalYearNet = table.Column<double>(nullable: true),
                    totalTotal = table.Column<double>(nullable: true),
                    totalMonthNetAfterExtraTaxWithBonus = table.Column<double>(nullable: true),
                    totalYearNetAfterExtraTaxWithBonus = table.Column<double>(nullable: true),
                    totalMonthNetAfterExtraTaxWithoutBonus = table.Column<double>(nullable: true),
                    totalYearNetAfterExtraTaxWithoutBonus = table.Column<double>(nullable: true),
                    employeeIrsEuros = table.Column<double>(nullable: true),
                    employeeSocialSecurityEuros = table.Column<double>(nullable: true),
                    extraTaxEuros = table.Column<double>(nullable: true),
                    costMonthWithBonus = table.Column<double>(nullable: true),
                    costMonthWithoutBonus = table.Column<double>(nullable: true),
                    costDayWithBonus = table.Column<double>(nullable: true),
                    costDayWithoutBonus = table.Column<double>(nullable: true),
                    monthTargetMarginWithBonus = table.Column<double>(nullable: true),
                    monthTargetMarginWithoutBonus = table.Column<double>(nullable: true),
                    dayTargetMarginWithBonus = table.Column<double>(nullable: true),
                    dayTargetMarginWithoutBonus = table.Column<double>(nullable: true),
                    proposedDailyRate = table.Column<double>(nullable: true),
                    proposedHourRate = table.Column<double>(nullable: true),
                    marginWithBonus = table.Column<double>(nullable: true),
                    marginWithoutBonus = table.Column<double>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IRS_Simulations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "IRS_Table",
                columns: table => new
                {
                    id_row = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    id_irs_table = table.Column<int>(nullable: false),
                    irs_table_name = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    salary = table.Column<decimal>(type: "money", nullable: false),
                    num_dep = table.Column<int>(nullable: false),
                    married_status = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    fiscal_year = table.Column<string>(type: "nvarchar(4)", nullable: true),
                    irs_tax = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IRS_Table", x => x.id_row);
                });

            migrationBuilder.CreateTable(
                name: "IRS_Taxes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Employee_Social_Security = table.Column<double>(nullable: false),
                    Company_Social_Security = table.Column<double>(nullable: false),
                    Minimum_Wage = table.Column<double>(nullable: false),
                    A_La_Card = table.Column<double>(nullable: false),
                    Tta_Kms = table.Column<double>(nullable: false),
                    Car_Amortization = table.Column<int>(nullable: false),
                    Lunch = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IRS_Taxes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "IRS_Users",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(nullable: true),
                    Nivel = table.Column<string>(nullable: true),
                    Nivelid = table.Column<int>(nullable: true),
                    Marital_Status_Id = table.Column<int>(nullable: true),
                    Dependents = table.Column<int>(nullable: true),
                    Months = table.Column<int>(nullable: true),
                    Days_Months = table.Column<int>(nullable: true),
                    Target_Margin = table.Column<double>(nullable: true),
                    Justified_Expenses = table.Column<double>(nullable: true),
                    Bonus = table.Column<double>(nullable: true),
                    Daily_Rate = table.Column<double>(nullable: true),
                    Car_Type = table.Column<double>(nullable: true),
                    Car_Value = table.Column<double>(nullable: true),
                    Car_Fuel = table.Column<double>(nullable: true),
                    Car_Expenses = table.Column<double>(nullable: true),
                    Extra_Tax = table.Column<double>(nullable: true),
                    Food = table.Column<double>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IRS_Users", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "IRS_Area_Nivels");

            migrationBuilder.DropTable(
                name: "IRS_Areas");

            migrationBuilder.DropTable(
                name: "IRS_Dependents");

            migrationBuilder.DropTable(
                name: "IRS_Marital_States");

            migrationBuilder.DropTable(
                name: "IRS_Simulations");

            migrationBuilder.DropTable(
                name: "IRS_Table");

            migrationBuilder.DropTable(
                name: "IRS_Taxes");

            migrationBuilder.DropTable(
                name: "IRS_Users");
        }
    }
}
