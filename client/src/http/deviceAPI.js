import {instance} from "./index";

export const createType = async (type) => {
    const {data} = await instance.post('api/type', type)
    return data
}
// Done
export const fetchHomeDevices = async () => {
    const {data} = await instance.get('/device/')
    return data
}

// Done
export const createItem = async (device) => {
    const {data} = await instance.post('/device/create-device', device)
    return data
}






export const fetchDevices = async (typeId, brandId, page, limit= 5) => {
    const {data} = await instance.get('api/device', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await instance.get('api/device/' + id)
    return data
}
