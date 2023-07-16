const InvitationCard = (props) => {
  const { invitedUserName, organizationName, role } = props;
  return (
    <div>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          You invited by: {invitedUserName}
        </h5>
        <p className="mb-3 font-normal text-gray-700 ">
          Organization name:{organizationName}
        </p>
        <p className="mb-3 font-normal text-gray-700 ">Role: {role}</p>
        <div className="flex gap-3">
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg  focus:ring-4 focus:outline-none ">
            Accept
          </button>
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg  focus:ring-4 focus:outline-none ">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;
