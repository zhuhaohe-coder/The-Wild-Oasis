import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../../services/apiBookings";

export function useRecentBookings() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last") ? 7 : +searchParams.get("last");
  const queryDate = subDays(new Date(), numDays);

  const { data: bookings, isLoading } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate.toISOString()),
    queryKey: ["bookings", `last-${numDays}`],
  });
  return { bookings, isLoading };
}
