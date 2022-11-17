import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import { LinksStoreModule } from "@/store/modules/linksStoreModule";
import { CheckUrlStoreModule } from "@/store/modules/checkUrlStoreModule";
import { AppSettingStoreModule } from "@/store/modules/AppSettingStoreModule";

export let linksStoreModule: LinksStoreModule;
export let checkUrlStoreModule: CheckUrlStoreModule;
export let appSettingStoreModule: AppSettingStoreModule;

export function initializeStores(store: Store<any>): void {
  linksStoreModule = getModule(LinksStoreModule, store);
  checkUrlStoreModule = getModule(CheckUrlStoreModule, store);
  appSettingStoreModule = getModule(AppSettingStoreModule, store);
}

export const modules = {
  linksStoreModule: LinksStoreModule,
  checkUrlStoreModule: CheckUrlStoreModule,
  appSettingStoreModule: AppSettingStoreModule,
};
