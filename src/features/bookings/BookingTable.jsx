import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useBookings } from "./hooks/useBookings";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";

function BookingTable() {
  const { bookings, isLoading } = useBookings();

  if (isLoading) return <Spinner />;
  if (!bookings.length) return <Empty resourceName="Bookings" />;
  /*
  //客户端过滤与排序
  const filterValue = searchParams.get("status") || "all";
  //过滤
  let filteredBookings;
  if (filterValue === "all") {
    filteredBookings = bookings;
  } else {
    filteredBookings = bookings.filter(
      (booking) => booking.status === filterValue
    );
  }

  //排序
  const sortBy = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const storedBookings = filteredBookings.sort(
    (a, b) =>
      (field === "startDate"
        ? a[field] > b[field]
          ? 1
          : -1
        : a[field] - b[field]) * modifier
  );
*/
  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default BookingTable;
