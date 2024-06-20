import React, { useEffect, useState } from "react";
import { Gutter } from "payload/dist/admin/components/elements/Gutter";
import "payload/dist/admin/components/elements/Table/index.scss";

import { AdminViewProps } from "payload/dist/config/types";
import Container from "./Container";

const AccessView: React.FC<AdminViewProps> = ({ user }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/access", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      return result;
    };

    const fetchDataAndSetData = async () => {
      const result = await fetchData();
      setData(result);
    };

    fetchDataAndSetData();
  }, []);

  return (
    <main>
      <Gutter>
        <h1 style={{ marginBlock: "24px" }}>Permissions for {user.email}</h1>
        {data && <Container data={data} />}
      </Gutter>
    </main>
  );
};

export default AccessView;
