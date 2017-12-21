using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace WebApplication4.Migrations
{
    public partial class drei : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "number",
                table: "User");

            migrationBuilder.RenameColumn(
                name: "street",
                table: "User",
                newName: "Street");

            migrationBuilder.RenameColumn(
                name: "i",
                table: "User",
                newName: "I");

            migrationBuilder.AddColumn<bool>(
                name: "Seller",
                table: "User",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Seller",
                table: "User");

            migrationBuilder.RenameColumn(
                name: "Street",
                table: "User",
                newName: "street");

            migrationBuilder.RenameColumn(
                name: "I",
                table: "User",
                newName: "i");

            migrationBuilder.AddColumn<int>(
                name: "number",
                table: "User",
                nullable: false,
                defaultValue: 0);
        }
    }
}
