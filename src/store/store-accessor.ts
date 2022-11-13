import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import { LinksStoreModule } from "@/store/modules/linksStoreModule";

export let linksStoreModule: LinksStoreModule;

export function initializeStores(store: Store<any>): void {
  linksStoreModule = getModule(LinksStoreModule, store);
}

export const modules = {
  linksStoreModule: LinksStoreModule,
};
