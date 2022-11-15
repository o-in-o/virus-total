import "reflect-metadata";
import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import IAppSetting, {
  NavLinkType,
} from "@/services/appsetting/appsetting.service.interface";
import { linksStoreModule } from "@/store";
import { container } from "@/services/serviceContainer";

const services: IAppSetting = container.resolve<IAppSetting>("IAppSetting");

@Module({
  name: "linksStoreModule",
  namespaced: true,
})
export class LinksStoreModule extends VuexModule {
  linksArray: NavLinkType[] = [];

  @Action
  async getterLinks() {
    await services
      .getExistingLink()
      .then((response) => linksStoreModule.updateLinksArray(response))
      .catch((error) => {
        console.log(error);
      });
  }

  @Mutation
  updateLinksArray(data: NavLinkType[]): void {
    this.linksArray = data;
  }
}
