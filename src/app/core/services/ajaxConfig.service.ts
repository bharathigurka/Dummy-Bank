import { IUrlConfiguration } from "../interfaces/urlConfiguration";
import { Injectable } from "@angular/core";
import { APP_CONFIG } from "../../app.config";

@Injectable({
  providedIn: "root",
})
export class AjaxConfigService {
  public serverStage: string[] = APP_CONFIG.serverEnvironments;
  public mode: string = APP_CONFIG.apiMode;
  public requestInProgress: number = 0;
  // prod and stage url we can handle here
  public baseURL = {
    static: "./assets/mock-data/" as string,
    stage: "https://xxxxxx/stage/" as string,
    prod: "https://xxxx/prod/" as string,
    uat: "UAT URL" as string,
  };

  public urlConfiguration: IUrlConfiguration = {
    TransactionDataList: {
      Stage: "transactions",
      Production: "transactions",
      Static: "transactions.json",
      Method: "GET",
    },
  };
}
