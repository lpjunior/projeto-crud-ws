import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private viagens:any[] = [
    {
      pais: 'Brasil',
      local: 'Pantanal',
      imagem: 'https://abrilviagemeturismo.files.wordpress.com/2016/10/ms25.jpeg?quality=70&strip=info&w=920',
      descricao: 'Sobrevoei o Pantanal pela primeira vez em 1992, e o fumacê das queimadas mudava os tons do entardecer. Vi paisagens, grafismos e cores mais vibrantes à medida que o sol buscava o horizonte. Deixei a região acreditando ter visto o lugar mais bonito do mundo. Vinte anos depois, ainda tenho a mesma convicção. Depois de meia centena de viagens à região, digo que é de lá a melhor luz que um fotógrafo pode desejar; fora isso, entrei em contato com a cultura do homem pantaneiro, a fauna, os rios que invadem as terras na estação das chuvas e dão àquele lugar características tão próprias. Ao contrário das savanas aficanas, não é fácil ver os animais do Pantanal, embora ali seja um dos ecossistemas mais ricos do mundo, com cerca de 1 100 espécies. O céu na época da seca está sempre coalhado de aves muito diferentes, mas os mamíferos raramente se deixam ver. Por mais que você palmilhe o Pantanal, que você cruze boa parte do Mato Grosso e do Mato Grosso do Sul, há sempre algo mais para ver, há sempre uma razão para voltar. Na estação da cheia (outubro a março), a água renova o visual e tudo fica verdinho. O Pantanal tem três tipos de hospedagem: as voltadas para ecoturistas, as próprias para os pescadores e os hotéis do centro. Uma referência é o Hotel SESC Porto Cercado, com estrutura voltada para o turismo ecológico e sustentável. Os hóspedes podem praticar arvorismo, fazer trilhas e observar animais.'
    },
    {
      pais: 'Estados Unidos',
      local: 'Nova York',
      imagem: 'https://abrilviagemeturismo.files.wordpress.com/2016/10/skldhaoydoa.jpeg?quality=70&strip=info&w=925',
      descricao: 'O hype está no High Line ou no Brooklyn, mas suba ao topo do Hotel Gansevoort (9th Street) e veja o skyline de tantos filmes à sua frente.  Para ver outro skyline incrível – de frente para o Empire State Building – e provar coquetéis, vá ao 230 Fifith, um rooftop lindíssimo com vista para Midtown. Como não há placas, pouca gente sabe que ele existe.'
    },
    {
      pais: 'Estados Unidos',
      local: 'Alasca',
      imagem: 'https://abrilviagemeturismo.files.wordpress.com/2016/10/alasca.jpeg?quality=70&strip=info&w=925',
      descricao: 'A Glacial Bay dá ideia de como foi a era glacial, e Juneau tem minas da corrida do ouro. Quem quiser fazer um cruzeiro nas geleiras pode visitar o Kenai Fjords National Park, com muita chance de ver de perto baleias, glaciares, fiordes e labirintos de canais ladeados por muito gelo. Até as focas costumam dar as caras durante o passeio.'
    },
    {
      pais: 'Estados Unidos',
      local: 'Grand Canyon',
      imagem: 'https://abrilviagemeturismo.files.wordpress.com/2016/10/thinkstockphotos-514931509.jpeg?quality=70&strip=info&w=919',
      descricao: 'Precipícios a 2 mil metros, 5 milhões de pessoas por ano. Vá de mula, de barco, de helicóptero desde Las Vegas. O que pouca gente sabe é que o Grand Canyon é uma das sete maravilhas do mundo.'
    }
  ];
  constructor() {}

}
