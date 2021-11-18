import { Model, DataTypes } from 'sequelize';
export default class Carerra extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Carrera',
      }
    );
  }
}