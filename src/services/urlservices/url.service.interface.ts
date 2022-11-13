export type ReportFromUrlType = {
  scan_id: string;
  resource: string;
  url: string;
  response_code: number;
  scan_date: string;
  permalink: string;
  verbose_msg: string;
  filescan_id?: any;
  positives: number;
  total: number;
  scans: ScanServiceType;
};

export type ScanServiceType = {
  [k: string]: { detected: boolean; result: string };
};

export default interface IUrlServices {
  /**
   * @description Получение отчета об адресе
   */
  getReportFromUrl(): Promise<ReportFromUrlType>;
}
