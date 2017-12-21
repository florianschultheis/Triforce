using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace WebApplication4.Migrations
{
    public partial class two : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            

            migrationBuilder.AddColumn<string>(
                name: "Beruf",
                table: "Consumer",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Consumer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "number",
                table: "Consumer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "street",
                table: "Consumer",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Beruf",
                table: "Consumer");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Consumer");

            migrationBuilder.DropColumn(
                name: "number",
                table: "Consumer");

            migrationBuilder.DropColumn(
                name: "street",
                table: "Consumer");

            migrationBuilder.CreateTable(
                name: "Ha",
                columns: table => new
                {
                    TraderID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Birtday = table.Column<DateTime>(nullable: false),
                    Consumerid = table.Column<int>(nullable: true),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ha", x => x.TraderID);
                    table.ForeignKey(
                        name: "FK_Ha_Consumer_Consumerid",
                        column: x => x.Consumerid,
                        principalTable: "Consumer",
                        principalColumn: "Consumerid",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Has",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    EnrollmentDate = table.Column<DateTime>(nullable: false),
                    FirstMidName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Has", x => x.ID);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Ha_Consumerid",
                table: "Ha",
                column: "Consumerid");
        }
    }
}
