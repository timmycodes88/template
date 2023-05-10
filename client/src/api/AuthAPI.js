import request from '../utils/request'

const ENDPOINT = process.env.BACKEND_URL + 'http://localhost:5000/api/auth'

/**
 * @typedef {Object} AuthData
 * @property {string} [username] - Optional on Login (must use email)
 * @property {string} [email] - Optional on Login (must use username)
 * @property {string} password
 *
 * @typedef {Object} User
 * @property {string} _id
 * @property {string} username
 *
 * @typedef {Object} AuthResponse
 * @property {User} user
 * @property {string} token
 *
 */

const AuthAPI = {
  /**
   *
   * @param {AuthData} formData
   * @returns {Promise<AuthResponse> | Promise<Error>}
   */
  login: async ({ username, email, password }) =>
    request(ENDPOINT + '/login', { username, email, password }),
  /**
   *
   * @param {AuthData} formData
   * @returns {Promise<AuthResponse> | Promise<Error>}
   */
  signup: async ({ username, email, password }) =>
    request(ENDPOINT + '/signup', { username, email, password }),
}

export default AuthAPI
