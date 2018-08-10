const universities = async () => {
    let response = await fetch("https://tough-skunk-12.localtunnel.me/fourcampus/campuses/")
        .then(async (response) => {
            response = await response.json()
            return response
        })
        .catch(err => {
            return err
        })
    response.map((res) => {
        document.getElementById("campus-riauisland").innerHTML = document.getElementById("campus-riauisland").innerHTML +
        `<div class="card text-white bg-dark mr-2 ml-2 mb-3" style="max-width: 15rem;">
            <div class="card-body">
                <h5 class="card-header">${res.name_campus}</h5>
                <h6 class="card-title text-light">${res.city_campus}</h6>
                <h5 class="card-title text-light">${res.site_campus}</h5>
                <h5 class="card-title text-light">${res.phone_campus}</h5>
                <p class="card-text">${res.addr_campus}</p>
            </div>
        </div>`
    })
}


universities();