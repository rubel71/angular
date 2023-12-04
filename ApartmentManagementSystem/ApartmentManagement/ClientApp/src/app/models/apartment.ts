export class Apartment {
  constructor(
    public apartmentId?: number,
    public unitNumber?: string,
    public bedRooms?: number,
    public bathRooms?: number,
    public securityDeposit?: number,
    public occupancyStatus?: string,
    public aptCatagoryId?: number
  ) { }
}
