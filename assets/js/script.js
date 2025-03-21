// Seleccionar todos los perfiles
const profiles = document.querySelectorAll('.profile');

// Añadir evento de clic a cada perfil
profiles.forEach(profile => {
  profile.addEventListener('click', () => {
    // Obtener el nombre del perfil
    const profileName = profile.getAttribute('data-name');

    // Verificar si el perfil es "Alegna"
    if (profileName === "Eliza") {
      // Solicitar PIN con SweetAlert
      Swal.fire({
        title: 'Hola Eliza Ingrese el PIN',
        input: 'password',
        inputAttributes: {
          maxlength: 4,
          autocapitalize: 'off',
          autocorrect: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Ingresar'
      }).then((result) => {
        if (result.isConfirmed) {
          if (result.value === "1234") { // Cambia "1234" por el PIN correcto
            window.location.href = "series.html"; // Cambia "series.html" por la página que desees
          } else {
            Swal.fire('Error', 'PIN incorrecto. Acceso denegado!', 'error');
          }
        }
      });
    } else {
      Swal.fire('Acceso denegado!', 'No es el perfil de Eliza❤️.', 'error');
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const closeModal = document.querySelector(".close");

  document.querySelectorAll(".reminder-btn").forEach(button => {
    button.addEventListener("click", function () {
      const parent = this.parentElement;
      const imgSrc = parent.querySelector("img").src;
      const title = parent.querySelector("img").alt;
      const description = this.getAttribute("data-description");

      modalImg.src = imgSrc;
      modalTitle.textContent = title;
      modalDescription.textContent = description;

      modal.style.display = "flex";
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
