<!-- Botón del menú (debe existir en tu HTML) -->
<button id="menu-toggle">☰</button>
<ul id="menu" class="menu"> ... </ul>

<!-- Formulario emergente de Formspree -->
<!-- Docs: formspree.io/formbutton/docs -->
<script src="https://formspree.io/js/formbutton-v1.min.js" defer></script>
<script>
  window.formbutton = window.formbutton || function () {
    (formbutton.q = formbutton.q || []).push(arguments)
  };

  formbutton("create", {
    action: "https://formspree.io/f/mjkyawaa",
    title: "How can we help?",
    fields: [
      {
        type: "email",
        label: "Email:",
        name: "email",
        required: true,
        placeholder: "your@email.com"
      },
      {
        type: "textarea",
        label: "Message:",
        name: "message",
        placeholder: "What's on your mind?",
      },
      { type: "submit" }
    ],
    styles: {
      title: {
        backgroundColor: "gray"
      },
      button: {
        backgroundColor: "gray"
      }
    }
  });
</script>

<!-- Máquina de escribir -->
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const text = "El ioga que practico és una combinació de força física i energètica, se'n diu ioga restauratiu i s'aplica amb l'objectiu de fer un manteniment harmònic amb cada cos, tot estirant-lo i tonificant-lo d'una manera amable.";
    const target = document.getElementById("intro-text");
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        target.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  });
</script>
