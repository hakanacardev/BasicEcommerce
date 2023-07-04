import axios from "axios";

export const getItemsRequest = () => axios.get(`/items`)