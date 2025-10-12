document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const btnComprar = form.querySelector(".btn.btn-coffee");
  const cantidadSelect = form.querySelectorAll("select")[0];
  const presentacionSelect = form.querySelectorAll("select")[1];

  btnComprar.addEventListener("click", (e) => {
    e.preventDefault(); // evita que recargue o siga el enlace por defecto

    const cantidad = cantidadSelect.value;
    const presentacion = presentacionSelect.value;

    // Mensaje de WhatsApp codificado
    const mensaje = `Hola, me interesa comprar un paquete de ${cantidad} de café en ${presentacion}. ¿Serías tan amable de darme más información para adquirirla?`;
    const url = `https://wa.me/573003469157?text=${encodeURIComponent(mensaje)}`;

    // Abre WhatsApp en una nueva pestaña
    window.open(url, "_blank");
  });
});
