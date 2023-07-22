import { ChargeService } from '../../src/business/services/charge'
import { fakeGatewayConfigs, makeFakeGatewayStub } from '../stubs/makeFakeGateway'

const makeSut = () => {
    const fakeGatewayStub = makeFakeGatewayStub()
    return {
        service: new ChargeService(fakeGatewayConfigs.AUTHORIZATION, fakeGatewayConfigs.STAGE, fakeGatewayStub),
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
        expect(spyOnGateway).toHaveBeenCalledWith(bodyRequest, fakeGatewayConfigs.AUTHORIZATION, fakeGatewayConfigs.STAGE)       
    }) 
})