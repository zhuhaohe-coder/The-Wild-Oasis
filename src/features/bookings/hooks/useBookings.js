import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  //过滤
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  //排序
  const sortByRow = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRow.split("-");
  const sortBy = { field, direction };

  //分页
  const page = searchParams.get("page") < 1 ? 1 : +searchParams.get("page");

  const {
    data: { bookings, count } = {},
    isLoading,
    error,
  } = useQuery({
    //添加依赖, 变化时自动fetch数据
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  return { bookings, count, isLoading, error };
}
