import API from "../API";

export default {
  getAllResources() {
    API.getAllResources();
  },
  createResource(resource) {
    API.createResource(resource);
  },
  editResourceUpvotes(resource) {
    API.editResourceUpvotes(resource);
  },
  deleteResource(resource) {
    API.deleteResource(resource);
  }
}
