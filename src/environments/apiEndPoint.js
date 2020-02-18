const API_ENDPOINT = 
  process.env.NODE_ENV === 'development' 
  ?
  'http://localhost:8000/api/'
  :
  'http://phpstack-160254-999279.cloudwaysapps.com/api/'

export default API_ENDPOINT;