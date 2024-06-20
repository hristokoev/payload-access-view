import React from "react";
import "payload/dist/admin/components/elements/Table/index.scss";

import PermissionTable, { Field, Permission } from "../Table";

interface Collection {
  fields: {
    [key: string]: Field;
  };
  create?: Permission;
  read?: Permission;
  update?: Permission;
  delete?: Permission;
}

interface Data {
  canAccessAdmin: boolean;
  collections: Collection;
}

const Container: React.FC<{ data: Data }> = ({ data }) => {
  return (
    <div>
      <div style={{ marginBlock: "24px" }}>
        canAccessAdmin: {data.canAccessAdmin ? "✅" : "❌"}{" "}
      </div>
      {Object.entries(data.collections).map(([collectionName, collection]) => (
        <div key={collectionName}>
          <div>
            <h2>
              <strong>{collectionName}</strong>
            </h2>
            <table
              className="table"
              style={{ tableLayout: "fixed", width: "100%" }}
            >
              <thead>
                <tr>
                  <td>Collection</td>
                  <td>Create</td>
                  <td>Read</td>
                  <td>Update</td>
                  <td>Delete</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{collectionName}</td>
                  <td>{collection.create?.permission ? "✅" : "❌"}</td>
                  <td>{collection.read?.permission ? "✅" : "❌"}</td>
                  <td>{collection.update?.permission ? "✅" : "❌"}</td>
                  <td>{collection.delete?.permission ? "✅" : "❌"}</td>
                </tr>
              </tbody>
            </table>
            <PermissionTable fields={collection.fields} layout="fixed" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Container;
