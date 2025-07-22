//testing ajax call with axios
//we receive an array of 6 objects which inside we have id,title,date,url so we have all the data in one go and we can populate our page.
//we start by getting the part of the dom we need to inject the single polaroids so we call the main row id =>  photo-album and we select it
const photoAlbum = document.getElementById('photo-album');
const overlayBtn = document.getElementById('overlay-btn');
const overlay    = document.getElementsByClassName('overlay')[0]
console.log(overlay)
overlayBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  overlay.classList.replace('d-flex','d-none' )
})

axios.get('https://lanciweb.github.io/demo/api/pictures/').then((resp) => {
  console.log(resp.data); // debug : checking what we have received after ajax call and cut the polaroid from the html file and transpose it here
  const infos = resp.data;
  for (let i=0 ; i<infos.length ; i++){
    // console.log(infos[i]) //debug
    photoAlbum.innerHTML+=`
          <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <div class="polaroid container" id="photo${infos[i].id}">
              <img src="/assets/img/pin.svg" alt class="pin">
              <div class="row g-0">
                <div class="col-12">
                  <div class="polaroid-image">
                    <img src="${infos[i].url}" alt>
                  </div>
                </div>
                <div class="col-12 ">
                  <p class="polaroid-title">
                    ${infos[i].title}
                  </p>
                  <p class="polaroid-date">${infos[i].date}</p>
                  
                </div>
              </div>
            </div>
          </div>
          `
  }
  // infos.forEach((elem)=>{console.log(elem)})//debug
  
})

