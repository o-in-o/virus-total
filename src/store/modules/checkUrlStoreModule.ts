import "reflect-metadata";
import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { container } from "@/services/serviceContainer";
import IUrlServices, {
  ReportFromUrlType,
} from "@/services/urlservices/url.service.interface";
import { checkUrlStoreModule } from "@/store";

const checkService: IUrlServices =
  container.resolve<IUrlServices>("IUrlServices");

@Module({ name: "checkUrlStoreModule", namespaced: true })
export class CheckUrlStoreModule extends VuexModule {
  report: ReportFromUrlType = {
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

  @Action
  async getReportFromUrl() {
    await checkService
      .getReportFromUrl()
      .then((response) => {
        checkUrlStoreModule.updateReport(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  @Mutation
  updateReport(data: ReportFromUrlType): void {
    this.report = data;
  }
}
