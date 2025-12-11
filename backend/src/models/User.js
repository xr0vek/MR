const db = require('../config/dbConfig')
const bcrypt = require('bcryptjs')

class User {
    static create({email, hashedPassword, name, role = 'user'}) {
        const query = `
        INSERT INTO users (email, name, password, role)
        VALUES ($1, $2, $3, $4)
        RETURNING id, email, name, password, created_at, updated_at    
        `
        return db.query(query, [email, name, hashedPassword, role])
    }

    static findByEmail(email) {
        const query = `
        SELECT * FROM users where email = $1
        `
        return db.query(query, [email])
    }

    static findById(id) {
        const query = `
        SELECT * FROM users where id = $1
        `
        return db.query(query, [id])
    }

    static all() {
        const query = `
        SELECT * FROM users
        `
        return db.query(query)
    }
}

module.exports = User