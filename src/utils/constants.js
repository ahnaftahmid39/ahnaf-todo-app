const fields = Object.freeze({
  id: "id",
  title: "title",
  description: "description",
  priority: "priority",
  status: "status",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
});

const filterableFields = Object.freeze({
  priority: "priority",
  status: "status",
});

const statusOptions = ["pending", "in-progress", "completed", "failed"];
const priorityOptions = ["1", "2", "3", "4", "5"];

const possibleValues = {
  [fields.priority]: priorityOptions,
  [fields.status]: statusOptions,
};

const statusOptionsEnum = Object.freeze({
  PENDING: "pending",
  INPROGRESS: "in-progress",
  COMPLETED: "completed",
  FAILED: "failed",
});

const statusNumericMapper = {
  [statusOptionsEnum.PENDING]: 1,
  [statusOptionsEnum.INPROGRESS]: 2,
  [statusOptionsEnum.COMPLETED]: 3,
  [statusOptionsEnum.FAILED]: 4,
};

const SORTING_ORDERS = {
  ASC: "asc",
  DESC: "desc",
};

export {
  fields,
  filterableFields,
  possibleValues,
  statusOptions,
  statusOptionsEnum,
  priorityOptions,
  statusNumericMapper,
  SORTING_ORDERS,
};
