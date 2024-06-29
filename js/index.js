document.addEventListener("DOMContentLoaded", onInit);

function onInit() {


    cargarAnuncios();
    cargarSobreNosotros();


}


function cargarSobreNosotros() {
    const datos = obtenerSobreNosotros();

    
    const contenedor = document.getElementById("contenedor-datos-nosotros");

    
    const template = document.getElementById("nosotros-template").content;

    datos.forEach((dato) => {
        const clone = document.importNode(template, true);

        clone.querySelector("img").src = dato.imagen;
        clone.querySelector("img").alt = dato.alt;

        clone.querySelector("#tituloDatoNosotros").textContent = dato.titulo;
        clone.querySelector("#textoDatoNosotros").textContent = dato.descripcion;

        contenedor.appendChild(clone);
    });
}


function obtenerSobreNosotros() {
    const datosNosotros = [
        {
          imagen: "./assets/images/icono1.svg",
          alt: "Icono Seguridad",
          titulo: "Seguridad",
          descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eius dicta minima sunt iure, cumque in nam, aut ipsa recusandae facilis inventore excepturi! Exercitationem saepe, incidunt modi velit repellat officiis."
        },
        {
          imagen: "./assets/images/icono2.svg",
          alt: "Icono Mejor Precio",
          titulo: "Mejor precio",
          descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eius dicta minima sunt iure, cumque in nam, aut ipsa recusandae facilis inventore excepturi! Exercitationem saepe, incidunt modi velit repellat officiis."
        },
        {
          imagen: "./assets/images/icono3.svg",
          alt: "Icono A Tiempo",
          titulo: "A tiempo",
          descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eius dicta minima sunt iure, cumque in nam, aut ipsa recusandae facilis inventore excepturi! Exercitationem saepe, incidunt modi velit repellat officiis."
        }
      ];

      return datosNosotros;
}

function cargarAnuncios() {
    const anuncios = obtenerAnuncios();

    const contenedor = document.getElementById("contenedor-anuncios");

    
  const template = document.getElementById("anuncio-template").content;
    anuncios.forEach((anuncio) => {
        const clone = document.importNode(template, true);

        clone.querySelector(".destacado").src = anuncio.imagen;
        clone.querySelector(".destacado").alt = anuncio.alt;
        clone.querySelector(".tituloAnuncio").textContent = anuncio.titulo;
        clone.querySelector(".descripcionAnuncio").textContent = anuncio.descripcion;
        clone.querySelector(".precioAnuncio").textContent = anuncio.precio;
        clone.querySelector(".cantidadBanios").textContent = anuncio.banios;
        clone.querySelector(".cantidadEstacionamiento").textContent = anuncio.estacionamientos;
        clone.querySelector(".cantidadDormitorios").textContent = anuncio.dormitorios;

        contenedor.appendChild(clone);
    });
}


function obtenerAnuncios() {
    const anuncios = [
        {
          imagen: "./assets/images/anuncio1.jpg",
          alt: "Icono Destacado1",
          titulo: "Casa de Lujo en el Lago",
          descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt cumque nostrum repudiandae ut iure rerum voluptate. Maxime repellat totam quae assumenda, quisquam doloremque earum eius magni debitis odit eligendi.",
          precio: "US$350.000",
          banios: 3,
          estacionamientos: 3,
          dormitorios: 3
        },
        {
          imagen: "./assets/images/anuncio2.jpg",
          alt: "Icono Destacado2",
          titulo: "Casa terminados de lujo",
          descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt cumque nostrum repudiandae ut iure rerum voluptate. Maxime repellat totam quae assumenda, quisquam doloremque earum eius magni debitis odit eligendi.",
          precio: "US$250.000",
          banios: 3,
          estacionamientos: 4,
          dormitorios: 5
        },
        {
          imagen: "./assets/images/anuncio3.jpg",
          alt: "Icono Destacado3",
          titulo: "Casa con Pileta",
          descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt cumque nostrum repudiandae ut iure rerum voluptate. Maxime repellat totam quae assumenda, quisquam doloremque earum eius magni debitis odit eligendi.",
          precio: "US$450.000",
          banios: 3,
          estacionamientos: 3,
          dormitorios: 3
        }
      ];
      
      
    return anuncios;
}