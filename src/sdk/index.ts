import { ChargeService } from "../business/services/charge"
import { ChargeSDK } from "./charge"

export enum STAGES {
    PRODUCTION = 'http://localhost:3000/',
    HOMOLOG = 'http://localhost:3000/',
    DEVELOPMENT = 'http://localhost:3000/'
}

const Charge = (authorization: string, stage: STAGES) => new ChargeSDK(authorization, stage).service

class WooviSDK {
    authorization: string
    stage: STAGES

    constructor(authorization: string, stage: STAGES) {
        this.authorization = authorization
        this.stage = stage
    }

    public charge(): ChargeService {
        return Charge(this.authorization, this.stage)
    }
}

export { Charge, WooviSDK }

