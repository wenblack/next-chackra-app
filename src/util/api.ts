import { Axios } from "axios";

interface RequestProps {
    requested: string
}

const api = new Axios()

export default api
