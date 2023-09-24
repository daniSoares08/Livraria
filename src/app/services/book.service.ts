

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: any[] = [
    {
      id: 1,
      title: 'A cabana do pai Tomás',
      description: 'A Cabana é um romance histórico escrito por Harriet Beecher Stowe e publicado pela primeira vez em 1852. A história gira em torno de Tom, um escravo afro-americano conhecido por sua bondade e fé, que é vendido repetidamente para diferentes donos cruéis. O livro também narra as experiências de outros personagens, como Eliza, que foge com seu filho para escapar da escravidão, e Eva, uma jovem branca cuja compaixão e generosidade contrastam com a crueldade de alguns proprietários de escravos.',
      image: '../assets/IMgs/Liv1.png',
      price: 29.99
    },
    {
      id: 2,
      title: '1984',
      description: '1984 é um romance distópico escrito por George Orwell e publicado em 1949. A história se passa em um futuro totalitário e sombrio, onde o Estado onipresente, liderado pelo Partido e personificado pelo Grande Irmão, exerce controle absoluto sobre a vida das pessoas.',
      image: 'assets/IMgs/Liv2.png',
      price: 35.00
    },
    {
      id: 3,
      title: 'Hamlet',
      description: 'A história de Hamlet gira em torno do príncipe Hamlet da Dinamarca, que entra em um estado de profunda melancolia após a morte súbita de seu pai, o rei. Quando o fantasma de seu pai aparece e alega que foi assassinado pelo novo rei, Cláudio (irmão do falecido rei e agora rei da Dinamarca), Hamlet se encontra em um dilema moral e busca vingar a morte de seu pai.',
      image: 'assets/IMgs/Liv3.png',
      price: 20.00
    },
    {
      id: 4,
      title: 'Romeu e Julieta',
      description: 'A trama gira em torno de dois jovens amantes, Romeu Montéquio e Julieta Capuleto, que pertencem a famílias rivais em Verona, Itália. Apesar do ódio profundo entre suas famílias, Romeu e Julieta se apaixonam à primeira vista durante um baile de máscaras e decidem casar-se secretamente. A peça explora temas como o amor, a impulsividade juvenil, o conflito familiar e a tragédia do destino. A história toma um rumo trágico quando uma série de eventos infelizes leva à morte prematura de Romeu e Julieta, deixando suas famílias devastadas e levando à reconciliação póstuma entre os Montéquios e os Capuletos.',
      image: 'assets/IMgs/Liv4.png',
      price: 19.99,
    },
    {
      id: 5,
      title: 'Harry Potter e a Pedra Filosofal',
      description: 'Harry Potter e a Pedra Filosofal" é o primeiro livro da aclamada série de fantasia escrita pela autora britânica J.K. Rowling. Publicado em 1997, este livro introduz os leitores ao mundo mágico de Harry Potter, um órfão que descobre que é um bruxo no dia de seu décimo primeiro aniversário. A história começa com Harry vivendo uma vida miserável com seus tios e primo cruéis, os Dursley. No entanto, sua vida muda drasticamente quando ele recebe uma carta de aceitação para a Escola de Magia e Bruxaria de Hogwarts. Lá, ele faz novos amigos, como Ron Weasley e Hermione Granger, e descobre a verdade sobre seus pais e seu legado mágico.',
      image: 'assets/IMgs/Liv5.png',
      price: 45.90
    },
    {
      id: 6,
      title: 'O Sol é para todos',
      description: 'A história é narrada pela jovem Scout Finch, que vive com seu irmão Jem e seu pai, Atticus Finch, em uma pequena cidade do Alabama. Atticus é um advogado que é designado para defender Tom Robinson, um homem negro acusado injustamente de estuprar uma mulher branca, Mayella Ewell. A trama gira em torno do julgamento de Tom Robinson e das tensões raciais que envolvem a comunidade. O livro lida com temas importantes, como preconceito racial, intolerância, empatia e justiça. Através dos olhos de Scout, os leitores testemunham o impacto do racismo e da injustiça em uma comunidade dividida. A história também apresenta Boo Radley, um vizinho misterioso, e sua relação com as crianças, o que adiciona outra camada à narrativa.',
      image: 'assets/IMgs/LIV6.png',
      price: 59.99
    },
    {
      id: 7,
      title: 'Homem Invisível',
      description: 'Ralph Ellison é mais conhecido por seu romance "Invisible Man" (Homem Invisível em português), publicado em 1952. A história segue um narrador sem nome, um jovem negro que luta contra o racismo e a invisibilidade social em uma sociedade segregada nos Estados Unidos. A narrativa explora a busca por identidade e significado em um mundo onde as pessoas negras muitas vezes são tratadas como invisíveis ou não humanas.',
      image: 'assets/IMgs/LIV7.png',
      price: 29.99
    },
    {
      id: 8,
      title: 'The Jungle',
      description: 'Pedro Páramo é um romance escrito pelo autor mexicano Juan Rulfo e publicado em 1955. É uma obra-prima da literatura latino-americana e é frequentemente considerado um dos pilares do realismo mágico, um estilo literário caracterizado por elementos mágicos ou sobrenaturais inseridos em um cenário realista.',
      image: 'assets/IMgs/LIV8.png',
      price: 85.00
    },
    {
      id: 9,
      title: 'Pedro Páramo',
      description: 'Pedro Páramo é um romance escrito pelo autor mexicano Juan Rulfo e publicado em 1955. É uma obra-prima da literatura latino-americana e é frequentemente considerado um dos pilares do realismo mágico, um estilo literário caracterizado por elementos mágicos ou sobrenaturais inseridos em um cenário realista. Drácula é um romance gótico escrito pelo autor irlandês Bram Stoker e publicado em 1897. O livro é uma das histórias mais famosas sobre vampiros e teve um impacto duradouro na literatura e cultura pop. A trama gira em torno de um advogado chamado Jonathan Harker, que viaja para a Transilvânia para ajudar o Conde Drácula a comprar uma propriedade na Inglaterra. No entanto, Harker logo percebe que Drácula é um ser sobrenatural, um vampiro que se alimenta de sangue humano. Enquanto Harker tenta escapar do castelo do Conde, ele deixa para trás uma série de diários e registros que formam parte da narrativa.',
      image: 'assets/IMgs/LIV9.png',
      price: 59.99
    },
    {
      id: 10,
      title: 'Drácula',
      description: '',
      image: 'assets/IMgs/LIV10.png',
      price: 19.99
    }
  ];

  getBooks() {
    return this.books;
  }

  getBookById(id: number) {
    return this.books.find((book) => book.id === id);
  }
}