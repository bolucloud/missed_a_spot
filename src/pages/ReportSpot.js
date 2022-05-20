import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { createSpot as createSpotMutation } from "../graphql/mutations";
import { listSpots } from "../graphql/queries";

const initialFormState = {
  name: "",
  business_name: "",
  email: "",
  description: "",
};

function ReportSpot() {
  const [spots, setSpots] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchSpots();
  }, []);

  async function fetchSpots() {
    const apiData = await API.graphql({ query: listSpots });
    setSpots(apiData.data.listSpots.items);
  }

  async function createSpot() {
    if (!formData.name || !formData.business_email) return;
    await API.graphql({
      query: createSpotMutation,
      variables: { input: formData },
    });
    setSpots([...spots, formData]);
    setFormData(initialFormState);
  }

  return (
    <div>
      <h1>Report a Spot</h1>
      <input
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="name"
        value={formData.name}
      />
      <input
        onChange={(e) =>
          setFormData({ ...formData, business_name: e.target.value })
        }
        placeholder="business name"
        value={formData.business_name}
      />
      <input
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="email"
        value={formData.email}
      />
      <input
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        placeholder="description"
        value={formData.description}
      />
      <button onClick={createSpot}>Submit Spot</button>
    </div>
  );
}

export default ReportSpot;
