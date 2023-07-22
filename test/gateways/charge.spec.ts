import { ChargeService } from '../../src/business/services/charge'
import { STAGES } from '../../src/common/stages'
import { makeFakeGatewayStub } from '../stubs/makeFakeGateway'

const makeSut = () => {
    const fakeGatewayStub = makeFakeGatewayStub()
    return {
        service: new ChargeService('fakeAuthorization', STAGES.DEVELOPMENT, fakeGatewayStub),
        fakeGatewayStub
    }
}

describe('Charge Context', () => {
    test('Should call create charge passing all input correctly', async () => {
        const { service, fakeGatewayStub } = makeSut()
        const spyOnGateway = jest.spyOn(fakeGatewayStub, 'execute')
        const bodyRequest = {
            correlationId: 'fakeCorrelationId',
            value: '0.00'
        }
        await service.create(bodyRequest)
        expect(spyOnGateway).toHaveBeenCalledWith(bodyRequest, 'fakeAuthorization', STAGES.DEVELOPMENT)       
    }) 
})