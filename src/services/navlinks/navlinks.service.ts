import https from "https";
import { autoInjectable, container, injectable, singleton } from "tsyringe";
import INavlinksService, {
  NavLinkType,
} from "@/services/navlinks/navlinks.service.interface";
import axios, { AxiosInstance } from "axios";

// @autoInjectable()
// @singleton()
@injectable()
export class NavlinksService implements INavlinksService {
  protected _navlinksApi: AxiosInstance;

  constructor() {
    this._navlinksApi = NavlinksService.createNavlinkServiceApi(
      "http://localhost:3000/api/"
    );
  }

  protected static createNavlinkServiceApi(
    baseURL: string,
    ssl = true
  ): AxiosInstance {
    return axios.create({
      baseURL,
      // httpsAgent: new https.Agent({ rejectUnauthorized: ssl }),
    });
  }

  async getExistingLink(): Promise<NavLinkType[]> {
    let linkArray: NavLinkType[] = [];

    await this._navlinksApi
      .get<NavLinkType[]>("/records")
      .then((response) => (linkArray = response.data));

    return linkArray;
  }

  testingService() {
    console.log("done");
  }
}
