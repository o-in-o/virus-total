import { injectable, singleton } from "tsyringe";
import IUrlServices, {
  ResponseReportType,
} from "@/services/urlservices/url.service.interface";
import axios, { AxiosInstance } from "axios";

@injectable()
export class UrlServices implements IUrlServices {
  protected _urlService: AxiosInstance;

  constructor() {
    this._urlService = UrlServices.createUrlServiceApi(
      `${process.env.VUE_APP_URL_VIRUSTOTAL}`
    );
  }

  protected static createUrlServiceApi(baseURL: string): AxiosInstance {
    return axios.create({
      baseURL,
    });
  }

  async getReportFromUrl(val: string): Promise<ResponseReportType> {
    let report: ResponseReportType = {
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
      .get<ResponseReportType>(`/url/report`, {
        params: {
          apikey: process.env.VUE_APP_API_VIRUSTOTAL,
          resource: val,
          allinfo: false,
          scan: 0,
        },
      })
      .then((response) => (report = response.data))
      .catch((error) => {
        throw error;
      });

    return report;
  }
}
