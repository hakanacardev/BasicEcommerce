import axios from "axios";

export const getUsersRequest = () => axios.get(`/users`)
export const getUsersByIdRequest = (id: any) => axios.get(`/users/${id}`)
export const creeateUserRequest = (mockData: any) => axios.post(`/users`, mockData)
export const editUserRequest = (id: any) => axios.put(`/users/${id}`)
export const deleteUserRequest = (id: any) => axios.delete(`/users/${id}`)