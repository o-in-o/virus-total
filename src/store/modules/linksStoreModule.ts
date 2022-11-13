import "reflect-metadata";
import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import INavlinksService, {
  NavLinkType,
} from "@/services/navlinks/navlinks.service.interface";
import { linksStoreModule } from "@/store";
import { container } from "@/services/serviceContainer";

const res: INavlinksService =
  container.resolve<INavlinksService>("INavlinksService");

@Module({
  name: "linksStoreModule",
  namespaced: true,
})
export class LinksStoreModule extends VuexModule {
  linksArray: NavLinkType[] = [];

  @Action
  async getterLinks() {
    await res
      .getExistingLink()
      .then((response) => linksStoreModule.updateLinksArray(response))
      .catch((error) => {
        console.log(error);
      });
    console.log(this.linksArray);
  }

  @Mutation
  updateLinksArray(data: NavLinkType[]): void {
    this.linksArray = data;
  }
}
