// import fetch from 'dva/fetch';

function parseJSON(response) {
    return response.json();
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
/* 
export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => ({ data }))
    .catch((err) => ({ err }));
}
*/
/* 
export default function request(url, options) {
    let data = null;
    $.ajax({
        type:options.method,
        url:url,
        data:options.body,
        async:false,
        dataType:'json',
        success:function (d) {
            data = d;
        }
    });
    return {data: data};
}
*/
export default function request(url, options) {

    let ajaxPropmise = new Promise((resolve,reject)=>{
        let parameters=JSON.stringify(options.body);
        $.ajax({
            type:options.method,
            url:url,
            data:{parameters:parameters},
            dataType:'json',
            success:function (data) {
                if( data){
                    resolve(data);
                }else{
                    console.error('后台数据有错!,data.data无值');
                }
            }
        });
    });
    return ajaxPropmise.then(data => ({data}));
}