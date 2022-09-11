
const random_avatar = () => {
    let rand_num = String(parseInt(Math.random(51) * 51));
    let url = "https://xsgames.co/randomusers/assets/avatars/pixel/" + rand_num + '.jpg';
    document.getElementById('image').src = url
    
}   

const round = () => {
    document.getElementById('image').className = 'rounded-circle'
}

const square = () => {
    document.getElementById('image').className = 'rounded'
}