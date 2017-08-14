/**
 * Book entity, used for filtering as well.
 */
export class ResourcesData {
  /**
   * @type {number} id Unique numeric identifier.
   */
  id: number;
  
  /**
   * @type {string} title The title of the book.
   */
  title: String;

  /**
   * @type {string} author The author of the book.
   */
  author: String;

  /**
   * @type {number} year The year the book was published.
   */
  year: number;

  noOfEquipments: number;
}