function guardarCliente() {
    const nombre = document.getElementById("clienteNombre").value;
    const correo = document.getElementById("clienteCorreo").value;
    const telefono = document.getElementById("clienteTelefono").value;
    const direccion = document.getElementById("clienteDireccion").value;

    // Nuevos campos que agregaste
    const email = document.getElementById("clienteEmail").value;
    const mascota = document.getElementById("clienteMascota").value;
    const mascotaNombre = document.getElementById("mascotaNombre").value;
    const mascotaRaza = document.getElementById("mascotaRaza").value;
    const mascotaGenero = document.getElementById("mascotaGenero").value;
    const mascotaEdad = document.getElementById("mascotaEdad").value;

    // Validación
    if (!nombre || !correo || !telefono) {
        alert("Por favor complete los campos obligatorios.");
        return;
    }

    console.log("Cliente guardado:", {
        nombre,
        correo,
        telefono,
        direccion,
        email,
        mascota,
        mascotaNombre,
        mascotaRaza,
        mascotaGenero,
        mascotaEdad
    });

    // ✨ Cerrar modal con Bootstrap 4
    $("#modalAgregarCliente").modal("hide");

    // ✨ Limpiar formulario
    document.getElementById("formAgregarCliente").reset();
}

// Hacer disponible para el HTML
window.guardarCliente = guardarCliente;
