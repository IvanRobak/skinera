export interface Addresses {
  Present: string;
  Warehouses: number;
  MainDescription: string;
  Area: string;
  Region: string;
  SettlementTypeCode: string;
  Ref: string;
  DeliveryCity: string;
  AddressDeliveryAllowed: boolean;
  StreetsAvailability: boolean;
  ParentRegionTypes: string;
  ParentRegionCode: string;
  RegionType: string;
  RegionTypesCode: string;
}

export interface NovaPoshtaAddressesData {
  TotalCount: number;
  Addresses: Addresses[];
}

interface Dimensions {
  Width: number;
  Height: number;
  Length: number;
}

interface Schedule {
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
  Sunday: string;
}

export interface NovaPoshtaDepartmentsData {
  SiteKey: string;
  Description: string;
  DescriptionRu: string;
  ShortAddress: string;
  ShortAddressRu: string;
  Phone: string;
  TypeOfWarehouse: string;
  Ref: string;
  Number: string;
  CityRef: string;
  CityDescription: string;
  CityDescriptionRu: string;
  SettlementRef: string;
  SettlementDescription: string;
  SettlementAreaDescription: string;
  SettlementRegionsDescription: string;
  SettlementTypeDescription: string;
  SettlementTypeDescriptionRu: string;
  Longitude: string;
  Latitude: string;
  PostFinance: string; // "1" / "0"
  BicycleParking: string;
  PaymentAccess: string;
  POSTerminal: string;
  InternationalShipping: string;
  SelfServiceWorkplacesCount: string;
  TotalMaxWeightAllowed: string;
  PlaceMaxWeightAllowed: string;
  SendingLimitationsOnDimensions: Dimensions;
  ReceivingLimitationsOnDimensions: Dimensions;
  Reception: Schedule;
  Delivery: Schedule;
  Schedule: Schedule;
  DistrictCode: string;
  WarehouseStatus: string;
  WarehouseStatusDate: string; // можна уточнити як Date
  CategoryOfWarehouse: string;
  RegionCity: string;
  WarehouseForAgent: string;
  MaxDeclaredCost: string;
  DenyToSelect: string;
  PostMachineType: string;
  PostalCodeUA: string;
  OnlyReceivingParcel: string;
  WarehouseIndex: string;
}

export interface NovaPoshtaResponse<T> {
  success: boolean;
  data: T[];
  errors: string[];
  warnings: string[];
  info: string[];
  messageCodes: string[];
  errorCodes: string[];
  warningCodes: string[];
  infoCodes: string[];
}
