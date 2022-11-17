import { injectable, singleton } from "tsyringe";
import IUrlServices, {
  ReportFromUrlType,
} from "@/services/urlservices/url.service.interface";
import axios, { AxiosInstance } from "axios";

@injectable()
export class UrlServices implements IUrlServices {
  protected _urlService: AxiosInstance;

  constructor() {
    this._urlService = UrlServices.createUrlServiceApi(
      "http://localhost:3000/api/"
    );
  }

  protected static createUrlServiceApi(baseURL: string): AxiosInstance {
    return axios.create({
      baseURL,
    });
  }

  async getReportFromUrl(): Promise<ReportFromUrlType> {
    let report: ReportFromUrlType = {
      url: "",
      total: 0,
      scans: {},
      scan_id: "",
      scan_date: "",
      response_code: 0,
      resource: "",
      positives: 0,
      permalink: "",
      filescan_id: "",
      verbose_msg: "",
    };

    await this._urlService
      .get<ReportFromUrlType>("/report")
      .then((response) => (report = response.data))
      .catch((error) => {
        throw error;
      });

    return report;
  }
}
