import InvitationCard from '../components/InvitationCard';

const InvitationList = () => {
  return (
    <div>
      <h1>List of invitations</h1>
      <InvitationCard
        invitedUserName={'shreyansh'}
        organizationName={'First organization'}
        role={'admin'}
      />
    </div>
  );
};

export default InvitationList;
