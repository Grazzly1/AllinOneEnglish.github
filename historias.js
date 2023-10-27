document.addEventListener("DOMContentLoaded", function () {
    const selectParagraph = document.getElementById("select_paragraph");
    const readButton = document.getElementById("read_selected_paragraph");
    const paragraphContent = document.querySelector(".voice_to_text p");
    const convertText = document.getElementById('convert_text');
    const comprobarButton = document.getElementById('comprobar_button');
    const mensajeResultado = document.getElementById('mensaje_resultado');

    // Define los párrafos disponibles. Asegúrate de proporcionar un texto para paragraph2.
    const paragraphs = {
        paragraph1: " I live in this house. That is my dog. His name is Finn. He likes sleeping. He usually sleeps under the tree.I have a lot of friends. I often play football with them",
        paragraph2: "I met him at the shopping centre last summer, and we became friends. We had a good time together. He invited me to their home. We played computer games. After a while, his father offered to go to the theatre."
    };

    // Agrega un evento de clic al botón "Read Selected Paragraph".
    readButton.addEventListener("click", function () {
        const selectedParagraphKey = selectParagraph.value;
        const selectedParagraphText = paragraphs[selectedParagraphKey];

        // Muestra el párrafo seleccionado en el párrafo existente en la página.
        paragraphContent.textContent = selectedParagraphText;
    });

    // Agrega un evento de clic al botón "Comprobar".
    comprobarButton.addEventListener("click", function () {
        const convertTextValue = convertText.value.trim().toLowerCase().replace(/[\s.,?]+/g, ''); // Convierte a minúsculas, elimina espacios, comas, puntos y signos de interrogación.
        const selectedParagraphKey = selectParagraph.value;
        const selectedParagraphText = paragraphs[selectedParagraphKey].trim().toLowerCase().replace(/[\s.,?]+/g, ''); // Convierte a minúsculas, elimina espacios, comas, puntos y signos de interrogación.

        console.log(selectedParagraphText);
        console.log(convertTextValue);

        if (selectedParagraphKey === "paragraph1" && convertTextValue === selectedParagraphText) {
            mensajeResultado.textContent = "Tienes una buena pronunciacion";
        } else if (selectedParagraphKey === "paragraph2" && convertTextValue === selectedParagraphText) {
            mensajeResultado.textContent = "Tienes una buena pronunciacion.";
        } else {
            mensajeResultado.textContent = "Hay errores en tu pronunciacion";
        }
    });
});
