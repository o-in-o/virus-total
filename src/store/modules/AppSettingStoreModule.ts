import { Module, VuexModule } from "vuex-module-decorators";
import { NavLinkType } from "@/services/appsetting/appsetting.service.interface";

@Module({
  name: "appSettingStoreModule",
  namespaced: true,
})
export class AppSettingStoreModule extends VuexModule {
  // FIXME для локальной разработки перенес в стор. Позже вернуть на бэк
  linksArray: NavLinkType[] = [
    { to: "/", isActive: true, title: "Главная" },
    { to: "/url-check", isActive: false, title: "Проверка ссылок" },
  ];
}
