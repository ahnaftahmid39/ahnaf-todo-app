import { fields, statusNumericMapper } from "./constants";

const todoCompare = (
  todoA = {
    id: "",
    title: "",
    description: "",
    priority: "2",
    status: "pending",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  todoB = {
    id: "",
    title: "",
    description: "",
    priority: "2",
    status: "pending",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  compareOptions = { fieldName: "priority", order: "desc" }
) => {
  const fieldName = compareOptions["fieldName"];
  switch (fieldName) {
    case fields.id:
    case fields.title:
    case fields.description:
      return todoA[fieldName].localeCompare(todoB[fieldName]);

    case fields.priority:
      return parseInt(todoA[fieldName]) - parseInt(todoB[fieldName]);

    case fields.status:
      return (
        statusNumericMapper[todoA[fieldName]] -
        statusNumericMapper[todoB[fieldName]]
      );

    case fields.createdAt:
    case fields.updatedAt:
      return (
        new Date(todoA[fieldName]).getTime() -
        new Date(todoB[fieldName]).getTime()
      );
    default:
      break;
  }
};

export { todoCompare };
