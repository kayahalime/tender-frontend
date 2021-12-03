export interface Tender{
    tenderId:number;
    categoryId:number;
    adminId:number;
    clientId:number;
    price:DoubleRange;
    active:boolean;
    startinDate:Date;
    endDate:Date;
    job: string;
    corparation: string;
  }