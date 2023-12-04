using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace ApartmentManagement.Models
{
    public class AptCatagory
    {
        public AptCatagory()
        {
            this.Apartments = new List<Apartment>();
        }
        public int AptCatagoryId { get; set; }
        [Required, StringLength(50)]
        public string CatagoryName { get; set; }
        public virtual ICollection<Apartment> Apartments { get; set; }
    }
    public class Apartment
    {
        public Apartment()
        {
            this.RentalContracts = new List<RentalContract>();
        }
        public int ApartmentId { get; set; }
        [Required, StringLength(50)]
        public string UnitNumber { get; set; }
        [Required]
        public int BedRooms { get; set; }
        [Required]
        public int BathRooms { get; set; }
        [Required]
        public int SecurityDeposit { get; set; }
        [Required, StringLength(30)]
        public string OccupancyStatus { get; set; }

        //nev
        public virtual AptCatagory AptCatagory { get; set; }
        //fk
        [ForeignKey("AptCatagory")]
        public int AptCatagoryId { get; set; }
        public virtual ICollection<RentalContract> RentalContracts { get; set; }

    }
    public class RentalContract
    {
        public RentalContract()
        {
            this.Payments = new List<Payment>();
            this.Complains = new List<Complain>();
        }

        public int RentalContractId { get; set; }
        [Required, StringLength(50)]
        public string Name { get; set; }
        [Required, StringLength(15)]
        public string Gender { get; set; }
        [Required, StringLength(15)]
        public string Relegion { get; set; }
        [Required, StringLength(15)]
        public string ContractNo { get; set; }
        [Required, StringLength(30)]
        public string Occupation { get; set; }
        [Required, StringLength(30)]
        public string MaritalStatus { get; set; }
        public int NumberOfChildren { get; set; }
        [Required]
        public int TotalMember { get; set; }
        [Required, Column(TypeName = "date")]
        public DateTime ContractDate { get; set; }
        [Required, Column(TypeName = "date")]
        public DateTime RentStartDate { get; set; }
        [Required, StringLength(200)]
        public string Picture { get; set; }

        //nev
        public virtual Apartment Apartment { get; set; }
        //fk
        [ForeignKey("Apartment")]
        public int ApartmentId { get; set; }
        public virtual ICollection<Payment> Payments { get; set; }
        public virtual ICollection<Complain> Complains { get; set; }
    }
    public class Payment
    {
        public int PaymentId { get; set; }
        [Required, Column(TypeName = "date")]
        public DateTime PaymentDate { get; set; }
        [Required]
        public int Amount { get; set; }
        public int Deu { get; set; }
        [StringLength(100)]
        public string Notes { get; set; }

        //nev
        public virtual RentalContract RentalContract { get; set; }
        //fk
        [ForeignKey("RentalContract")]
        public int RentalContractId { get; set; }

    }
    public class Complain
    {
        public int ComplainId { get; set; }
        [Required, StringLength(30)]
        public string ComolainType { get; set; }
        [Required, StringLength(100)]
        public string Description { get; set; }
        [Required, Column(TypeName = "date")]
        public DateTime IssueDate { get; set; }
        //nev
        public virtual RentalContract RentalContract { get; set; }
        //fk
        [ForeignKey("RentalContract")]
        public int RentalContractId { get; set; }
    }
    public class Designation
    {
        public Designation()
        {
            this.Employees = new List<Employee>();
        }
        public int DesignationId { get; set; }
        [Required, StringLength(30)]
        public string DesignationName { get; set; }
        public virtual ICollection<Employee> Employees { get; set; }

    }
    public class Employee
    {
        public int EmployeeId { get; set; }
        [Required, StringLength(50)]
        public string EmpName { get; set; }
        [Required, StringLength(50)]
        public string Gender { get; set; }
        [Required, StringLength(50)]
        public string Address { get; set; }
        [Required, StringLength(15)]
        public string Contact { get; set; }
        [Required, StringLength(200)]
        public string Picture { get; set; }
        [Required, Column(TypeName = "date")]
        public DateTime JoinDate { get; set; }
        public int Salary { get; set; }

        //Nev
        public virtual Designation Designation { get; set; }
        //fk
        [ForeignKey("Designation")]
        public int DesignationId { get; set; }


    }
    public class ApartmentDbContext : DbContext
    {
        public ApartmentDbContext(DbContextOptions<ApartmentDbContext> options) : base(options) { }
        public DbSet<AptCatagory> AptCatagories { get; set; }
        public DbSet<Apartment> Apartments { get; set; }
        public DbSet<RentalContract> RentalContracts { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<Complain> Complains { get; set; }
        public DbSet<Designation> Designations { get; set; }
        public DbSet<Employee> Employees { get; set; }
    }
}
