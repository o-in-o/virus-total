export type NavLinkType = {
  to: string;
  title: string;
  isActive: boolean;
};

export default interface INavlinksService {
  /**
   * @description Получение списка ссылок
   */
  getExistingLink(): Promise<NavLinkType[]>;

  testingService(): void;
}
