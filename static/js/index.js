function initMap() {
    const location = { lat: -5.499139, lng: -54.54408 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}

function toggleExpand(element) {
    element.classList.toggle('expanded');
}

function openModal(element) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');

    modal.style.display = 'flex';
    modalImage.src = element.querySelector('img').src;
    modalImage.style.transform = 'scale(1.05)';
    setTimeout(() => {
        modalImage.style.transform = 'scale(1)';
    }, 300);
}

function closeModal(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

function toggleMenu() {
    document.querySelector(".hrefs").classList.toggle("show");
}
