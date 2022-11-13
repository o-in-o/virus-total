export type NavLinkType = {
  to: string;
  title: string;
  isActive: boolean;
};

export default interface IAppSetting {
  /**
   * @description Получение списка ссылок
   */
  getExistingLink(): Promise<NavLinkType[]>;
}
