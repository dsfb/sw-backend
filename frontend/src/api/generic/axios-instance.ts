import Axios, {AxiosInstance} from "axios";


const baseURL = 'https://swapi.dev/api';
export const getAxiosInstance = (customBaseURL?:string): AxiosInstance => {
    let axiosInstance = Axios
        .create({baseURL: customBaseURL?customBaseURL:baseURL});
    axiosInstance.interceptors.response.use(response => response,
        (error) => {
            const {status, baseURL} = error.response;
            /**
             * This layer will not deals with 5xx errors.
             * Usually, this is a great place to deal with api errors. But it will overkill the project so I
             * decide to make it simple.
             */
            if (status !== 404) throw new Error(error);
        })
    return axiosInstance;
}

