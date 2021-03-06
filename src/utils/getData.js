/* eslint-disable no-undef */

export const getData = () => fetch('../../public/article.json', {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})
  .then(response => response.json())
  .catch(err => console.error(err))
