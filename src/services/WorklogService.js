import { api } from "./api";

export class WorklogService {

    static async getAll() {
        try {
            const response = await api.get("/worklogs", {
                headers: {
                    Authorization:
                        "Bearer " +
                        localStorage.getItem("@Auth:token").replace(/(^"|"$)/g, ""),
                },
            });
            if (response.name === 'AxiosError') {
                console.log(response);
                throw new Error(response);
            }

            return response;
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    }

    static async getSummary() {
        try {
            const response = await api.get("/worklogs/summary", {
                headers: {
                    Authorization:
                        "Bearer " +
                        localStorage.getItem("@Auth:token").replace(/(^"|"$)/g, ""),
                },
            });
            if (response.name === 'AxiosError') {
                console.log(response);
                throw new Error(response);
            }

            return response;
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    }

    static async create({ logType, timestamp }) {
        try {
            const response = await api.post("/worklogs/register", {
                logType,
                timestamp
            }, {
                headers: {
                    Authorization:
                        "Bearer " +
                        localStorage.getItem("@Auth:token").replace(/(^"|"$)/g, ""),
                },
            });

            if (response.name === 'AxiosError') {
                throw new Error(response);
            }

            return response;
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    }
}