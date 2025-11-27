export const login = () => {

}

export const registerUser = (data: {name: string, password: string}) => {
    return fetch('http://localhost:3000/register', {
        method: "POST",
        headers: {
            "Content-type": "Application/json"
        },
        body: JSON.stringify(data)

    })
}