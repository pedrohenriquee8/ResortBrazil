import URL from './config';

export default class RegistroService {
    registerUser = async (name, email, password) => {
        let formBody = [];
        const user = {
            name: name,
            email: email,
            password: password,
        }

        for (const property in user) {
            const encodedKey = encodeURIComponent(property);
            const encodedValue = encodeURIComponent(user[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }

        formBody = formBody.join('&');

        try {
            const data = await fetch(`${URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                },
                body: formBody,
            });
            const resultData = data.json();
            return resultData;
        } catch (error) {
            throw error;
        }

    };
}