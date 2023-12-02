import Filter from "../../ui/Filter";

function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={[
        { value: "7", label: "last7" },
        { value: "30", label: "last30" },
        { value: "90", label: "last90" },
      ]}
    />
  );
}

export default DashboardFilter;
