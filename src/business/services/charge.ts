import { Gateway } from '../../communication/protocols/gateway';
import { httpResponse } from '../../communication/protocols/http';
import { STAGES } from '../../sdk';
import { Charge } from '../contexts/charge/charge';
import { CreateChargeCommand } from '../contexts/charge/commands/create';

export class ChargeService implements Charge.Contracts {
    constructor(
        private readonly Authorization: string,
        private readonly STAGE: STAGES,
        private readonly createChargeGateway: Gateway<CreateChargeCommand.Input>
    ) {}
    async create(input: CreateChargeCommand.Input): Promise<httpResponse> {
        return await this.createChargeGateway.execute(input, this.Authorization, this.STAGE)
    }
    
}