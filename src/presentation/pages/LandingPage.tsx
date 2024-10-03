import Banner from '../components/Banner/Banner';
import Mockup from '../components/mockup/Mockup';
import Article from '../components/SaleArt/saleArt';

const articleData = [
  {
    title: "Zapatillas Running",
    date: "2024-10-03",
    hour: "10:00 AM",
    quantity: 5,
    total: 120,
    description: "Zapatillas ligeras y transpirables, perfectas para correr largas distancias.",
    imgurl: "https://http2.mlstatic.com/D_NQ_NP_726553-MLA74440904027_022024-O.webp"
  },
  {
    title: "Pelota de Fútbol",
    date: "2024-10-03",
    hour: "12:00 PM",
    quantity: 10,
    total: 50,
    description: "Balón de fútbol profesional con revestimiento resistente para uso prolongado.",
    imgurl: "https://afaar.vtexassets.com/arquivos/ids/156361-800-auto?v=638288476660570000&width=800&height=auto&aspect=true"
  },
  {
    title: "Guantes de Boxeo",
    date: "2024-10-03",
    hour: "02:00 PM",
    quantity: 7,
    total: 80,
    description: "Guantes acolchados de alta calidad para entrenamientos y combates.",
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_qHc47i2-1YrjXZKIzZcWFiZfUM3uuxk9rA&s"
  },
  {
    title: "Bicicleta de Montaña",
    date: "2024-10-03",
    hour: "04:00 PM",
    quantity: 2,
    total: 500,
    description: "Bicicleta de montaña con cuadro de aluminio ligero y suspensión delantera.",
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp0qUkZ860-WgwS9RLKG-pKDKArwmshjq86Q&s"
  },
  {
    title: "Pesas de Mancuernas",
    date: "2024-10-03",
    hour: "06:00 PM",
    quantity: 15,
    total: 60,
    description: "Mancuernas ajustables ideales para entrenamientos de fuerza y tonificación.",
    imgurl: "https://acdn.mitiendanube.com/stores/919/712/products/par-de-mancuernas-hexagonales-odea-10-kg-11-c22d28ccac5948688216244935681303-640-0.png"
  },
  {
    title: "Rodillera Deportiva",
    date: "2024-10-03",
    hour: "08:00 PM",
    quantity: 20,
    total: 25,
    description: "Rodillera de neopreno con soporte para actividades de alto impacto.",
    imgurl: "https://cirugiarex.com.ar/wp-content/uploads/2020/05/RAS.jpg"
  },
  {
    title: "Soga para Saltar",
    date: "2024-10-03",
    hour: "09:00 PM",
    quantity: 30,
    total: 15,
    description: "Cuerda para saltar con mangos ergonómicos y ajuste de longitud.",
    imgurl: "https://simplicityar.vtexassets.com/arquivos/ids/155845-800-auto?v=638192604945030000&width=800&height=auto&aspect=true"
  },
  {
    title: "Casco de Ciclismo",
    date: "2024-10-03",
    hour: "10:00 PM",
    quantity: 8,
    total: 70,
    description: "Casco de ciclismo con ventilación avanzada y ajuste personalizado.",
    imgurl: "https://http2.mlstatic.com/D_NQ_NP_777050-MLU74959728615_032024-O.webp"
  },
  {
    title: "Colchoneta de Yoga",
    date: "2024-10-03",
    hour: "11:00 PM",
    quantity: 25,
    total: 35,
    description: "Colchoneta antideslizante para yoga y pilates, hecha de material eco-friendly.",
    imgurl: "https://http2.mlstatic.com/D_NQ_NP_740468-MLA44014237844_112020-O.webp"
  }
];

export const LandingPage = () => {
  return (
    <div>
      <Banner />
      <Mockup />
      <Article articleData={articleData} />
    </div>
  );
};
