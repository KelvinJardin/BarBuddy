import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

type ApiProps = {
    url: string;
    type?: string;
    config?: AxiosRequestConfig;
    data?: string | object;
};

export default class BaseApiClient {
    protected apiClient: AxiosInstance;

    constructor(apiUrl: string) {
        this.apiClient = axios.create({
            baseURL: apiUrl,
        });
    }

    public call({ type = "get", url, config = {}, data = {} }: ApiProps) {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const requestConfig = {
            ...config,
            signal,
        };

        const requestParams = ['post', 'put', 'patch'].includes(type)
            ? [url, data, requestConfig]
            : [url, requestConfig];

        const request = new Promise((resolve, reject) => {
            this.apiClient[type](...requestParams)
                .then(resolve)
                .catch((error) => {
                    if (!axios.isCancel(error)) {
                        reject(error);
                    }
                });
        });

        return {
            request,
            abortController,
        };
    }
}
