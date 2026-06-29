import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
});

api.interceptors.request.use(async (config) => {

    let access = localStorage.getItem("access");
    const refresh = localStorage.getItem("refresh");

    if (access) {

        try {

            // Use the current access token
            config.headers.Authorization = `Bearer ${access}`;

        } catch (err) {
            console.log(err);
        }

    }

    return config;

});

api.interceptors.response.use(

    (response) => response,

    async (error) => {

        const originalRequest = error.config;

        if (
            error.response &&
            error.response.status === 401 &&
            !originalRequest._retry
        ) {

            originalRequest._retry = true;

            try {

                const refresh = localStorage.getItem("refresh");

                const response = await axios.post(
                    "http://127.0.0.1:8000/api/token/refresh/",
                    {
                        refresh: refresh,
                    }
                );

                localStorage.setItem(
                    "access",
                    response.data.access
                );

                originalRequest.headers.Authorization =
                    `Bearer ${response.data.access}`;

                return api(originalRequest);

            } catch (err) {

                localStorage.clear();

                window.location.href = "/login";

            }

        }

        return Promise.reject(error);

    }

);

export default api;