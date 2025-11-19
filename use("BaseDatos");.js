use("BaseDatos");
db.Mesa.insertMany([
  {
    Material:"Madera",
    Estilos:"Moderno",
    Forma:"Redonda"
  },
  {
    Material:"Metal",
    Estilos:"Industrial",
    Forma:"Rectangular"
  },
  {
    Material:"Vidrio",
    Estilos:"Escandinavo",
    Forma:"Cuadrada"
  },
  {
    Material:"Resina",
    Estilos:"Rústico",
    Forma:"Ovalada"
  },
  {
    Material:"Piedra",
    Estilos:"Clásico",
    Forma:"Hexagonal"
  },
  {
    Material:"Plastico",
    Estilos:"Vintage",
    Forma:"Tetraédrica"
  },
  {
    Material:"Bambu",
    Estilos:"Mid-Century Modern",
    Forma:"De Forma Libre"
  },
  {
    Material:"Mármol",
    Estilos:"Bohemio",
    Forma:"Trapezoidal"
  },
  {
    Material:"Aluminio",
    Estilos:"Contemporáneo",
    Forma:"Elíptica"
  },
  {
    Material:"Acero Inoxidable",
    Estilos:"Minimalista",
    Forma:"Círculo Incompleto"
  }
])

db.Silla.insertMany([
  {
    Material:"Madera",
    Tamaño:"Pequeña",
    Estilo:"Moderno"
  },
  {
    Material:"Metal",
    Tamaño:"Mediana",
    Estilo:"Clásico"
  },
  {
    Material:"Cuero",
    Tamaño:"Grande",
    Estilo:"Industrial"
  },
  {
    Material:"Tela",
    Tamaño:"Alta",
    Estilo:"Minimalista"
  },
  {
    Material:"Aluminio",
    Tamaño:"Baja",
    Estilo:"Rústico"
  },
  {
    Material:"Ratán",
    Tamaño:"Compacta",
    Estilo:"Ecléctico"
  },
  {
    Material:"Espuma",
    Tamaño:"Plegable",
    Estilo:"Vintage"
  },
  {
    Material:"Malla",
    Tamaño:"Silla de comedor",
    Estilo:"Nórdico"
  },
  {
    Material:"Vinil",
    Tamaño:"Silla lounge",
    Estilo:"Contemporáneo"
  },
  {
    Material:"Plástico",
    Tamaño:"Silla de bar",
    Estilo:"Clásico contemporáneo"
  },
])

db.Mueble.insertMany([
  {
    Material: "Madera",
    Color: "Marrón",
    Precio: "100"
  },
  {
    Material: "Metal",
    Color: "Negro",
    Precio: "150"
  },
  {
    Material: "Plástico",
    Color: "Blanco",
    Precio: "50"
  },
  {
    Material: "Vidrio",
    Color: "Transparente",
    Precio: "200"
  },
  {
    Material: "Cuero",
    Color: "Beige",
    Precio: "300"
  },
  {
    Material: "Tela",
    Color: "Azul",
    Precio: "80"
  },
  {
    Material: "Madera",
    Color: "Blanco",
    Precio: "120"
  },
  {
    Material: "Acero",
    Color: "Gris",
    Precio: "180"
  },
  {
    Material: "Madera",
    Color: "Nogal",
    Precio: "250"
  },
  {
    Material: "Ratan",
    Color: "Natural",
    Precio: "60"
  }
])

db.Sillon.insertMany([
  {
    Comodidad: "Alta",
    Tamaño: "Grande",
    Color: "Rojo"
  },
  {
    Comodidad: "Media",
    Tamaño: "Mediano",
    Color: "Azul"
  },
  {
    Comodidad: "Baja",
    Tamaño: "Pequeño",
    Color: "Verde"
  },
  {
    Comodidad: "Alta",
    Tamaño: "Grande",
    Color: "Negro"
  },
  {
    Comodidad: "Media",
    Tamaño: "Mediano",
    Color: "Gris"
  },
  {
    Comodidad: "Alta",
    Tamaño: "Grande",
    Color: "Beige"
  },
  {
    Comodidad: "Baja",
    Tamaño: "Pequeño",
    Color: "Blanco"
  },
  {
    Comodidad: "Alta",
    Tamaño: "Mediano",
    Color: "Marrón"
  },
  {
    Comodidad: "Media",
    Tamaño: "Mediano",
    Color: "Amarillo"
  },
  {
    Comodidad: "Baja",
    Tamaño: "Grande",
    Color: "Naranja"
  }
])

db.Television.insertMany([
  {
    Resolución: "1080p",
    Consumo_de_energía: "150W",
    Tamaño: "42 pulgadas"
  },
  {
    Resolución: "4K",
    Consumo_de_energía: "200W",
    Tamaño: "55 pulgadas"
  },
  {
    Resolución: "720p",
    Consumo_de_energía: "100W",
    Tamaño: "32 pulgadas"
  },
  {
    Resolución: "4K",
    Consumo_de_energía: "180W",
    Tamaño: "65 pulgadas"
  },
  {
    Resolución: "HD",
    Consumo_de_energía: "90W",
    Tamaño: "24 pulgadas"
  },
  {
    Resolución: "8K",
    Consumo_de_energía: "250W",
    Tamaño: "75 pulgadas"
  },
  {
    Resolución: "Full HD",
    Consumo_de_energía: "120W",
    Tamaño: "50 pulgadas"
  },
  {
    Resolución: "4K",
    Consumo_de_energía: "160W",
    Tamaño: "60 pulgadas"
  },
  {
    Resolución: "HD",
    Consumo_de_energía: "80W",
    Tamaño: "28 pulgadas"
  },
  {
    Resolución: "Full HD",
    Consumo_de_energía: "130W",
    Tamaño: "48 pulgadas"
  }
])

