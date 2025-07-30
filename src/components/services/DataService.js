export class DataService {
  async fetchJson(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
