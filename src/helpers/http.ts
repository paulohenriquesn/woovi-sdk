import { httpResponse } from '../communication/protocols/http'

export const badRequest = (params?: any): httpResponse => {
    return {
        statusCode: 400,
        body: params?
    }
}


export const ok = (): httpResponse => {
    return {
        statusCode: 200,
    }
}
