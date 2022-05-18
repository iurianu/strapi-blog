function Previous() {           
    window.history.go(-1);
}

document.addEventListener("DOMContentLoaded", function(){
    const bars = document.getElementById("nav-action"),
          nav = document.getElementById("nav")

    bars.addEventListener("click", function() {
        this.classList.toggle('active')
        nav.classList.toggle('visible')
    })

    nav.addEventListener('click', function() {
        this.classList.remove('visible')
        bars.classList.remove('active')
    })

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })    

})