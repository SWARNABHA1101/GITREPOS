import axios from 'axios'

export default axios.create({
    // ?q=language:Javascript&sort=stars&order=desc
    baseURL: 'https://api.github.com/search/repositories',
  });