import { ChargeService } from "../business/services/charge";
import { CreateChargeGateway } from "../communication/gateways/charge/create";
import { SDK } from "./protocol/sdk";

export class ChargeSDK implements SDK {
    service: ChargeService;

    constructor(authorization: string, stage: STAGES) {
        this.service = new ChargeService(authorization, stage, new CreateChargeGateway())
    }
}