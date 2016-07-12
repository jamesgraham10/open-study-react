import API from "../API";

export default {
  getAllResources() {
    API.getAllResources();
  },
  createResource(resource) {
    API.createResource(resource);
  },
  deleteResource(resource) {
    API.deleteResource(resource);
  },
  completeResource(resource) {
    API.completeResource(resource);
  }
}
