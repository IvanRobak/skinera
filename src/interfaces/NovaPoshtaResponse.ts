export interface NovaPoshtaAddressesData {
    Present: string,
    Warehouses: number,
    MainDescription: string;
    Area: string;
    Region: string;
    SettlementTypeCode:string;
    Ref: string;
    DeliveryCity: string;
    AddressDeliveryAllowed: boolean;
    StreetsAvailability: boolean;
    ParentRegionTypes: string
    ParentRegionCode: string;
    RegionType: string;
    RegionTypesCode: string;
}


export interface NovaPoshtaData {
    TotalCount: number;
    Addresses: NovaPoshtaAddressesData[];
}


export interface NovaPoshtaResponse {
  success: boolean;
  data: NovaPoshtaData[];
  errors: string[];
  warnings: string[];
  info: string[];
  messageCodes: string[];
  errorCodes: string[];
  warningCodes: string[];
  infoCodes: string[];
}