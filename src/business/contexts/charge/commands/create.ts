import { httpResponse } from '../../../../communication/protocols/http'
import { CHARGE_TYPE } from '../enums/type'

export namespace CreateChargeCommand {
    export type Input = {
        correlationId: string
        value: string
        type?: CHARGE_TYPE
        comment?: string
        identifier?: string
        expiresIn?: number
        daysForDueDate?: number
        daysAfterDueDate?: number
        interests?: Record<string,any>,
        additionalInfo?: Record<string,any>[]
    }
    
    export type Output = httpResponse

    export interface Contract {
        create: (i: Input) => Promise<Output> 
    }
}