import React from "react";

export interface Permission {
  permission: boolean;
}

export interface Field {
  create?: Permission;
  read?: Permission;
  update?: Permission;
  delete?: Permission;
  fields?: {
    [key: string]: Field;
  };
}

interface PermissionTableProps {
  fields: {
    [key: string]: Field;
  };
  layout?: "fixed" | "auto";
}

const PermissionTable: React.FC<PermissionTableProps> = ({
  fields,
  layout,
}) => {
  return (
    <table className="table" style={{ tableLayout: layout, width: "100%" }}>
      <thead>
        <tr>
          <td>Field</td>
          <td>Create</td>
          <td>Read</td>
          <td>Update</td>
          <td>Delete</td>
        </tr>
      </thead>
      <tbody>
        {Object.entries(fields).map(([fieldName, field]) => (
          <React.Fragment key={fieldName}>
            <tr>
              <td>{fieldName}</td>
              <td>{field.create?.permission ? "✅" : "❌"}</td>
              <td>{field.read?.permission ? "✅" : "❌"}</td>
              <td>{field.update?.permission ? "✅" : "❌"}</td>
              <td>{field.delete?.permission ? "✅" : "❌"}</td>
            </tr>
            {field.fields && (
              <tr>
                <td>
                  <PermissionTable fields={field.fields} layout="auto" />
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default PermissionTable;
