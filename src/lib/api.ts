let server = 'http://127.0.0.1:8888'
export const get = (i: number) => {
    return fetch(server + '/get?id=' + i.toString())
}
export const getlist = () => {
    return fetch(server + '/get_list')
}
export const setserver = (s: string) => {
    server = s
}