import styled from "styled-components";
import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import { useCheckout } from "./hooks/useCheckout";
import { useTranslation } from "react-i18next";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;
function TodayItem({ activity }) {
  const { t } = useTranslation();
  const { id, status, guests, numNights } = activity;
  const { checkout, isLoading: isCheckingOut } = useCheckout();
  return (
    <StyledTodayItem>
      {status === "unconfirmed" && (
        <Tag type="green">{t("description.arriving")}</Tag>
      )}
      {status === "checked-in" && (
        <Tag type="blue">{t("description.departing")}</Tag>
      )}

      <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`} />
      <Guest>{guests.fullName}</Guest>
      <div>{numNights} nights</div>
      {status === "unconfirmed" && (
        <Button as={Link} size="small" to={`/checkin/${id}`}>
          {t("description.checkin")}
        </Button>
      )}
      {status === "checked-in" && (
        <Button
          size="small"
          onClick={() => checkout(id)}
          disabled={isCheckingOut}
        >
          {t("description.checkout")}
        </Button>
      )}
    </StyledTodayItem>
  );
}

export default TodayItem;
