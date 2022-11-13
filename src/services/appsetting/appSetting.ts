import { injectable } from "tsyringe";
import IAppSetting, {
  NavLinkType,
} from "@/services/appsetting/appsetting.service.interface";
import axios, { AxiosInstance } from "axios";

@injectable()
export class AppSetting implements IAppSetting {
  protected _navlinksApi: AxiosInstance;

  constructor() {
    this._navlinksApi = AppSetting.createNavlinkServiceApi(
      "http://localhost:3000/api/"
    );
  }

  protected static createNavlinkServiceApi(baseURL: string): AxiosInstance {
    return axios.create({
      baseURL,
    });
  }

  async getExistingLink(): Promise<NavLinkType[]> {
    let linkArray: NavLinkType[] = [];

    await this._navlinksApi
      .get<NavLinkType[]>("/records")
      .then((response) => (linkArray = response.data))
      .catch((error) => {
        throw error;
      });

    return linkArray;
  }
}
