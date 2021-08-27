import api from "./api";

async function getAll() {
  return await api.get(`/applications`);
}

async function getById(id) {
  return await api.get(`/applications/${id}`);
}

async function create(data) {
  return await api.post(`/applications`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

async function update(id, data) {
  return await api.put(`/applications/${id}`, data);
}

async function deleteApplications(id) {
  return await api.delete(`/applications/${id}`);
}

export const Application = {
  getAll,
  getById,
  create,
  update,
  delete: deleteApplications,
};
