// * Defines the urlConfiguration entity */
export interface IUrlConfigurationContent {
  Stage: string;
  Production: string;
  Static: string;
  Method: string;
}
export interface IUrlConfiguration {
  TransactionDataList: IUrlConfigurationContent;
}
