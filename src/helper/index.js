export const logError = (errorMessage = '', errorObject) => {
    console.error(`\n\n ${errorMessage}`, `\n`, errorObject);
    throw errorObject;
};

export const getUserName = (userData = [], albumId = 0) => {
    const user = userData.find(obj => obj?.id === albumId)?.username;
    return user ? user : 'NA';
}

export const setValue = (getval) => {
    localStorage.setItem('userInfo', JSON.stringify(getval));
    return true
}

export const getValue = () => {
    return JSON.parse(localStorage.getItem('userInfo'));
}

export const generateUniqueColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    const h = hash % 360;
    return 'hsl('+h+', '+80+'%, '+80+'%)';
}


