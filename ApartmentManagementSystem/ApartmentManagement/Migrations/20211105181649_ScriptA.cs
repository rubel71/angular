using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ApartmentManagement.Migrations
{
    public partial class ScriptA : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AptCatagories",
                columns: table => new
                {
                    AptCatagoryId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CatagoryName = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AptCatagories", x => x.AptCatagoryId);
                });

            migrationBuilder.CreateTable(
                name: "Designations",
                columns: table => new
                {
                    DesignationId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DesignationName = table.Column<string>(maxLength: 30, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Designations", x => x.DesignationId);
                });

            migrationBuilder.CreateTable(
                name: "Apartments",
                columns: table => new
                {
                    ApartmentId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UnitNumber = table.Column<string>(maxLength: 50, nullable: false),
                    BedRooms = table.Column<int>(nullable: false),
                    BathRooms = table.Column<int>(nullable: false),
                    SecurityDeposit = table.Column<int>(nullable: false),
                    OccupancyStatus = table.Column<string>(maxLength: 30, nullable: false),
                    AptCatagoryId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Apartments", x => x.ApartmentId);
                    table.ForeignKey(
                        name: "FK_Apartments_AptCatagories_AptCatagoryId",
                        column: x => x.AptCatagoryId,
                        principalTable: "AptCatagories",
                        principalColumn: "AptCatagoryId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    EmployeeId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmpName = table.Column<string>(maxLength: 50, nullable: false),
                    Gender = table.Column<string>(maxLength: 50, nullable: false),
                    Address = table.Column<string>(maxLength: 50, nullable: false),
                    Contact = table.Column<string>(maxLength: 15, nullable: false),
                    Picture = table.Column<string>(maxLength: 200, nullable: false),
                    JoinDate = table.Column<DateTime>(type: "date", nullable: false),
                    Salary = table.Column<int>(nullable: false),
                    DesignationId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.EmployeeId);
                    table.ForeignKey(
                        name: "FK_Employees_Designations_DesignationId",
                        column: x => x.DesignationId,
                        principalTable: "Designations",
                        principalColumn: "DesignationId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RentalContracts",
                columns: table => new
                {
                    RentalContractId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(maxLength: 50, nullable: false),
                    Gender = table.Column<string>(maxLength: 15, nullable: false),
                    Relegion = table.Column<string>(maxLength: 15, nullable: false),
                    ContractNo = table.Column<string>(maxLength: 15, nullable: false),
                    Occupation = table.Column<string>(maxLength: 30, nullable: false),
                    MaritalStatus = table.Column<string>(maxLength: 30, nullable: false),
                    NumberOfChildren = table.Column<int>(nullable: false),
                    TotalMember = table.Column<int>(nullable: false),
                    ContractDate = table.Column<DateTime>(type: "date", nullable: false),
                    RentStartDate = table.Column<DateTime>(type: "date", nullable: false),
                    Picture = table.Column<string>(maxLength: 200, nullable: false),
                    ApartmentId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RentalContracts", x => x.RentalContractId);
                    table.ForeignKey(
                        name: "FK_RentalContracts_Apartments_ApartmentId",
                        column: x => x.ApartmentId,
                        principalTable: "Apartments",
                        principalColumn: "ApartmentId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Complains",
                columns: table => new
                {
                    ComplainId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ComolainType = table.Column<string>(maxLength: 30, nullable: false),
                    Description = table.Column<string>(maxLength: 100, nullable: false),
                    IssueDate = table.Column<DateTime>(type: "date", nullable: false),
                    RentalContractId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Complains", x => x.ComplainId);
                    table.ForeignKey(
                        name: "FK_Complains_RentalContracts_RentalContractId",
                        column: x => x.RentalContractId,
                        principalTable: "RentalContracts",
                        principalColumn: "RentalContractId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Payments",
                columns: table => new
                {
                    PaymentId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PaymentDate = table.Column<DateTime>(type: "date", nullable: false),
                    Amount = table.Column<int>(nullable: false),
                    Deu = table.Column<int>(nullable: false),
                    Notes = table.Column<string>(maxLength: 100, nullable: true),
                    RentalContractId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Payments", x => x.PaymentId);
                    table.ForeignKey(
                        name: "FK_Payments_RentalContracts_RentalContractId",
                        column: x => x.RentalContractId,
                        principalTable: "RentalContracts",
                        principalColumn: "RentalContractId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Apartments_AptCatagoryId",
                table: "Apartments",
                column: "AptCatagoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Complains_RentalContractId",
                table: "Complains",
                column: "RentalContractId");

            migrationBuilder.CreateIndex(
                name: "IX_Employees_DesignationId",
                table: "Employees",
                column: "DesignationId");

            migrationBuilder.CreateIndex(
                name: "IX_Payments_RentalContractId",
                table: "Payments",
                column: "RentalContractId");

            migrationBuilder.CreateIndex(
                name: "IX_RentalContracts_ApartmentId",
                table: "RentalContracts",
                column: "ApartmentId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Complains");

            migrationBuilder.DropTable(
                name: "Employees");

            migrationBuilder.DropTable(
                name: "Payments");

            migrationBuilder.DropTable(
                name: "Designations");

            migrationBuilder.DropTable(
                name: "RentalContracts");

            migrationBuilder.DropTable(
                name: "Apartments");

            migrationBuilder.DropTable(
                name: "AptCatagories");
        }
    }
}
