import { container } from "tsyringe";
import { NavlinksService } from "@/services/navlinks/navlinks.service";
import INavlinksService from "@/services/navlinks/navlinks.service.interface";

container.registerSingleton<INavlinksService>(
  "INavlinksService",
  NavlinksService
);

export { container };
