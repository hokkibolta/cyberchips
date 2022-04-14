import "./../style/UserForm.scss";

const UserForm = (props: {
  contractBalance: number;
  accountChips: number;
  accountRewards: number;
}) => {
  return (
    <div className="userFormBox">
      <h5>Contract balance: {props.contractBalance.toFixed(2)} CUSD</h5>
      <h5>My Chips: {props.accountChips}</h5>
      <h5>My rewards: {props.accountRewards.toFixed(2)} CUSD</h5>
    </div>
  );
};

export default UserForm;
