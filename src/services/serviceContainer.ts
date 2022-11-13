import { container } from "tsyringe";
import { AppSetting } from "@/services/appsetting/appSetting";
import IAppSetting from "@/services/appsetting/appsetting.service.interface";
import IUrlServices from "@/services/urlservices/url.service.interface";
import { UrlServices } from "@/services/urlservices/urlServices";

container
  .registerSingleton<IAppSetting>("IAppSetting", AppSetting)
  .registerSingleton<IUrlServices>("IUrlService", UrlServices);

export { container };
