import { API_URL } from "./config/config";
export const authPost = (url, body) => {
    return fetch(API_URL + url, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(body),
    });
};

export const authGet = (url) => {
    return fetch(API_URL + url, {
        method: "GET",
        headers: {
            "content-type": "application/json",
        },
    }).then(
        (res) => {
            if (!res.ok) {
                throw Error("Unauthorized");
            }
            return res.json();
        },
        (error) => {
            console.log(error);
        }
    );
};