import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Express API with Swagger",
      version: "1.0.0",
      description: "Documentation for Express API",
    },
  },
  apis: ["./src/app.ts"],
};
const swaggerSpec = swaggerJSDoc(swaggerOptions);
/**
 * @swagger
 * /api/role/getRole/{roleId}:
 *   get:
 *     summary: Mendapatkan Data Role
 *     description: Mendapatkan data role berdasarkan ID yang diberikan.
 *     parameters:
 *       - name: roleId
 *         in: path
 *         description: ID role yang akan diambil datanya
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           type: object
 *           properties:
 *             roleData:
 *               type: object
 *               properties:
 *                 roleId:
 *                   type: string
 *                   example: '123'
 *                 roleName:
 *                   type: string
 *                   example: 'Admin'
 *       404:
 *         description: Role tidak ditemukan
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *               example: 'Not Found'
 *             message:
 *               type: string
 *               example: 'Role tidak ditemukan'
 */

/**
 * @swagger
 * /api/role/createRole:
 *   post:
 *     summary: Membuat Role Baru
 *     description: Membuat role baru dengan data yang diberikan.
 *     parameters:
 *       - name: roleData
 *         in: body
 *         description: Data untuk membuat role baru
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             roleName:
 *               type: string
 *               example: 'Admin'
 *     responses:
 *       201:
 *         description: Role berhasil dibuat
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: 'Role berhasil dibuat'
 *       400:
 *         description: Permintaan tidak valid
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *               example: 'Bad Request'
 *             message:
 *               type: string
 *               example: 'Data tidak valid'
 */

/**
 * @swagger
 * /api/role/deleteRole/{roleId}:
 *   delete:
 *     summary: Menghapus Role
 *     description: Menghapus role berdasarkan ID yang diberikan.
 *     parameters:
 *       - name: roleId
 *         in: path
 *         description: ID role yang akan dihapus
 *         required: true
 *         type: string
 *     responses:
 *       204:
 *         description: Role berhasil dihapus
 *       404:
 *         description: Role tidak ditemukan
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *               example: 'Not Found'
 *             message:
 *               type: string
 *               example: 'Role tidak ditemukan'
 */

/**
 * @swagger
 * /api/role/updateRole/{roleId}:
 *   put:
 *     summary: Memperbarui Role
 *     description: Memperbarui role berdasarkan ID yang diberikan.
 *     parameters:
 *       - name: roleId
 *         in: path
 *         description: ID role yang akan diperbarui
 *         required: true
 *         type: string
 *       - name: updatedData
 *         in: body
 *         description: Data yang akan digunakan untuk memperbarui role
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             roleName:
 *               type: string
 *               example: 'Super Admin'
 *     responses:
 *       200:
 *         description: Role berhasil diperbarui
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: 'Role berhasil diperbarui'
 *       404:
 *         description: Role tidak ditemukan
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *               example: 'Not Found'
 *             message:
 *               type: string
 *               example: 'Role tidak ditemukan'
 */

export default swaggerSpec;
