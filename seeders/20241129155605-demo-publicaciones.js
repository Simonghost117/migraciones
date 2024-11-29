'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Publicacions',[
      {
        titulo: 'Rock',
        contenido: 'Musica ochentera',
        autor: 'Sebastian',
        fecha: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Electronica',
        contenido: 'Musica de los 2000-actualidad',
        autor: 'Soren',
        fecha: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{})
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('Publicacions',null,{}

    );
  }

};
