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
    
    test('If create charge gateway throws service returns badRequest', async () => {
        const { service, fakeGatewayStub } = makeSut()
        jest.spyOn(fakeGatewayStub, 'execute').mockReturnValueOnce(Promise.reject(new Error()))
        
        const bodyRequest = {
            correlationId: 'fakeCorrelationId',
            value: '0.00'
        }

        const response = service.create(bodyRequest)
        await expect(response).rejects.toThrow()
    })
})  