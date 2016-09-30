import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=qwertz'

export function fetchPosts() {
  const req = axios.get(`${ROOT_URL}/posts/${API_KEY}`)

  return {
    type: FETCH_POSTS,
    payload: req
  }
}