import { CreateChargeCommand } from './commands/create';

export namespace Charge {
    export interface Contracts extends CreateChargeCommand.Contract {}
}