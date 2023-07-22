import { ChargeService } from "../business/services/charge"
import { ChargeSDK } from "./charge"

export enum STAGES {
    PRODUCTION = 'http://localhost:3000/',
    HOMOLOG = 'http://localhost:3000/',
    DEVELOPMENT = 'http://localhost:3000/'
}

export class WooviSDK {
    authorization: string
    stage: STAGES

    constructor(authorization: string, stage: STAGES) {
        this.authorization = authorization
        this.stage = stage
    }

    public charge(): ChargeService {
        return new ChargeSDK(this.authorization, this.stage).service
    }
}