import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isPending } = useRecentBookings();

  console.log(bookings);

  if (isPending) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>Today's activity</div>
      <div>Chart stay duration</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
