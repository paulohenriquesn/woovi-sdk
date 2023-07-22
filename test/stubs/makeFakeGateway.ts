import { STAGES } from '../../src/common/stages'
import { Gateway } from '../../src/communication/protocols/gateway'
import { httpResponse } from '../../src/communication/protocols/http'
import { ok } from '../../src/helpers/http'

class FakeGateway implements Gateway<any> {
    async execute(i: any, authorization: string, stage: STAGES): Promise<httpResponse> {
        return ok()
    }
    
}

export const makeFakeGatewayStub = (): Gateway<any> => {
    return new FakeGateway()
}