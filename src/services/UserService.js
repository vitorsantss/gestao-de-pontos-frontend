import { api } from "./api";

export class UserService {

    static async getAll() {
        try {
            const response = await api.get("/users", {
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

    static async create({ name, email, password, role, work_schedule }) {
        try {
            const response = await api.post("/auth/register", {
                name,
                email,
                password,
                role,
                work_schedule
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