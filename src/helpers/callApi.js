import axios from 'axios';

const callApi = (apiUrl, method = 'GET', data = null) => {
    if(data != null) {
        // parse data for php
        var form_data = new FormData();
        for ( var key in data ) {
            form_data.append(key, data[key]);
        }
        data = form_data;
    }

    return (
        axios({
            method: method,
            url: apiUrl,
            data: data
        }).catch(error => {
            console.log(error);
        })
    );
}

export default callApi;