export class Employee {
  constructor(
    public employeeId?: number,
    public empName?: string,
    public gender?: string,
    public address?: string,
    public contact?: string,
    public picture?: string,
    public joinDate?: Date,
    public salary?: number,
    public designationId?: number 
  ) { }
}
