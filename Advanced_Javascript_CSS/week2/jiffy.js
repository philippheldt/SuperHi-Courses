const API_KEY = 'sxaAYJQAzH0jKPbFTqhFQlMfT7HiUBn8';

const videoEl = document.querySelector('.videos');
const searchEl = document.querySelector('.search-input');
const hintEl = document.querySelector('.search-hint');
const clearEL = document.querySelector('.search-clear');


const randomChoice = arr => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function createVideo(src){
    const video = document.createElement('video');
    video.src = src;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.className = 'video';

    videoEl.appendChild(video);
    console.log(video);

    return video;
}

const toggleLoading = state =>{
    if(state){
        document.body.classList.add('loading');
        searchEl.disabled = true;
    }else{
        document.body.classList.remove('loading');
        searchEl.disabled = false;
        searchEl.focus();
        searchEl.select();
    }
    console.log('we are loading');
    
}


const searchGiphy = searchTerm =>{
    toggleLoading(true);
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=50&offset=0&rating=pg-13&lang=de`).then(response => {
        return response.json();
    }).then(json => {
    
        const gif = randomChoice(json.data);
        const src = gif.images.original.mp4;
    
        const video = createVideo(src);
        video.addEventListener('loadeddata', event =>{
            video.classList.add('visible');
            hintEl.innerHTML = `Hit enter to see more ${searchTerm}`;
            document.body.classList.add('has-results');
            toggleLoading(false);
        })
    }).catch(error =>{
        toggleLoading(false);
        hintEl.innerHTML = `The search ${searchTerm} has failed!`
    })
}

const doSearch = event => {
    const searchTerm = searchEl.value

    if(searchTerm.length > 2){
        hintEl.innerHTML = `Hit enter to search ${searchTerm}`;
        document.body.classList.add('show-hint');
    }else{
        document.body.classList.remove('show-hint');
    }
    if(event.key === 'Enter' && searchEl.value.length > 2){
        searchGiphy(searchTerm);
    }
}

searchEl.addEventListener('keyup', doSearch);


const clearSearch = event => {
    document.body.classList.remove('has-results');
    videoEl.innerHTML = '';
    hintEl.innerHTML = '';
    searchEl.value = '';
    searchEl.focus();
}


clearEL.addEventListener('click', clearSearch);

document.addEventListener('keyup', event =>{
    if (event.key === 'Escape'){
        clearSearch();
    }
})