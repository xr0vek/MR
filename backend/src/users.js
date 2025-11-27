import sql from "./db"

export async function insertUser({name, password}) {
    const users = await sql`
    insert into users
        (name, password)
    values
        (${name}, ${password})
        returning users
    `
    return users
}