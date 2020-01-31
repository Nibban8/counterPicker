import jsonPlaceholder from './jsonPlaceholder';

export const post = (url,modelo,next,fallback) => {

    return jsonPlaceholder.post(url , modelo)
    .then(response => {next()})
    .catch(error => {fallback(error)})

} 