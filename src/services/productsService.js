const ProductsRepository = require("../repositories/productsRepository");

class ProductsService {
  constructor() {
    this.ProductsRepository = new ProductsRepository();
  }

  async get() {
    try {
      const result = await this.ProductsRepository.get();
      if (!result) {
        return { status: 404, data: "Productos no encontrados" };
      }
      return { status: 200, data: result };
    } catch (e) {
      console.log(e);
      return { status: 500, data: "Error inesperado en el sistema" };
    }
  }

  async getById(id) {
    try {
      const result = await this.ProductsRepository.getById(id);
      if (!result) {
        return { status: 404, data: "Producto no encontrado" };
      }
      //console.log(result)
      return { status: 200, data: result };
    } catch (e) {
      console.log(e);
      return { status: 500, data: "Error inesperado en el sistema" };
    }
  }

  async post(body) {
    try {
      const result = await this.ProductsRepository.post(body);
      //console.log(result)
      return { status: 201, data: "Producto ingresado correctamente" };
    } catch (e) {
      console.log(e);
      return { status: 500, data: "Error inesperado en el sistema" };
    }
  }

  async put(id, body) {
    try {
      const result = await this.ProductsRepository.put(id, body);
      //console.log(result)
      if (!result) {
        return { status: 404, data: "Producto no encontrado" };
      }
      return { status: 201, data: "Producto editado correctamente" };
    } catch (e) {
      console.log(e);
      return { status: 500, data: "Error inesperado en el sistema" };
    }
  }

  async delete(id) {
    try {
      const result = await this.ProductsRepository.delete(id);
      //console.log(result.deletedCount)
      if (result.deletedCount == 0) {
        return { status: 404, data: "Producto no encontrado" };
      }
      return { status: 201, data: "Producto eliminado correctamente" };
    } catch (e) {
      console.log(e);
      return { status: 500, data: "Error inesperado en el sistema" };
    }
  }
}

module.exports = ProductsService;
