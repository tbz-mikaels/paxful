import request from '../request'

const baseUrl = `/api/trades`;

function all(params = {}) {
    return request({
        url: baseUrl,
        params
    })
}

function get(id) {
    return request({
        url: `${baseUrl}/${id}`,
    })
}

function create(data) {
    return request({
        url: baseUrl,
        method: 'POST',
        data
    });
}

function update(id, data) {
    return request({
        url: `${baseUrl}/${id}`,
        method: 'PATCH',
        data
    });
}

function destroy(id) {
    return request({
        url: `${baseUrl}/${id}`,
        method: 'DELETE'
    })
}

const TradesService = {
    all, get, create, update, destroy
};

export default TradesService
