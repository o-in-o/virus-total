export type ResponseReportType = {
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
  scans: Scans;
};

export interface Scans {
  [key: string]: {
    detected: boolean;
    result: string;
  };
}

export type ScanServiceType = {
  [k: string]: { detected: boolean; result: string };
};

export default interface IUrlServices {
  /**
   * @description Получение отчета об адресе
   */
  getReportFromUrl(val: string): Promise<ResponseReportType>;
}
