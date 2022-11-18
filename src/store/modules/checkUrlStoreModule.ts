import "reflect-metadata";
import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { container } from "@/services/serviceContainer";
import IUrlServices, {
  ResponseReportType,
} from "@/services/urlservices/url.service.interface";
import { checkUrlStoreModule } from "@/store";

const checkService: IUrlServices =
  container.resolve<IUrlServices>("IUrlServices");

@Module({ name: "checkUrlStoreModule", namespaced: true })
export class CheckUrlStoreModule extends VuexModule {
  report: ResponseReportType | null = null;

  @Action
  async getReportFromUrl(val: string) {
    await checkService
      .getReportFromUrl(val)
      .then((response) => {
        checkUrlStoreModule.updateReport(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  @Mutation
  updateReport(data: ResponseReportType | null): void {
    this.report = data;
  }
}
