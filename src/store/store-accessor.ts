import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import { LinksStoreModule } from "@/store/modules/linksStoreModule";
import { CheckUrlStoreModule } from "@/store/modules/checkUrlStoreModule";

export let linksStoreModule: LinksStoreModule;
export let checkUrlStoreModule: CheckUrlStoreModule;

export function initializeStores(store: Store<any>): void {
  linksStoreModule = getModule(LinksStoreModule, store);
  checkUrlStoreModule = getModule(CheckUrlStoreModule, store);
}

export const modules = {
  linksStoreModule: LinksStoreModule,
  checkUrlStoreModule: CheckUrlStoreModule,
};
