import axios from "axios";

export const apiUrl = 'https://jsonplaceholder.typicode.com'
export class Communication {


    async startProcess(
        type,
        lastCode
    ) {
        const requestUrl = apiUrl + "/posts";
        const processData = {
            type: type,
            lastCode: lastCode,
        };
        const headers = { "Content-Type": "application/json" };
        const response = await axios
            .post(requestUrl, processData, headers)
            .catch((error) => {
                return error.response;
            });
        console.log("🚀 ~ file: communication.js:22 ~ Communication ~ response:", response)
        return response.data;
    }
}